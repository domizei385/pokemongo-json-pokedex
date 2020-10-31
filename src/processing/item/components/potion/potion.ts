import { Component, IComponent } from '@core/pipeline/index';

import { Item, ItemPotion } from '@outcome/item/index';
import { Data } from '@income/index';

@Component({
  pipeline: 'item'
})
export class Potion implements IComponent {
  /**
   * Sets the potion object
   */
  Process(item: Item, rawItem: Data): Item {
    // Is a potion
    if (!rawItem.item.potion) {
      return item;
    }

    item.potion = item.potion || {} as ItemPotion;

    return item;
  }
}
