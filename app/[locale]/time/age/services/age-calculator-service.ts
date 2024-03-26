import { AgeCalculationValues } from "../models/age-calculation-values";
import { CalculatedAgeValues } from "../models/calculated-age-values";

export async function ageCalculatorService(
  payLoad: AgeCalculationValues,
): Promise<CalculatedAgeValues> {
  try {
    const response = await fetch(
      `https://whatever.plus/api/kitcalendar/age-calculator/`,
      {
        cache: "no-cache",
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payLoad),
      },
    );
    const result = await response.json();
    return result;
  } catch (error: any) {
    throw new Error(`HTTP error! Status: ${error.message}`);
  }
}
