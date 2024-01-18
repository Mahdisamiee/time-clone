import SimpleCard from "@/components/home/simple-card";
import React, { ReactNode } from "react";

const SharedLayout = ({
  livePurchase,
  calculateForm,
  summaryPurchase,
}: {
  livePurchase: ReactNode;
  calculateForm: ReactNode;
  summaryPurchase?: ReactNode;
}) => {
  return (
    <div className="grid h-full w-full grid-cols-1 justify-items-stretch gap-10 px-10 md:grid-cols-8 ">
      <div className="col-span-1 md:col-span-3">
        <SimpleCard>{livePurchase}</SimpleCard>
      </div>
      <div className="col-span-1 md:col-span-5">
        <SimpleCard>{calculateForm}</SimpleCard>
      </div>
    </div>
  );
};

export default SharedLayout;
