import { Component, IComponent } from '@core/pipeline';
import { Data } from '@income';
import { Pokemon } from '@outcome/pokemon';
import { Util } from '@util';
import * as leftPad from 'left-pad';
import { PokemonForm } from '@outcome/pokemon/pokemonForm';

/**
 * Parses the pokemon forms from the item templates for each pokemon
 */
@Component({
  pipeline: 'pokemon',
  requiresGameMaster: true
})
export class Forms implements IComponent {

  /**
   * Sets any additional forms the pokemon may have
   */
  Process(pokemon: Pokemon, rawPokemon: Data, input: Map<String, any>): Pokemon {
    const forms = this.getForms(input['gameMaster'], rawPokemon);

    pokemon.forms = forms;

    return pokemon;
  }

  private getForms(gameMaster, rawPokemon: Data) {

    const dex = parseInt(rawPokemon.templateId.split('_')[0].slice(1), 10);
    const dexString = leftPad(dex, 4, '0');

    const formKey = `FORMS_V${dexString}_POKEMON_${rawPokemon.pokemonSettings.pokemonId}`;

    const itemTemplate = (gameMaster || [])
        .find(itemTemplate => {
          return itemTemplate.templateId === formKey;
        });

    const forms: PokemonForm[] = [];

    if (itemTemplate && itemTemplate.formSettings && itemTemplate.formSettings.forms) {
      itemTemplate.formSettings.forms.forEach(f => {
        console.log("Form: " + f.form);
        if (f.form && f.form.indexOf) {
          const formName = this.removeSuffixIfNeeded(f.form);

          forms.push({
            id: formName,
            name: Util.SnakeCase2HumanReadable(formName),
            assetBundleValue: f.assetBundleValue,
            assetBundleSuffix: f.assetBundleSuffix
          });
        }
      });
    }

    return forms;
  }

  private removeSuffixIfNeeded(name: string): string {
    const normalSuffix: string = '_NORMAL';
    const normalIndex = name.indexOf(normalSuffix);

    if (normalIndex >= 0) {
      name = name.substring(0, normalIndex);
    }

    return name;
  }
}
