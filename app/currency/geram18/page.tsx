import GoldCalculateForm from "../shared/gold-calculate-form";
import GoldLivePurchase from "../shared/gold-live-purchase";
import SharedLayout from "../shared/shared-layout";

const GoldPage = () => {
  return (
    <SharedLayout
      livePurchase={<GoldLivePurchase title="قیمت لحظه‌ای طلا 18 عیار" />}
      calculateForm={<GoldCalculateForm />}
    />
  );
};

export default GoldPage;
