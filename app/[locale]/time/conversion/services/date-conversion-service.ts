import { DateConversionValues } from "../models/date-conversion-values";

export async function dateConversionService(payLoad: DateConversionValues) : Promise<any> {
    try {
        const response = await fetch(
          `https://harchi.app/api/kitcalendar/date-conversion/`,
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