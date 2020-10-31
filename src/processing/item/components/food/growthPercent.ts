import { Component, IComponent } from '@core/pipeline/index';

import { Item } from '@outcome/item/index';
import { Data } from '@income/index';
import { Food } from './food';

@Component({
  pipeline: 'item',
  dependencies: [
    new Food()
  ]
})
export class GrowthPercent implements IComponent {
  /**
   * Parses the growth percent
   */
  Process(item: Item, rawItem: Data): Item {
    // Is a food
    if (!rawItem.item.food) {
      return item;
    }

    item.food.growthPercent = rawItem.item.food.growthPercent;

    return item;
  }
}
