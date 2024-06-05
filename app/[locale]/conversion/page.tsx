import ToolsListMapper from "@/components/shared/tools-list-mapper";
import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Conversion.metadata");

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "تبدیل دما",
      "تبدیل طول",
      "تبدیل زمان",
      "تبدیل جرم",
      "تبدیل مساحت",
      "تبدیل پهنای باند",
      "تبدیل حافظه دیجیتال",
      "تبدیل انرژی",
      "تبدیل حجم",
      "تبدیل سرعت",
      "تبدیل فشار",
      "temperature conversion",
      "length conversion",
      "time conversion",
      "Conversion of crime",
      "area conversion",
      "Bandwidth Conversion",
      "Digital Memory Conversion",
      "Energy Conversion",
      "volume conversion",
      "Velocity Conversion",
      "pressure conversion",
      "conversion de température",
      "conversion de longueur",
      "conversion de temps",
      "Conversion du crime",
      "conversion de zone",
      "Conversion de bande passante",
      "Conversion de mémoire numérique",
      "Conversion de l'énergie",
      "conversion de volume",
      "Conversion de vitesse",
      "conversion de pression",
      "تحويل درجة الحرارة",
      "تحويل الطول",
      "تحويل الوقت",
      "تحويل الجريمة",
      "تحويل المنطقة",
      "تحويل عرض النطاق الترددي",
      "تحويل الذاكرة الرقمية",
      "تحويل الطاقة",
      "تحويل الحجم",
      "تحويل السرعة",
      "تحويل الضغط",
    ],
    alternates: {
      canonical: `/conversion`,
      languages: {
        fa: `/fa/conversion`,
        en: `/en/conversion`,
        fr: `/fr/conversion`,
        ar: `/ar/conversion`,
      },
    },
  };
}

export default async function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("Conversion.Links");
  const tools = [
    {
      title: t("temp"),
      url: "/conversion/temp",
    },
    {
      title: t("length"),
      url: "/conversion/length",
    },
    {
      title: t("time"),
      url: "/conversion/time",
    },
    {
      title: t("mass"),
      url: "/conversion/mass",
    },
    {
      title: t("area"),
      url: "/conversion/area",
    },
    {
      title: t("dataTransfer"),
      url: "/conversion/data-transfer",
    },
    {
      title: t("digitalStorage"),
      url: "/conversion/digital-storage",
    },
    {
      title: t("energy"),
      url: "/conversion/energy",
    },
    {
      title: t("volume"),
      url: "/conversion/volume",
    },
    {
      title: t("speed"),
      url: "/conversion/speed",
    },
    {
      title: t("pressure"),
      url: "/conversion/pressure",
    },
  ];
  return (
    <div className="z-10 w-full max-w-screen-lg px-5 xl:px-0">
      <ToolsListMapper tools={tools} />
    </div>
  );
}
