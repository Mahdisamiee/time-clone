"use client";
import Selector from "@/components/time/selector";
import { useEffect, useState } from "react";

type DatePickerType = {
  type?: number;
  date: {
    year: number | null;
    month: number | null;
    day: number | null;
  };
  onChangeDate: (obj: any) => void;
};
type OptionType = {
  value: number;
  label: string;
};

const DAY_OPTIONS: OptionType[] = [];
for (let i = 1; i <= 31; i++) {
  DAY_OPTIONS.push({ value: i, label: i.toString() });
}

const MONTH_JALAALI_OPTIONS: OptionType[] = [
  { value: 1, label: "فروردین" },
  { value: 2, label: "اردیبهشت" },
  { value: 3, label: "خرداد" },
  { value: 4, label: "تیر" },
  { value: 5, label: "مرداد" },
  { value: 6, label: "شهریور" },
  { value: 7, label: "مهر" },
  { value: 8, label: "آبان" },
  { value: 9, label: "آذر" },
  { value: 10, label: "دی" },
  { value: 11, label: "بهمن" },
  { value: 12, label: "اسفند" },
];
const MONTH_GEOR_OPTIONS: OptionType[] = [
  { value: 1, label: "January" },
  { value: 2, label: "February" },
  { value: 3, label: "March" },
  { value: 4, label: "April" },
  { value: 5, label: "May" },
  { value: 6, label: "June" },
  { value: 7, label: "July" },
  { value: 8, label: "August" },
  { value: 9, label: "September" },
  { value: 10, label: "October" },
  { value: 11, label: "November" },
  { value: 12, label: "December" },
];
const MONTH_ISLAMIC_OPTIONS: OptionType[] = [
  { value: 1, label: "محرم" },
  { value: 2, label: "صفر" },
  { value: 3, label: "ربیع‌الاول" },
  { value: 4, label: "ربیع‌الثانی" },
  { value: 5, label: "جمادی‌الاول" },
  { value: 6, label: "جمادی‌الثانی" },
  { value: 7, label: "رجب" },
  { value: 8, label: "شعبان" },
  { value: 9, label: "رمضان" },
  { value: 10, label: "شوال" },
  { value: 11, label: "ذی‌القعده" },
  { value: 12, label: "ذی‌الحجه" },
];
// const MONTH

const DatePicker = ({ type, date, onChangeDate }: DatePickerType) => {
  // const [selectedDate, setselectedDate] = useState<{
  //   year: number | null;
  //   month: number | null;
  //   day: number | null;
  // }>({ year: null, month: null, day: null });
  const [selectedDay, setSelectedDay] = useState<any>(null);
  const [selectedMonth, setSelectedMonth] = useState<any>(null);
  const [selectedYear, setSelectedYear] = useState<string>("");

  const handleSelectDay = (option: OptionType) => {
    setSelectedDay(option.value);
    onChangeDate({ ...date, day: option.value });
  };

  const handleSelectMonth = (option: OptionType) => {
    setSelectedMonth(option.value);
    onChangeDate({ ...date, month: option.value });
  };

  const handleSelectYear = (e: any) => {
    setSelectedYear(e.currentTarget.value);
    onChangeDate({ ...date, year: +e.currentTarget.value });
  };
  // here we add selectedday, selectedmonth, selectedyear
  return (
    <div className={`grid w-full grid-cols-1 gap-5 sm:w-3/4 sm:grid-cols-3`}>
      {/* day selector */}
      <Selector
        options={DAY_OPTIONS}
        selectedOption={selectedDay}
        onSelectOption={handleSelectDay}
        label="انتخاب روز"
      />
      <Selector
        options={
          type == 1
            ? MONTH_JALAALI_OPTIONS
            : type == 2
            ? MONTH_GEOR_OPTIONS
            : MONTH_ISLAMIC_OPTIONS
        }
        selectedOption={selectedMonth}
        onSelectOption={handleSelectMonth}
        label="انتخاب ماه"
      />
      <input
        type="number"
        className="rounded-md border-[#ccc] transition-all duration-100 hover:border-[#B3B3B3]"
        value={selectedYear}
        onChange={handleSelectYear}
        placeholder="وارد کردن سال"
      />
    </div>
  );
};

export default DatePicker;
// border-color: hsl(0, 0%, 80%);
//     border-radius: 4px;
//     border-style: solid;
//     border-width: 1px;
//     box-sizing: border-box;
