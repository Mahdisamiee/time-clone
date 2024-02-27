import { ReactNode } from "react";
import { fetchGenericModes } from "services/unit-services";

export async function generateStaticParams() {
  try {
    const result = await fetchGenericModes();
    const modes = await result.generic;
    return modes.map((mode: string) => ({
      mode: mode,
    }));
  } catch (error) {
    return [];
  }
}

const UnitHome = ({ children }: { children: ReactNode }) => {
  return <div className="z-10 w-full max-w-3xl px-5 xl:px-0">{children}</div>;
};
export default UnitHome;
