import { Metadata } from "next";
import Link from "next/link";
import { MouseEvent } from "react";
import AgeCalculator from "./age-calculator";
import LocalNavbar from "@/components/shared/local-navbar";

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
        <LocalNavbar items={timeParts} />
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
