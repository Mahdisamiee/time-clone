import LinearNavLink from "@/components/shared/linear-nav-link";
import { UnitMode } from "@/lib/models/calc";
import { fetchGenericModes } from "services/unit-services";
import ConversionUnitForm from "../conversion-unit-form";
import { ReactNode } from "react";

export async function generateStaticParams() {
  const result = await fetchGenericModes();
  const modes = await result.generic;
  return modes.map((mode: string) => ({
    mode: mode,
  }));
}

const UnitHome = ({ children }: { children: ReactNode }) => {
  return (
    <div className="z-10 w-full max-w-3xl px-5 xl:px-0">
      {children}
    </div>
  );
};
export default UnitHome;
