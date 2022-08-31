import type { EvolutionType } from "../../type";

import DodgeTricks from "./DodgeTricks.json";
import GuardianAntCooperativeCombat from "./GuardianAntCooperativeCombat.json";
import ShooterAntCooperativeCombat from "./ShooterAntCooperativeCombat.json";
import CarrierAntCooperativeCombat from "./CarrierAntCooperativeCombat.json";
import ColonyPioneer from "./ColonyPioneer.json";
import FakeOdor from "./FakeOdor.json";
import GuardianAntSwiftCombat from "./GuardianAntSwiftCombat.json";
import ShooterAntSwiftCombat from "./ShooterAntSwiftCombat.json";
import CarrierAntSwiftCombat from "./CarrierAntSwiftCombat.json";
export default {
  type: "AdvancedCombat",
  data: [
    [DodgeTricks],
    [
      GuardianAntCooperativeCombat,
      ShooterAntCooperativeCombat,
      CarrierAntCooperativeCombat,
    ],
    [ColonyPioneer],
    [FakeOdor],
    [GuardianAntSwiftCombat, ShooterAntSwiftCombat, CarrierAntSwiftCombat],
  ],
} as EvolutionType