import { Metadata } from "next";
import DistanceMap from "./distance-map";

export const metadata: Metadata = {
  title: "فاصله شهر‌ها و راههای شهرهای ایران و جهان",
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
  ],
  alternates: {
    canonical: `https://harchi.app/map/distance`,
  },
};

const MapPage: React.FC = () => {
  return (
    <div className="">
      <DistanceMap />
    </div>
  );
};

export default MapPage;
