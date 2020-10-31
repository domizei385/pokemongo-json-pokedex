import { Component, IComponent } from '@core/pipeline';
import { Data } from '@income';
import { Pokemon } from '@outcome/pokemon';
import { Util } from '@util';
import * as _ from 'lodash';

@Component({
  pipeline: 'pokemon'
})
export class QuickMoves implements IComponent {
  Process(pokemon: Pokemon, rawPokemon: Data): Pokemon {
    //pokemon.quickMoves = rawPokemon.pokemon.quickMoves.map(Util.SnakeCase2Identifyable);
    const quickMoves = _
        .chain(rawPokemon.pokemon.quickMoves)
        .uniq()
        .map(Util.SnakeCase2Identifyable)
        .value();
    pokemon.quickMoves = quickMoves;
    return pokemon;
  }
}
