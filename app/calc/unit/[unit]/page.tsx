import type { Metadata } from "next";
import ShariaTime from "@/app/time/sharia/sharia-time";
import UnitForm from "../unit-form";

export async function generateMetadata({
  params,
}: {
  params: { unit: string };
}): Promise<Metadata> {
  const decodedUnit = decodeURIComponent(params.unit);
  return {
    title: ``,
    description: ``,
    keywords: [],
    alternates: {
      canonical: `https://kit365.ir/calc/unit/${decodedUnit}`,
    },
  };
}

const createDefaultUnits = (
  unit: string,
): { fromUnit: string; toUnit: string } | undefined => {
  if (!unit.includes("-to-")) return; //TODO : if this happend we routh to 404;

  const sepratedUnit = unit.split("-to-");
  return { fromUnit: sepratedUnit[0], toUnit: sepratedUnit[1] };
};

export default function Page({ params }: { params: { unit: string } }) {
  const decodedUnit = decodeURIComponent(params.unit);
  const unitData = createDefaultUnits(decodedUnit);
  return (
    <>
      <p className="mt-3">{decodedUnit}</p>
      {unitData !== undefined ? <UnitForm unitData={unitData} /> : null}
      <p>something here</p>
    </>
  );
}
