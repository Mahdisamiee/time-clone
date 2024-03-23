"use client";
import { useEffect, useRef } from "react";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { useLocale, useTranslations } from "next-intl";

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
  const t = useTranslations("Time.Age.DaySelector");
  const locale = useLocale();

  return (
    <>
      <div className="z-10 text-xl">
        {selectedType === t("dateDiff") ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <DatePicker
              value={selectedDay}
              onChange={onDayChange}
              inputPlaceholder={t("firstDate")}
              shouldHighlightWeekends
              colorPrimary="#9c88ff"
              locale={locale} // for Persian calendar
            />
            <DatePicker
              value={selectedDay2}
              onChange={onDay2Change}
              inputPlaceholder={t("secondDate")}
              shouldHighlightWeekends
              colorPrimary="#9c88ff"
              locale={locale} // for Persian calendar
            />
          </div>
        ) : (
          <DatePicker
            value={selectedDay}
            onChange={onDayChange}
            inputPlaceholder={t("selectBirthDate")}
            shouldHighlightWeekends
            colorPrimary="#9c88ff"
            locale={locale} // for Persian calendar
          />
        )}
      </div>
    </>
  );
};

export default DaySelector;
