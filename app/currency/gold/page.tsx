import SimpleCard from "@/components/home/simple-card";
import GoldCalculateForm from "./gold-calculate-form";

const GoldPage = () => {
  return (
    <div className="grid h-full w-full grid-cols-1 justify-items-stretch gap-10 px-10 md:grid-cols-8 ">
      <div className="col-span-1 md:col-span-3">
        <SimpleCard>
          <div className="py-4">
            <h1 className="block text-2xl text-sky-900">
              قیمت لحظه‌ای 1 گرم طلا:
            </h1>

            <h2 className="my-10 block text-5xl tracking-wide text-sky-600">
              5,600,452
            </h2>

            <h3 className="text-2xl text-sky-900">تومان</h3>
            <p className="text-md my-10 tracking-wide text-sky-600">
              شنبه، 23 آذر 1402
            </p>
          </div>
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
