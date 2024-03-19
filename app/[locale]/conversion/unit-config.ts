import { UnitDefaults } from "@/lib/models/conversion";

export const defaultUnitsForMode: UnitDefaults = {
  length: { fromUnit: "meter", toUnit: "mile" },
  area: { fromUnit: "squaremeter", toUnit: "squarekilometer" },
  mass: { fromUnit: "kilogram", toUnit: "gram" },
  time: { fromUnit: "second", toUnit: "milisecond" },
  "data-transfer": { fromUnit: "bitpersecond", toUnit: "kilobitpersecond" },
  "digital-storage": { fromUnit: "byte", toUnit: "kilobyte" },
  energy: { fromUnit: "joule", toUnit: "kilojoule" },
  volume: { fromUnit: "liter", toUnit: "mililiter" },
  speed: { fromUnit: "meterpersecond", toUnit: "kilometerperhour" },
  pressure: { fromUnit: "pascal", toUnit: "bar" },
};

export const createUnitOptions = (units: string[]) => {
  console.log(units);
  return units.map((unit) => ({
    value: unit,
    label: `${unit.toLocaleUpperCase()}`,
  }));
};
