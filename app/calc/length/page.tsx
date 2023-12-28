import { Metadata } from "next";
import LocalNavbar from "@/components/shared/local-navbar";
import ConversionUnitForm from "../conversion-unit-form";


const UnitHome = () => {
  return (
    <>
      {/* <LocalNavbar items={navbarItems} /> */}

      <div className="z-10 w-full max-w-3xl px-5 xl:px-0">
        {/* here we add our first client component */}
        <p>در اینجا طول محاسبه میشود</p>
        <ConversionUnitForm unitMode="length"/>
      </div>
    </>
  );
};
export default UnitHome;
