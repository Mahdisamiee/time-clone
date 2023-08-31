"use client";

import { useState, useEffect } from "react";
import useCurrentLocale from "@/lib/hooks/use-current-locale";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const MainCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  const currentLocale = useCurrentLocale();

  return (
    <div dir={currentLocale === "fa" ? "rtl" : "ltr"}>
      <Calendar
        onChange={onChange}
        calendarType={currentLocale === "fa" ? "islamic" : "iso8601"}
        locale={currentLocale}
        value={value}
      />
    </div>
  );
};
export default MainCalendar;
