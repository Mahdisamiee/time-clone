import { Metadata } from "next";
import LocalNavbar from "@/components/shared/local-navbar";
import ConversionUnitForm from "../conversion-unit-form";
import { UnitMode } from "@/lib/models/calc";

const UnitHome = ({ params }: { params: { mode: UnitMode } }) => {
  return (
    <>
      {/* <LocalNavbar items={navbarItems} /> */}

      <div className="z-10 w-full max-w-3xl px-5 xl:px-0">
        {/* here we add our first client component */}
        <p>حالت کلی محاسبه</p>
        <ConversionUnitForm unitMode={params.mode} />
      </div>
    </>
  );
};
export default UnitHome;
