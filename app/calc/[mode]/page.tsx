import BreadcrumbNavbar from "@/components/shared/breadcrumb-navbar";
import { UnitMode } from "@/lib/models/calc";
import { Metadata } from "next";
import { fetchUnitOptions } from "services/unit-services";
import ConversionUnitForm from "../conversion-unit-form";

const UnitHome = ({ params }: { params: { mode: UnitMode } }) => {
  return (
    <>
      <BreadcrumbNavbar params={params} />
      <ConversionUnitForm unitMode={params.mode} />
    </>
  );
};
export default UnitHome;

// export async function generateMetadata({
//   params: { mode },
// }: {
//   params: { mode: UnitMode };
// }): Promise<Metadata> {
//   const result = await fetchUnitOptions(mode);
//   const units = result.units;
//   let computedKeywords = units!.map(
//     (unit) =>
//       `تبدیل ${unit.flabel}, تبدیل مقدار ${unit.flabel}, تبدیل ${unit.label}, تبدیل مقدار ${unit.label}`,
//   );
//   let complicatedKeywords = units!
//     .map((unit1) => {
//       return units!.map(
//         (unit2) =>
//           `تبدیل ${unit1.flabel} به ${unit2.flabel} , تبدیل مقدار ${unit1.flabel} به ${unit2.flabel}, تبدیل ${unit1.label} به ${unit2.label}, تبدیل مقدار ${unit1.label} به ${unit2.label}`,
//       );
//     })
//     .flat(1);

//   return {
//     title: `محاسبه و تبدیل واحد‌های ${mode}`,
//     description: `تبدیل انواع ${mode} | تبدیل دقیق واحد های  ${mode} | harchi.app`,
//     keywords: [...computedKeywords, ...complicatedKeywords],
//     alternates: {
//       canonical: `https://harchi.app/calc/${mode}`,
//     },
//   };
// }
