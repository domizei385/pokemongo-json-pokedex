import { Component, IComponent } from '@core/pipeline';
import { Data } from '@income';
import { Pokemon } from '@outcome/pokemon';

@Component({
  pipeline: 'pokemon'
})
export class Types implements IComponent {
  Process(pokemon: Pokemon, rawPokemon: Data): Pokemon {
    pokemon.camera = {
      cylHeight: rawPokemon.pokemonSettings.camera.cylHeightM,
      cylRadius: rawPokemon.pokemonSettings.camera.cylRadiusM,
      diskRadius: rawPokemon.pokemonSettings.camera.diskRadiusM,
      shoulderModeScale: rawPokemon.pokemonSettings.camera.shoulderModeScale
    };

    return pokemon;
  }
}