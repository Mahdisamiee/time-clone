import ToolsListMapper from "@/components/shared/tools-list-mapper";
import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { path },
}: {
  params: { path: string };
}): Promise<Metadata> {
  const t = await getTranslations("Map.metadata");

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
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
      "routeplanner",
      "distance",
      "routeplanner",
      "anwb routeplanner",
      "routeplanner anwb",
      "routeplanner fiets",
      "fiets routeplanner",
      "routeplanner auto",
      "routeplanner google",
      "aa routeplanners",
      "routeplanners anwb",
      "anwb route planner",
      "route anwb planner",
      "routeplanner falk",
      "routeplanner van anwb",
      "routeplanners",
      "city distance",
      "driving distance",
      "travel time",
      "anwb routeplanner fiets",
      "google maps routeplanner auto",
      "beste routeplanner auto",
      "mappy routeplanner",
      "routeplanner van punt naar punt",
      "routeplanner fietsen",
      "anwb routeplanner auto",
      "routenet routeplanner",
      "routeplanner fiets anwb",
      "routeplanner vab",
    ],
    alternates: {
      canonical: `/map/distance`,
      languages: {
        fa: `/fa/map/distance`,
        en: `/en/map/distance`,
        fr: `/fr/map/distance`,
        ar: `/ar/map/distance`,
      },
    },
  };
}

export default async function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("Map.Links");

  const tools = [
    {
      title: t("distance"),
      url: "map/distance",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#1d9bf0"
          className="h-12 w-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="z-10 w-full max-w-screen-lg px-5 xl:px-0">
      <ToolsListMapper tools={tools} />
    </div>
  );
}
