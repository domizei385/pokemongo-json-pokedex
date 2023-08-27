import { Component, IComponent } from '@core/pipeline/index';

import { Item, ItemRevive } from '@outcome/item/index';
import { Data } from '@income/index';

@Component({
  pipeline: 'item'
})
export class Revive implements IComponent {
  /**
   * Sets the revive object and maps generic properties
   */
  Process(item: Item, rawItem: Data): Item {
    // Is a revie
    if (!rawItem.itemSettings || !rawItem.itemSettings.revive) {
      return item;
    }

    item.revive = item.revive || {} as ItemRevive;
    item.revive.staminaPercent = rawItem.itemSettings.revive.staPercent;
    return item;
  }
}
