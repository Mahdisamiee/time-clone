import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تقویم ایران + مناسبتها و تعطیلات",
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

  alternates: {
    canonical: `https://harchi.app/time/age`,
  },
};

export default function Calendar() {
  return (
    <>
      <p>this is calendar place</p>
    </>
  );
}
