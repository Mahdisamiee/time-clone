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
      
      <div className="z-10 text-xl">
        {selectedType === "محاسبه اختلاف سن دو نفر" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DatePicker
              value={selectedDay}
              onChange={onDayChange}
              inputPlaceholder="انتخاب تاریخ تولد اول"
              shouldHighlightWeekends
              colorPrimary="#9c88ff"
              locale="fa" // for Persian calendar
            />
            <DatePicker
              value={selectedDay2}
              onChange={onDay2Change}
              inputPlaceholder="انتخاب تاریخ تولد دوم"
              shouldHighlightWeekends
              colorPrimary="#9c88ff"
              locale="fa" // for Persian calendar
            />
          </div>
        ) : (
          <DatePicker
            value={selectedDay}
            onChange={onDayChange}
            inputPlaceholder="انتخاب روز تولد"
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

