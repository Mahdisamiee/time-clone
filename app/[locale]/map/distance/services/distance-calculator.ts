import { CalculatedDistance } from "../models/calculated-distance";
import { DistanceCalculatorOptions } from "../models/distance-calculator-options";

export async function distanceCalculator(
  payLoad: DistanceCalculatorOptions,
): Promise<CalculatedDistance> {
  try {
    const response = await fetch(`https://harchi.app/api/map-api/dist-mat/`, {
      cache: "no-cache",
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payLoad),
    });
    const result = await response.json();
    return result;
  } catch (error: any) {
    throw new Error(`HTTP error! Status: ${error.message}`);
  }
}
