import type { EvolutionType } from "../../type";

import RapidButchering from "./RapidButchering.json";
import RapidDripping from "./RapidDripping.json";
import RapidPlucking from "./RapidPlucking.json";
import RapidCutting from "./RapidCutting.json";
import RapidDigging from "./RapidDigging.json";
import RapidPiling from "./RapidPiling.json";
import RapidUpgraded from "./RapidUpgraded.json";
import EfficientRapidButchering from "./EfficientRapidButchering.json";
import EfficientRapidDripping from "./EfficientRapidDripping.json";
import EfficientRapidPlucking from "./EfficientRapidPlucking.json";
import EfficientRapidCutting from "./EfficientRapidCutting.json";
import EfficientRapidDigging from "./EfficientRapidDigging.json";
import EfficientRapidPiling from "./EfficientRapidPiling.json";
import EfficientProduction from "./EfficientProduction.json";
import StableProduction from "./StableProduction.json";
export default {
  type: "RapidProduct",
  data: [
    [RapidButchering, RapidDripping],
    [RapidPlucking, RapidCutting],
    [RapidDigging, RapidPiling],
    [RapidUpgraded],
    [EfficientRapidButchering, EfficientRapidDripping],
    [EfficientRapidPlucking, EfficientRapidCutting],
    [EfficientRapidDigging, EfficientRapidPiling],
    [EfficientProduction],
    [StableProduction],
  ],
} as EvolutionType