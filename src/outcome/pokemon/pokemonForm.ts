/**
 * Represents the various forms a Pokemon can take
 */
export interface PokemonForm {
  /*
   * The identifier of the form type
   * @example
   * ARCEUS_WATER
   */
  id: string;
  /*
   * A display friendly name of the form
   * @example
   * Arceus Water
   */
   name: string;
   /* Asset bundle identifier
    * @example
    * 61
    */
    assetBundleValue: number;
}
