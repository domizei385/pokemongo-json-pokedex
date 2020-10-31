import { Data, RootObject } from '@income';
import { Pipeline } from '@core/pipeline';

/**
 * Represents the Pipeline which converts Game Master Avatar Customization related
 * input data to AvatarCustomization models
 */
export class AvatarCustomizationPipeline extends Pipeline {
  constructor(input: RootObject) {
    super(input, 'avatarCustomization');
  }

  /**
   * Checks if the given ItemTemplate is indeed an avatar customization
   */
  isItemTemplate(item: Data): boolean {
    return new RegExp('^(AVATAR_[mf]_?.*)', 'g').test(item.templateId);
  }
}
