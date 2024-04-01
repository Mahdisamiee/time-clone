import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import CurrenciesLivePurchase from "../shared/currencies-live-purchase";
import GoldCalculateForm from "../shared/gold-calculate-form";
import GoldLivePurchase from "../shared/gold-live-purchase";
import SharedLayout from "../shared/shared-layout";

type Props = {
  params: { locale: string;  };
};


export const metadata: Metadata = {
  title: "قیمت لحظه‌ای سکه طلا",
  description:
    "قیمت سکه طلا امروز و محاسبه خرید و فروش طلا، سکه طلا، انس طلا، طلا 18 عیار امروز",
  keywords: [
    "قیمت سکه",
    "قیمت سکه طلا",
    "قیمت لحظه‌ای سکه",
    "قیمت لحظه‌ای سکه طلا",
    "قیمت سکه امامی",
    "قیمت سکه امروز",
    "قیمت سکه امروز",
    "قیمت سکه طلا امروز",
    "قیمت سکه امامی امروز",
    "قیمت سکه بهار آزادی ",
    "قیمت سکه بهار آزادی امروز",
    "قیمت سکه تک فروشی",
    "قیمت سکه طلا تک فروشی",
    "قیمت سکه طلا تک فروشی امروز",
    "قیمت سکه تک فروشی امروز",
  ],
  alternates: {
    canonical: `/currency/coin`,
    languages: {
      fa: `/fa/currency/coin`,
      en: `/en/currency/coin`,
    },
  },
};

const GoldPage = ({params: {locale}}: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Currency.Coin");
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
