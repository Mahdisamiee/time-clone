import SimpleCard from "@/components/home/simple-card";
import GoldCalculateForm from "../shared/gold-calculate-form";
import GoldLivePurchase from "../shared/gold-live-purchase";

const GoldPage = () => {
  return (
    <div className="grid h-full w-full grid-cols-1 justify-items-stretch gap-5 px-10 md:grid-cols-12 ">
      <div className="col-span-1 lg:col-span-3 md:col-span-5">
        <SimpleCard>
          <GoldLivePurchase title="قیمت لحظه‌ای دلار"/>
        </SimpleCard>
      </div>
      <div className="col-span-1 lg:col-span-9 md:col-span-7">
        <SimpleCard>
          <GoldCalculateForm />
        </SimpleCard>
      </div>
    </div>
  );
};

export default GoldPage;
