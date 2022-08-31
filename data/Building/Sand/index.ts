import type { BuildingType } from "../../type";

import SandPile from "./SandPile.json";
import SandDepot from "./SandDepot.json";
import SandDepotII from "./SandDepotII.json";
import SandDepotIII from "./SandDepotIII.json";

export default {
  type: "Sand",
  data: [SandPile, SandDepot, SandDepotII, SandDepotIII],
} as BuildingType