"use client";

import { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";

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
  { value: 968, label: "کیش" },
];
type PrayerTimesResponse = {
  // Fajr: string;
  // Dhuhr: string;
  // Asr: string;
  // Maghrib: string;
  // Isha: string;
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

const PrayerTimesComponent: React.FC = () => {
  // for select the code of city
  const [selectedOption, setSelectedOption] = useState<
    { value: number; label: string } | any
  >({ value: 1, label: "تهران" });
  // to save the Sharia times
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesResponse | null>(
    null,
  );

  useEffect(() => {
    async function fetchPrayerTimes(
      city: string,
    ): Promise<PrayerTimesResponse> {
      const response = await axios.get(
        `https://prayer.aviny.com/api/prayertimes/${selectedOption.value}`,
      );
      const data = response.data;
      return data;
    }
    async function loadPrayerTimes() {
      const times = await fetchPrayerTimes("Tehran"); // Replace 'Tehran' with any city in Iran
      setPrayerTimes(times);
    }

    loadPrayerTimes();
  }, [selectedOption]);

  return (
    <div className="flex h-full flex-col items-center justify-between text-right sm:w-full md:w-1/2">
      <Select
        className="w-full text-lg"
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        maxMenuHeight={200}
      />
      <div className="w-full p-2">
        {prayerTimes ? (
          <ul className="grid h-full w-full grid-cols-2 gap-8 text-lg">
            <li>
              <p>اذان صبح : {prayerTimes.Imsaak}</p>
            </li>
            <li>
              <p>طلوع : {prayerTimes.Sunrise}</p>
            </li>
            <li>
              <p>اذان ظهر : {prayerTimes.Noon}</p>
            </li>
            <li>
              <p>غروب : {prayerTimes.Sunset}</p>
            </li>
            <li>
              <p>اذان مغرب : {prayerTimes.Maghreb}</p>
            </li>
            <li>
              <p>نیمه شب : {prayerTimes.Midnight}</p>
            </li>

            {/* {Object.entries(prayerTimes).map((entry) => (
              <li key={entry[0]}>
                <p>
                  {entry[0]} : {entry[1]}
                </p>
              </li>
            ))} */}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default PrayerTimesComponent;
