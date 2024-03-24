import BreadcrumbNavbar from "@/components/shared/breadcrumb-navbar";
import { UnitMode } from "@/lib/models/conversion";
import { fetchUnitOptions } from "services/unit-services";
import ConversionUnitForm from "../../conversion-unit-form";

export async function generateStaticParams({
  params: { mode },
}: {
  params: { mode: UnitMode };
}) {
  try {
    const result = await fetchUnitOptions(mode);
    const units = result.units;

    return units!
      .map((unit: any) => {
        return units!.map((unit2: any) => {
          return { option: unit.value + "-" + unit2.value };
        });
      })
      .flat(1);
  } catch (error) {
    return [];
  }
}

const UnitOptions = ({
  params,
}: {
  params: { option: string; mode: UnitMode };
}) => {
  return (
    <>
      <BreadcrumbNavbar params={params} />
      <ConversionUnitForm unitMode={params.mode} unitData={params.option} />
    </>
  );
};
export default UnitOptions;
