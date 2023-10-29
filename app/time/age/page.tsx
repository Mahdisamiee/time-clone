import { Metadata } from "next";
import Link from "next/link";
import { MouseEvent } from "react";
import AgeCalculator from "./age-calculator";

export const metadata: Metadata = {
  title: "محاسبه سن دقیق",
  description:
    "محاسبه سن دقیق بر مبنای سال و ماه و روز تولد و تعیین اختلاف سن ، محاسبه تاریخ تولد مطابق تقویم میلادی شمسی قمری",
  keywords: [
    "محاسبه سن",
    "محاسبه تاریخ تولد",
    "محاسبه تاریخ دقیق تولد",
    "محاسبه روز تولد",
    "محاسبه تاریخ تولد به میلادی",
    "محاسبه تاریخ تولد به قمری",
    "تبدیل تاریخ تولد",
    "تبدیل تاریخ تولد به میلادی",
    "تبدیل تاریخ تولد به قمری",
  ],
};

export default function Age() {
  const handleChangeCalculate = (e: MouseEvent) => {
    console.log(e.currentTarget.innerHTML);
  };

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
      <hr className="w-full col-span-3 mt-2"/>
      </div>
      
      <div className="z-10 w-full max-w-3xl px-5 xl:px-0">
        <AgeCalculator />
      </div>
    </>
  );
}

const timeParts = [
  {
    title: "تقویم ایران",
    url: "/time/calendar",
  },
  {
    title: "تاریخ امروز",
    url: "/time/today",
  },
  {
    title: "تبدیل تاریخ",
    url: "/time/conversion",
  },
];
