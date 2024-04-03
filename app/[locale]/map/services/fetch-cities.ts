import { FetchCitiesOption } from "../models/fetch-cities-option";
import { SelectableCitiesOption } from "../models/selectable-cities-option";

export const fetchCities = async (
  locale: string,
): Promise<SelectableCitiesOption[]> => {
  try {
    const response = await fetch(
      "https://whatever.plus/api/map-api/get-cities/",
    );
    const result = await response.json();
    return convertData(result, locale);
  } catch (error: any) {
    throw new Error(`HTTP error! Status: ${error.message}`);
  }
};

const convertData = (
  data: FetchCitiesOption[],
  locale: string,
): SelectableCitiesOption[] => {
  return data.map((city) => ({
    label:
      locale == "fa"
        ? `${city.fnames[0]} ${
            city.fnames.length > 1 ? " - " + city.fnames[1] : ""
          }`
        : city.name,
    value: [city.longitude, city.latitude],
  }));
};
