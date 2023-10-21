"use client";

import { useEffect, useState } from "react";
import SelectType from "./select-type";
import DatePicker from "./date-picker";
import {
  convertGregorianToHijri,
  convertGregorianToJalali,
  convertHijriToGregorian,
  convertJalaliToGregorian,
  persianToCalendars,
} from "@/lib/utils";
import { useResultModal } from "./result-modal";

const ConversionDate = () => {
  const { setShowResultModal, ResultModal } = useResultModal();
  const [selectedType, setSelectedType] = useState<{
    value: number;
    label: string;
  } | null>(null);

  const [selectedDate, setSelectedDate] = useState<{
    year: number | null;
    month: number | null;
    day: number | null;
  }>({ year: null, month: null, day: null });

  const [results, setResults] = useState<string[]>([]);

  const handleSelectType = (option: { value: number; label: string }) => {
    console.log("option---->", option);
    setSelectedType(option);
  };

  const handleDateChange = (value: {
    year: number | null;
    month: number | null;
    day: number | null;
  }) => {
    setSelectedDate(value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let jalaaliDate;
    let gregorianDate;
    // check to type and date not be empty
    if (!selectedType || !selectedDate) return;
    // base on type choose the function that handle date conversions
    switch (selectedType.value) {
      // شمسی به میلادی و قمری
      case 1:
        if (selectedDate.year && selectedDate.month && selectedDate.day) {
          let gregorianResult = persianToCalendars(
            selectedDate.year,
            selectedDate.month,
            selectedDate.day,
            {
              toCal: "iso8601",
              dateStyle: "full",
              locale: "en",
            },
          );
          let hijriResult = persianToCalendars(
            selectedDate.year,
            selectedDate.month,
            selectedDate.day,
            {
              toCal: "islamic-civil",
              dateStyle: "full",
              locale: "fa",
            },
          );

          setResults([gregorianResult, hijriResult]);
          setShowResultModal(true);
        }

        break;
      // میلادی به شمسی و قمری
      case 2:
        jalaaliDate = convertGregorianToJalali(selectedDate);
        if (selectedDate.year && selectedDate.month && selectedDate.day) {
          let jalaaliResult = persianToCalendars(
            jalaaliDate.year,
            jalaaliDate.month,
            jalaaliDate.day,
            {
              toCal: "persian",
              dateStyle: "full",
              locale: "fa",
            },
          );
          let hijriResult = persianToCalendars(
            jalaaliDate.year,
            jalaaliDate.month,
            jalaaliDate.day,
            {
              toCal: "islamic-civil",
              dateStyle: "full",
              locale: "fa",
            },
          );

          setResults([jalaaliResult, hijriResult]);
          setShowResultModal(true);
        }
        break;

      // قمری به شمسی و میلادی
      case 3:
        gregorianDate = convertHijriToGregorian(selectedDate);
        jalaaliDate = convertGregorianToJalali(gregorianDate);
        console.log(gregorianDate, jalaaliDate);
        if (jalaaliDate.year && jalaaliDate.month && jalaaliDate.day) {
          let jalaaliResult = persianToCalendars(
            jalaaliDate.year,
            jalaaliDate.month,
            jalaaliDate.day,
            {
              toCal: "persian",
              dateStyle: "full",
              locale: "fa",
            },
          );
          let gregorianResult = persianToCalendars(
            jalaaliDate.year,
            jalaaliDate.month,
            jalaaliDate.day,
            {
              toCal: "iso8601",
              dateStyle: "full",
              locale: "en",
            },
          );

          setResults([jalaaliResult, gregorianResult]);
          setShowResultModal(true);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-around gap-5 py-10">
      <SelectType selectedType={selectedType} onSelectType={handleSelectType} />
      <DatePicker
        type={selectedType?.value}
        date={selectedDate}
        onChangeDate={handleDateChange}
      />
      <button
        onClick={handleSubmit}
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 mb-2 block w-full sm:w-3/4 rounded px-6 pb-2 pt-2.5 text-md font-md uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        محاسبه
      </button>
      {ResultModal({ results })}
    </div>
  );
};

export default ConversionDate;
