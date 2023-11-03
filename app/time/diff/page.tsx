import { Metadata } from "next";
import LocalNavbar from "@/components/shared/local-navbar";
import DiffOfDates from "./diff-date";

export const metadata: Metadata = {
  title: "محاسبه فاصله بین دو تاریخ",
  //   description:
  //     "تبدیل تاریخ شمسی به میلادی ، میلادی به شمسی ، تبدیل تاریخ تولد به میلادی ، مبدل تاریخ و تبدیل تقویم به شمسی و میلادی و قمری",
  //   keywords: [
  //     "تبدیل تاریخ",
  //     "تبدیل تاریخ تولد",
  //     "تبدیل تاریخ شمسی به میلادی",
  //     "تبدیل تاریخ تولد به قمری",
  //     "تبدیل تاریخ به قمری",
  //     "تبدیل تاریخ به میلادی",
  //     "تبدیل تاریخ میلادی به شمسی",
  //     "تبدیل تاریخ میلادی به قمری",
  //     "تبدیل تاریخ به قمری",
  //     "تاریخ امروز به میلادی",
  //     "تاریخ امروز به قمری",
  //     "امروز به قمری",
  //     "امروز به شمسی",
  //     "امروز به میلادی",
  //   ],
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
