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
    ],
    alternates: {
      canonical: `/currency/mesghal`,
      languages: {
        fa: `/fa/currency/mesghal`,
        en: `/en/currency/mesghal`,
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
