import { Metadata } from "next";
import ArzCalculateForm from "../shared/arz-calculate-form";
import CurrenciesLivePurchase from "../shared/currencies-live-purchase";
import GoldLivePurchase from "../shared/gold-live-purchase";
import SharedLayout from "../shared/shared-layout";

const GoldPage = () => {
  return (
    <SharedLayout
      livePurchase={
        <GoldLivePurchase title="قیمت لحظه‌ای یورو : " currName="یورو" />
      }
      calculateForm={
        <ArzCalculateForm
          vahed="اسکناس"
          country="منطقه اروپا"
          market="بازار داخلی"
          type="ارز آزاد"
        />
      }
      summaryPurchase={<CurrenciesLivePurchase />}
    />
  );
};

export default GoldPage;

export const metadata: Metadata = {
  title: "قیمت لحظه‌ای یورو",
  description:
    "قیمت لحظه‌ای یورو امروز ، محاسبه خرید و فروش یورو به صورت لحظه‌ای",
  keywords: [
    "قیمت یورو",
    "قیمت لحظه‌ای یورو",
    "قیمت یورو امروز",
    "یورو دست دوم",
    "یورو دست دوم امروز",
    "قیمت یورو دست دوم",
    "قیمت یورو دست دوم امروز",
    "یورو چند",
    "یورو چند امروز",
    "قیمت یورو چند",
    "قیمت یورو چند امروز",
    "یورو",
    "یورو امروز",
    "یورو لحظه‌ای",
    "یورو لحظه‌ای امروز",
  ],
  alternates: {
    canonical: `/currency/price_eur`,
    languages: {
      fa: `/fa/currency/price_eur`,
      en: `/en/currency/price_eur`,
    },
  },
};
