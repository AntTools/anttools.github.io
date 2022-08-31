import type { BuildingType } from "../../type";

import PlantFlora from "./PlantFlora.json";
import PlantDepot from "./PlantDepot.json";
import PlantDepotII from "./PlantDepotII.json";
import PlantDepotIII from "./PlantDepotIII.json";

export default {
  type: "Plant",
  data: [PlantFlora, PlantDepot, PlantDepotII, PlantDepotIII],
} as BuildingType