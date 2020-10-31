import { Component, IComponent } from '@core/pipeline';
import { Data } from '@income';
import { Pokemon } from '@outcome/pokemon';

@Component({
  pipeline: 'pokemon'
})
export class Types implements IComponent {
  Process(pokemon: Pokemon, rawPokemon: Data): Pokemon {
    pokemon.camera = {
      cylHeight: rawPokemon.pokemon.camera.cylHeightM,
      cylRadius: rawPokemon.pokemon.camera.cylRadiusM,
      diskRadius: rawPokemon.pokemon.camera.diskRadiusM,
      shoulderModeScale: rawPokemon.pokemon.camera.shoulderModeScale
    };

    return pokemon;
  }
}