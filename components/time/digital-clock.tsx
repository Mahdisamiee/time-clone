"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import timezoneMoment from "moment-timezone";
import moment from "moment";
import "moment/locale/fa";
import Clock from "react-live-clock";
import Balancer from "react-wrap-balancer";

interface ClockProps {
  timeZone: string;
  timeCity: string;
}

moment.locale("fa");

const LiveClock: React.FC<ClockProps> = ({ timeZone, timeCity }) => {
  const [adjustedTime, setAdjustedTime] =
    useState<timezoneMoment.Moment | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://worldtimeapi.org/api/timezone/${timeZone}/${timeCity}`,
        );
        const serverTime = timezoneMoment(response.data.datetime);
        const localTime = timezoneMoment();
        const difference = serverTime.diff(localTime) + 1000;
        setAdjustedTime(timezoneMoment().add(difference, "milliseconds"));

        // Periodically adjust time to keep in sync with server
        const interval = setInterval(() => {
          setAdjustedTime((prevTime) =>
            prevTime ? prevTime.add(1, "seconds") : null,
          );
        }, 1000);

        return () => clearInterval(interval);
      } catch (error) {
        console.error("Failed to fetch the date and time:", error);
      }
    };
    fetchData();
  }, [timeZone, timeCity]);

  return (
    <div className="flex w-full flex-col items-center text-center">
      <h1>
        Exact Time For {timeZone} / {timeCity}
      </h1>
      <div
        className="text-10xl animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-lale font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        {adjustedTime && (
          <Clock
            date={adjustedTime.toISOString()}
            format={"HH:mm:ss"}
            ticking={true}
            timezone={`${timeZone}/${timeCity}`}
          />
        )}
      </div>

      <p
        className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer className="bg-gray-100 w-full">
          {adjustedTime && adjustedTime.format("dddd, MMMM D, YYYY")}
        </Balancer>
      </p>
    </div>
  );
};

export default LiveClock;
