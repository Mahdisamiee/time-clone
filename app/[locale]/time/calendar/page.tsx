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
    canonical: `/time/calendar`,
    languages: {
      fa: `/fa/time/calendar`,
      en: `/en/time/calendar`,
    },
  },
};

export default function Calendar() {
  return (
    <>
      <p>this is calendar place</p>
    </>
  );
}
