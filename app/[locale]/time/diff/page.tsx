import { Metadata } from "next";
import LocalNavbar from "@/components/shared/local-navbar";
import DiffOfDates from "./diff-date";

export const metadata: Metadata = {
  title: "محاسبه فاصله بین دو تاریخ",
  description:
    "محاسبه فاصله زمانی بین دو تاریخ، محاسبه تعداد روز و ماه های بین دو تاریخ بر اساس تقویم های شمسی میلادی قمری | هرچی",
  keywords: [
    "فاصله بین دو تاریخ",
    "فاصله زمانی بین دو تاریخ",
    "زمان بین دو تاریخ",
    "فاصله بین دو تاریخ شمسی",
    "فاصله بین دو تاریخ میلادی",
    "فاصله بین دو تاریخ قمری",
    "فاصله زمانی بین دو تاریخ شمسی",
    "فاصله زمانی بین دو تاریخ میلادی",
    "فاصله زمانی بین دو تاریخ قمری",
    "زمان بین دو تاریخ شمسی",
    "زمان بین دو تاریخ میلادی",
    "زمان بین دو تاریخ قمری",
  ],
  alternates: {
    canonical: `/time/diff`,
    languages: {
      fa: `/fa/time/diff`,
      en: `/en/time/diff`,
    },
  },
};

const Conversion = () => {
  return (
    <>
      <LocalNavbar items={navbarItems} />

      <div className="z-10 w-full max-w-3xl px-5 xl:px-0">
        {/* here we add our first client component */}
        <DiffOfDates />
      </div>
    </>
  );
};
export default Conversion;

const navbarItems = [
  {
    title: "تاریخ امروز",
    url: "/time/today",
  },
  {
    title: "تقویم ایران",
    url: "/time/calendar",
  },
  {
    title: "تبدیل تاریخ",
    url: "/time/conversion",
  },
  {
    title: "اوقات شرعی",
    url: "/time/sharia",
  },
  {
    title: "ساعت کشورها",
    url: "/time/worldclock",
  },
  {
    title: "محاسبه سن",
    url: "/time/age",
  },
];
