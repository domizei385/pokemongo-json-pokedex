import { Component, IComponent } from '@core/pipeline';

import { Item } from '@outcome/item';
import { Data } from '@income/index';

@Component({
  pipeline: 'item'
})
export class GenericPropertyMapper implements IComponent {
  /**
   * Maps generic properties with the item
   */
  Process(item: Item, rawItem: Data): Item {
    if (!rawItem.itemSettings) {
        return item;
    }
    item.dropTrainerLevel = rawItem.itemSettings.dropTrainerLevel;
    return item;
  }
}
