import { Data } from '../../../../income/index';

/**
 * Converts the item template id to the item id
 * @param templateId The template id of the item
 */
export const GetId = (rawData: Data) => {
  let newId = rawData.templateId.replace('ITEM_', '');
  return newId;
};
