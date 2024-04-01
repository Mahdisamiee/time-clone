import { Metadata } from "next";
import ConversionDate from "./conversion-date";
import LocalNavbar from "@/components/shared/local-navbar";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";

type Props = {
  params: { locale: string;  };
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Time.Conversion.metadata");
  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "تبدیل تاریخ",
      "تبدیل تاریخ تولد",
      "تبدیل تاریخ شمسی به میلادی",
      "تبدیل تاریخ تولد به قمری",
      "تبدیل تاریخ به قمری",
      "تبدیل تاریخ به میلادی",
      "تبدیل تاریخ میلادی به شمسی",
      "تبدیل تاریخ میلادی به قمری",
      "تبدیل تاریخ به قمری",
      "تاریخ امروز به میلادی",
      "تاریخ امروز به قمری",
      "امروز به قمری",
      "امروز به شمسی",
      "امروز به میلادی",
      "Change date",
      "Change date of birth",
      "Convert Shamsi date to Gregorian",
      "Convert date of birth to lunar",
      "Convert date to lunar",
      "Convert date to Gregorian",
      "Conversion of Gregorian date to solar",
      "Converting Gregorian date to lunar",
      "Convert date to lunar",
      "Today's date in AD",
      "Today's Lunar Date",
      "Today to Shamsi",
      "today in the AD",
    ],

    alternates: {
      canonical: `/time/conversion`,
      languages: {
        fa: `/fa/time/conversion`,
        en: `/en/time/conversion`,
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
      title: t("ageCalculation"),
      url: "/time/age",
    },
    {
      title: t("dayDiff"),
      url: "/time/diff",
    },
  ];
  return (
    <>
      <LocalNavbar items={navbarItems} />

      <div className="z-10 w-full max-w-3xl px-5 xl:px-0">
        {/* here we add our first client component */}
        <ConversionDate />
      </div>
    </>
  );
};
export default Conversion;
