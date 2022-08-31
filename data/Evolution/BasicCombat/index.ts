import type { EvolutionType } from "../../type";

import CourageAward from "./CourageAward.json";
import GuardianAntMutationI from "./GuardianAntMutationI.json";
import ShooterAntMutationI from "./ShooterAntMutationI.json";
import CarrierAntMutationI from "./CarrierAntMutationI.json";
import ExtraSpoils from "./ExtraSpoils.json";
import PrimaryAttack from "./PrimaryAttack.json";
import PrimaryDefense from "./PrimaryDefense.json";
import GuardianAntMutationII from "./GuardianAntMutationII.json";
import ShooterAntMutationII from "./ShooterAntMutationII.json";
import CarrierAntMutationII from "./CarrierAntMutationII.json";
import ExpUp from "./ExpUp.json";
import SecondaryAttack from "./SecondaryAttack.json";
import SecondaryDefense from "./SecondaryDefense.json";
import DodgeTechnique from "./DodgeTechnique.json";
import TertiaryAttack from "./TertiaryAttack.json";
import TertiaryDefense from "./TertiaryDefense.json";
export default {
  type: "BasicCombat",
  data: [
    [CourageAward],
    [GuardianAntMutationI, ShooterAntMutationI, CarrierAntMutationI],
    [ExtraSpoils],
    [PrimaryAttack, PrimaryDefense],
    [GuardianAntMutationII, ShooterAntMutationII, CarrierAntMutationII],
    [ExpUp],
    [SecondaryAttack, SecondaryDefense],
    [DodgeTechnique],
    [TertiaryAttack, TertiaryDefense],
  ],
} as EvolutionType