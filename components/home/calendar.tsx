"use client";

import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const MainCalendar = ({ locale }: { locale?: string }) => {
  const [value, onChange] = useState<Value>(new Date());
  const [currentLocale, setCurrentLocale] = useState(locale);

  useEffect(() => {
    // This runs after the component is mounted on the client side
    setCurrentLocale(document.documentElement.lang);
    console.log(document.documentElement.lang);
  }, []);

  return (
    <div dir={currentLocale === "fa" ? "rtl" : "ltr"} className="">
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
