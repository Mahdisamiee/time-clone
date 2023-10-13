"use client";
import { useEffect, useRef } from "react";
import PopoverMenu from "@/components/home/popover-menu";
import { MouseEvent, useState } from "react";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

type DayTypeSelectType = {
  selectedDay: any;
  selectedType: string | null;
  onChangeCalculateType: (e: any) => void;
  onDayChange: (e: any) => void;
};

const DayAndTypeSelect = ({
  selectedDay,
  selectedType,
  onChangeCalculateType,
  onDayChange,
}: DayTypeSelectType) => {
  const selectTypeRef = useRef<HTMLDivElement>(null);

  const handleSelectTypeClick = () => {
    selectTypeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className="mb-5 flex w-full max-w-3xl flex-col items-center justify-items-center p-10 px-5 xl:px-0"
        ref={selectTypeRef}
        onClick={handleSelectTypeClick}
      >
        <PopoverMenu
          onClickItem={onChangeCalculateType}
          value={selectedType}
          items={popoverMenuItems}
        />
      </div>
      <div className="z-10 text-2xl">
        <DatePicker
          value={selectedDay}
          onChange={onDayChange}
          inputPlaceholder="روز تولدتان را انتخاب کنید"
          shouldHighlightWeekends
          colorPrimary="#9c88ff"
          locale="fa" // for Persian calendar
        />
      </div>
    </>
  );
};

export default DayAndTypeSelect;
const popoverMenuItems = [
  "محاسبه سن و تاریخ تولد",
  "محاسبه اختلاف سن دو نفر",
  "محاسبه سن قمری",
];
