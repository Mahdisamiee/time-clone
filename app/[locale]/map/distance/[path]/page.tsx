import { useLocale } from "next-intl";
import { SelectableCitiesOption } from "../../models/selectable-cities-option";
import { fetchCities } from "../../services/fetch-cities";
import dynamic from "next/dynamic";
import { unstable_setRequestLocale } from "next-intl/server";
// import DistanceMap from "../distance-map";
const DistanceMap = dynamic(() => import("../distance-map"), { ssr: false });

type Props = {
  params: { locale: string; path: string };
};

export async function generateStaticParams({
  params: { path , locale},
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

const CitiesPage = ({ params: { path, locale } }: Props) => {
  unstable_setRequestLocale(locale);
  
  return (
    <div className="">
      <DistanceMap path={path} />
    </div>
  );
};

export default CitiesPage;
