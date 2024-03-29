"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ReactClock from "react-clock";
import "react-clock/dist/Clock.css";
import Balancer from "react-wrap-balancer";
import axios from "axios";
import { useTranslations } from "next-intl";

const LocalClock: React.FC = () => {
  const [timeValue, setTimeValue] = useState<any | null>(null);
  const [timeZone, setTimeZone] = useState<string>("");
  const isDesktop = useMediaQuery({ query: "(min-width:1224px)" });

  const t = useTranslations("Component.AnalogClock");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://worldtimeapi.org/api/timezone/${
            Intl.DateTimeFormat().resolvedOptions().timeZone
          }`,
        );
        console.log("response of API", response.data);
        const serverDateTime = new Date(response.data.datetime);
        const clientDateTime = new Date();
        const offset = serverDateTime.getTime() - clientDateTime.getTime();
        // Update the state with server time initially
        // setTimeValue(serverDateTime);
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

  return (
    <div className="flex flex-col items-center text-center">
      {timeValue ? (
        <>
          <h1
            className="my-5 animate-fade-up bg-gradient-to-bl from-black to-stone-500 bg-clip-text text-center font-vazir text-2xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-5xl"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            {t("title")}
          </h1>

          <ReactClock
            key={"newone"}
            className="mx-auto"
            value={timeValue}
            size={isDesktop ? 300 : 200}
          />
          <p
            className="mt-6 animate-fade-up text-center font-vazir text-gray-500 opacity-0 md:text-xl"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            <Balancer>{timeZone.split("/").join(" , ")}</Balancer>
          </p>
        </>
      ) : (
        <p className="m-12 h-96 min-h-full p-10">{t("loadingMessage")}</p>
      )}
    </div>
  );
};

export default LocalClock;
