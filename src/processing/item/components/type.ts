import { Component, IComponent } from '../../../core/pipeline/index';

import { Data } from '../../../income/index';
import { Util } from '../../../util/index';
import { Item } from '../../../outcome/item/index';

@Component({
  pipeline: 'item'
})
export class Type implements IComponent {
  /**
   * Parses the item type of the item
   */
  Process(item: Item, rawItem: Data): Item {
    if (!rawItem.itemSettings || !rawItem.itemSettings.itemType.replace) {
        return item;
    }
    //console.log("Cat: ", rawItem);
    item.type = Util.SnakeCase2Identifyable(rawItem.itemSettings.itemType.replace('ITEM_TYPE_', ''));
    return item;
  }
}
