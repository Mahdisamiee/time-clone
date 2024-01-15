import SimpleCard from "@/components/home/simple-card";
import GoldCalculateForm from "../shared/gold-calculate-form";
import GoldLivePurchase from "../shared/gold-live-purchase";

const GoldPage = () => {
  return (
    <div className="grid h-full w-full grid-cols-1 justify-items-stretch gap-10 px-10 md:grid-cols-8 ">
      <div className="col-span-1 md:col-span-3">
        <SimpleCard>
          <GoldLivePurchase title="قیمت لحظه‌ای سکه"/>
        </SimpleCard>
      </div>
      <div className="col-span-1 md:col-span-5">
        <SimpleCard>
          <GoldCalculateForm />
        </SimpleCard>
      </div>
    </div>
  );
};

export default GoldPage;
