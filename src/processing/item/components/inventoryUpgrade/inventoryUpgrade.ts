import { Component, IComponent } from '@core/pipeline/index';

import { Item, ItemInventoryUpgrade } from '@outcome/item/index';
import { Data } from '@income/index';

@Component({
  pipeline: 'item'
})
export class InventoryUpgrade implements IComponent {
  /**
   * Sets the inventoryUpgrade object and maps generic properties
   */
  Process(item: Item, rawItem: Data): Item {
    // Is an inventoryUpgrade
    if (!rawItem.itemSettings || !rawItem.itemSettings.inventoryUpgrade) {
      return item;
    }

    item.inventoryUpgrade = item.inventoryUpgrade || {} as ItemInventoryUpgrade;
    item.inventoryUpgrade.additionalStorage =
        rawItem.itemSettings.inventoryUpgrade.additionalStorage;

    return item;
  }
}
