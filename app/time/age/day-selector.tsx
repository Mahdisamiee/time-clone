"use client";
import { useEffect, useRef } from "react";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

type DayTypeSelectType = {
  selectedDay: any;
  selectedDay2?: any;
  selectedType: string | null;
  onDayChange: (e: any) => void;
  onDay2Change?: (e: any) => void;
};

const DaySelector = ({
  selectedDay,
  selectedDay2,
  selectedType,
  onDayChange,
  onDay2Change,
}: DayTypeSelectType) => {

  return (
    <>
      
      <div className="z-10 text-2xl">
        {selectedType === "محاسبه اختلاف سن دو نفر" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DatePicker
              value={selectedDay}
              onChange={onDayChange}
              inputPlaceholder="تاریخ تولد اول را انتخاب کنید"
              shouldHighlightWeekends
              colorPrimary="#9c88ff"
              locale="fa" // for Persian calendar
            />
            <DatePicker
              value={selectedDay2}
              onChange={onDay2Change}
              inputPlaceholder="تاریخ تولد دوم را انتخاب کنید"
              shouldHighlightWeekends
              colorPrimary="#9c88ff"
              locale="fa" // for Persian calendar
            />
          </div>
        ) : (
          <DatePicker
            value={selectedDay}
            onChange={onDayChange}
            inputPlaceholder="روز تولدتان را انتخاب کنید"
            shouldHighlightWeekends
            colorPrimary="#9c88ff"
            locale="fa" // for Persian calendar
          />
        )}
      </div>
    </>
  );
};

export default DaySelector;

