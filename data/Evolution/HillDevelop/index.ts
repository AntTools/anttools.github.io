import type { EvolutionType } from "../../type";

import Feeder from "./Feeder.json";
import EarthySpring from "./EarthySpring.json";
import Saprophyte from "./Saprophyte.json";
import SpecialFungus from "./SpecialFungus.json";
import SoftSoil from "./SoftSoil.json";
import Boulder from "./Boulder.json";
import GiantAphid from "./GiantAphid.json";
import MassButchering from "./MassButchering.json";
import AgileClimbing from "./AgileClimbing.json";
import SoilSoftening from "./SoilSoftening.json";
import WingedPiling from "./WingedPiling.json";
import PrecisionCutting from "./PrecisionCutting.json";
import DepotMaster from "./DepotMaster.json";
import Architect from "./Architect.json";
export default {
  type: "HillDevelop",
  data: [
    [Feeder, EarthySpring],
    [Saprophyte, SpecialFungus],
    [SoftSoil, Boulder],
    [GiantAphid],
    [MassButchering, AgileClimbing],
    [SoilSoftening, WingedPiling],
    [PrecisionCutting],
    [DepotMaster],
    [Architect],
  ],
} as EvolutionType