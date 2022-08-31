import type { BuildingType } from "../../type";

import GuardianAntNest from "./GuardianAntNest.json";
import ShooterAntNest from "./ShooterAntNest.json";
import CarrierAntNest from "./CarrierAntNest.json";
import CocoonMedium from "./CocoonMedium.json";
import RallyCenterI from "./RallyCenterI.json";
import RallyCenterII from "./RallyCenterII.json";
import RallyCenterIII from "./RallyCenterIII.json";
import HealingPool from "./HealingPool.json";
import Entrance from "./Entrance.json";
import ToxicFungi from "./ToxicFungi.json";
import SentinelTree from "./SentinelTree.json";
import MutationFlora from "./MutationFlora.json";
import SoldiersReformPool from "./SoldiersReformPool.json";

export default {
  type: "Combat",
  data: [
    GuardianAntNest,
    ShooterAntNest,
    CarrierAntNest,
    CocoonMedium,
    RallyCenterI,
    RallyCenterII,
    RallyCenterIII,
    HealingPool,
    Entrance,
    ToxicFungi,
    SentinelTree,
    MutationFlora,
    SoldiersReformPool,
  ],
} as BuildingType