import { Component, IComponent } from '@core/pipeline/index';

import { Item, ItemXpBoost } from '@outcome/item/index';
import { Data } from '@income/index';

@Component({
  pipeline: 'item'
})
export class Revive implements IComponent {
  /**
   * Sets the xpBoost object and maps generic properties
   */
  Process(item: Item, rawItem: Data): Item {
    // Is a xpBoost
    if (!rawItem.itemSettings || !rawItem.itemSettings.xpBoost) {
      return item;
    }

    item.xpBoost = item.xpBoost || {} as ItemXpBoost;
    item.xpBoost.boostDurationMs = rawItem.itemSettings.xpBoost.boostDurationMs;
    item.xpBoost.xpMultiplier = rawItem.itemSettings.xpBoost.xpMultiplier;
    return item;
  }
}
