import { Metadata } from "next";
import LocalNavbar from "@/components/shared/local-navbar";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";

type Props = {
  params: { locale: string; };
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Time.Today.metadata");
  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "تاریخ امروز",
      "Today's date",
      "امروز به میلادی",
      "Gregorian calendar today",
      "امروز به شمسی",
      "jallali calendar today",
      "jalali calendar today",
      "امروز به قمری",
      "hijri calendar today",
      "امروز به روسی",
      "lunar calendar today",
      "امروز چند شنبه است",
      "امروز چندشنبه است",
      "what day is it today?",
      "امروز چندمه",
    ],
    alternates: {
      canonical: `/time/today`,
      languages: {
        fa: `/fa/time/today`,
        en: `/en/time/today`,
      },
    },
  };
}

const DateFormatOptions: any = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
};

const languages = ["fa", "en-us", "ar-sa", "ru"];

const Today = ({params: {locale}}: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Time");
  
  const navbarItems = [
    {
      title: t("Links.ageCalculation"),
      url: "/time/age",
    },
    {
      title: t("Links.shariaTime"),
      url: "/time/sharia",
    },
    {
      title: t("Links.dateConvert"),
      url: "/time/conversion",
    },
    {
      title: t("Links.worldClock"),
      url: "/time/worldclock",
    },
    {
      title: t("Links.dayDiff"),
      url: "/time/diff",
    },
  ];
  let today = new Date();

  return (
    <>
      <LocalNavbar items={navbarItems} />
      <div className="z-10 flex w-full max-w-3xl flex-col items-center justify-center px-10 sm:px-3">
        <h1 className="mb-4 text-2xl"> {t("Today.title")}</h1>
        <div className="my-4 w-full p-2 md:p-4">
          <ul className="grid h-full w-full grid-rows-4 gap-8 px-3 text-center text-base sm:text-xl ">
            {languages &&
              languages.map((lang) => (
                <li
                  key={lang}
                  className="grid w-full grid-cols-6 gap-4 p-2 text-stone-800"
                >
                  <h4 className="col-span-4 inline-block py-2 text-start align-middle text-2xl text-sky-950">
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
