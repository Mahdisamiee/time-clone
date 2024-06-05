import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import CurrenciesLivePurchase from "../shared/currencies-live-purchase";
import GoldCalculateForm from "../shared/gold-calculate-form";
import GoldLivePurchase from "../shared/gold-live-purchase";
import SharedLayout from "../shared/shared-layout";

type Props = {
  params: { locale: string };
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Currency.Coin.metadata");
  return {
    title: t("title"),
    description: t("description"),
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
      "أسعار العملات المعدنية",
      "سعر العملة الذهبية",
      "السعر الفوري للعملة",
      "السعر الفوري للعملة الذهبية",
      "سعر العملة الإمامية",
      "سعر العملة اليوم",
      "سعر العملة اليوم",
      "سعر العملة الذهبية اليوم",
      "سعر عملة الإمامي اليوم",
      "سعر عملة آزادي الربيع",
      "سعر عملة بهار آزادي اليوم",
      "سعر العملة الواحدة",
      "سعر العملات الذهبية المفردة",
      "سعر العملات الذهبية المفردة اليوم",
      "سعر عملة التجزئة اليوم",
      "Prix des pièces",
      "prix de la pièce d'or",
      "prix au comptant des pièces",
      "prix au comptant de la pièce d'or",
      "Prix de la pièce Imami",
      "prix de la pièce aujourd'hui",
      "prix de la pièce aujourd'hui",
      "Prix actuel des pièces d'or",
      "Prix de la pièce Imami d'aujourd'hui",
      "Le prix de la pièce Azadi Spring",
      "Prix de la pièce Bahar Azadi aujourd'hui",
      "prix d'une pièce unique",
      "Le prix des pièces d'or uniques",
      "Le prix des pièces d'or aujourd'hui",
      "Prix de détail actuel des pièces",
      "Prices for coins",
      "gold coin price",
      "coin spot price",
      "spot price of gold coin",
      "Price of Imami coin",
      "coin price today",
      "coin price today",
      "Today's Gold Coin Price",
      "Today's Imami Coin Price",
      "The price of Azadi Spring coin",
      "Price of Bahar Azadi coin today",
      "single coin price",
      "The price of single gold coins",
      "The price of single gold coins today",
      "Today's retail coin price",
    ],
    alternates: {
      canonical: `/currency/coin`,
      languages: {
        fa: `/fa/currency/coin`,
        en: `/en/currency/coin`,
        fr: `/fr/currency/coin`,
        ar: `/ar/currency/coin`,
      },
    },
  };
}

const GoldPage = ({ params: { locale } }: Props) => {
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
