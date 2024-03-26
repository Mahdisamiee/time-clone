import { DiffDateResult } from "../models/diff-date-result";
import { DiffDateCalculator } from "../models/diff-date-values";


export async function ageCalculatorService(
    payLoad: DiffDateCalculator,
  ): Promise<DiffDateResult> {
    try {
      const response = await fetch(
        `https://whatever.plus/api/kitcalendar/date-diff/`,
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