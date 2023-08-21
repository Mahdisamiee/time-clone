"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment-timezone";
import ReactClock from "react-clock";
import "react-clock/dist/Clock.css";
import LiveClock from "react-live-clock";
import Balancer from "react-wrap-balancer";

interface ClockProps {
  timeZone: string;
  timeCity: string;
}

const Clock: React.FC<ClockProps> = ({ timeZone, timeCity }) => {
  const [fetchedDateTime, setFetchedDateTime] = useState<moment.Moment | null>(
    null,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://worldtimeapi.org/api/timezone/${timeZone}/${timeCity}`,
        );
        const datetime = response.data.datetime;
        const timeZoneName = response.data.timezone;

        const zonedDate = moment.tz(datetime, timeZoneName);
        setFetchedDateTime(zonedDate);
      } catch (error) {
        console.error("Failed to fetch the date and time:", error);
      }
    };

    fetchData();
  }, [timeZone, timeCity]);

  return (
    <div>
      {fetchedDateTime ? (
        <div className="text-center">
          <h1>
            Exact Time For {timeZone} /{timeCity}
          </h1>
          <h1
            className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            <Balancer>
              <LiveClock
                format={"HH:mm:ss"}
                ticking={true}
                timezone={"Europe/London"}
              />
            </Balancer>
          </h1>
          <p
            className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            <Balancer>
              {fetchedDateTime.format("dddd, MMMM D, YYYY h:mm:ss a z")}
            </Balancer>
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Clock;
