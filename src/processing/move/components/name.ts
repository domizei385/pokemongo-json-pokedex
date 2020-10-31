import { Component, IComponent } from '@core/pipeline';

import { Data } from '@income';
import { Move } from '@outcome/move';
import { Util } from '@util';

@Component({
  pipeline: 'move'
})
export class Name implements IComponent {
  /**
   * Maps generic properties which do not need to be processed.
   */
  Process(move: Move, rawMove: Data): Move {
    if (typeof rawMove.move.uniqueId != 'string') {
        rawMove.move.uniqueId = rawMove.templateId.substring(rawMove.templateId.indexOf("MOVE") + 5);
    }
    move.name = Util.SnakeCase2HumanReadable(rawMove.move.uniqueId);
    return move;
  }
}