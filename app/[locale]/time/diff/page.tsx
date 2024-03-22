import { Metadata } from "next";
import LocalNavbar from "@/components/shared/local-navbar";
import DiffOfDates from "./diff-date";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Time.Diff.metadata");

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "فاصله بین دو تاریخ",
      "The distance between two dates",
      "فاصله زمانی بین دو تاریخ",
      "The time interval between two dates",
      "زمان بین دو تاریخ",
      "The time between two dates",
      "فاصله بین دو تاریخ شمسی",
      "The interval between two solar dates",
      "فاصله بین دو تاریخ میلادی",
      "The interval between two lunar dates",
      "فاصله بین دو تاریخ قمری",
      "فاصله زمانی بین دو تاریخ شمسی",
      "Time interval between two solar dates",
      "فاصله زمانی بین دو تاریخ میلادی",
      "The time interval between two AD dates",
      "فاصله زمانی بین دو تاریخ قمری",
      "The time interval between two lunar dates",
      "زمان بین دو تاریخ شمسی",
      "Time between two solar dates",
      "زمان بین دو تاریخ میلادی",
      "The time between two calendar dates",
      "زمان بین دو تاریخ قمری",
      "Time between two lunar dates",
    ],
    alternates: {
      canonical: `/time/diff`,
      languages: {
        fa: `/fa/time/diff`,
        en: `/en/time/diff`,
      },
    },
  };
}

const Conversion = () => {
  const t = useTranslations("Time.Links");
  const navbarItems = [
    {
      title: t("today"),
      url: "/time/today",
    },
    {
      title: t("dateConvert"),
      url: "/time/conversion",
    },
    {
      title: t("shariaTime"),
      url: "/time/sharia",
    },
    {
      title: t("worldClock"),
      url: "/time/worldclock",
    },
    {
      title: t("ageCalculation"),
      url: "/time/age",
    },
  ];
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
