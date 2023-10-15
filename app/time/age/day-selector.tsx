"use client";
import { useEffect, useRef } from "react";
import PopoverMenu from "@/components/home/popover-menu";
import { MouseEvent, useState } from "react";
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
  const selectTypeRef = useRef<HTMLDivElement>(null);

  const handleSelectTypeFocus = () => {
    selectTypeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* <div
        className="mb-5 flex w-full max-w-3xl flex-col items-center justify-items-center p-10 px-5 xl:px-0"
        ref={selectTypeRef}
        onClick={handleSelectTypeFocus}
      >
        <PopoverMenu
          onClickItem={onChangeCalculateType}
          value={selectedType}
          items={popoverMenuItems}
        />
      </div> */}
      <div className="z-10 text-2xl">
        {selectedType === "محاسبه اختلاف سن دو نفر" ? (
          <div className="grid grid-cols-2 gap-4">
            <DatePicker
              value={selectedDay}
              onChange={onDayChange}
              inputPlaceholder="روز تولدتان را انتخاب کنید"
              shouldHighlightWeekends
              colorPrimary="#9c88ff"
              locale="fa" // for Persian calendar
            />
            <DatePicker
              value={selectedDay2}
              onChange={onDay2Change}
              inputPlaceholder="روز تولدتان را انتخاب کنید"
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
const popoverMenuItems = [
  "محاسبه سن و تاریخ تولد",
  "محاسبه اختلاف سن دو نفر",
  "محاسبه سن قمری",
];
