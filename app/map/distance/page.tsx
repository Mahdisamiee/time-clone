// MapContainer.tsx
import LocalNavbar from "@/components/shared/local-navbar";
import MapContainer from "./distance-map";
import { Metadata } from "next";

const timeParts = [
  {
    title: "نقشه و مکان",
    url: "/time/calendar",
  },
  {
    title: "وقت و زمان",
    url: "/time/today",
  },
  {
    title: "علمی و مهندسی",
    url: "/time/conversion",
  },
];

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
      {/* <LocalNavbar items={timeParts}/> */}
      <MapContainer />
    </div>
  );
};

export default MapPage;
