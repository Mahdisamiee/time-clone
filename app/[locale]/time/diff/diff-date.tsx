"use client";

import { useState } from "react";

import SelectType from "./select-type";
import DatePicker from "./date-picker";
import { useResultModal } from "./result-modal";
import { DiffDateCalculator } from "./models/diff-date-values";
import { ageCalculatorService } from "./services/diff-date-calculator";

interface BirthDate {
  day: number;
  month: number;
  year: number;
}



const isSelectedDateValid = (birthDate: BirthDate | null): boolean => {
  if (birthDate === null) {
    return false;
  }
  return (
    birthDate.day !== null &&
    birthDate.month !== null &&
    birthDate.year !== null
  );
};


const DiffOfDates = () => {
  const { setShowResultModal, ResultModal } = useResultModal();
  const [selectedType, setSelectedType] = useState<{
    value: string;
    label: string;
  }>({ value: "jalali", label: "محاسبه به سال شمسی" });

  const [selectedDate, setSelectedDate] = useState<any>({
    year: null,
    month: null,
    day: null,
  });
  const [selectedDate2, setSelectedDate2] = useState<any>({
    year: null,
    month: null,
    day: null,
  });

  const [results, setResults] = useState<string[]>([]);

  const handleSelectType = (option: { value: string; label: string }) => {
    console.log("option---->", option);
    setSelectedType(option);
  };

  const handleDateChange = (value: {
    year: number;
    month: number;
    day: number;
  }) => {
    setSelectedDate(value);
  };
  const handleDate2Change = (value: {
    year: number | null;
    month: number | null;
    day: number | null;
  }) => {
    setSelectedDate2(value);
  };

  const handleSubmit = async (e: any) => {
    try {
      if (
        !isSelectedDateValid(selectedDate) ||
        !isSelectedDateValid(selectedDate2) ||
        selectedType === null
      )
        throw new Error("تاریخ های انتخابی را به طور کامل وارد کنید");

      let payload: DiffDateCalculator = {
        date_type: "jalali",
        start_year: selectedDate.year,
        start_month: selectedDate.month,
        start_day: selectedDate.day,
        end_year: selectedDate2.year,
        end_month: selectedDate2.month,
        end_day: selectedDate2.day,
      };
      let dateDiff = await ageCalculatorService(payload);
      setResults([
        `تفاوت دو تاریخ انتخابی برابر است با : ${dateDiff.year} سال و ${dateDiff.month} ماه و ${dateDiff.day} روز.`,
      ]);

      setShowResultModal(true);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-around gap-6 py-10">
      <SelectType selectedType={selectedType} onSelectType={handleSelectType} />
      <hr className="my-2 inline-block h-0.5 w-3/4 rounded bg-sky-200 sm:hidden" />
      <DatePicker
        type={selectedType?.value}
        date={selectedDate}
        onChangeDate={handleDateChange}
      />
      <hr className="my-2 inline-block h-0.5 w-3/4 rounded bg-sky-200 sm:hidden" />
      <DatePicker
        type={selectedType?.value}
        date={selectedDate2}
        onChangeDate={handleDate2Change}
      />
      <button
        onClick={handleSubmit}
        type="submit"
        className="text-md font-md mb-2 block w-full rounded bg-sky-500 px-6 pb-2 pt-2.5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-sky-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] sm:w-3/4"
      >
        محاسبه
      </button>
      {ResultModal({ results })}
    </div>
  );
};

export default DiffOfDates;
