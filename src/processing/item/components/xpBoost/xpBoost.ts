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
    if (!rawItem.item.xpBoost) {
      return item;
    }

    item.xpBoost = item.xpBoost || {} as ItemXpBoost;
    item.xpBoost.boostDurationMs = rawItem.item.xpBoost.boostDurationMs;
    item.xpBoost.xpMultiplier = rawItem.item.xpBoost.xpMultiplier;
    return item;
  }
}
