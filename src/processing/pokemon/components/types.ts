
import { Component, IComponent } from '@core/pipeline';
import { ItemTemplate } from '@income';
import { Pokemon } from '@outcome/pokemon';
import { Util } from '@util';

@Component({
  pipeline: 'pokemon'
})
export class Types implements IComponent {
  Process(pokemon: Pokemon, rawPokemon: ItemTemplate): Pokemon {
    pokemon.types = [];

    if (rawPokemon.pokemon.type1) {
      pokemon.types.push({
        id: rawPokemon.pokemon.type1,
        name: Util.SnakeCase2HumanReadable(rawPokemon.pokemon.type1
          .replace('POKEMON_TYPE_', ''))
      });
    }

    if (rawPokemon.pokemon.type2) {
      pokemon.types.push({
        id: rawPokemon.pokemon.type2,
        name: Util.SnakeCase2HumanReadable(rawPokemon.pokemon.type2.replace('POKEMON_TYPE_', ''))
      });
    }
    return pokemon;
  }
}