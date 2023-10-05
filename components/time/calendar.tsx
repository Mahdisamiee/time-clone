"use client";

import { useState, useEffect } from "react";
import { Calendar, Day, DayValue } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

const MainCalendar = () => {
  const [selectedDay, setSelectedDay] = useState<DayValue>(null);
  const [firstRender, setFirstRender] = useState<boolean>(true);

  useEffect(() => {
    setFirstRender(false);
  }, []);

  return (
    <>
      {!firstRender ? (
        <Calendar
          value={selectedDay}
          onChange={setSelectedDay}
          shouldHighlightWeekends
          colorPrimary="#9c88ff"
          calendarClassName="custom-calendar"
          calendarTodayClassName="custom-calendar-today-day"
          locale="fa" // for Persian calendar
        />
      ) : null}
    </>
  );
};

export default MainCalendar;

// reffrence : https://kiarash-z.github.io/react-modern-calendar-datepicker/docs/getting-started
