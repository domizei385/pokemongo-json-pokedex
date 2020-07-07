import { Component, IComponent } from '@core/pipeline/component';
import { Pokemon } from '@outcome/pokemon';
import { CinematicMoves } from '../cinematicMoves';
import { Util } from '@util/index';
import * as _ from 'lodash';
import { Identifyable } from '@core';

@Component({
  pipeline: 'pokemon',
  templateId: 'V0025_POKEMON_PIKACHU_COSTUME_2020',
  dependencies: [
    new CinematicMoves()
  ]
})
export class Pikachu2020 implements IComponent {
  Process(pokemon: Pokemon): Pokemon {
    const cinematicMoves = _
        .chain(["DISCHARGE", "THUNDERBOLT", "WILD_CHARGE", "FLY"])
        .uniq()
        .map(Util.SnakeCase2Identifyable)
        .value();
    pokemon.cinematicMoves = cinematicMoves as Identifyable[];
    return pokemon;
  }
}
