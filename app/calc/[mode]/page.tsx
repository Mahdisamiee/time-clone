import { Metadata } from "next";
import LocalNavbar from "@/components/shared/local-navbar";
import ConversionUnitForm from "../conversion-unit-form";
import { UnitMode } from "@/lib/models/calc";
import { fetchGenericModes } from "services/unit-services";
import LinearNavLink from "@/components/shared/linear-nav-link";

export async function generateStaticParams() {
  const result = await fetchGenericModes();
  const modes = await result.generic;
  return modes.map((mode: string) => ({
    mode: mode,
  }));
}

const UnitHome = ({ params }: { params: { mode: UnitMode } }) => {
  return (
    <>
      {/* <LocalNavbar items={navbarItems} /> */}

      <div className="z-10 w-full max-w-3xl px-5 xl:px-0">
        <LinearNavLink params={params} />
        <ConversionUnitForm unitMode={params.mode} />
      </div>
    </>
  );
};
export default UnitHome;
