import ZoneGatherer from "./ZoneGatherer.json";
import ExtraResource from "./ExtraResource.json";
import IntermediateRewards from "./IntermediateRewards.json";
import PointBonusI from "./PointBonusI.json";
import PackLight from "./PackLight.json";
import RapidHatch from "./RapidHatch.json";
import ZoneTransporter from "./ZoneTransporter.json";
import MixedMedium from "./MixedMedium.json";
import AdvancedRewards from "./AdvancedRewards.json";
import GatheringPoints from "./GatheringPoints.json";
import HuntingPoints from "./HuntingPoints.json";
import BuildingPoints from "./BuildingPoints.json";
import SporePoints from "./SporePoints.json";
import EvolvingPoints from "./EvolvingPoints.json";
import ExpPoints from "./ExpPoints.json";
import DefeatingPoints from "./DefeatingPoints.json";
import HatchingPoints from "./HatchingPoints.json";
import PointsBonusII from "./PointsBonusII.json";
import DoubleRewards from "./DoubleRewards.json";
export default {
  type: "ZoneDevelop",
  data: [
    [ZoneGatherer, ExtraResource],
    [IntermediateRewards],
    [PointBonusI],
    [PackLight, RapidHatch],
    [ZoneTransporter, MixedMedium],
    [AdvancedRewards],
    [GatheringPoints, HuntingPoints],
    [BuildingPoints, SporePoints],
    [EvolvingPoints, ExpPoints],
    [DefeatingPoints, HatchingPoints],
    [PointsBonusII],
    [DoubleRewards],
  ],
};
