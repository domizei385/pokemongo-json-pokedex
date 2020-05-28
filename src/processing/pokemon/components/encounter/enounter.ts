import { Component, IComponent } from '@core/pipeline';
import { ItemTemplate } from '@income';
import { Pokemon } from '@outcome/pokemon';
import { Util } from '@util';

@Component({
  pipeline: 'pokemon'
})
export class Encounter implements IComponent {
  Process(pokemon: Pokemon, rawPokemon: ItemTemplate): Pokemon {
    pokemon.encounter = {
      attackProbability: rawPokemon.pokemon.encounter.attackProbability,
      attackTimer: rawPokemon.pokemon.encounter.attackTimerS,
      baseFleeRate: rawPokemon.pokemon.encounter.baseFleeRate,
      baseCaptureRate: rawPokemon.pokemon.encounter.baseCaptureRate,
      cameraDistance: rawPokemon.pokemon.encounter.cameraDistance,
      collisionRadius: rawPokemon.pokemon.encounter.collisionRadiusM,
      dodgeDistance: rawPokemon.pokemon.encounter.dodgeDistance,
      dodgeProbability: rawPokemon.pokemon.encounter.dodgeProbability,
      jumpTime: rawPokemon.pokemon.encounter.jumpTimeS,
      maxPokemonActionFrequency: rawPokemon.pokemon.encounter.maxPokemonActionFrequencyS,
      minPokemonActionFrequency: rawPokemon.pokemon.encounter.minPokemonActionFrequencyS,
      movementType:
        rawPokemon.pokemon.encounter.movementType ? Util.SnakeCase2Identifyable(rawPokemon.pokemon.encounter.movementType) : null,
    };

    return pokemon;
  }
}