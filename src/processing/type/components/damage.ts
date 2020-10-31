import { Component, IComponent } from '@core/pipeline';

import APP_SETTINGS from '@settings/app';
import { Data } from '@income';
import { Type } from '@outcome/type';

@Component({
  pipeline: 'type',
})
export class Damage implements IComponent {
  Process(type: Type, rawType: Data): Type {
    //console.log("Damage - RawType");
    //console.log(rawType);
    /*type.id = APP_SETTINGS.POKEMON_TYPES.map((pokemonType, index) => ({
      id: pokemonType.id
    }));*/
    return type;
  }
}