import { Metadata } from "next";
import { getLocale, getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { SelectableCitiesOption } from "../../models/selectable-cities-option";
import { fetchCities } from "../../services/fetch-cities";

type Props = {
  params: { locale: string;  };
  children : ReactNode
};

export async function generateMetadata({
  params: { path },
}: {
  params: { path: string };
}): Promise<Metadata> {
  const t = await getTranslations("Map.metadata");
  const locale = await getLocale();
  let pathParts = path.split("-to-");
  try {
    const options: SelectableCitiesOption[] = await fetchCities(locale);
    // let computedKeywords = options
    //   .map((city1) => {
    //     return options.map((city2) => {
    //       return `فاصله ${city1.label} تا ${city2.label} , فاصله بین ${city1.label} تا ${city2.label}, distance ${city1.label} to ${city2.label}, distance between ${city1.label} to ${city2.label}`;
    //     });
    //   })
    //   .flat(1);

    return {
      title: t("title"),
      description: t("description"),
      keywords: [
        // ...computedKeywords,
        `فاصله بین ${pathParts[0]} تا ${pathParts[1]}`,
        `distance between ${pathParts[0]} and ${pathParts[1]}`,
      ],
      alternates: {
        canonical: `/map/distance/${path}`,
        languages: {
          fa: `/fa/map/distance/${path}`,
          en: `/en/map/distance/${path}`,
        },
      },
    };
  } catch (error) {
    return {
      title: t("title"),
      description: t("description"),
      keywords: [
        `فاصله بین ${pathParts[0]} تا ${pathParts[1]}`,
        `distance between ${pathParts[0]} and ${pathParts[1]}`,
      ],
      alternates: {
        canonical: `/map/distance/${path}`,
        languages: {
          fa: `/fa/map/distance/${path}`,
          en: `/en/map/distance/${path}`,
        },
      },
    };
  }
}

const Layout = ({ children, params:{locale} }: Props) => {
  unstable_setRequestLocale(locale);
  
  return <>{children}</>;
};

export default Layout;
