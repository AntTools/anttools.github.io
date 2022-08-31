import type { EvolutionType } from "../../type";

import BigBite from "./BigBite.json";
import AcidSpray from "./AcidSpray.json";
import HeavyCrush from "./HeavyCrush.json";
import TierSuperiorityI from "./TierSuperiorityI.json";
import BattleDetermination from "./BattleDetermination.json";
import GuardianAntCooperativeDefense from "./GuardianAntCooperativeDefense.json";
import ShooterAntCooperativeDefense from "./ShooterAntCooperativeDefense.json";
import CarrierAntCooperativeDefense from "./CarrierAntCooperativeDefense.json";
import TierSuperiorityII from "./TierSuperiorityII.json";
import DuelMasterI from "./DuelMasterI.json";
import GuardianAntCooperativeAttack from "./GuardianAntCooperativeAttack.json";
import ShooterAntCooperativeAttack from "./ShooterAntCooperativeAttack.json";
import CarrierAntCooperativeAttack from "./CarrierAntCooperativeAttack.json";
import TierSuperiorityIII from "./TierSuperiorityIII.json";
import DuelMasterII from "./DuelMasterII.json";
export default {
  type: "SecondaryCombat",
  data: [
    [BigBite, AcidSpray, HeavyCrush],
    [TierSuperiorityI],
    [BattleDetermination],
    [
      GuardianAntCooperativeDefense,
      ShooterAntCooperativeDefense,
      CarrierAntCooperativeDefense,
    ],
    [TierSuperiorityII],
    [DuelMasterI],
    [
      GuardianAntCooperativeAttack,
      ShooterAntCooperativeAttack,
      CarrierAntCooperativeAttack,
    ],
    [TierSuperiorityIII],
    [DuelMasterII],
  ],
} as EvolutionType