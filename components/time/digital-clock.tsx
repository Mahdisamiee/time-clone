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
  // timeCity: string;
}

moment.locale("fa");

const LiveClock: React.FC<ClockProps> = ({ timeZone }) => {
  const [adjustedTime, setAdjustedTime] =
    useState<timezoneMoment.Moment | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://worldtimeapi.org/api/timezone/${timeZone}`,
        );
        const res= await response.json();
        const serverTime = timezoneMoment(res.datetime);
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
      } catch (error:any) {
        console.error("Failed to fetch the date and time:", error);
        alert(error.message)
      }
    };
    fetchData();
  }, [timeZone]);

  return (
    <div className="flex w-full flex-col items-center text-center">
      <h1>
        زمان دقیق در <span className="text-blue-500 mx-2">{timeZone}</span> 
      </h1>
      <div
        className="text-10xl animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        {adjustedTime && (
          <Clock
            date={adjustedTime.toISOString()}
            format={"HH:mm:ss"}
            ticking={true}
            timezone={`${timeZone}`}
          />
        )}
      </div>

      <p
        className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl w-full"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer >
          {adjustedTime && adjustedTime.format("dddd, MMMM D, YYYY")}
        </Balancer>
      </p>
    </div>
  );
};

export default LiveClock;
