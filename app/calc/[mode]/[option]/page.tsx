import BreadcrumbNavbar from "@/components/shared/breadcrumb-navbar";
import { UnitMode } from "@/lib/models/calc";
import { Metadata } from "next";
import { fetchUnitOptions } from "services/unit-services";
import ConversionUnitForm from "../../conversion-unit-form";

// export async function generateStaticParams({
//   params: { mode },
// }: {
//   params: { mode: UnitMode };
// }) {
//   const result = await fetchUnitOptions(mode);
//   const units = result.units;

//   const arr = units!.map((unit: any) => {
//     return units!.map((unit2: any) => {
//       return { option: unit.value + "-" + unit2.value };
//     });
//   });
//   return arr.flat(1);
// }

export async function generateMetadata({
  params: { mode, option },
}: {
  params: { mode: UnitMode; option: string };
}): Promise<Metadata> {
  const result = await fetchUnitOptions(mode);
  const units = result.units;
  let titleParts = option.split("-to-");
  let computedKeywords = units!.map(
    (unit) =>
      `تبدیل ${titleParts[0]}, تبدیل مقدار ${titleParts[0]}, تبدیل ${titleParts[1]}, تبدیل مقدار ${titleParts[1]}`,
  );
  let complicatedKeywords = units!
    .map((unit1) => {
      return units!.map(
        (unit2) =>
          `تبدیل ${titleParts[0]} به ${titleParts[1]} , تبدیل مقدار ${titleParts[0]} به ${titleParts[1]}, تبدیل واحد ${titleParts[0]} به ${titleParts[1]}`,
      );
    })
    .flat(1);

  return {
    title: `محاسبه و تبدیل ${titleParts[0]} به ${titleParts[1]}`,
    description: `تبدیل انواع ${mode} | تبدیل دقیق واحد های  ${mode} | تبدیل واحد ${titleParts[0]} به ${titleParts[1]} | harchi.app`,
    keywords: [...computedKeywords, ...complicatedKeywords],
    alternates: {
      canonical: `https://harchi.app/time/${mode}/${option}`,
    },
  };
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
