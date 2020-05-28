import { RootObject } from '@income';
import { Identifyable } from '@core';
import { Util } from '@util';

/**
 * Returns the identify-able object of the evolution item
 * @param gameMaster
 * @param evolutionItemRequirement The evolutionItemRequirement as string or number
 *
 * @example
 * GetEvolutionItemRequirement(1106) // returns { id: "ITEM_GEN4_EVOLUTION_STONE", name: "Gen4 Evolution Stone" }
 * GetEvolutionItemRequirement("ITEM_GEN4_EVOLUTION_STONE") // returns { id: "ITEM_GEN4_EVOLUTION_STONE", name: "Gen4 Evolution Stone" }
 */
export const GetEvolutionItemRequirement = (gameMaster: RootObject, evolutionItemRequirement: string | number): Identifyable => {
  let id: string;

  // If is number then it is an item id..
  if (typeof evolutionItemRequirement === 'number') {
    // Find item with the given id
    const foundItem = (gameMaster.itemTemplate || [])
        .find(item => item.item && item.item.itemId.toString() === evolutionItemRequirement.toString());
    id = foundItem.templateId
  } else {
    // If is string, it already is the id
    id = evolutionItemRequirement;
  }

  const name = Util.SnakeCase2HumanReadable(id.replace('ITEM_', ''))

  return {id, name};
}
