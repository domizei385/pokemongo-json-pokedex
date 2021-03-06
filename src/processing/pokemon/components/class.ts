import { Component, IComponent } from '@core/pipeline';
import { Data } from '@income';
import { Pokemon } from '@outcome/pokemon';
import { Util } from '@util';

@Component({
  pipeline: 'pokemon'
})
export class PokemonClass implements IComponent {
  Process(pokemon: Pokemon, rawPokemon: Data): Pokemon {
    if (rawPokemon.pokemon.pokemonClass) {
      pokemon.pokemonClass = {
        id: rawPokemon.pokemon.pokemonClass,
        name: Util.SnakeCase2HumanReadable(rawPokemon.pokemon.pokemonClass
            .replace('POKEMON_RARITY_', ''))
      };
    }
    return pokemon;
  }
}