import { Component, IComponent } from '@core/pipeline';
import { Data } from '@income';
import { Pokemon } from '@outcome/pokemon';

@Component({
  pipeline: 'pokemon'
})
export class Stats implements IComponent {
  Process(pokemon: Pokemon, rawPokemon: Data): Pokemon {
    pokemon.stats = {
      baseAttack: rawPokemon.pokemon.stats.baseAttack,
      baseDefense: rawPokemon.pokemon.stats.baseDefense,
      baseStamina: rawPokemon.pokemon.stats.baseStamina
    };
    return pokemon;
  }
}