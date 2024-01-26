import { Metadata } from "next";
import LocalNavbar from "@/components/shared/local-navbar";
import ConversionUnitForm from "../conversion-unit-form";
import { UnitMode } from "@/lib/models/calc";
import { fetchGenericModes } from "services/unit-services";
import LinearNavLink from "@/components/shared/linear-nav-link";

export async function generateStaticParams() {
  const result = await fetchGenericModes();
  const modes = await result.generic;
  const arr = modes.map((mode: string) => ({
    mode: mode,
  }));
  console.log("MODEEEEEEEEEEEEEE", arr);
  return arr;
}

const UnitHome = ({ params }: { params: { mode: UnitMode } }) => {
  return (
    <>
      <LinearNavLink params={params} />
      <ConversionUnitForm unitMode={params.mode} />
    </>
  );
};
export default UnitHome;
