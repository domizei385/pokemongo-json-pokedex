export interface RootObject {
  result: string;
  template: Template[];
  batchId: string;
  experimentId: number[];
}
export interface Template {
  templateId: string;
  data: Data;
}
export interface Data {
  templateId?: string;
  arTelemetrySettings?: ArTelemetrySettings;
  avatarGroupOrderSettings?: AvatarGroupOrderSettings;
  avatarCustomization?: AvatarCustomization;
  backgroundModeSettings?: BackgroundModeSettings;
  badge?: Badge;
  battleHubBadgeSettings?: BattleHubBadgeSettings;
  battleHubOrderSettings?: BattleHubOrderSettings;
  battleSettings?: BattleSettings;
  belugaPokemonWhitelist?: BelugaPokemonWhitelist;
  buddyActivitySettings?: BuddyActivitySettings;
  buddyActivityCategorySettings?: BuddyActivityCategorySettings;
  buddyEmotionLevelSettings?: BuddyEmotionLevelSettings;
  buddyEncounterCameoSettings?: BuddyEncounterCameoSettings;
  buddyHungerSettings?: BuddyHungerSettings;
  buddyInteractionSettings?: BuddyInteractionSettings;
  buddyLevelSettings?: BuddyLevelSettings;
  buddySwapSettings?: BuddySwapSettings;
  buddyWalkSettings?: BuddyWalkSettings;
  invasionNpcDisplaySettings?: InvasionNpcDisplaySettings;
  combatCompetitiveSeasonSettings?: CombatCompetitiveSeasonSettings;
  combatLeague?: CombatLeague;
  combatLeagueSettings?: CombatLeagueSettings;
  combatType?: CombatType;
  combatRankingProtoSettings?: CombatRankingProtoSettings;
  combatSettings?: CombatSettings;
  combatStatStageSettings?: CombatStatStageSettings;
  combatMove?: CombatMove;
  crossGameSocialSettings?: CrossGameSocialSettings;
  field5?: Field5;
  encounterSettings?: EncounterSettings;
  exRaidSettings?: ExRaidSettings;
  formSettings?: FormSettings;
  friendshipMilestoneSettings?: FriendshipMilestoneSettings;
  gymBadgeSettings?: GymBadgeSettings;
  gymLevel?: GymLevel;
  iapCategoryDisplay?: IapCategoryDisplay;
  iapSettings?: IapSettings;
  pokestopInvasionAvailabilitySettings?: PokestopInvasionAvailabilitySettings;
  item?: Item;
  limitedPurchaseSkuSettings?: LimitedPurchaseSkuSettings;
  luckyPokemonSettings?: LuckyPokemonSettings;
  mapDisplaySettings?: MapDisplaySettings;
  megaEvoSettings?: MegaEvoSettings;
  monodepthSettings?: MonodepthSettings;
  onboardingV2Settings?: OnboardingV2Settings;
  partyRecommendationSettings?: PartyRecommendationSettings;
  platypusRolloutSettings?: PlatypusRolloutSettings;
  playerLevel?: PlayerLevel;
  pokecoinPurchaseDisplayGmt?: PokecoinPurchaseDisplayGmt;
  pokemonScaleSettings?: PokemonScaleSettings;
  typeEffective?: TypeEffective;
  pokemonUpgrades?: PokemonUpgrades;
  questSettings?: QuestSettings;
  raidSettingsProto?: RaidSettingsProto;
  smeargleMovesSettings?: SmeargleMovesSettings;
  genderSettings?: GenderSettings;
  sponsoredGeofenceGiftSettings?: SponsoredGeofenceGiftSettings;
  stickerMetadata?: StickerMetadata;
  iapItemDisplay?: IapItemDisplay;
  temporaryEvolutionSettings?: TemporaryEvolutionSettings;
  combatNpcTrainer?: CombatNpcTrainer;
  combatNpcPersonality?: CombatNpcPersonality;
  pokemon?: Pokemon;
  move?: Move;
  vsSeekerClientSettings?: VsSeekerClientSettings;
  vsSeekerLootProto?: VsSeekerLootProto;
  vsSeekerPokemonRewards?: VsSeekerPokemonRewards;
  weatherAffinities?: WeatherAffinities;
  weatherBonusSettings?: WeatherBonusSettings;
  adventureSyncV2Gmt?: PokecoinPurchaseDisplayGmt;
  camera?: Camera3;
  moveSequence?: MoveSequence;
  filed6?: Filed6;
  field2?: Field5;
  field3?: Field32;
}
export interface Field32 {
  field1: string;
  field2: string;
  field3: Field3[];
  field4: string;
  field5: Field52;
}
export interface Field52 {
  lcdegoaaeao: string;
  dahllofeaic: string;
}
export interface Field3 {
  gdoolemfnpl: Gdoolemfnpl[];
  heaeepoemki: number;
}
export interface Gdoolemfnpl {
  gnkgaimjkch: string;
  withThrowType?: WithThrowType;
}
export interface WithThrowType {
  throwType: string;
}
export interface Filed6 {
  enabled: boolean;
}
export interface MoveSequence {
  sequence: string[];
}
export interface Camera3 {
  interpolation: string[];
  targetType: string[];
  easeInSpeed: number[];
  easeOutSpeed: number[];
  durationS: number[];
  waitS: number[];
  transitionS: number[];
  angleDeg: number[];
  angleOffsetDeg: number[];
  pitchDeg: number[];
  pitchOffsetDeg: number[];
  rollDeg: number[];
  distanceM: number[];
  heightPercent: number[];
  vertCtrRatio: number[];
  nextCamera?: string;
}
export interface WeatherBonusSettings {
  cpBaseLevelBonus: number;
  guaranteedIndividualValues: number;
  stardustBonusMultiplier: number;
  attackBonusMultiplier: number;
  raidEncounterCpBaseLevelBonus: number;
  raidEncounterGuaranteedIndividualValues: number;
}
export interface WeatherAffinities {
  weatherCondition: string;
  pokemonType: string[];
}
export interface VsSeekerPokemonRewards {
  availablePokemon: AvailablePokemon2[];
  rewardTrack?: string;
}
export interface AvailablePokemon2 {
  guaranteedLimitedPokemonReward?: GuaranteedLimitedPokemonReward;
  unlockedAtRank: number;
  attackIvOverride: AttackIvOverride;
  defenseIvOverride: AttackIvOverride;
  staminaIvOverride: AttackIvOverride;
  pokemon?: Pokemon2;
}
export interface AttackIvOverride {
  range: Range;
}
export interface Range {
  min: number;
  max: number;
}
export interface GuaranteedLimitedPokemonReward {
  pokemon: Pokemon2;
  identifier: string;
  lifetimeMaxCount?: number;
  perCompetitiveCombatSeasonMaxCount?: number;
}
export interface Pokemon2 {
  pokemonId: string;
  pokemonDisplay?: PokemonDisplay;
}
export interface VsSeekerLootProto {
  rankLevel: number;
  reward: Reward[];
  rewardTrack?: string;
}
export interface Reward {
  item?: Item2;
  itemLootTable?: boolean;
  pokemonReward?: boolean;
}
export interface Item2 {
  stardust?: boolean;
  count: number;
  item?: string;
}
export interface VsSeekerClientSettings {
  allowedVsSeekerLeagueTemplateId: string[];
}
export interface Move {
  movementId: string;
  animationId: number;
  type: string;
  power?: number;
  accuracyChance: number;
  criticalChance?: number;
  staminaLossScalar?: number;
  trainerLevelMin: number;
  trainerLevelMax: number;
  vfxName: string;
  durationMs: number;
  damageWindowStartMs: number;
  damageWindowEndMs: number;
  energyDelta?: number;
  healScalar?: number;
  isLocked?: boolean;
}
export interface Pokemon {
  pokemonId: string;
  modelScale?: number;
  type: string;
  type2?: string;
  camera: Camera;
  encounter: Encounter;
  stats: Stats;
  quickMoves?: string[];
  cinematicMoves?: string[];
  animTime: number[];
  evolution?: string[];
  evolutionPips?: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  heightStdDev: number;
  weightStdDev: number;
  familyId: string;
  candyToEvolve?: number;
  kmBuddyDistance: number;
  modelHeight: number;
  evolutionBranch?: EvolutionBranch[];
  modelScaleV2: number;
  buddyOffsetMale: number[];
  buddyOffsetFemale: number[];
  buddyScale: number;
  thirdMove: ThirdMove;
  isTransferable?: boolean;
  isDeployable?: boolean;
  buddyGroupNumber: number;
  form?: number | string;
  shadow?: Shadow;
  parentId?: string;
  buddySize?: string;
  combatShoulderCameraAngle?: number[];
  combatDefaultCameraAngle?: number[];
  combatPlayerFocusCameraAngle?: number[];
  eliteCinematicMove?: string[];
  temporaryEvolutions?: TemporaryEvolution2[];
  eliteQuickMove?: string[];
  buddyPortraitOffset?: number[];
  combatPlayerPokemonPositionOffset?: number[];
  pokemonClass?: string;
  combatOpponentFocusCameraAngle?: number[];
}
export interface TemporaryEvolution2 {
  temporaryEvolutionId: string;
  stats: Stats;
  pokedexHeightM: number;
  pokedexWeightK: number;
  type: string;
  type2?: string;
  camera?: Camera2;
  modelScaleV2: number;
  modelHeigh: number;
  buddyOffsetMale?: number[];
  buddyOffsetFemale?: number[];
  buddyScale?: number;
  buddyPortraitOffset?: number[];
}
export interface Camera2 {
  cylRadiusM: number;
  cylHeightM: number;
  cylGroundM?: number;
}
export interface Shadow {
  purificationStardustNeeded: number;
  purificationCandyNeeded: number;
  purifiedChargeMove: string;
  shadowChargeMove: string;
}
export interface ThirdMove {
  stardustToUnlock?: number;
  candyToUnlock: number;
}
export interface EvolutionBranch {
  evolution?: string;
  candyCost?: number;
  form?: string;
  tempEvolution?: string;
  firstTempEvolutionCandyCost?: number;
  subsequentTempEvolutionCandyCost?: number;
  evolutionItemRequirement?: string;
  noCandyCostViaTrade?: boolean;
  lureItemRequirement?: string;
  evoBranchField1?: EvoBranchField1[];
  kmBuddyDistanceRequirement?: number;
  mustBeBuddy?: boolean;
  onlyDaytime?: boolean;
  priority?: number;
  onlyNighttime?: boolean;
  genderRequirement?: string;
}
export interface EvoBranchField1 {
  field1: string;
}
export interface Stats {
  baseStamina: number;
  baseAttack: number;
  baseDefense: number;
}
export interface Encounter {
  baseCaptureRate?: number;
  baseFleeRate?: number;
  collisionRadiusM: number;
  collisionHeightM: number;
  collisionHeadRadiusM: number;
  movementType?: string;
  movementTimerS: number;
  jumpTimeS?: number;
  attackTimerS: number;
  attackProbability?: number;
  dodgeProbability?: number;
  dodgeDurationS: number;
  dodgeDistance: number;
  cameraDistance: number;
  minPokemonActionFrequencyS: number;
  maxPokemonActionFrequencyS: number;
  bonusCandyCaptureReward?: number;
  bonusStardustCaptureReward?: number;
}
export interface Camera {
  diskRadiusM: number;
  cylRadiusM: number;
  cylHeightM: number;
  shoulderModeScale?: number;
  cylGroundM?: number;
}
export interface CombatNpcPersonality {
  personalityName: string;
  superEffectiveChance: number;
  specialChance: number;
  offensiveMinimumScore: number;
  offensiveMaximumScore: number;
  defensiveMinimumScore?: number;
  defensiveMaximumScore?: number;
}
export interface CombatNpcTrainer {
  trainerName: string;
  combatLeagueTemplateId: string;
  combatPersonalityId: string;
  avatar: Avatar;
  availablePokemon: AvailablePokemon[];
  trainerTitle: string;
  trainerQuote: string;
  iconUrl: string;
  backdropImageBundle: string;
}
export interface AvailablePokemon {
  pokemonType: string;
  pokemonDisplay?: PokemonDisplay;
}
export interface PokemonDisplay {
  form: string;
}
export interface TemporaryEvolutionSettings {
  pokemonId: string;
  temporaryEvolutions: TemporaryEvolution[];
}
export interface TemporaryEvolution {
  temporaryEvolutionId: string;
  assetBunbleValue: number;
}
export interface IapItemDisplay {
  sku: string;
  category: string;
  sortOrder?: number;
  sale?: boolean;
  title?: string;
  spriteId?: string;
  hidden?: boolean;
  skuEnableTime?: string;
  skuDisableTime?: string;
  skuEnableTimeUtcMs?: string;
  skuDisableTimeUtcMs?: string;
  imageUrl?: string;
}
export interface StickerMetadata {
  stickerId: string;
  stickerUrl: string;
  maxCount: number;
}
export interface SponsoredGeofenceGiftSettings {
  giftPersistenceTimeMs: number;
  mapPresentationTimeMs: number;
  enableSponsoredGeofenceGift: boolean;
  enablePoiGift: boolean;
  enableIncidentGift: boolean;
}
export interface GenderSettings {
  pokemon: string;
  gender: Gender;
}
export interface Gender {
  malePercent?: number;
  femalePercent?: number;
  genderlessPercent?: number;
}
export interface SmeargleMovesSettings {
  quickMoves: string[];
  cinematicMoves: string[];
}
export interface RaidSettingsProto {
  remoteRaidEnabled: boolean;
  maxRemoteRaidPasses: number;
  remoteDamageModifier: number;
  remoteRaidsMinPlayerLevel: number;
  maxNumFriendInvites: number;
  friendInviteCutoffTimeSec: number;
  canInviteFriendsInPerson: boolean;
  canInviteFriendsRemotely: boolean;
  maxPlayersPerLobby: number;
  maxRemotePlayersPerLobby: number;
  inviteCooldownDurationMillis: string;
  maxNumFriendInvitesPerAction: number;
}
export interface QuestSettings {
  questType: string;
  dailyQuest: DailyQuest;
}
export interface DailyQuest {
  bucketsPerDay: number;
  streakLength: number;
  bonusMultiplier?: number;
  streakBonusMultiplier?: number;
}
export interface PokemonUpgrades {
  upgradesPerLevel: number;
  allowedLevelsAbovePlayer: number;
  candyCost: number[];
  stardustCost: number[];
  shadowStardustMultiplier: number;
  shadowCandyMultiplier: number;
  purifiedStardustMultiplier: number;
  purifiedCandyMultiplier: number;
  maxNormalUpgradeLevel: number;
  defaultCpBoostAdditionalLevel: number;
}
export interface TypeEffective {
  attackType: string;
}
export interface PokemonScaleSettings {
  pokemonScaleMode?: string;
  minHeight: number;
  maxHeight: number;
}
export interface PokecoinPurchaseDisplayGmt {
  featureEnabled: boolean;
}
export interface PlayerLevel {
  rankNum: number[];
  requiredExp: number[];
  cpMultiplier: number[];
  maxEggPlayerLevel: number;
  maxEncounterPlayerLevel: number;
  maxQuestEncounterPlayerLevel: number;
}
export interface PlatypusRolloutSettings {
  buddyV2MinPlayerLevel: number;
  buddyMultiplayerMinPlayerLevel: number;
  wallabySettings: MapDisplaySettings;
}
export interface PartyRecommendationSettings {
  mode: string;
  variance: number;
  thirdMoveWeight: number;
  field1: number;
}
export interface OnboardingV2Settings {
  pokedexId: string[];
  eggKmUntilHatch: number;
}
export interface MonodepthSettings {
  enableOcclusions: boolean;
  occlusionsDefaultOn: boolean;
  occlusionsToggleVisible: boolean;
  field1: boolean;
  field2: number;
  field3: number;
}
export interface MegaEvoSettings {
  megaEvolveDurationMs: string;
  megaBoost: number;
  megaSameTypeBoost: number;
  megaMaxCandy: number;
}
export interface MapDisplaySettings {
}
export interface LuckyPokemonSettings {
  powerUpStardustDiscountPercent: number;
}
export interface LimitedPurchaseSkuSettings {
  purchaseLimit: number;
  chronoUnit?: string;
  resetInterval?: number;
  version?: number;
}
export interface Item {
  itemId: string;
  itemType: string;
  category: string;
  dropTrainerLevel?: number;
  food?: Food;
  globalEventTicket?: GlobalEventTicket;
  incidentTicket?: IncidentTicket;
  potion?: Potion;
  incense?: Incense;
  eggIncubator?: EggIncubator;
  inventoryUpgrade?: InventoryUpgrade;
  xpBoost?: XpBoost;
  revive?: Revive;
  stardustBoost?: StardustBoost;
}
export interface StardustBoost {
  stardustMultiplier: number;
  boostDurationMs: number;
}
export interface Revive {
  staPercent: number;
}
export interface XpBoost {
  xpMultiplier: number;
  boostDurationMs: number;
}
export interface InventoryUpgrade {
  additionalStorage: number;
  upgradeType: string;
}
export interface EggIncubator {
  incubatorType: string;
  uses?: number;
  distanceMultiplier: number;
}
export interface Incense {
  incenseLifetimeSeconds: number;
  spawnTableProbability?: number;
}
export interface Potion {
  staAmount?: number;
  staPercent?: number;
}
export interface IncidentTicket {
  ignoreFullInventory?: boolean;
  upgradeRequirementCount?: number;
  upgradedItem?: string;
}
export interface GlobalEventTicket {
  eventStartTime: string;
  eventEndTime: string;
  itemBagDescriptionKey?: string;
  clientEventStartTimeUtcMs: string;
  clientEventEndTimeUtcMs: string;
  eventBadge?: string;
  grantBadgeBeforeEventStartMs?: string;
}
export interface Food {
  itemEffect?: string[];
  itemEffectPercent?: number[];
  growthPercent?: number;
  berryMultiplier?: number;
  remoteBerryMultiplier?: number;
  numBuddyAffectionPoints?: number;
  mapDurationMs?: string;
  activeDurationMs?: string;
  numBuddyHungerPoints?: number;
}
export interface PokestopInvasionAvailabilitySettings {
  availabilityStartMinute: string;
  availabilityEndMinute: string;
}
export interface IapSettings {
  dailyDefenderBonusPerPokemon: number[];
  dailyDefenderBonusMaxDefenders: number;
  dailyDefenderBonusCurrency: string[];
  minTimeBetweenClaimsMs: string;
}
export interface IapCategoryDisplay {
  category: string;
  sortOrder: number;
  imageUrl?: string;
  description?: string;
  bannerEnabled?: boolean;
  bannerTitle?: string;
  name?: string;
  displayRows?: number;
}
export interface GymLevel {
  requiredExp: number[];
  leaderSlots: number[];
  trainerSlots: number[];
}
export interface GymBadgeSettings {
  target: number[];
  battleWinningScorePerDefenderCp: number;
  gymDefendingScorePerMinute: number;
  berryFeedingScore: number;
  pokemonDeployScore: number;
  raidBattleWinningScore: number;
  loseAllBattlesScore: number;
}
export interface FriendshipMilestoneSettings {
  milestoneXpReward: number;
  attackBonusPercentage: number;
  unlockedTrading: string[];
  minPointsToReach?: number;
  raidBallBonus?: number;
  tradingDiscount?: number;
}
export interface FormSettings {
  pokemon: string;
  forms?: Form[];
}
export interface Form {
  form: number | number | string | string;
  assetBundleSuffix?: string;
  assetBundleValue?: number;
}
export interface ExRaidSettings {
  minimumExRaidShareLevel: string;
}
export interface EncounterSettings {
  spinBonusThreshold: number;
  excellentThrowThreshold: number;
  greatThrowThreshold: number;
  niceThrowThreshold: number;
  milestoneThreshold: number;
  arPlusModeEnabled: boolean;
  arCloseProximityThreshold: number;
  arLowAwarenessThreshold: number;
}
export interface Field5 {
  field1: boolean;
}
export interface CrossGameSocialSettings {
  onlineStatusEnabledOverrideLevel: boolean;
  nianticProfileEnabledOverrideLevel: boolean;
}
export interface CombatMove {
  uniqueId: string;
  type: string;
  power?: number;
  vfxName: string;
  energyDelta?: number;
  buffs?: Buffs;
  durationTurns?: number;
}
export interface Buffs {
  targetDefenseStatStageChange?: number;
  buffActivationChance: number;
  attackerAttackStatStageChange?: number;
  targetAttackStatStageChange?: number;
  attackerDefenseStatStageChange?: number;
}
export interface CombatStatStageSettings {
  minimumStatStage: number;
  maximumStatStage: number;
  attackBuffMultiplier: number[];
  defenseBuffMultiplier: number[];
}
export interface CombatSettings {
  roundDurationSeconds: number;
  turnDurationSeconds: number;
  minigameDurationSeconds: number;
  sameTypeAttackBonusMultiplier: number;
  fastAttackBonusMultiplier: number;
  chargeAttackBonusMultiplier: number;
  defenseBonusMultiplier: number;
  minigameBonusBaseMultiplier: number;
  minigameBonusVariableMultiplier: number;
  maxEnergy: number;
  defenderMinigameMultiplier: number;
  changePokemonDurationSeconds: number;
  minigameSubmitScoreDurationSeconds: number;
  quickSwapCooldownDurationSeconds: number;
  chargeScoreBase: number;
  chargeScoreNice: number;
  chargeScoreGreat: number;
  chargeScoreExcellent: number;
  superEffectiveFlyoutDurationTurns: number;
  notVeryEffectiveFlyoutDurationTurns: number;
  blockedFlyoutDurationTurns: number;
  normalEffectiveFlyoutDurationTurns: number;
  shadowPokemonAttackBonusMultiplier: number;
  shadowPokemonDefenseBonusMultiplier: number;
  purifiedPokemonAttackMultiplierVsShadow: number;
}
export interface CombatRankingProtoSettings {
  rankLevel: RankLevel[];
  requiredForRewards: RequiredForRewards;
  minRankToDisplayRating: number;
}
export interface RequiredForRewards {
  rankLevel: number;
  additionalTotalBattlesRequired: number;
}
export interface RankLevel {
  rankLevel: number;
  additionalTotalBattlesRequired?: number;
  additionalWinsRequired?: number;
  minRatingRequired?: number;
}
export interface CombatType {
  type: string;
  niceLevelThreshold: number;
  greatLevelThreshold: number;
  excellentLevelThreshold: number;
}
export interface CombatLeagueSettings {
  combatLeagueTemplateId: string[];
}
export interface CombatLeague {
  title: string;
  enabled?: boolean;
  pokemonCondition: PokemonCondition[];
  iconUrl: string;
  pokemonCount: number;
  bannedPokemon: string[];
  badgeType: string;
  field1?: boolean;
  unlockCondition?: UnlockCondition[];
  battlePartyCombatLeagueTemplateId?: string;
  leagueType?: string;
}
export interface UnlockCondition {
  type: string;
  minPokemonCount: number;
  withPokemonCpLimit?: WithPokemonCpLimit2;
}
export interface WithPokemonCpLimit2 {
  minCp: number;
  maxCp: number;
}
export interface PokemonCondition {
  type: string;
  withPokemonCpLimit?: WithPokemonCpLimit;
}
export interface WithPokemonCpLimit {
  maxCp: number;
}
export interface CombatCompetitiveSeasonSettings {
  seasonEndTimeTimestamp: string[];
  ratingAdjustmentPercentage: number;
  rankingAdjustmentPercentage: number;
}
export interface InvasionNpcDisplaySettings {
  trainerName: string;
  avatar: Avatar;
  trainerTitle: string;
  trainerQuote: string;
  iconUrl: string;
  backdropImageBundle?: string;
  modelName: string;
  tutorialOnLossString?: string;
  isMale?: boolean;
}
export interface Avatar {
  skin: number;
}
export interface BuddyWalkSettings {
  kmRequiredPerAffectionPoint: number;
}
export interface BuddySwapSettings {
  maxSwapsPerDay: number;
}
export interface BuddyLevelSettings {
  level: string;
  minNonCumulativePointsRequired?: number;
  unlockedTraits?: string[];
}
export interface BuddyInteractionSettings {
  feedItemWhitelist: string[];
}
export interface BuddyHungerSettings {
  numHungerPointsRequiredForFull: number;
  decayPointsPerBucket: number;
  millisecondsPerBucket: string;
  cooldownDurationMs: string;
  decayDurationAfterFullMs: string;
}
export interface BuddyEncounterCameoSettings {
  buddyWildEncounterCameoChancePercent: number;
  buddyQuestEncounterCameoChancePercent: number;
  buddyRaidEncounterCameoChancePercent: number;
  buddyInvasionEncounterCameoChancePercent: number;
}
export interface BuddyEmotionLevelSettings {
  emotionLevel: string;
  emotionAnimation: string;
  minEmotionPointsRequired?: number;
}
export interface BuddyActivityCategorySettings {
  activityCategory: string;
  maxPointsPerDay: number;
}
export interface BuddyActivitySettings {
  activity: string;
  activityCategory: string;
  maxTimesPerDay: number;
  numPointsPerAction: number;
  numEmotionPointsPerAction: number;
  emotionCooldownDurationMs?: string;
}
export interface BelugaPokemonWhitelist {
  maxAllowedPokemonPokedexNumber: number;
  additionalPokemonAllowed: string[];
  costumesAllowed: string[];
}
export interface BattleSettings {
  retargetSeconds: number;
  enemyAttackInterval: number;
  attackServerInterval: number;
  roundDurationSeconds: number;
  bonusTimePerAllySeconds: number;
  maximumAttackersPerBattle: number;
  sameTypeAttackBonusMultiplier: number;
  maximumEnergy: number;
  energyDeltaPerHealthLost: number;
  dodgeDurationMs: number;
  minimumPlayerLevel: number;
  swapDurationMs: number;
  dodgeDamageReductionPercent: number;
  minimumRaidPlayerLevel: number;
  shadowPokemonAttackBonusMultiplier: number;
  shadowPokemonDefenseBonusMultiplier: number;
  purifiedPokemonAttackMultiplierVsShadow: number;
}
export interface BattleHubOrderSettings {
  section: Section[];
  sectionGroup: SectionGroup[];
}
export interface SectionGroup {
  section: string[];
}
export interface Section {
  mainSection: string;
  subsection: string[];
}
export interface BattleHubBadgeSettings {
  combatHubDisplayedBadges: string[];
}
export interface Badge {
  badgeType: string;
  badgeRanks: number;
  targets: number[];
  eventBadge?: boolean;
}
export interface BackgroundModeSettings {
  weeklyFitnessGoalLevel1DistanceKm: number;
  weeklyFitnessGoalLevel2DistanceKm: number;
  weeklyFitnessGoalLevel3DistanceKm: number;
  weeklyFitnessGoalLevel4DistanceKm: number;
}
export interface AvatarCustomization {
  enabled?: boolean;
  avatarType?: string;
  slot: string[];
  bundleName?: string;
  assetName: string;
  groupName: string;
  sortOrder: number;
  unlockType: string;
  iapSku?: string;
  iconName?: string;
  unlockBadgeType?: string;
  unlockBadgeLevel?: number;
  unlockPlayerLevel?: number;
}
export interface AvatarGroupOrderSettings {
  group: Group[];
}
export interface Group {
  name: string;
  order: number;
}
export interface ArTelemetrySettings {
  measureBattery: boolean;
  batterySamplingIntervalMs: number;
  measureFramerate: boolean;
  framerateSamplingIntervalMs: number;
  precision: number;
}
