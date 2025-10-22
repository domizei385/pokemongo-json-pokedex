import { Component, IComponent } from '@core/pipeline';
import { Data } from '@income';
import { Pokemon } from '@outcome/pokemon';
import { Util } from '@util';

@Component({
  pipeline: 'pokemon'
})
export class Family implements IComponent {
  Process(pokemon: Pokemon, rawPokemon: Data): Pokemon {
    const familyId = "" + rawPokemon.pokemonSettings.familyId;
    //console.log("familyId: " + familyId);
    pokemon.family = {
      id: familyId,
      name: Util.SnakeCase2HumanReadable(familyId.replace('FAMILY_', ''))
    };
    return pokemon;
  }
}