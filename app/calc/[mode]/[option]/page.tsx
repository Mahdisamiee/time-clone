import { Metadata } from "next";
import LocalNavbar from "@/components/shared/local-navbar";
import ConversionUnitForm from "../../conversion-unit-form";
import { UnitMode } from "@/lib/models/calc";
import Link from "next/link";
import LinearNavLink from "@/components/shared/linear-nav-link";
import { fetchGenericModes, fetchUnitOptions } from "services/unit-services";





export async function generateStaticParams({
  params: { mode },
}: {
  params: { mode: UnitMode };
}) {
  const result = await fetchUnitOptions(mode);
  const units = result.units;

  const arr = units!.map((unit: any) => {
    return units!.map((unit2: any) => {
      return { option: unit.value + "-" + unit2.value };
    });
  });
  return arr.flat(1);
}

const UnitOptions = ({
  params,
}: {
  params: { option: string; mode: UnitMode };
}) => {
  return (
    <>
      <LinearNavLink params={params} />
      <ConversionUnitForm unitMode={params.mode} unitData={params.option} />
    </>
  );
};
export default UnitOptions;

// export const dynamicParams = false; // true | false,
