import { Component, IComponent } from '@core/pipeline';
import { Data } from '@income';
import { Pokemon, PokemonGender } from '@outcome/pokemon';
import { Encounter } from './enounter';

@Component({
  pipeline: 'pokemon',
  dependencies: [
    new Encounter()
  ],
  requiresGameMaster: true
})
export class GenderPercentage implements IComponent {
  private isItemTemplateSpawn(item: Data): boolean {
    return new RegExp('^(SPAWN_V[0-9]+_POKEMON_?.*)', 'g').test(item.templateId);
  }

  /**
   * Parses the gender-spawn-percentage of the given Pokémon ID)
   * @param {String} id The id of the Pokémon (Example: BULBASAUR)
   * @returns {PokemonGender} Object with the Pokémon Gender Percent values
   */
  private getGenderPercent(gameMaster, pokemonId: string): PokemonGender {
    const itemTemplate = (gameMaster || [])
        .filter(itemTemplate => this.isItemTemplateSpawn(itemTemplate))
        .find(itemTemplate =>
            itemTemplate.genderSettings.pokemon === pokemonId);
    //No idea the correct way to fix this but this works for now
    if (!itemTemplate) {
      return {
        malePercent: 50,
        femalePercent: 50
      }
    }
    let malePercent = itemTemplate.genderSettings.gender.malePercent;
    let femalePercent = itemTemplate.genderSettings.gender.femalePercent;

    // For NIDORAN_MALE
    if (malePercent === 1) {
      femalePercent = 0;
    }

    // For NIDODRAN_FEMALE
    if (femalePercent === 1) {
      malePercent = 0;
    }

    // No gender
    if (!malePercent && !femalePercent) {
      return null;
    }

    return {
      malePercent: malePercent,
      femalePercent: femalePercent
    };
  }

  Process(pokemon: Pokemon, rawPokemon: Data, input: Map<String, any>): Pokemon {
    const gender = this.getGenderPercent(input['gameMaster'], rawPokemon.pokemon.uniqueId);
    if (gender) {
      pokemon.encounter.gender = gender;
    }

    return pokemon;
  }
}
