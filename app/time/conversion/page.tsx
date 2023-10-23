import Card from "@/components/home/card";
import LiveClock from "@/components/time/timezone-clock";
import AnalogClock from "@/components/time/analog-clock";
import ShariaTime from "@/components/time/sharia-time";
import MainCalendar from "@/components/time/calendar";
import { Metadata } from "next";
import Link from "next/link";
import ConversionDate from "./conversion-date";
import LocalNavbar from "@/components/shared/local-navbar";

export const metadata: Metadata = {
  title: "تبدیل تاریخ شمسی میلادی قمری",
  description:
    "تبدیل تاریخ شمسی به میلادی ، میلادی به شمسی ، تبدیل تاریخ تولد به میلادی ، مبدل تاریخ و تبدیل تقویم به شمسی و میلادی و قمری",
  keywords: [
    "تبدیل تاریخ",
    "تبدیل تاریخ تولد",
    "تبدیل تاریخ شمسی به میلادی",
    "تبدیل تاریخ تولد به قمری",
    "تبدیل تاریخ به قمری",
    "تبدیل تاریخ به میلادی",
    "تبدیل تاریخ میلادی به شمسی",
    "تبدیل تاریخ میلادی به قمری",
    "تبدیل تاریخ به قمری",
    "تاریخ امروز به میلادی",
    "تاریخ امروز به قمری",
    "امروز به قمری",
    "امروز به شمسی",
    "امروز به میلادی",
  ],
};

const Conversion = () => {
  return (
    <>
      <LocalNavbar items={timeParts} />

      <div className="z-10 w-full max-w-3xl px-5 xl:px-0">
        {/* here we add our first client component */}
        <ConversionDate />
      </div>
    </>
  );
};
export default Conversion;

const timeParts = [
  {
    title: "تاریخ امروز",
    url: "/time",
  },
  {
    title: "تقویم ایران",
    url: "/time/calendar",
  },
  {
    title: "محاسبه سن",
    url: "/time/age",
  },
  {
    title: "فاصله دو تاریخ",
    url: "/time/diff",
  },
];
