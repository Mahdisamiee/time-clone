import { Metadata } from "next";
import LocalNavbar from "@/components/shared/local-navbar";
import ConversionUnitForm from "../../conversion-unit-form";

const UnitOptions = ({ params }: { params: { options: string } }) => {



  return (
    <>
      {/* <LocalNavbar items={navbarItems} /> */}

      <div className="z-10 w-full max-w-3xl px-5 xl:px-0">
        {/* here we add our first client component */}
        <p>حالا options تاثیر دارند</p>
        <ConversionUnitForm unitMode="length" />
      </div>
    </>
  );
};
export default UnitOptions;
