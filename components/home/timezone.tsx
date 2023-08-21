import { useState } from "react";
import TimezoneSelect, { allTimezones } from "react-timezone-select";
import type { ITimezone } from "react-timezone-select";

const timezone = ({
  handleTimezoneChange,
}: {
  handleTimezoneChange: (timeZone: string) => void;
}) => {
  const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>(
    Intl.DateTimeFormat().resolvedOptions().timeZone,
  );

  const onTimezoneChange = (timezone: ITimezone) => {
    setSelectedTimezone(timezone);
  };

  return (
    <TimezoneSelect value={selectedTimezone} onChange={onTimezoneChange} timezones={{
      ...allTimezones,
      'America/Lima': 'Pittsburgh',
      'Europe/Berlin': 'Frankfurt',
    }}/>
  );
};

export default timezone;
