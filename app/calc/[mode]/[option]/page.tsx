import { Metadata } from "next";
import LocalNavbar from "@/components/shared/local-navbar";
import ConversionUnitForm from "../../conversion-unit-form";
import { UnitMode } from "@/lib/models/calc";
import Link from "next/link";
import LinearNavLink from "@/components/shared/linear-nav-link";
import { fetchGenericModes, fetchUnitOptions } from "services/unit-services";

// export async function generateStaticParams({
//   params: { mode },
// }: {
//   params: { mode: UnitMode };
// }) {
//   const result = await fetch(
//     `https://harchi.app/api/conversions-api/generic-conv/${mode}/`,
//   ).then((res) => res.json());

//   const units = result.units;

//   return units?.map((unit: any) => {
//     return { option: `${unit.value}` };
//   });
// }

const UnitOptions = ({
  params,
}: {
  params: { option: string; mode: UnitMode };
}) => {
  return (
    <>
      {/* <LocalNavbar items={navbarItems} /> */}

      <div className="z-10 w-full max-w-3xl px-5 xl:px-0">
        {/* here we add our first client component */}
        <LinearNavLink params={params} />
        <ConversionUnitForm unitMode={params.mode} unitData={params.option} />
      </div>
    </>
  );
};
export default UnitOptions;

export const dynamicParams = true; // true | false,
