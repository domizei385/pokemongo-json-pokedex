import { Component, IComponent } from '@core/pipeline';
import { Data } from '@income';
import { Pokemon } from '@outcome/pokemon';
import { Util } from '@util';

@Component({
  pipeline: 'pokemon'
})
export class PokemonClass implements IComponent {
  Process(pokemon: Pokemon, rawPokemon: Data): Pokemon {
    if (rawPokemon.pokemonSettings.pokemonClass) {
      pokemon.pokemonClass = {
        id: rawPokemon.pokemonSettings.pokemonClass,
        name: Util.SnakeCase2HumanReadable(rawPokemon.pokemonSettings.pokemonClass
            .replace('POKEMON_RARITY_', ''))
      };
    }
    return pokemon;
  }
}