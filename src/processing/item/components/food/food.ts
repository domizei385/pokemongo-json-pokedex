import { Component, IComponent } from '@core/pipeline/index';

import { Item, ItemFood } from '@outcome/item/index';
import { Data } from '@income/index';

@Component({
  pipeline: 'item'
})
export class Food implements IComponent {
  /**
   * Sets the food object
   */
  Process(item: Item, rawItem: Data): Item {
    // Is a food
    if (!rawItem.item.food) {
      return item;
    }

    item.food = item.food || {} as ItemFood;
    item.food.berryMultiplier = rawItem.item.food.berryMultiplier;
    item.food.remoteBerryMultiplier = rawItem.item.food.remoteBerryMultiplier;

    return item;
  }
}
