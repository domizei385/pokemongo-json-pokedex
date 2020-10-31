import { Component, IComponent } from '@core/pipeline';

import { Data } from '@income';
import { Type } from '@outcome/type';

@Component({
  pipeline: 'type'
})
export class Id implements IComponent {
  Process(type: Type, rawType: Data): Type {
    type.id = rawType.templateId;
    return type;
  }
}