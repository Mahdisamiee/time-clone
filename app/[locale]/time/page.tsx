import Card from "@/components/home/card";
import AnalogClock from "@/components/time/analog-clock";
import LiveClock from "@/components/time/timezone-clock";
// import MainCalendar from "@/components/time/calendar";
import LocalNavbar from "@/components/shared/local-navbar";
import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import ShariaTime from "./sharia/sharia-time";
import { useLocale, useTranslations } from "next-intl";

type Props = {
  params: {locale: string};
};


export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Time.metadata");
  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "اوقات شرعی دقیق",
      "Exact Sharia times",
      "تاریخ و ساعت دقیق",
      "Accurate date and time",
      "تقویم روز",
      "calendar",
      "تبدیل تاریخ",
      "time conversion",
      "محاسبه سن و فاصله دو تاریخ",
      "Calculation of age and distance between two dates",
    ],
    alternates: {
      canonical: `/time`,
      languages: {
        fa: `/fa/time`,
        en: `/en/time`,
      },
    },
  };
}

export default function TimeContainer({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  
  const t = useTranslations("Time.Links");

  const navbarItems = [
    {
      title: t("today"),
      url: "time/today",
    },
    {
      title: t("ageCalculation"),
      url: "time/age",
    },
    {
      title: t("shariaTime"),
      url: "time/sharia",
    },
    {
      title: t("dateConvert"),
      url: "time/conversion",
    },
    {
      title: t("worldClock"),
      url: "time/worldclock",
    },
    {
      title: t("dayDiff"),
      url: "time/diff",
    },
  ];

  const cards = [
    // {
    //   title: "تقویم روزانه",
    //   demo: <MainCalendar />,
    // },
    {
      title: t("shariaTime"),
      large: true,
      demo: <ShariaTime />,
    },
    {
      title: t("worldClock"),
      large: false,
      demo: <LiveClock />,
    },
  ];
  return (
    <>
      <LocalNavbar items={navbarItems} />
      <div className="z-10 w-full max-w-3xl px-5 xl:px-0">
        <div
          className="mx-auto mt-8 flex animate-fade-up flex-col items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <AnalogClock />
        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-5 xl:px-0">
        {cards.map(({ title, demo, large }) => (
          <Card key={title} title={title} demo={demo} large={large} />
        ))}
      </div>
    </>
  );
}
