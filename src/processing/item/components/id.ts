import { Component, IComponent } from '../../../core/pipeline/index';

import { Item } from '../../../outcome/item/index';
import { Data } from '../../../income/index';
import { GetId } from './shared/getId';

@Component({
  pipeline: 'item'
})
export class GenericPropertyMapper implements IComponent {
  /**
   * Maps generic properties with the item
   */
  Process(item: Item, rawItem: Data): Item {
    item.id = GetId(rawItem);
    return item;
  }
}
