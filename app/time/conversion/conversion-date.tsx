"use client";

import { useEffect, useState } from "react";
import SelectType from "./select-type";
import DatePicker from "./date-picker";
import {
  convertGregorianToHijri,
  convertGregorianToJalali,
  convertHijriToGregorian,
  convertJalaliToGregorian,
} from "@/lib/utils";

const ConversionDate = () => {
  const [selectedType, setSelectedType] = useState<{
    value: number;
    label: string;
  } | null>(null);

  const [selectedDate, setSelectedDate] = useState<{
    year: number | null;
    month: number | null;
    day: number | null;
  }>({ year: null, month: null, day: null });

  const [result, setResult] = useState<any>(null);

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
    // check to type and date not be empty
    if (!selectedType || !selectedDate) return;
    // base on type choose the function that handle date conversions
    switch (selectedType.value) {
      case 1:
        // شمسی به میلادی و قمری
        let gregoriDate = convertJalaliToGregorian(selectedDate);
        let hijriDate = convertGregorianToHijri(gregoriDate);
        console.log("result : ", gregoriDate, hijriDate);
        
        break;
      case 2:
        // میلادی به شمسی و قمری
        
        break;

      case 3:
        // قمری به شمسی و میلادی
        
        break;
      default:
        break;
    }
    // setResults and open Modal to show Results.
    console.log("Selected Date", selectedDate);
    console.log("Selected Type", selectedType);
    // console.log(convertGregorianToHijri(selectedDate));
    // console.log(convertIslamicToGregorian(selectedDate))
  };

  return (
    <div className="flex flex-col items-center justify-around gap-5 bg-gray-200">
      <SelectType selectedType={selectedType} onSelectType={handleSelectType} />
      <DatePicker
        type={selectedType?.value}
        date={selectedDate}
        onChangeDate={handleDateChange}
      />
      <button onClick={handleSubmit} type="submit">
        Click
      </button>
    </div>
  );
};

export default ConversionDate;
