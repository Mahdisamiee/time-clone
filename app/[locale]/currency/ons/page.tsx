import { Metadata } from "next";
import CurrenciesLivePurchase from "../shared/currencies-live-purchase";
import GoldCalculateForm from "../shared/gold-calculate-form";
import GoldLivePurchase from "../shared/gold-live-purchase";
import SharedLayout from "../shared/shared-layout";

export const metadata: Metadata = {
  title: "قیمت لحظه‌ای انس طلا",
  description:
    "قیمت لحظه‌ای انس طلا امروز ، محاسبه خرید و فروش انس طلا به صورت لحظه‌ای",
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

  ],
  alternates: {
    canonical: `https://harchi.app/currency/coin`,
  },
};


const GoldPage = () => {
  return (
    <SharedLayout
      livePurchase={<GoldLivePurchase title="قیمت لحظه‌ای 1 انس طلا : " currName="انس طلا"/>}
      calculateForm={<GoldCalculateForm />}
      summaryPurchase={<CurrenciesLivePurchase />}
    />
  );
};

export default GoldPage;
