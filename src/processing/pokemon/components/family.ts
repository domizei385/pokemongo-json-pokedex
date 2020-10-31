import { Component, IComponent } from '@core/pipeline';
import { Data } from '@income';
import { Pokemon } from '@outcome/pokemon';
import { Util } from '@util';

@Component({
  pipeline: 'pokemon'
})
export class Family implements IComponent {
  Process(pokemon: Pokemon, rawPokemon: Data): Pokemon {
    pokemon.family = {
      id: rawPokemon.pokemon.familyId,
      name: Util.SnakeCase2HumanReadable(rawPokemon.pokemon.familyId.replace('FAMILY_', ''))
    };
    return pokemon;
  }
}