import Card from "@/components/home/card";
import LiveClock from "@/components/time/timezone-clock";
import AnalogClock from "@/components/time/analog-clock";
import ShariaTime from "@/components/time/sharia-time";
import MainCalendar from "@/components/time/calendar";
import { Metadata } from "next";
import Link from "next/link";
import ConversionDate from "./conversion-date";

export const metadata: Metadata = {
  title: "ساعت و زمان",
  description:
    "ابزارهای اعلام وقت و زمان، اوقات شرعی شهرها و تاریخ دقیق، تعیین و تبدیل انواع تقویم ها و زمان",
  keywords: [
    "اوقات شرعی دقیق",
    "تاریخ و ساعت دقیق",
    "تقویم روز",
    "تبدیل تاریخ",
    "محاسبه سن و فاصله دو تاریخ",
    "",
  ],
};

const Conversion = () => {
  return (
    <>
      <div
        className={`z-10 grid grid-cols-1 gap-5 md:grid-cols-${timeParts.length}`}
      >
        {timeParts.map((part) => {
          return (
            <Link
              prefetch={true}
              key={`${part.url}`}
              className="w-18 flex items-center justify-center rounded-md border border-gray-300 px-2 py-1 transition-all duration-100 hover:border-blue-500 focus:outline-none active:bg-gray-100"
              href={part.url}
            >
              <p className="text-gray-600">{part.title}</p>
            </Link>
          );
        })}
        <hr className={`col-span-6 mb-10 mt-2 w-full`} />
      </div>

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
    title: "تقویم ایران",
    url: "time/calendar",
  },
  {
    title: "محاسبه سن",
    url: "time/age",
  },
  {
    title: "اوقات شرعی",
    url: "time/sharia",
  },
  {
    title: "تبدیل تاریخ",
    url: "time/conversion",
  },
  {
    title: "ساعت کشورها",
    url: "time/worldclock",
  },
  {
    title: "فاصله دو تاریخ",
    url: "time/diff",
  },
];

const cards = [
  // {
  //   title: "تقویم روزانه",
  //   demo: <MainCalendar />,
  // },
  {
    title: "اوقات شرعی",
    large: true,
    demo: <ShariaTime />,
  },
  {
    title: "ساعت دقیق سایر کشور ها",
    large: false,
    demo: <LiveClock />,
  },
];
