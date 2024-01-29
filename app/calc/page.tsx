import Card from "@/components/home/card";
import LiveClock from "@/components/time/timezone-clock";
import AnalogClock from "@/components/time/analog-clock";
import ShariaTime from "@/app/time/sharia/sharia-time";
// import MainCalendar from "@/components/time/calendar";
import { Metadata } from "next";
import Link from "next/link";
import ToolsListMapper from "@/components/shared/tools-list-mapper";

export const metadata: Metadata = {
  title: "تبدیل‌ ها",
  description:
    "تبدیل دما، طول، زمان، جرم، مساحت، پهنای باند، حافظه دیجیتال، انرژِی، حجم، سرعت، فشار به هم و برعکس",
  keywords: [
    "تبدیل دما",
    "تبدیل طول",
    "تبدیل زمان",
    "تبدیل جرم",
    "تبدیل مساحت",
    "تبدیل پهنای باند",
    "تبدیل حافظه دیجیتال",
    "تبدیل انرژی",
    "تبدیل حجم",
    "تبدیل سرعت",
    "تبدیل فشار",
  ],
  alternates: {
    canonical: `https://harchi.app/calc`,
  },
};

export default async function Home() {
  return (
    <div className="z-10 w-full max-w-screen-lg px-5 xl:px-0">
      <ToolsListMapper tools={tools} />
    </div>
  );
}

const tools = [
  {
    title: "تبدیل دما",
    url: "/calc/temp",
  },
  {
    title: "تبدیل طول",
    url: "/calc/length",
  },
  {
    title: "تبدیل زمان",
    url: "/calc/time",
  },
  {
    title: "تبدیل جرم",
    url: "/calc/mass",
  },
  {
    title: "تبدیل مساحت",
    url: "/calc/area",
  },
  {
    title: "تبدیل پهنای باند",
    url: "/calc/data-transfer",
  },
  {
    title: "تبدیل حافظه دیجیتال",
    url: "/calc/digital-storage",
  },
  {
    title: "تبدیل انرژی",
    url: "/calc/energy",
  },
  {
    title: "تبدیل حجم",
    url: "/calc/volume",
  },
  {
    title: "تبدیل سرعت",
    url: "/calc/speed",
  },
  {
    title: "تبدیل فشار",
    url: "/calc/pressure",
  },
];
