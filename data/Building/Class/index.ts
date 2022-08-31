import type { BuildingType } from "../../type";

import ProRallyCenter from "./ProRallyCenter.json";
import ResourceTunnel from "./ResourceTunnel.json";
import ResourceFactory from "./ResourceFactory.json";
import TrophyStoreroom from "./TrophyStoreroom.json";

export default {
  type: "Class",
  data: [ProRallyCenter, ResourceTunnel, ResourceFactory, TrophyStoreroom],
} as BuildingType