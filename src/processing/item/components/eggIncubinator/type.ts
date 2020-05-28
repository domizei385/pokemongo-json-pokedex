import { Component, IComponent } from '@core/pipeline/index';

import { Item } from '@outcome/item/index';
import { ItemTemplate } from '@income/index';
import { EggIncubinator } from './eggIncubinator';
import { Util } from '@util';

@Component({
    pipeline: 'item',
    dependencies: [
        new EggIncubinator()
    ]
})
export class Type implements IComponent {
    /**
     * The type of an egg incubinator
     */
    Process(item: Item, rawItem: ItemTemplate): Item {
        if (!rawItem.item.eggIncubator) {
            return item;
        }

        const eggIncubinator = rawItem.item.eggIncubator;
        item.eggIncubinator.type = Util.SnakeCase2Identifyable(eggIncubinator.incubatorType.replace('INCUBATOR_', ''));
        return item;
    }
}
