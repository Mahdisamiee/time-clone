import { Metadata } from "next";
import {
  getLocale,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { ReactNode } from "react";
import { SelectableCitiesOption } from "../../models/selectable-cities-option";
import { fetchCities } from "../../services/fetch-cities";

type Props = {
  params: { locale: string };
  children: ReactNode;
};

export async function generateMetadata({
  params: { path },
}: {
  params: { path: string };
}): Promise<Metadata> {
  const t = await getTranslations("Map.metadata");
  const locale = await getLocale();
  let pathParts = path.split("-to-");
  const [fromCity, toCity] = pathParts;
  try {
    const options: SelectableCitiesOption[] = await fetchCities(locale);
    const title = `${fromCity} - ${toCity} | ${t("title")}`;

    return {
      title: title,
      description: t("description"),
      keywords: [
        `فاصله بین ${fromCity} تا ${toCity}`,
        `distance between ${fromCity} and ${toCity}`,
        `distance entre ${fromCity} et ${toCity}`,
        `المسافة بين ${fromCity} و ${toCity}`,
        "distance calculator",
        "محاسبه فاصله",
        "distance de trajet",
        "temps de voyage",
        "distance between isfahan and tehran",
        "مخطط الرحلة",
        "حاسبة المسافة",
        "مسافة المشي",
        "زمان سفر",
        "planificateur d'itinéraire",
        "distance à pied",
        "distance routière",
        "وقت السفر",
        "مسافة السفر",
        "journey distance",
        "calculateur de distance",
        "distance entre les villes",
        "فاصله شهرها",
        "walking distance",
        "travel distance",
        "road distance",
        "map distance",
        "travel time",
        "driving distance",
        "city distance",
        "route planner",
        "distance calculator",
      ],
      alternates: {
        canonical: `/map/distance/${path}`,
        languages: {
          fa: `/fa/map/distance/${path}`,
          en: `/en/map/distance/${path}`,
          fr: `/fr/map/distance/${path}`,
          ar: `/ar/map/distance/${path}`,
        },
      },
    };
  } catch (error) {
    return {
      title: t("title"),
      description: t("description"),
      keywords: [
        `فاصله بین ${fromCity} تا ${toCity}`,
        `distance between ${fromCity} and ${toCity}`,
        `distance entre ${fromCity} et ${toCity}`,
        `المسافة بين ${fromCity} و ${toCity}`,
      ],
      alternates: {
        canonical: `/map/distance/${path}`,
        languages: {
          fa: `/fa/map/distance/${path}`,
          en: `/en/map/distance/${path}`,
          fr: `/fr/map/distance/${path}`,
          ar: `/ar/map/distance/${path}`,
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
