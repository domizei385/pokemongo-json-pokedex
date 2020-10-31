import { Component, IComponent } from '@core/pipeline';

import { Data } from '@income';
import { Move } from '@outcome/move';

@Component({
  pipeline: 'move'
})
export class InternalId implements IComponent {
  /**
   * Maps generic properties which do not need to be processed.
   */
  Process(move: Move, rawMove: Data): Move {
    move.internalId = parseInt(rawMove.templateId.split('_')[0].slice(1), 10);
    return move;
  }
}