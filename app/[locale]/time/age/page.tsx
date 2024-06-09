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
      "calcul de l'âge",
      "calculer la date de naissance",
      "Calcul de la date exacte de naissance",
      "calcul d'anniversaire",
      "Calcul de la date de naissance en AD",
      "calcul de la date de naissance en termes lunaires",
      "Changer la date de naissance",
      "Convertir la date de naissance en grégorien",
      "Convertir la date de naissance en lunaire",
      "حساب العمر", 
      "حساب تاريخ الميلاد",  
      "حساب تاريخ الميلاد بالضبط", 
      "حساب عيد الميلاد",  
      "حساب تاريخ الميلاد بالميلاد", 
      "حساب تاريخ الميلاد بالقيمة القمرية",  
      "تغيير تاريخ الميلاد", 
      "تحويل تاريخ الميلاد الى الميلادي",
      "تحويل تاريخ الميلاد إلى قمري",  
    ],
    alternates: {
      canonical: `/time/age`,
      languages: {
        fa: `/fa/time/age`,
        en: `/en/time/age`,
        fr: `/fr/time/age`,
        ar: `/ar/time/age`,
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
