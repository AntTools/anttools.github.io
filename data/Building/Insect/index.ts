import type { BuildingType } from "../../type";

import InsectHabitat from "./InsectHabitat.json";
import InsectNest from "./InsectNest.json";
import TermiteFarm from "./TermiteFarm.json";

export default {
  type: "Insect",
  data: [InsectHabitat, InsectNest, TermiteFarm],
} as BuildingType