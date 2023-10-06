"use client";
import { useState, useEffect } from "react";
import TimezoneSelect, { allTimezones } from "react-timezone-select";
import type { ITimezone } from "react-timezone-select";
import DigitalClock from "./digital-clock";

const TimezoneClock = () => {
  const [selectedTimezone, setSelectedTimezone] = useState<ITimezone | "">(
    "Europe/London",
  );
  const [clockTimezone, setClockTimezone] = useState("Europe");
  const [clockCity, setClockCity] = useState("London");

  const onTimezoneChange = (timezone: ITimezone) => {
    const newValue = JSON.parse(JSON.stringify(timezone)).value;
    setClockTimezone(newValue.split("/")[0]);
    setClockCity(newValue.split("/")[1]);
    setSelectedTimezone(timezone);
  };

  return (
    <div className="flex flex-col items-center justify-between p-4 text-left sm:w-full md:w-1/2">
      <TimezoneSelect
        className="mb-24 w-full"
        value={selectedTimezone}
        onChange={onTimezoneChange}
        timezones={{
          ...allTimezones,
          "America/Lima": "Pittsburgh",
          "Europe/Berlin": "Frankfurt",
          "Europe/London": "London",
        }}
      />
      <DigitalClock timeZone={clockTimezone} timeCity={clockCity} />
    </div>
  );
};

export default TimezoneClock;
