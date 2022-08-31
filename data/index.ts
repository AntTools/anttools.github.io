import _buildingData from "./Building";
import _evolutionData from "./Evolution";

interface BuildingType {
  type: string;
  data: BuildingData[];
}

interface Requirement {
  domain?: string; // "Building" or "Evolution"
  type?: string;
  name: string;
  level: number;
}

interface Extra {
  name: string;
  amount: number;
}

export interface LevelData {
  rss: number[];
  time: number;
  power: number;
  req?: Requirement[];
  extra?: Extra[];
}

interface BuildingData {
  name: string;
  levels: LevelData[];
}

interface EvolutionData {
  name: string;
  levels: (LevelData | null)[];
}

interface EvolutionType {
  type: string;
  data: EvolutionData[][];
}

export const evolutionTypeData: EvolutionType[] = _evolutionData;
export const buildingTypeData: BuildingType[] = _buildingData;
