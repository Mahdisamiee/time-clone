import { SelectableCitiesOption } from "../../models/selectable-cities-option";
import { fetchCities } from "../../services/fetch-cities";
import dynamic from "next/dynamic";
// import DistanceMap from "../distance-map";
const DistanceMap = dynamic(() => import("../distance-map"), { ssr: false });

export async function generateStaticParams({
  params: { path },
}: {
  params: { path: string };
}) {
  try {
    const options = await fetchCities();
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

const CitiesPage = ({ params: { path } }: { params: { path: string } }) => {
  return (
    <div className="">
      <DistanceMap path={path} />
    </div>
  );
};

export default CitiesPage;
