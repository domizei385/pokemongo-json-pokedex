import { Component, IComponent } from '@core/pipeline';

import { ItemTemplate } from '@income';
import { Move } from '@outcome/move';
import { Util } from '@util';

@Component({
  pipeline: 'move'
})
export class Name implements IComponent {
  /**
   * Maps generic properties which do not need to be processed.
   */
  Process(move: Move, rawMove: ItemTemplate): Move {
    if (typeof rawMove.move.movementId != 'string') {
        rawMove.move.movementId = rawMove.templateId.substring(rawMove.templateId.indexOf("MOVE") + 5);
    }
    move.name = Util.SnakeCase2HumanReadable(rawMove.move.movementId);
    return move;
  }
}