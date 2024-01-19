import CurrenciesLivePurchase from "../shared/currencies-live-purchase";
import GoldCalculateForm from "../shared/gold-calculate-form";
import GoldLivePurchase from "../shared/gold-live-purchase";
import SharedLayout from "../shared/shared-layout";

const GoldPage = async () => {
  return (
    <SharedLayout
      livePurchase={
        <GoldLivePurchase title="قیمت لحظه‌ای 1 گرم طلا:" currName="" />
      }
      calculateForm={<GoldCalculateForm />}
      summaryPurchase={<CurrenciesLivePurchase />}
    />
  );
};

// export default GoldPage;
