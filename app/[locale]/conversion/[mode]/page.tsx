import BreadcrumbNavbar from "@/components/shared/breadcrumb-navbar";
import { UnitMode } from "@/lib/models/conversion";
import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";
import { fetchUnitOptions } from "services/unit-services";

const ConversionUnitForm = dynamic(() => import("../conversion-unit-form"), {
  ssr: false,
});

type Props = {
  params: { locale: string; mode: UnitMode };
};

const UnitHome = async ({ params }: Props) => {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations("Component.BreadcrumbNavbar");
  // Extract translations
  const level1 = t("level1");
  const level2 = (args: { mode?: string }) => t("level2", args);
  const level3 = (args: { from?: string; to?: string }) => t("level3", args);

  return (
    <>
      <BreadcrumbNavbar params={params} t={{ level1, level2, level3 }} />
      <ConversionUnitForm unitMode={params.mode} />
    </>
  );
};
export default UnitHome;

export async function generateMetadata({
  params: { mode },
}: {
  params: { mode: UnitMode };
}): Promise<Metadata> {
  const t = await getTranslations("Conversion.Mode.metadata");
  try {
    const result = await fetchUnitOptions(mode);
    const units = result.units;
    let computedKeywords = units!.map(
      (unit) =>
        `تبدیل ${unit.flabel}, تبدیل مقدار ${unit.flabel}, تبدیل ${unit.label}, تبدیل مقدار ${unit.label}, convert ${unit.flabel}, convert value ${unit.flabel}, convert ${unit.label}, convert value ${unit.label}, convertir ${unit.flabel}, convertir la valeur ${unit.flabel}, convertir ${unit.label}, convertir la valeur ${unit.label}, تحويل ${unit.flabel}، تحويل القيمة ${unit.flabel}، تحويل ${unit.label}، تحويل القيمة ${unit.label}`,
    );
    let complicatedKeywords = units!
      .map((unit1) => {
        return units!.map(
          (unit2) =>
            `تبدیل ${unit1.flabel} به ${unit2.flabel} , تبدیل مقدار ${unit1.flabel} به ${unit2.flabel}, تبدیل ${unit1.label} به ${unit2.label}, تبدیل مقدار ${unit1.label} به ${unit2.label}, Convert ${unit1.flabel} to ${unit2.flabel}, convert the value of ${unit1.flabel} to ${unit2.flabel}, convert ${unit1.label} to ${unit2.label}, convert the value of ${unit1.label} to ${unit2.label}, Convertissez ${unit1.flabel} en ${unit2.flabel}, convertissez la valeur de ${unit1.flabel} en ${unit2.flabel}, convertissez ${unit1.label} en ${unit2.label}, convertissez le valeur de ${unit1.label} à ${unit2.label}, تحويل ${unit1.flabel} إلى ${unit2.flabel}، تحويل قيمة ${unit1.flabel} إلى ${unit2.flabel}، تحويل ${unit1.label} إلى ${unit2.label}، تحويل قيمة ${unit1.label} إلى ${unit2.label}`,
        );
      })
      .flat(1);

    return {
      title: t("title", { mode: mode }),
      description: t("description", { mode: mode }),
      keywords: [],
      alternates: {
        canonical: `/conversion/${mode}`,
        languages: {
          fa: `/fa/conversion/${mode}`,
          en: `/en/conversion/${mode}`,
          fr: `/fr/conversion/${mode}`,
          ar: `/ar/conversion/${mode}`,
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
          fr: `/fr/conversion/${mode}`,
          ar: `/ar/conversion/${mode}`,
        },
      },
    };
  }
}
