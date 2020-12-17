import { Component, ComponentType, IComponent } from '@core/pipeline/component';
import { EvolutionCostToEvolve, FutureEvolutionBranch, Pokemon } from '@outcome/pokemon';

import { GenericPropertyMapper } from '../genericPropertyMapper';
import { Data, RootObject } from '@income';
import { PokemonEvolutionParser } from './pokemonEvolution';
import { Util } from '@util';
import { Identifyable } from '@core';
import { Id } from '../id';
import { TemplateIdToId } from '../shared/templateIdToId';
import { getPokemonIdByEvolutionBranch } from './shared/getPokemonIdByEvolutionBranch';
import { GetEvolutionItemRequirement } from './shared/getEvolutionItemRequirement';

@Component({
  pipeline: 'pokemon',
  type: ComponentType.ADVANCED_MAP,
  dependencies: [
    new Id(),
    new GenericPropertyMapper(),
    new PokemonEvolutionParser(),
  ],
  requiresGameMaster: true
})

/**
 * Parses the future evolutions
 */
export class FutureBranches implements IComponent {
  rawPokemons: Data[];
  gameMaster: RootObject;

  /**
   * Returns the future evolutions from the given GAME_MASTER data.
   * @param pokemonId The id of the pokemon
   */
  private GetFutureRawEvolutions(pokemon: Data): Data[] {
    return (pokemon.pokemon.evolutionBranch || []).map(branch => {
      const pokemonId = getPokemonIdByEvolutionBranch(branch);
      const rawPokemon = this.GetRawPokemonById(pokemonId)
      return rawPokemon;
    });
  }

  /**
   * Returns the cost for the evolution of the Pokemon
   * @param pokemonId The id of the pokemon you want to have the evolution cost
   * @param rawPokemon The GAME_MASTER provided raw pokemon of the lower evolution branch
   */
  private GetEvolutionCost(futurePokemonId: string, rawPokemon: Data): EvolutionCostToEvolve {
    const evolutionBranch = (rawPokemon.pokemon.evolutionBranch || [])
        .find(branch => getPokemonIdByEvolutionBranch(branch) === futurePokemonId);

    // If no evolution is found, just return nothing
    if (!evolutionBranch) {
      return;
    }

    // Make evolutionItemRequirement to Identifyable
    let evolutionItem: Identifyable;
    if (evolutionBranch.evolutionItemRequirement) {
      evolutionItem = GetEvolutionItemRequirement(this.gameMaster, evolutionBranch.evolutionItemRequirement)
    }

    // Return evolutionCost Object
    return {
      candyCost: evolutionBranch.candyCost,
      kmBuddyDistance: evolutionBranch.kmBuddyDistanceRequirement,
      evolutionItem: evolutionItem ? evolutionItem : undefined,
    }
  }

  /**
   * Get the raw GAME_MASTER pokemon by id
   * @param pokemonId The pokemon id
   */
  private GetRawPokemonById(pokemonId): Data {
    return this.rawPokemons.find(pokemon => TemplateIdToId(pokemon) === pokemonId);
  }

  /**
   * Recursively gets all future branches from the given pokemon
   * @param pokemonId The id of the pokemon
   */
  private GetFutureBranches(rawPokemon: Data): FutureEvolutionBranch[] {
    const futurePokemons = this.GetFutureRawEvolutions(rawPokemon);
    if (!futurePokemons.length) {
      return undefined;
    }
    return futurePokemons
        .filter(pokemon => pokemon !== undefined)
        .filter(futurePokemon => {
          return rawPokemon.templateId != futurePokemon.templateId;
        })
        .map(futurePokemon => ({
          ...Util.SnakeCase2Identifyable(TemplateIdToId(futurePokemon)),
          futureBranches: this.GetFutureBranches(futurePokemon),
          costToEvolve: this.GetEvolutionCost(TemplateIdToId(futurePokemon), rawPokemon),
        } as FutureEvolutionBranch))
  }

  Process(pokemons: Pokemon[], rawPokemons: Data[], input: Map<String, any>): Pokemon[] {
    this.rawPokemons = rawPokemons;
    this.gameMaster = input['gameMaster'];
    return pokemons.map(pokemon => {
      const rawPokemon = this.GetRawPokemonById(pokemon.id);
      pokemon.evolution.futureBranches = this.GetFutureBranches(rawPokemon);
      return pokemon;
    });
  }
}
