import { Metadata } from "next";
import LocalNavbar from "@/components/shared/local-navbar";
import ConversionUnitForm from "../../conversion-unit-form";
import { UnitMode } from "@/lib/models/calc";
import Link from "next/link";
import LinearNavLink from "@/components/shared/linear-nav-link";

const UnitOptions = ({
  params,
}: {
  params: { options: string; mode: UnitMode };
}) => {
  return (
    <>
      {/* <LocalNavbar items={navbarItems} /> */}

      <div className="z-10 w-full max-w-3xl px-5 xl:px-0">
        {/* here we add our first client component */}
        <LinearNavLink params={params} />
        <ConversionUnitForm unitMode={params.mode} unitData={params.options} />
      </div>
    </>
  );
};
export default UnitOptions;

export const dynamicParams = false; // true | false,
