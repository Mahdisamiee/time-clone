// MapContainer.tsx
import LocalNavbar from "@/components/shared/local-navbar";
import MapContainer from "./distance-map";


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

const MapPage: React.FC = () => {
  return (
    <div className="">
      {/* <LocalNavbar items={timeParts}/> */}
      <MapContainer />
    </div>
  );
};

export default MapPage;
