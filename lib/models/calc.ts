export type UnitMode =
  | "length"
  | "area"
  | "mass"
  | "time"
  | "data-transfer"
  | "digital-storage"
  | "energy"
  | "volume"
  | "speed"
  | "pressure";

  export interface UnitDefaults {
    [key: string]: { fromUnit: string; toUnit: string };
  }