import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import CurrenciesLivePurchase from "../shared/currencies-live-purchase";
import GoldCalculateForm from "../shared/gold-calculate-form";
import GoldLivePurchase from "../shared/gold-live-purchase";
import SharedLayout from "../shared/shared-layout";

type Props = {
  params: { locale: string;  };
};


export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Currency.Mesghal.metadata");
  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "قیمت طلا 18 عیار",
      "قیمت لحظه‌ای طلا 18 عیار",
      "قیمت طلا 18 عیار امروز",
      "طلا 18 عیار دست دوم",
      "طلا 18 عیار دست دوم امروز",
      "قیمت طلا 18 عیار دست دوم",
      "قیمت طلا 18 عیار دست دوم امروز",
      "طلا 18 عیار 740",
      "طلا 18 عیار 740 امروز",
      "قیمت طلا 18 عیار 740",
      "قیمت طلا 18 عیار 740 امروز",
      "طلا 18 عیار چند",
      "طلا 18 عیار چند امروز",
      "قیمت طلا 18 عیار چند",
      "قیمت طلا 18 عیار چند امروز",
      "طلا 18 عیار",
      "طلا 18 عیار امروز",
      "طلا 18 عیار لحظه‌ای",
      "طلا 18 عیار لحظه‌ای امروز",
      "The price of 18 carat gold",
      "Current price of 18 carat gold",
      "Today's 18 carat gold price",
      "2nd hand 18 carat gold",
      "2nd hand 18 carat gold today",
      "2nd hand 18 carat gold price",
      "2nd hand 18 carat gold price today",
      "18 karat gold 740",
      "18 karat gold 740 today",
      "The price of 18 karat gold is 740",
      "The price of 18 karat gold is 740 today",
      "How much 18 carat gold",
      "How much is 18 carat gold today?",
      "How much is the price of 18 karat gold?",
      "How much is the price of 18 carat gold today?",
      "18 karat gold",
      "Today's 18 carat gold",
      "Instant 18 carat gold",
      "Today's moment 18 carat gold",
      "Le prix de l'or 18 carats",
      "Prix actuel de l'or 18 carats",
      "Le prix de l'or 18 carats d'aujourd'hui",
      "Or 18 carats d'occasion",
      "L'or 18 carats d'occasion aujourd'hui",
      "Prix de l'or 18 carats d'occasion",
      "Prix de l'or 18 carats d'occasion aujourd'hui",
      "Or 18 carats 740",
      "L'or 18 carats 740 aujourd'hui",
      "Le prix de l'or 18 carats est de 740",
      "Le prix de l'or 18 carats est de 740 aujourd'hui",
      "Combien d'or 18 carats",
      "Combien coûte l'or 18 carats aujourd'hui ?",
      "Combien coûte l'or 18 carats ?",
      "Combien coûte l'or 18 carats aujourd'hui ?",
      "Or 18 carats",
      "L'or 18 carats d'aujourd'hui",
      "Or 18 carats instantané",
      "L'instant d'aujourd'hui en or 18 carats",
      "سعر الذهب عيار 18 قيراط",
      "السعر الحالي للذهب عيار 18 قيراط",
      "سعر الذهب عيار 18 قيراط اليوم",
      "الذهب الثاني عيار 18 قيراط",
      "الذهب الثاني عيار 18 قيراطًا اليوم",
      "سعر الذهب عيار 18 قيراط",
      "سعر الذهب عيار 18 قيراط اليوم",
      "ذهب عيار 18 قيراط 740",
      "الذهب عيار 18 قيراط 740 اليوم",
      "سعر الذهب عيار 18 قيراط 740",
      "سعر الذهب عيار 18 قيراط 740 اليوم",
      "كم سعر الذهب عيار 18 قيراطًا",
      "كم يبلغ سعر الذهب عيار 18 قيراطًا اليوم؟",
      "كم سعر الذهب عيار 18 قيراط؟",
      "كم سعر الذهب عيار 18 اليوم؟",
      "ذهب عيار 18 قيراط",
      "الذهب عيار 18 قيراط اليوم",
      "ذهب فوري عيار 18 قيراط",
      "لحظة اليوم ذهب عيار 18 قيراط",
    ],
    alternates: {
      canonical: `/currency/mesghal`,
      languages: {
        fa: `/fa/currency/mesghal`,
        en: `/en/currency/mesghal`,
        fr: `/fr/currency/mesghal`,
        ar: `/ar/currency/mesghal`,
      },
    },
  };
}

const GoldPage = ({params: {locale}}: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Currency.Mesghal");
  
  return (
    <SharedLayout
      livePurchase={
        <GoldLivePurchase title={t("title")} currName={t("currName")} />
      }
      calculateForm={<GoldCalculateForm />}
      summaryPurchase={<CurrenciesLivePurchase />}
    />
  );
};

export default GoldPage;
