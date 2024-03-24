import BreadcrumbNavbar from "@/components/shared/breadcrumb-navbar";
import { UnitMode } from "@/lib/models/conversion";
import { Metadata } from "next";
import { fetchUnitOptions } from "services/unit-services";
import ConversionUnitForm from "../conversion-unit-form";
import { getTranslations } from "next-intl/server";

const UnitHome = ({ params }: { params: { mode: UnitMode } }) => {
  return (
    <>
      <BreadcrumbNavbar params={params} />
      <ConversionUnitForm unitMode={params.mode} />
    </>
  );
};
export default UnitHome;

export async function generateMetadata({
  params: { mode },
}: {
  params: { mode: UnitMode };
}) {
  const t = await getTranslations("Conversion.Mode.metadata");
  try {
    const result = await fetchUnitOptions(mode);
    const units = result.units;
    let computedKeywords = units!.map(
      (unit) =>
        `تبدیل ${unit.flabel}, تبدیل مقدار ${unit.flabel}, تبدیل ${unit.label}, تبدیل مقدار ${unit.label}, convert ${unit.flabel}, convert value ${unit.flabel}, convert ${unit.label}, convert value ${unit.label}`,
    );
    let complicatedKeywords = units!
      .map((unit1) => {
        return units!.map(
          (unit2) =>
            `تبدیل ${unit1.flabel} به ${unit2.flabel} , تبدیل مقدار ${unit1.flabel} به ${unit2.flabel}, تبدیل ${unit1.label} به ${unit2.label}, تبدیل مقدار ${unit1.label} به ${unit2.label}, Convert ${unit1.flabel} to ${unit2.flabel}, convert the value of ${unit1.flabel} to ${unit2.flabel}, convert ${unit1.label} to ${unit2.label}, convert the value of ${unit1.label} to ${unit2.label}`,
        );
      })
      .flat(1);

    return {
      title: t("title", { mode: mode }),
      description: t("description", { mode: mode }),
      keywords: [...computedKeywords, ...complicatedKeywords],
      alternates: {
        canonical: `/conversion/${mode}`,
        languages: {
          fa: `/fa/conversion/${mode}`,
          en: `/en/conversion/${mode}`,
        },
      },
    };
  } catch (error) {
    return {
      title: t("title", { mode: mode }),
      description: t("description", { mode: mode }),
      alternates: {
        canonical: `/conversion/${mode}`,
        languages: {
          fa: `/fa/conversion/${mode}`,
          en: `/en/conversion/${mode}`,
        },
      },
    };
  }
}
