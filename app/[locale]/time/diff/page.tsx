import { Metadata } from "next";
import LocalNavbar from "@/components/shared/local-navbar";
import DiffOfDates from "./diff-date";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string; };
};

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
      "La distance entre deux dates",
      "L'intervalle de temps entre deux dates",
      "Le temps entre deux rendez-vous",
      "L'intervalle entre deux dates solaires",
      "L'intervalle entre deux dates lunaires",
      "Intervalle de temps entre deux dates solaires",
      "L'intervalle de temps entre deux dates AD",
      "L'intervalle de temps entre deux dates lunaires",
      "Temps entre deux dates solaires",
      "Le temps entre deux dates du calendrier",
      "Temps entre deux dates lunaires",
      "الفاصل بين تاريخين شمسيين",
      "الفاصل بين تاريخين قمريين",
      "الفاصل الزمني بين تاريخين شمسيين",
      "الفاصل الزمني بين تاريخين ميلاديين",
      "الفاصل الزمني بين تاريخين قمريين",
      "الزمن بين تاريخين شمسيين",
      "الوقت بين تاريخين تقويميين",
      "الوقت بين تاريخين قمريين",
    ],
    alternates: {
      canonical: `/time/diff`,
      languages: {
        fa: `/fa/time/diff`,
        en: `/en/time/diff`,
        fr: `/fr/time/diff`,
        ar: `/ar/time/diff`,
      },
    },
  };
}

const Conversion = ({params: {locale}}: Props) => {
  unstable_setRequestLocale(locale);
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
