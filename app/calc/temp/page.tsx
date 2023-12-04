import { Metadata } from "next";
import TemperatureForm from "./temperature-form";
import LocalNavbar from "@/components/shared/local-navbar";

export const metadata: Metadata = {
  title: "تبدیل واحد‌های دما",
  description: "تبدیل سلسیوس، فارانهایت، کلوین به یکدیگر و  برعکس",
  keywords: [
    "تبدیل دما",
    "تبدیل سلسیوس به فارانهایت",
    "تبدیل سلسیوس به کلوین",
    "تبدیل کلوین به سلسیوس",
    "تبدیل فارانهایت به سلسیوس",
    "تبدیل فارانهایت به کلوین",
    "تبدیل کلوین به فارانهایت",
    "تبدیل سلسیوس به فارانهایت و برعکس",
    "تبدیل سلسیوس به کلوین و برعکس",
    "تبدیل کلوین به سلسیوس و برعکس",
    "تبدیل فارانهایت به سلسیوس و برعکس",
    "تبدیل فارانهایت به کلوین و برعکس",
    "تبدیل کلوین به فارانهایت و برعکس",
  ],

  alternates: {
    canonical: `https://kit365.ir/calc/temp`,
  },
};

const TemperatureHome = () => {
  return (
    <>
      {/* <LocalNavbar items={navbarItems} /> */}

      <div className="z-10 w-full max-w-3xl px-5 xl:px-0">
        {/* here we add our first client component */}
        <TemperatureForm />
      </div>
    </>
  );
};
export default TemperatureHome;

// const navbarItems = [
//   {
//     title: "تاریخ امروز",
//     url: "/time",
//   },
//   {
//     title: "تقویم ایران",
//     url: "/time/calendar",
//   },
//   {
//     title: "محاسبه سن",
//     url: "/time/age",
//   },
//   {
//     title: "فاصله دو تاریخ",
//     url: "/time/diff",
//   },
// ];
