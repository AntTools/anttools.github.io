import PrimaryLeadership from "./PrimaryLeadership.json";
import Gatherer from "./Gatherer.json";
import Transporter from "./Transporter.json";
import HardSkull from "./HardSkull.json";
import SpikyBack from "./SpikyBack.json";
import ElasticBelly from "./ElasticBelly.json";
import MarchSpeedup from "./MarchSpeedup.json";
import SecondaryLeadership from "./SecondaryLeadership.json";
import TroopRecall from "./TroopRecall.json";
import PackLight from "./PackLight.json";
import BestRest from "./BestRest.json";
import PlierMouthpart from "./PlierMouthpart.json";
import ToxicAcid from "./ToxicAcid.json";
import StoutLeg from "./StoutLeg.json";
import TertiaryLeadership from "./TertiaryLeadership.json";
export default {
  type: "MarchUnitII",
  data: [
    [PrimaryLeadership],
    [Gatherer, Transporter],
    [HardSkull, SpikyBack, ElasticBelly],
    [MarchSpeedup],
    [SecondaryLeadership],
    [TroopRecall],
    [PackLight, BestRest],
    [PlierMouthpart, ToxicAcid, StoutLeg],
    [TertiaryLeadership],
  ],
};
