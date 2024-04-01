import { Metadata } from "next";
import DistanceMap from "./distance-map";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useLocale } from "next-intl";

type Props = {
  params: { locale: string;  };
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Map.metadata");

  return {
    title: t("title"),
    description: t("description"),
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
      "Distance from Tehran to Isfahan",
      "Distance from Van to Istanbul",
      "Distance from Tehran to Mashhad",
      "Distance from Tehran to Tabriz",
      "Distance from Tehran to Shiraz",
      "Distance from Tehran to Rasht",
      "Distance from Isfahan to Shiraz",
      "Distance from Van to Trabzon",
      "Distance from Van to Izmir",
      "Distance from Tehran to Yazd",
    ],
    alternates: {
      canonical: `/map/distance`,
      languages: {
        fa: `/fa/map/distance`,
        en: `/en/map/distance`,
      },
    },
  };
}

const MapPage = ({params: {locale}}: Props) => {
  unstable_setRequestLocale(locale);
  
  return (
    <div className="">
      <DistanceMap />
    </div>
  );
};

export default MapPage;
