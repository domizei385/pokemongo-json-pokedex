import { Component, IComponent } from '../../../core/pipeline/index';

import { Data } from '../../../income/index';
import { Util } from '../../../util/index';
import { Item } from '../../../outcome/item/index';

@Component({
  pipeline: 'item'
})
export class Catgeory implements IComponent {
  /**
   * Parses the category of the item
   */
  Process(item: Item, rawItem: Data): Item {
    item.category = Util.SnakeCase2Identifyable(rawItem.item.category.replace('ITEM_CATEGORY_', ''));
    return item;
  }
}
