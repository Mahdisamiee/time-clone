import LocalNavbar from "@/components/shared/local-navbar";
import { Metadata } from "next";
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
  alternates: {
    canonical: `https://harchi.app/time/age`,
  },
};

export default function Age() {
  
  return (
    <>
      <LocalNavbar items={navbarItems} />
      <div className="z-10 w-full max-w-3xl px-5 xl:px-0">
        <AgeCalculator />
      </div>
    </>
  );
}

const navbarItems = [
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
