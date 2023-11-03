import { Metadata } from "next";
import LocalNavbar from "@/components/shared/local-navbar";

export const metadata: Metadata = {
  title: "تاریخ امروز (امروز چندمه)",
  description:
    "امروز چندم است، تاریخ امروز ایران، تاریخ امروز به شمسی میلادی قمری و روسی، امروز به میلادی شمسی و قمری چندم است، امروز چند شنبه است",
  keywords: [
    "تاریخ امروز",
    "امروز به میلادی",
    "امروز به شمسی",
    "امروز به قمری",
    "امروز به روسی",
    "امروز چند شنبه است",
    "امروز چندشنبه است",
    "امروز چندمه",
  ],
  alternates: {
    canonical: `https://kit365.ir/time/today`,
  },
};

const navbarItems = [
  {
    title: "تقویم ایران",
    url: "/time/calendar",
  },
  {
    title: "محاسبه سن",
    url: "/time/age",
  },
  {
    title: "اوقات شرعی",
    url: "/time/sharia",
  },
  {
    title: "تبدیل تاریخ",
    url: "/time/conversion",
  },
  {
    title: "ساعت کشورها",
    url: "/time/worldclock",
  },
  {
    title: "فاصله دو تاریخ",
    url: "/time/diff",
  },
];

const DateFormatOptions: any = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
};

const languages = ["fa", "en-us", "ar-sa", "ru"];

const Today = () => {
  let today = new Date();

  return (
    <>
      <LocalNavbar items={navbarItems} />
      <div className="z-10 flex w-full max-w-3xl flex-col items-center justify-center px-10 sm:px-3">
        <h1 className="mb-4 text-2xl"> تاریخ امروز </h1>
        <div className="my-4 w-full p-2 md:p-4">
          <ul className="grid h-full w-full grid-rows-4 gap-8 px-3 text-center text-base sm:text-xl ">
            {languages &&
              languages.map((lang) => (
                <li key={lang} className="grid w-full grid-cols-6 gap-4 p-2 text-stone-800">
                  <h4 className="col-span-4 inline-block py-2 text-right align-middle text-2xl text-sky-950">
                    {new Intl.DateTimeFormat(lang, DateFormatOptions).format(
                      today,
                    )}
                  </h4>
                  <span className="text-md col-span-2 inline-block whitespace-nowrap rounded bg-sky-200 px-1 py-2 text-center align-middle font-bold text-sky-950 ">
                    {new Intl.DateTimeFormat(lang).format(today)}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Today;
