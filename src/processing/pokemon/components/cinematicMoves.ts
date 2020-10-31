import { Component, IComponent } from '@core/pipeline/index';
import { Data } from '@income/index';
import { Pokemon } from '@outcome/pokemon/index';
import { Util } from '@util/index';
import * as _ from 'lodash';

@Component({
  pipeline: 'pokemon'
})
export class CinematicMoves implements IComponent {
  Process(pokemon: Pokemon, rawPokemon: Data): Pokemon {
    try {
      const cinematicMoves = _
        .chain(rawPokemon.pokemon.cinematicMoves)
        .uniq()
        .map(Util.SnakeCase2Identifyable)
        .value();
      pokemon.cinematicMoves = cinematicMoves;
    } catch (e) {console.log(e);}
    return pokemon;
  }
}
