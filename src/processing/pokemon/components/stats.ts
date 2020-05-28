import { Component, IComponent } from '@core/pipeline';
import { ItemTemplate } from '@income';
import { Pokemon } from '@outcome/pokemon';
import { Util } from '@util';

@Component({
  pipeline: 'pokemon'
})
export class Stats implements IComponent {
  Process(pokemon: Pokemon, rawPokemon: ItemTemplate): Pokemon {
    pokemon.stats = {
      baseAttack: rawPokemon.pokemon.stats.baseAttack,
      baseDefense: rawPokemon.pokemon.stats.baseDefense,
      baseStamina: rawPokemon.pokemon.stats.baseStamina
    };
    return pokemon;
  }
}