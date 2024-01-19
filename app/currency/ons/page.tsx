import SimpleCard from "@/components/home/simple-card";
import GoldCalculateForm from "../shared/gold-calculate-form";
import GoldLivePurchase from "../shared/gold-live-purchase";
import SharedLayout from "../shared/shared-layout";
import CurrenciesLivePurchase from "../shared/currencies-live-purchase";

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
