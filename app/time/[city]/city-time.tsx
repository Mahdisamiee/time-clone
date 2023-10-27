"use clinet"
import TimezoneClock from "@/components/time/timezone-clock";

import { WORLD_CLOCK_TIMEZONES } from "@/lib/constants";

const CityTime = ({ city }: { city?: string }) => {
  const timezone =
    city &&
    WORLD_CLOCK_TIMEZONES.find(
      (option) => option.label.toLocaleLowerCase() === city,
    )?.value;
  
  return (
    <div className="flex h-full w-5/6 flex-col items-center justify-between text-center sm:w-full">
      <TimezoneClock timezone={timezone} />
    </div>
  );
};

export default CityTime;
