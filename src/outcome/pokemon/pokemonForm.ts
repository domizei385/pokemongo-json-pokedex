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
<<<<<<< HEAD
   /* Asset bundle identifier
    * @example
    * 61
    */
    assetBundleValue: number;
=======
  /*
   * Asset bundle identifier
   * @example
   * 61
   */
   assetBundleValue: int;
>>>>>>> a136b8c0c49cc06ef298da121d7a7cad786cae84
}
