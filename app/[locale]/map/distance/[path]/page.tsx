import { Metadata } from "next";
import DistanceMap from "../distance-map";
import { fetchCities } from "../services/fetch-cities";
import { SelectableCitiesOption } from "../models/selectable-cities-option";

export async function generateMetadata({
  params: { path },
}: {
  params: { path: string };
}): Promise<Metadata> {
  let pathParts = path.split("-to-");
  try {
    const options = await fetchCities();
    let computedKeywords = options
      .map((city1) => {
        return options.map((city2) => {
          return `فاصله ${city1.label} تا ${city2.label} , فاصله بین ${city1.label} تا ${city2.label}`;
        });
      })
      .flat(1);

    return {
      title: "فاصله شهر‌ها و راههای ایران و جهان",
      description:
        "محاسبه فاصله شهرها و مسافت راههای ایران ، فاصله استانبول کربلا تهران اصفهان شیراز مشهد تبریز و تمام شهرها تا یکدیگر ، مسافت یاب بین شهری",
      keywords: [
        "فاصله تهران تا اصفهان ",
        "فاصله وان تا استانبول ",
        "فاصله تهران تا مشهد ",
        "فاصله تهران تا تبریز ",
        "فاصله تهران تا شیراز ",
        "فاصله تهران تا رشت ",
        "فاصله اصفهان تا شیراز ",
        "فاصله وان تا ترابزون ",
        "فاصله وان تا ازمیر ",
        "فاصله تهران تا یزد",
        ...computedKeywords,
        `فاصله بین ${pathParts[0]} تا ${pathParts[1]}`,
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
      title: "فاصله شهر‌ها و راههای ایران و جهان",
      description:
        "محاسبه فاصله شهرها و مسافت راههای ایران ، فاصله استانبول کربلا تهران اصفهان شیراز مشهد تبریز و تمام شهرها تا یکدیگر ، مسافت یاب بین شهری",
      keywords: [
        "فاصله تهران تا اصفهان ",
        "فاصله وان تا استانبول ",
        "فاصله تهران تا مشهد ",
        "فاصله تهران تا تبریز ",
        "فاصله تهران تا شیراز ",
        "فاصله تهران تا رشت ",
        "فاصله اصفهان تا شیراز ",
        "فاصله وان تا ترابزون ",
        "فاصله وان تا ازمیر ",
        "فاصله تهران تا یزد",
        `فاصله بین ${pathParts[0]} تا ${pathParts[1]}`,
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

// export async function generateStaticParams({
//   params: { path },
// }: {
//   params: { path: string };
// }) {
//   try {
//     const options = await fetchCities();
//     const result = options!
//       .map((unit: SelectableCitiesOption) => {
//         return options!.map((unit2: SelectableCitiesOption) => {
//           return { path: unit.label + "-to-" + unit2.label };
//         });
//       })
//       .flat(1);
//     return result;
//   } catch (error) {
//     return [];
//   }
// }

const CitiesPage = ({ params: { path } }: { params: { path: string } }) => {
  return (
    <div className="">
      <DistanceMap path={path} />
    </div>
  );
};

export default CitiesPage;
