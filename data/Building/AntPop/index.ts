import type { BuildingType } from "../../type";

import FeedingGround from "./FeedingGround.json";
import WorkerAntNest from "./WorkerAntNest.json";

export default {
  type: "AntPop",
  data: [FeedingGround, WorkerAntNest],
} as BuildingType