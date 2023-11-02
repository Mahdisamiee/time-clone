"use client";

import { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import { dayFormatter } from "@/lib/utils";
import Option from '@/components/time/select-city-option';
// options should go to new js file to access from "Sharia" & "Time" component

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


const options = [
  { value: 1, label: "تهران" },
  { value: 13, label: "مشهد" },
  { value: 6, label: "تبریز" },
  { value: 11, label: "قم" },
  { value: 2, label: "اصفهان" },
  { value: 8, label: "شیراز" },
  { value: 14, label: "یزد" },
  { value: 3, label: "ارومیه" },
  { value: 19, label: "کرمان" },
  { value: 5, label: "اهواز" },
  { value: 15, label: "بجنورد" },
  { value: 18, label: "گرگان" },
  { value: 17, label: "ساری" },
  { value: 16, label: "رشت" },
  { value: 26, label: "اردبیل" },
  { value: 27, label: "سمنان" },
  { value: 10, label: "قزوین" },
  { value: 25, label: "زنجان" },
  { value: 22, label: "سنندج" },
  { value: 21, label: "کرمانشاه" },
  { value: 24, label: "همدان" },
  { value: 827, label: "بیرجند" },
  { value: 29, label: "ایلام" },
  { value: 30, label: "خرم آباد" },
  { value: 31, label: "شهرکرد" },
  { value: 32, label: "یاسوج" },
  { value: 20, label: "بوشهر" },
  { value: 12, label: "زاهدان" },
  { value: 7, label: "بندرعباس" },
  { value: 4, label: "اراک" },
  { value: 9, label: "کرج" },
  { value: 342, label: "دزفول" },
  { value: 115, label: "کوالالامپور" },
  { value: 991, label: "ساوه" },
  { value: 578, label: "شاهرود" },
  { value: 479, label: "بروجرد" },
  { value: 450, label: "مرند" },
  { value: 822, label: "سبزوار" },
  { value: 976, label: "استانبول" },
  { value: 968, label: "کیش", subLabel: "ایران" },
];



const ShariaTime = ({ city }: { city?: string }) => {
  // for select the code of city
  const [selectedOption, setSelectedOption] = useState<
    { value: number; label: string; subLabel?: string } | any
  >(
    city
      ? options.find((option) => option.label === city)
      : { value: 1, label: "تهران" },
  );
  // to save the Sharia times
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesResponse | null>(
    null,
  );

  useEffect(() => {
    async function fetchPrayerTimes(
      city: string,
    ): Promise<PrayerTimesResponse> {
      const response = await axios.get(
        `https://prayer.aviny.com/api/prayertimes/${city}`,
      );
      const data = response.data;
      return data;
    }
    async function loadPrayerTimes() {
      const times = await fetchPrayerTimes(selectedOption.value); // Replace 'Tehran' with any city in Iran
      setPrayerTimes(times);
      console.log("here => ");
      console.log(selectedOption);
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
                <p className="inline text-gray-700">امروز : </p>{" "}
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
        options={options}
        maxMenuHeight={200}
        components={{ Option }}
      />
      <div className="my-4 w-full p-2 md:p-4">
        {prayerTimes ? (
          <ul className="grid h-full w-full grid-cols-2 gap-8 px-3 text-center text-base sm:text-xl ">
            <li>
              <h4>
                <p className="inline text-sky-600">اذان صبح</p> :{" "}
                {prayerTimes.Imsaak}
              </h4>
            </li>
            <li>
              <h4>
                <p className="inline text-sky-600">طلوع آفتاب</p> :{" "}
                {prayerTimes.Sunrise}
              </h4>
            </li>
            <li>
              <h4>
                <p className="inline text-sky-600">اذان ظهر</p> :{" "}
                {prayerTimes.Noon}
              </h4>
            </li>
            <li>
              <h4>
                <p className="inline text-sky-600">غروب آفتاب</p> :{" "}
                {prayerTimes.Sunset}
              </h4>
            </li>
            <li>
              <h4>
                <p className="inline text-sky-600">اذان مغرب</p> :{" "}
                {prayerTimes.Maghreb}
              </h4>
            </li>
            <li>
              <h4>
                <p className="inline text-sky-600">نیمه شب</p> :{" "}
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
