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
  const t = await getTranslations("Currency.Geram18.metadata");
  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "قیمت انس طلا",
      "قیمت لحظه‌ای انس طلا",
      "قیمت انس طلا امروز",
      "انس طلا دست دوم",
      "انس طلا دست دوم امروز",
      "قیمت انس طلا دست دوم",
      "قیمت انس طلا دست دوم امروز",
      "انس طلا چند",
      "انس طلا چند امروز",
      "قیمت انس طلا چند",
      "قیمت انس طلا چند امروز",
      "انس طلا",
      "انس طلا امروز",
      "انس طلا لحظه‌ای",
      "انس طلا لحظه‌ای امروز",
      "The price of gold",
      "Instantaneous price of gold",
      "Today's gold price",
      "second-hand gold ounce",
      "ounce gold today",
      "The price of gold",
      "Today's Second Hand Gold Price",
      "ounce gold ?",
      "ounce gold How Many Today",
      "How much is the price of gold?",
      "How much is the price of gold today?",
      "ounce Gold",
      "ounce Gold Today",
    ],
    alternates: {
      canonical: `/currency/ons`,
      languages: {
        fa: `/fa/currency/ons`,
        en: `/en/currency/ons`,
      },
    },
  };
}

const GoldPage = ({params: {locale}}: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Currency.Geram18");
  
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
