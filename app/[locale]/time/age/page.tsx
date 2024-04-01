import LocalNavbar from "@/components/shared/local-navbar";
import { Metadata } from "next";
import AgeCalculator from "./age-calculator";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";

type Props = {
  params: { locale: string;};
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Time.Age.metadata");
  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "محاسبه سن",
      "محاسبه تاریخ تولد",
      "محاسبه تاریخ دقیق تولد",
      "محاسبه روز تولد",
      "محاسبه تاریخ تولد به میلادی",
      "محاسبه تاریخ تولد به قمری",
      "تبدیل تاریخ تولد",
      "تبدیل تاریخ تولد به میلادی",
      "تبدیل تاریخ تولد به قمری",
      "age calculation",
      "calculate date of birth",
      "Calculating the exact date of birth",
      "birthday calculation",
      "Calculation of date of birth in AD",
      "calculation of date of birth in lunar terms",
      "Change date of birth",
      "Convert date of birth to Gregorian",
      "Convert date of birth to lunar",
    ],
    alternates: {
      canonical: `/time/age`,
      languages: {
        fa: `/fa/time/age`,
        en: `/en/time/age`,
      },
    },
  };
}

export default function Age({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Time.Links");

  const navbarItems = [
    {
      title: t("dayDiff"),
      url: "/time/diff",
    },
    {
      title: t("today"),
      url: "/time/today",
    },
    {
      title: t("dateConvert"),
      url: "/time/conversion",
    },
  ];

  return (
    <>
      <LocalNavbar items={navbarItems} />
      <div className="z-10 w-full max-w-3xl px-5 xl:px-0">
        <AgeCalculator />
      </div>
    </>
  );
}
