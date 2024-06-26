import { IComponent, Pipeline } from '@core/pipeline';
import { Data, RootObject } from '@income';
import { Pokemon } from '@outcome/pokemon';
import { forEachSeries, map } from 'p-iteration';
import * as _ from 'lodash';
import { Util } from '@util';
import { Identifyable } from '@core';

/**
 * Represents the Pipeline which converts Game Master Pokemon related
 * input data to Pokemon models
 */
export class PokemonPipeline extends Pipeline {
  private static pokemonPattern: string = '^(V[0-9]+_POKEMON_?.*)(?<!NORMAL|HOME_REVERSION|HOME_FORM_REVERSION)$';
  private readonly specialMasterFiles: RootObject[];

  constructor(input: RootObject, special: RootObject[]) {
    super(input, 'pokemon');
    this.specialMasterFiles = special;
  }

  private static isPokemon(templateId: string) {
    return new RegExp(PokemonPipeline.pokemonPattern, 'g').test(templateId);
  }

  /**
   * Checks if the given ItemTemplate is indeed a Pokemon
   */
  isItemTemplate(item: Data): boolean {
    const id = item.templateId;
    //console.log(id + (PokemonPipeline.isPokemon(id) ? " MATCH" : " - NO MATCH"));
    return PokemonPipeline.isPokemon(id);
  }

  public async Run(): Promise<Object[]> {
    console.log('Processing Pokemon');
    const pokemonData = <Pokemon[]>await super.Run();
    console.log('Pokemon count: ');
    console.log(pokemonData.length);
    // Handle special game master files
    const specialInputs = await map(this.specialMasterFiles, input => (input.pokemonSettings || []).filter(p => this.isItemTemplate(p)));
    const legacyMoveComponents = [new LegacyQuickMoves(), new LegacyCinematicMoves()];
    await forEachSeries(specialInputs, async specialInput => {
      await forEachSeries(specialInput, async itemTemplate => {
        console.log("specialInput");
        console.log(specialInput);
        const currentPokemon = pokemonData.find(value => value.id === itemTemplate.data.pokemonSettings.pokemonId);
        await forEachSeries(legacyMoveComponents, component => component.Process(currentPokemon, itemTemplate));
      });
    });

    return pokemonData;
  }
}

abstract class LegacyMove implements IComponent {
  private readonly moveType: string;

  protected constructor(moveType: string) {
    this.moveType = moveType;
  }

  Process(pokemon: Pokemon, rawPokemon: Data): Pokemon {
    const specialMoves = _
        .chain(rawPokemon.pokemon[this.moveType])
        .uniq()
        .map(Util.SnakeCase2Identifyable)
        .filter(maybeSpecialMove => pokemon[this.moveType].find(move => move.id === maybeSpecialMove.id) === undefined)
        .map(LegacyMove.ToLegacyMove)
        .value();

    pokemon[this.moveType] = pokemon[this.moveType].concat(specialMoves);
    return pokemon;
  }

  private static ToLegacyMove(move: Identifyable): IdentifiableMove {
    return {
      name: move.name,
      id: move.id,
      legacy: true
    }
  }
}

class LegacyCinematicMoves extends LegacyMove {
  constructor() {
    super('cinematicMoves');
  }
}

class LegacyQuickMoves extends LegacyMove {
  constructor() {
    super('quickMoves');
  }
}

export interface IdentifiableMove extends Identifyable {
  legacy: boolean;
}

