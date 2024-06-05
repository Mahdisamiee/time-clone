import { UnitMode } from "@/lib/models/conversion";
import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { fetchUnitOptions } from "services/unit-services";

type Props = {
  params: { locale: string };
  children: ReactNode;
};

export async function generateMetadata({
  params: { mode, option },
}: {
  params: { mode: UnitMode; option: string };
}): Promise<Metadata> {
  const t = await getTranslations("Conversion.Options.metadata");
  try {
    const result = await fetchUnitOptions(mode);
    const units = result.units;
    let titleParts = option.split("-to-");
    let computedKeywords = units!.map(
      (unit) =>
        `تبدیل ${titleParts[0]}, تبدیل مقدار ${titleParts[0]}, تبدیل ${titleParts[1]}, تبدیل مقدار ${titleParts[1]}, convert ${titleParts[0]}, convert value ${titleParts[0]}, convert ${titleParts[1]}, convert value ${titleParts[1]}`,
    );
    let complicatedKeywords = units!
      .map((unit1) => {
        return units!.map(
          (unit2) =>
            `تبدیل ${titleParts[0]} به ${titleParts[1]} , تبدیل مقدار ${titleParts[0]} به ${titleParts[1]}, تبدیل واحد ${titleParts[0]} به ${titleParts[1]}, Convert ${titleParts[0]} to ${titleParts[1]} , convert value ${titleParts[0]} to ${titleParts[1]} , convert unit ${titleParts[0]} to ${titleParts[1]}`,
        );
      })
      .flat(1);

    return {
      title: t("title", { from: titleParts[0], to: titleParts[1] }),
      description: t("description", {
        mode: mode,
        from: titleParts[0],
        to: titleParts[1],
      }),
      keywords: [...computedKeywords, ...complicatedKeywords],
      alternates: {
        canonical: `/conversion/${mode}/${option}`,
        languages: {
          fa: `/fa/conversion/${mode}/${option}`,
          en: `/en/conversion/${mode}/${option}`,
          fr: `/fr/conversion/${mode}/${option}`,
        },
      },
    };
  } catch (error) {
    return {
      alternates: {
        canonical: `/conversion/${mode}/${option}`,
        languages: {
          fa: `/fa/conversion/${mode}/${option}`,
          en: `/en/conversion/${mode}/${option}`,
          fr: `/fr/conversion/${mode}/${option}`,
        },
      },
    };
  }
}

const Layout = ({ children, params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);

  return <>{children}</>;
};

export default Layout;
