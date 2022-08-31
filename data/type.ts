

export interface BuildingType {
    type: string;
    data: BuildingData[];
}

export interface Requirement {
    domain: "Building" | "Evolution";
    type: string;
    name: string;
    level: number;
}

export interface Extra {
    name: string;
    amount: number;
}

export interface LevelData {
    rss: [number, number, number, number, number, number];
    time: number;
    power: number;
    req?: Requirement[];
    extra?: Extra[];
}

export interface BuildingData {
    name: string;
    levels: LevelData[];
}

export interface EvolutionData {
    name: string;
    levels: (LevelData | null)[];
}

export interface EvolutionType {
    type: string;
    data: EvolutionData[][];
}
