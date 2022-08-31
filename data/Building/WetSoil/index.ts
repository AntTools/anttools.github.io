import type { BuildingType } from "../../type";

import WetSoilPile from "./WetSoilPile.json";
import WetSoilDepot from "./WetSoilDepot.json";
import WetSoilDepotII from "./WetSoilDepotII.json";
import WetSoilDepotIII from "./WetSoilDepotIII.json";

export default {
  type: "WetSoil",
  data: [WetSoilPile, WetSoilDepot, WetSoilDepotII, WetSoilDepotIII],
} as BuildingType