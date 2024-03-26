"use client";

import Option from "@/components/time/select-city-option";
import { dayFormatter } from "@/lib/utils";
import { useEffect, useState } from "react";
import Select from "react-select";
// options should go to new js file to access from "Sharia" & "Time" component
import { WORLD_SHARIA_CITIES } from "@/lib/constants";
import { useLocale, useTranslations } from "next-intl";
type PrayerTimesResponse = {
  CityLName: string;
  CityName: string;
  CountryAlpha2: string;
  CountryCode: string;
  CountryLName: string;
  CountryName: string;
  DayLenght: null;
  Imsaak: string;
  Maghreb: string;
  Midnight: string;
  Noon: string;
  SimultaneityOfKaaba: string;
  SimultaneityOfKaabaDesc: string;
  Sunrise: string;
  SunriseDT: string;
  Sunset: string;
  TimeZone: string;
  Today: string;
  TodayGregorian: null;
  TodayQamari: string;
};

const ShariaTime = ({ city }: { city?: string }) => {

  const t = useTranslations("Time.Sharia");
  const locale = useLocale();

  // for select the code of city
  const [selectedOption, setSelectedOption] = useState<
    { value: number; label: string; subLabel?: string; lLabel?: string } | any
  >(
    city
      ? WORLD_SHARIA_CITIES.find(
          (option) =>
            option.label === city ||
            option.lLabel?.toLocaleLowerCase() === city,
        )
      : { value: 1, label: locale == "fa" ? "تهران" : "Tehran" },
  );
  // to save the Sharia times
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesResponse | null>(
    null,
  );

  const [shariaCities, setShariaCities] = useState<
    { value: number; label: string }[]
  >([]);

  

  useEffect(() => {
    const localeOptions: { value: number; label: string }[] =
      WORLD_SHARIA_CITIES.map((city) => {
        if (locale == "fa") {
          return { value: +city.value, label: city.label };
        } else {
          return { value: +city.value, label: city.lLabel };
        }
      });
    setShariaCities(localeOptions);
    console.log(locale);
  }, [locale]);

  useEffect(() => {
    async function fetchPrayerTimes(
      cityId: string,
    ): Promise<PrayerTimesResponse> {
      const response = await fetch(
        `https://prayer.aviny.com/api/prayertimes/${cityId}`,
      );
      const res = await response.json();
      const data = res;
      return data;
    }
    async function loadPrayerTimes() {
      const times = await fetchPrayerTimes(selectedOption.value); // Replace 'Tehran' with any city in Iran
      setPrayerTimes(times);
    }
    loadPrayerTimes();
  }, [selectedOption]);

  return (
    <div className="flex h-full w-5/6 flex-col items-center justify-between text-center sm:w-full">
      <div className="my-4 my-6 w-full p-1 md:p-4">
        {prayerTimes ? (
          <ul className="grid h-full w-full grid-cols-1 gap-4 text-xl text-sky-600 sm:gap-8 sm:text-2xl">
            <li>
              <h4>
                <p className="inline text-gray-700">{t("today")} : </p>{" "}
                {dayFormatter(prayerTimes.Today)}
              </h4>
            </li>
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Select
        className="w-full text-center text-lg sm:w-3/4 sm:text-right"
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={shariaCities}
        maxMenuHeight={200}
        components={{ Option }}
      />
      <div className="my-4 w-full p-2 md:p-4">
        {prayerTimes ? (
          <ul className="grid h-full w-full grid-cols-2 gap-8 px-3 text-center text-base sm:text-xl ">
            <li>
              <h4>
                <p className="inline text-sky-600">{t("imaask")}</p> :{" "}
                {prayerTimes.Imsaak}
              </h4>
            </li>
            <li>
              <h4>
                <p className="inline text-sky-600">{t("sunrise")}</p> :{" "}
                {prayerTimes.Sunrise}
              </h4>
            </li>
            <li>
              <h4>
                <p className="inline text-sky-600">{t("noon")}</p> :{" "}
                {prayerTimes.Noon}
              </h4>
            </li>
            <li>
              <h4>
                <p className="inline text-sky-600">{t("sunset")}</p> :{" "}
                {prayerTimes.Sunset}
              </h4>
            </li>
            <li>
              <h4>
                <p className="inline text-sky-600">{t("maghreb")}</p> :{" "}
                {prayerTimes.Maghreb}
              </h4>
            </li>
            <li>
              <h4>
                <p className="inline text-sky-600">{t("midnight")}</p> :{" "}
                {prayerTimes.Midnight}
              </h4>
            </li>
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ShariaTime;
