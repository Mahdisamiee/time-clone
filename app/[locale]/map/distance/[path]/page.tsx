import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";
import Link from "next/link";
import { SelectableCitiesOption } from "../../models/selectable-cities-option";
import { fetchCities } from "../../services/fetch-cities";
const DistanceMap = dynamic(() => import("../distance-map"), { ssr: false });

type Props = {
  params: { locale: string; path: string };
};

export async function generateStaticParams({
  params: { path, locale },
}: Props) {
  try {
    const options = await fetchCities(locale);
    const result = options!
      .map((unit: SelectableCitiesOption) => {
        return options!.map((unit2: SelectableCitiesOption) => {
          return { path: unit.label + "-to-" + unit2.label };
        });
      })
      .flat(1);
    return result;
  } catch (error) {
    return [];
  }
}

const CitiesPage = async ({ params: { path, locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("Map.BackLinks");

  // Extract city names from the path
  const [fromCity, toCity] = path.split("-to-");
  

  // Define an array of cities for demonstration purposes
  const cities = ["tehran", "yazd", "tabriz", "mashhad", "rasht", "qom", ];

  return (
    <div className="flex flex-col gap-4">
      <DistanceMap path={path} />

      <div className="back-links mt-5">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          {t("ExploreMore")} :
        </h2>
        <ul className="flex flex-wrap gap-2 ">
          {cities.map((city) => (
            <li
              key={city}
              className="rounded-xl bg-blue-100 p-2 hover:bg-blue-200"
            >
              <Link
                href={`/map/distance/${fromCity}-to-${city}`}
                className="text-sm text-sky-600 hover:text-sky-800"
              >
                {`${fromCity} to ${city}`}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CitiesPage;
