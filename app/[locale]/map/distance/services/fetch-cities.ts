import { FetchCitiesOption } from "../models/fetch-cities-option";
import { SelectableCitiesOption } from "../models/selectable-cities-option";

export const fetchCities = async (): Promise<SelectableCitiesOption[]> => {
  const convertData = (data: FetchCitiesOption[]): SelectableCitiesOption[] => {
    return data.map((city) => ({
      label: city.name,
      value: [city.longitude, city.latitude],
    }));
  };

  try {
    const response = await fetch("https://whatever.plus/api/map-api/get-cities/");
    const result = await response.json();
    return convertData(result);
  } catch (error: any) {
    throw new Error(`HTTP error! Status: ${error.message}`);
  }
};
