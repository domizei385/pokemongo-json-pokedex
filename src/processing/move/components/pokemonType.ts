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
    const moveStgs = rawMove.moveSettings;
    move.pokemonType = {
      id: moveStgs.pokemonType,
      name: Util.SnakeCase2HumanReadable(moveStgs.pokemonType
          .replace('POKEMON_TYPE_', ''))
    };
    return move;
  }
}