import { Component, IComponent } from '@core/pipeline';
import { Data } from '@income';
import { Pokemon } from '@outcome/pokemon';
import { Id } from '../../type/components/id';

@Component({
  pipeline: 'pokemon',
  dependencies: [
    new Id()
  ]
})
export class GenericPropertyMapper implements IComponent {
  /**
   * Maps generic properties which do not need to be processed.
   */
  Process(pokemon: Pokemon, rawPokemon: Data): Pokemon {
    var settings = rawPokemon.pokemonSettings;
    pokemon.animationTime = settings.animationTime;
    pokemon.height = settings.pokedexHeightM;
    pokemon.modelHeight = settings.modelHeight;
    pokemon.kmBuddyDistance = settings.kmBuddyDistance;
    pokemon.weight = settings.pokedexWeightKg;
    pokemon.modelScale = settings.modelScale;

    return pokemon;
  }
}
