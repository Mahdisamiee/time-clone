import Card from "@/components/home/card";
import LiveClock from "@/components/home/timezone-clock";
import LocalClock from "@/components/home/local-clock";
import ShariaTime from "@/components/home/sharia-time";
import MainCalendar from "@/components/home/calendar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ساعت و زمان",
  description:
    "ابزارهای اعلام وقت و زمان، اوقات شرعی شهرها و تاریخ دقیق، تعیین و تبدیل انواع تقویم ها و زمان",
  keywords:["اوقات شرعی دقیق", "تاریخ و ساعت دقیق", "تقویم روز", "تبدیل تاریخ", "محاسبه سن و فاصله دو تاریخ", ""]
};

export default async function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-3xl px-5 xl:px-0">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
          {timeParts.map((part) => {
            return (
              <a
                key={`${part.title}-${part.url}`}
                href={part.url}
                className="w-18 flex items-center justify-center rounded-md border border-gray-300 px-3 py-2 transition-all duration-100 hover:border-blue-500 focus:outline-none active:bg-gray-100"
              >
                <p className="text-gray-600">{part.title}</p>
              </a>
            );
          })}
        </div>
        <div
          className="mx-auto mt-8 flex animate-fade-up flex-col items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <LocalClock />
        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-5 xl:px-0">
        {cards.map(({ title, demo, large }) => (
          <Card key={title} title={title} demo={demo} large={large} />
        ))}
      </div>
    </>
  );
}

const timeParts = [
  {
    title: "تقویم ایران",
    url: "#",
  },
  {
    title: "محاسبه سن",
    url: "#",
  },
  {
    title: "اوقات شرعی",
    url: "#",
  },
  {
    title: "تبدیل تاریخ",
    url: "#",
  },
  {
    title: "ساعت کشورها",
    url: "#",
  },
  {
    title: "محاسبه سن",
    url: "#",
  },
];

const cards = [
  // {
  //   title: "Beautiful, reusable components",
  //   large: true,
  // },
  {
    title: "تقویم روزانه",
    demo: <MainCalendar />,
  },
  {
    title: "اوقات شرعی",
    large: true,
    demo: <ShariaTime />,
  },
  {
    title: "ساعت دقیق سایر کشور ها",
    large: true,
    demo: <LiveClock />,
  },
];
