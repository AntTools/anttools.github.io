import GuardianAntAutoHealing from "./GuardianAntAutoHealing.json";
import ShooterAntAutoHealing from "./ShooterAntAutoHealing.json";
import CarrierAntAutoHealing from "./CarrierAntAutoHealing.json";
import FocusedHealing from "./FocusedHealing.json";
import GuardianAntFastHealing from "./GuardianAntFastHealing.json";
import ShooterAntFastHealing from "./ShooterAntFastHealing.json";
import CarrierAntFastHealing from "./CarrierAntFastHealing.json";
import HealingPoolExpansion from "./HealingPoolExpansion.json";
import DodgeAttack from "./DodgeAttack.json";
import MakeshiftHealingPool from "./MakeshiftHealingPool.json";
import FightAlone from "./FightAlone.json";
export default {
  type: "SoldierHealing",
  data: [
    [GuardianAntAutoHealing, ShooterAntAutoHealing, CarrierAntAutoHealing],
    [FocusedHealing],
    [GuardianAntFastHealing, ShooterAntFastHealing, CarrierAntFastHealing],
    [HealingPoolExpansion],
    [DodgeAttack],
    [MakeshiftHealingPool, FightAlone],
  ],
};
