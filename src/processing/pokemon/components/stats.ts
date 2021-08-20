import { Component, IComponent } from '@core/pipeline';
import { Data } from '@income';
import { Pokemon } from '@outcome/pokemon';

@Component({
  pipeline: 'pokemon'
})
export class Stats implements IComponent {
  Process(pokemon: Pokemon, rawPokemon: Data): Pokemon {
    pokemon.stats = {
      baseAttack: rawPokemon.pokemonSettings.stats.baseAttack,
      baseDefense: rawPokemon.pokemonSettings.stats.baseDefense,
      baseStamina: rawPokemon.pokemonSettings.stats.baseStamina
    };
    return pokemon;
  }
}