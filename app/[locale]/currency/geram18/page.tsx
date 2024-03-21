import { Metadata } from "next";
import CurrenciesLivePurchase from "../shared/currencies-live-purchase";
import GoldCalculateForm from "../shared/gold-calculate-form";
import GoldLivePurchase from "../shared/gold-live-purchase";
import SharedLayout from "../shared/shared-layout";

export const metadata: Metadata = {
  title: "قیمت لحظه‌ای طلا 18 عیار",
  description:
    "قیمت لحظه ای طلا 18 عیار امروز ، محاسبه خرید و فروش طلا 18 عیار نو و دست دوم به صورت لحظه‌ای",
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

  ],
  alternates: {
    canonical: `/currency/geram18`,
    languages: {
      fa: `/fa/currency/geram18`,
      en: `/en/currency/geram18`,
    },
  },
};


const GoldPage = () => {
  return (
    <SharedLayout
      livePurchase={<GoldLivePurchase title="قیمت لحظه‌ای طلا 18 عیار" currName="طلا ۱۸"/>}
      calculateForm={<GoldCalculateForm />}
      summaryPurchase={<CurrenciesLivePurchase />}
    />
  );
};

export default GoldPage;
