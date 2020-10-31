import { Component, IComponent } from '@core/pipeline';

import { Data } from '@income';
import { Move } from '@outcome/move';
import { Util } from '@util';

@Component({
  pipeline: 'move'
})
export class PokemonType implements IComponent {
  /**
   * Maps generic properties which do not need to be processed.
   */
  Process(move: Move, rawMove: Data): Move {
    const moveStgs = rawMove.move;
    move.pokemonType = {
      id: moveStgs.type,
      name: Util.SnakeCase2HumanReadable(moveStgs.type
          .replace('POKEMON_TYPE_', ''))
    };
    return move;
  }
}