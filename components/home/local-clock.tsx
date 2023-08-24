"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ReactClock from "react-clock";
import "react-clock/dist/Clock.css";
import Balancer from "react-wrap-balancer";
import axios from "axios";

const LocalClock: React.FC = () => {
  const [timeValue, setTimeValue] = useState<any | null>(null);
  const [timeZone, setTimeZone] = useState<string>("");
  const isDesktop = useMediaQuery({ query: "(min-width:1224px)" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://worldtimeapi.org/api/timezone/${
            Intl.DateTimeFormat().resolvedOptions().timeZone
          }`,
        );
        const serverDateTime = new Date(response.data.datetime);
        const clientDateTime = new Date();
        const offset = serverDateTime.getTime() - clientDateTime.getTime();

        // Update the state with server time initially
        setTimeValue(serverDateTime);
        setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
        // Then update every second
        const interval = setInterval(() => {
          const newTime = new Date(Date.now() + offset);
          setTimeValue(newTime);
        }, 1000);

        return () => {
          clearInterval(interval);
        };
      } catch (error) {
        console.error("Failed to fetch the date and time:", error);
      }
    };

    fetchData();
  }, []);

  if (!timeValue) return null; // Or a loading spinner, etc.

  return (
    <div className="flex flex-col items-center text-center">
      <h1
        className="my-5 animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-2xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-5xl"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        Your Exact Local Time
      </h1>

      <ReactClock
        key={"newone"}
        className="mx-auto"
        value={timeValue}
        size={isDesktop ? 300 : 200}
      />
      <p
        className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer>Time in {timeZone.split("/").join(" , ")}</Balancer>
      </p>
    </div>
  );
};

export default LocalClock;
