import { Component, IComponent } from '@core/pipeline/index';

import { Item, ItemEggIncubinator } from '@outcome/item/index';
import { Data } from '@income/index';

@Component({
  pipeline: 'item'
})
export class EggIncubinator implements IComponent {
  /**
   * Sets the egg incubator object and maps generic properties
   */
  Process(item: Item, rawItem: Data): Item {
    // Is an egg incubator
    if (!rawItem.item.eggIncubator) {
      return item;
    }

    item.eggIncubinator = item.eggIncubinator || {} as ItemEggIncubinator;
    item.eggIncubinator.uses = rawItem.item.eggIncubator.uses;
    item.eggIncubinator.distanceMultiplier = rawItem.item.eggIncubator.distanceMultiplier;

    return item;
  }
}
