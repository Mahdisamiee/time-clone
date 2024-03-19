import { useEffect, useState } from "react";
import { FetchCitiesOption } from "../models/fetch-cities-option";
import { SelectableCitiesOption } from "../models/selectable-cities-option";

const useFetchCities = () => {
  const [data, setData] = useState(null);
  const [options, setOptions] = useState<SelectableCitiesOption[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://harchi.app/api/map-api/get-cities/",
        );
        const result = await response.json();
        setOptions(convertData(result));
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    const convertData = (
      data: FetchCitiesOption[],
    ): SelectableCitiesOption[] => {
      return data.map((city) => ({
        label: city.name,
        value: [city.longitude, city.latitude],
      }));
    };

    fetchData();
  }, []);

  return { options };
};

export default useFetchCities;
