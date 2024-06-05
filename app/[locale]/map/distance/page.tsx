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
      "Distance de Téhéran à Ispahan",
      "Distance de Van à Istanbul",
      "Distance de Téhéran à Mashhad",
      "Distance de Téhéran à Tabriz",
      "Distance de Téhéran à Chiraz",
      "Distance de Téhéran à Rasht",
      "Distance d'Ispahan à Chiraz",
      "Distance de Van à Trabzon",
      "Distance de Van à Izmir",
      "Distance de Téhéran à Yazd",
      "المسافة من طهران إلى أصفهان",
      "المسافة من فان إلى اسطنبول",
      "المسافة من طهران إلى مشهد",
      "المسافة من طهران إلى تبريز",
      "المسافة من طهران إلى شيراز",
      "المسافة من طهران إلى رشت",
      "المسافة من أصفهان إلى شيراز",
      "المسافة من فان إلى طرابزون",
      "المسافة من فان إلى إزمير",
      "المسافة من طهران إلى يزد",
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

const MapPage = ({params: {locale}}: Props) => {
  unstable_setRequestLocale(locale);
  
  return (
    <div className="">
      <DistanceMap />
    </div>
  );
};

export default MapPage;
