import type { EvolutionType } from "../../type";

import GuardianAntFastHatch from "./GuardianAntFastHatch.json";
import ShooterAntFastHatch from "./ShooterAntFastHatch.json";
import CarrierAntFastHatch from "./CarrierAntFastHatch.json";
import MediumExpansion from "./MediumExpansion.json";
import GuardianAntFastHatchII from "./GuardianAntFastHatchII.json";
import ShooterAntFastHatchII from "./ShooterAntFastHatchII.json";
import CarrierAntFastHatchII from "./CarrierAntFastHatchII.json";
import Energetic from "./Energetic.json";
import LeafMedium from "./LeafMedium.json";
import WoodMedium from "./WoodMedium.json";
import SandMedium from "./SandMedium.json";
import FatalAttack from "./FatalAttack.json";
export default {
  type: "BasicMilitary",
  data: [
    [GuardianAntFastHatch, ShooterAntFastHatch, CarrierAntFastHatch],
    [MediumExpansion],
    [GuardianAntFastHatchII, ShooterAntFastHatchII, CarrierAntFastHatchII],
    [Energetic],
    [LeafMedium, WoodMedium, SandMedium],
    [FatalAttack],
  ],
} as EvolutionType