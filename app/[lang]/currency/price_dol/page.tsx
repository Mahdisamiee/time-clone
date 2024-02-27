import { Metadata } from "next";
import ArzCalculateForm from "../shared/arz-calculate-form";
import CurrenciesLivePurchase from "../shared/currencies-live-purchase";
import GoldLivePurchase from "../shared/gold-live-purchase";
import SharedLayout from "../shared/shared-layout";

const GoldPage = () => {
  return (
    <SharedLayout
      livePurchase={
        <GoldLivePurchase title="قیمت لحظه‌ای دلار : " currName="دلار" />
      }
      calculateForm={
        <ArzCalculateForm
          vahed="اسکناس"
          country="آمریکا"
          market="داخلی"
          type="ارز آزاد"
        />
      }
      summaryPurchase={<CurrenciesLivePurchase />}
    />
  );
};

export default GoldPage;

export const metadata: Metadata = {
  title: "قیمت لحظه‌ای دلار",
  description:
    "قیمت لحظه‌ای دلار امروز ، محاسبه خرید و فروش دلار به صورت لحظه‌ای",
  keywords: [
    "قیمت دلار",
    "قیمت دلار آمریکا",
    "قیمت لحظه‌ای دلار",
    "قیمت لحظه‌ای دلار آمریکا",
    "قیمت دلار امروز",
    "قیمت دلار آمریکا امروز",
    "دلار دست دوم",
    "دلار آمریکا دست دوم",
    "دلار دست دوم امروز",
    "قیمت دلار دست دوم",
    "قیمت دلار دست دوم امروز",
    "دلار چند",
    "دلار آمریکا چند",
    "دلار چند امروز",
    "دلار آمریکا چند امروز",
    "قیمت دلار چند",
    "قیمت دلار آمریکا چند",
    "قیمت دلار چند امروز",
    "قیمت دلار آمریکا چند امروز",
    "دلار",
    "دلار آمریکا",
    "دلار امروز",
    "دلار آمریکا امروز",
    "دلار لحظه‌ای",
    "دلار آمریکا لحظه‌ای",
    "دلار لحظه‌ای امروز",
    "دلار آمریکا لحظه‌ای امروز",
  ],
  alternates: {
    canonical: `https://harchi.app/currency/coin`,
  },
};
