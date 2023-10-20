"use client";

import { useEffect, useState } from "react";
import SelectType from "./select-type";
import DatePicker from "./date-picker";

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

    // base on type choose the function that handle date conversions

    // setResults and open Modal to show Results.
    console.log("Selected Date", selectedDate);
    console.log("Selected Type", selectedType);
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
