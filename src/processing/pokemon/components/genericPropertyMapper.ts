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
    pokemon.animationTime = rawPokemon.pokemon.animTime;
    pokemon.height = rawPokemon.pokemon.pokedexHeightM;
    pokemon.modelHeight = rawPokemon.pokemon.modelHeight;
    pokemon.kmBuddyDistance = rawPokemon.pokemon.kmBuddyDistance;
    pokemon.weight = rawPokemon.pokemon.pokedexWeightKg;
    pokemon.modelScale = rawPokemon.pokemon.modelScale;

    return pokemon;
  }
}
