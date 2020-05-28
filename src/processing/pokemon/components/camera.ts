
import { Component, IComponent } from '@core/pipeline';
import { ItemTemplate } from '@income';
import { Pokemon } from '@outcome/pokemon';
import { Util } from '@util';

@Component({
  pipeline: 'pokemon'
})
export class Types implements IComponent {
  Process(pokemon: Pokemon, rawPokemon: ItemTemplate): Pokemon {
    pokemon.camera = {
      cylinderGround: rawPokemon.pokemon.camera.cylinderGroundM,
      cylinderRadius: rawPokemon.pokemon.camera.cylinderRadiusM,
      diskRadius: rawPokemon.pokemon.camera.diskRadiusM,
      shoulderModeScale: rawPokemon.pokemon.camera.shoulderModeScale
    };

    return pokemon;
  }
}