"use client";

import { useState } from "react";

import moment from "moment-jalaali";

import SelectType from "./select-type";
import DatePicker from "./date-picker";
import { useResultModal } from "./result-modal";

interface BirthDate {
  day: number;
  month: number;
  year: number;
}

const createMomentFromJalali = (jalaliDate: BirthDate) => {
  return moment(
    `${jalaliDate.year}-${jalaliDate.month}-${jalaliDate.day}`,
    "jYYYY-jMM-jDD",
  ).startOf("day");
};

const createMomentFromHijri = (hijriDate: BirthDate) => {
  return moment(
    `${hijriDate.year}-${hijriDate.month}-${hijriDate.day}`,
    "iYYYY-iMM-iDD",
  ).startOf("day");
};

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
const calculateDateDiff = (
  birthDate1: BirthDate,
  birthDate2: BirthDate,
  selectedType: number,
) => {
  let date1, date2;

  if (selectedType === 1) {
    date1 = createMomentFromJalali(birthDate1);
    date2 = createMomentFromJalali(birthDate2);
  } else if (selectedType === 3) {
    date1 = createMomentFromHijri(birthDate1);
    date2 = createMomentFromHijri(birthDate2);
  } else {
    date1 = moment(birthDate1);
    date2 = moment(birthDate2);
  }

  if (date2.isBefore(date1)) {
    [date1, date2] = [date2, date1];
  }


  let years = date2.jYear() - date1.jYear();
  let months = date2.jMonth() - date1.jMonth();
  let days = date2.jDate() - date1.jDate();

  if (days < 0) {
    months -= 1;
    days += moment.jDaysInMonth(date1.jYear(), date1.jMonth());
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }


  return { years, months, days };
};

const DiffOfDates = () => {
  const { setShowResultModal, ResultModal } = useResultModal();
  const [selectedType, setSelectedType] = useState<{
    value: number;
    label: string;
  }>({ value: 1, label: "محاسبه به سال شمسی" });

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

  const handleSelectType = (option: { value: number; label: string }) => {
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

  const handleSubmit = (e: any) => {
    console.log(e);

    try {
      if (
        !isSelectedDateValid(selectedDate) ||
        !isSelectedDateValid(selectedDate2) ||
        selectedType === null
      )
        throw new Error("تاریخ های انتخابی را به طور کامل وارد کنید");

      let dateDiff = calculateDateDiff(
        selectedDate,
        selectedDate2,
        selectedType.value,
      );
      setResults([
        `تفاوت دو تاریخ انتخابی برابر است با : ${dateDiff.years} سال و ${dateDiff.months} ماه و ${dateDiff.days} روز.`,
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
