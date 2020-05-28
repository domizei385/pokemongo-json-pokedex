import { Component, IComponent } from '@core/pipeline/index';

import { Item, ItemEffect } from '@outcome/item/index';
import { ItemTemplate } from '@income/index';
import { Util } from '@util/util';
import { Food } from './food';

@Component({
  pipeline: 'item',
  dependencies: [
    new Food()
  ]
})
export class Effect implements IComponent {
  /**
   * Parses the item effect
   */
  Process(item: Item, rawItem: ItemTemplate): Item {
    // Is a food
    if (!rawItem.item.food) {
      return item;
    }

    const effects = rawItem.item.food.itemEffect || [];
    const effectPercents = rawItem.item.food.itemEffectPercent || [];

    item.food.effect = effects.map((effect: string, index: number): ItemEffect => {
      return {
        ...Util.SnakeCase2Identifyable(effect.replace('ITEM_EFFECT_', '')),
        effectPercent: effectPercents[index]
      }
    });

    return item;
  }
}
