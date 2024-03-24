"use client";
// MapContainer.tsx
import { useRouter } from "next/navigation";
import { Feature } from "ol";
import Map from "ol/Map";
import View from "ol/View";
import { defaults as defaultControls } from "ol/control";
import { LineString, Point } from "ol/geom";
import { Draw } from "ol/interaction";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { fromLonLat, toLonLat } from "ol/proj";
import { OSM, Vector as VectorSource } from "ol/source";
import { Fill, Icon, Stroke, Style } from "ol/style";
import { FormEvent, useEffect, useRef, useState } from "react";
import Select from "react-select";
import "./index.css";
import { CalculatedDistance } from "./models/calculated-distance";
import { SelectableCitiesOption } from "./models/selectable-cities-option";
import { distanceCalculator } from "./services/distance-calculator";
import { fetchCities } from "./services/fetch-cities";
import { useTranslations } from "next-intl";

const DistanceMap = ({ path }: { path?: string }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<Map>();
  const [result, setResult] = useState<CalculatedDistance | null>();
  const [points, setPoints] = useState<Feature<Point>[]>([]);
  const vectorSourceRef = useRef<VectorSource>(new VectorSource());
  const [options, setOptions] = useState<SelectableCitiesOption[]>([]);
  const [origin, setOrigin] = useState<any>();
  const [destination, setDestination] = useState<any>();
  const [pathOrigin, setPathOrigin] = useState("tehran");
  const [pathDestination, setPathDestination] = useState("isfahan");
  const router = useRouter();

  const t = useTranslations("Map.DistanceMap");

  useEffect(() => {
    async function findPath() {
      const cities: SelectableCitiesOption[] = await fetchCities();
      setOptions(cities);
      if (path && path.includes("-to-")) {
        const [originPath, destPath] = path.split("-to-");
        setPathOrigin(originPath);
        setPathDestination(destPath);
        if (cities) {
          const newOrigin = cities?.find(
            (option) => option.label.toLowerCase() === originPath.toLowerCase(),
          );
          const newDestination = cities?.find(
            (option) => option.label.toLowerCase() === destPath.toLowerCase(),
          );
          if (newOrigin) {
            setOrigin(newOrigin);
            addPoint(newOrigin!);
          }
          if (newDestination) {
            setDestination(newDestination);
            addPoint(newDestination);
          }

          console.log(originPath.toLowerCase(), newOrigin);
        }
      }
    }
    findPath();
  }, [path]);
  // set Map Settings
  useEffect(() => {
    // Create raster and vector layers
    const raster = new TileLayer({
      source: new OSM(),
    });

    const vectorLayer = new VectorLayer({
      source: vectorSourceRef.current,
      style: new Style({
        image: new Icon({
          anchor: [0.5, 1],
          anchorXUnits: "fraction",
          anchorYUnits: "fraction",
          src: "/marker.png",
          scale: 0.09,
        }),
        stroke: new Stroke({
          color: "#3366ff",
          width: 2,
        }),

        fill: new Fill({
          color: "rgba(255, 255, 255, 0.2)",
        }),
      }),
    });

    // Instantiate the map
    const initialMap = new Map({
      target: mapRef.current!,
      layers: [raster, vectorLayer],
      controls: defaultControls({ attribution: false, rotate: false }),
      view: new View({
        center: fromLonLat([54, 33]),
        zoom: 5,
        minZoom: 0,
        maxZoom: 28,
      }),
    });

    // Add Draw interaction
    const pointDraw = new Draw({
      source: vectorSourceRef.current,
      type: "Point", // Change to 'LineString', 'Polygon', etc. as needed
    });
    initialMap.addInteraction(pointDraw);

    pointDraw.on("drawend", (e) => {
      const feature = e.feature as Feature<Point>;
      console.log(feature);

      setPoints((prevPoints) => {
        let points = [...prevPoints, feature];

        // If there are now three points, remove the first one from the map and the array
        if (points.length > 2) {
          // Remove the oldest point from the map's vector source
          const oldestFeature = points.shift(); // Remove and get the first item
          if (oldestFeature) {
            vectorSourceRef.current.removeFeature(oldestFeature);
          }
        }

        return points;
      });
    });

    setMap(initialMap);
    // Clean up on unmount
    return () => {
      initialMap.setTarget(undefined);
    };
  }, []);

  // This function updates the route based on the selected units
  const updateRoute = (originPath: string, destPath: string) => {
    setResult(null);
    const newPath = `/map/distance/${originPath}-to-${destPath}`;
    router.push(newPath);
  };

  const addPoint = (newOrigin: SelectableCitiesOption) => {
    const point = new Feature({
      geometry: new Point(fromLonLat(newOrigin.value)),
    });
    setPoints((prevPoints) => {
      let points = [...prevPoints, point];

      // If there are now three points, remove the first one from the map and the array
      if (points.length > 2) {
        // Remove the oldest point from the map's vector source
        const oldestFeature = points.shift(); // Remove and get the first item
        if (oldestFeature) {
          vectorSourceRef.current.removeFeature(oldestFeature);
        }
      }

      return points;
    });

    vectorSourceRef.current.addFeature(point);
  };

  const handleClearMap = (e: FormEvent) => {
    e.preventDefault();
    vectorSourceRef.current.clear();
    setPoints([]);
    setResult(null);
    setOrigin(null);
    setDestination(null);
  };

  const handleSendCoords = async (e: FormEvent) => {
    e.preventDefault();
    if (points.length === 2) {
      const coordinates = points.map((point) =>
        point.getGeometry()!.getCoordinates(),
      );
      const line = new Feature({
        geometry: new LineString(coordinates.map((coord) => coord)),
      });

      vectorSourceRef.current.addFeature(line);

      // Prepare the payload with coordinates in LonLat
      // Send the payload to your API
      try {
        let origin = toLonLat(coordinates[0]);
        let dest = toLonLat(coordinates[1]);
        const payload = {
          origin_lat: origin[1],
          origin_lon: origin[0],
          dest_lat: dest[1],
          dest_lon: dest[0],
        };
        const response = await distanceCalculator(payload);
        setResult(response);
      } catch (error) {
        console.error(error);
      }

      // Reset points to allow for new points to be selected
      setPoints([]);
    } else {
      alert(t("alertSelectCoords"));
    }
  };

  const handleSelectOrigin = (newOrigin: SelectableCitiesOption) => {
    setOrigin(newOrigin);
    setPathOrigin(newOrigin.label);
    // updateRoute(newOrigin.label, pathDestination);
    addPoint(newOrigin);
  };

  const handleSelectDestination = (newOrigin: SelectableCitiesOption) => {
    setDestination(newOrigin);
    setPathDestination(newOrigin.label);
    // updateRoute(pathOrigin, newOrigin.label);
    addPoint(newOrigin);
  };

  return (
    <div className="grid h-full w-full grid-cols-1 gap-10 md:grid-cols-2 ">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col justify-between gap-2 sm:flex-row">
          <Select
            className="flex-1"
            defaultValue={origin}
            value={origin}
            onChange={handleSelectOrigin}
            options={options}
          ></Select>

          <Select
            className="flex-1"
            defaultValue={destination}
            value={destination}
            onChange={handleSelectDestination}
            options={options}
          ></Select>
        </div>
        <div
          ref={mapRef}
          className="map  h-96 w-full overflow-hidden rounded-lg bg-blue-200 p-1 shadow-lg"
        ></div>

        <div className="grid grid-cols-4 gap-5">
          <button
            onClick={handleClearMap}
            type="submit"
            className="text-md font-md col-span-1 my-3 block w-full rounded bg-gray-400 px-6 pb-2 pt-2.5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            {t("clear")}
          </button>
          <button
            onClick={handleSendCoords}
            type="submit"
            disabled={points.length !== 2}
            className="text-md font-md col-span-3 my-3 block w-full rounded bg-sky-500 px-6 pb-2 pt-2.5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-sky-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            {t("submit")}
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-3xl text-sky-950">{t("citiesDistance")}</h1>
        <p className="text-md mb-10 tracking-wide text-sky-600">
          {t("notice")}
        </p>

        {!!result ? (
          <div className=" mt-5 flex h-2/3 flex-col items-center justify-around py-10">
            <div>
              <h3 className="text-2xl text-sky-900">{t("distanceResult")}</h3>
              <p className="text-2xl tracking-wide text-sky-600">
                {(result?.distance[0].distance / 1000).toFixed(2)}{" "}
                {t("kilometer")}
              </p>
            </div>
            <div>
              <h3 className="text-2xl text-sky-900">{t("intervalResult")}</h3>
              <p className="text-2xl tracking-wide text-sky-600">
                {new Date(result?.duration[0].duration * 1000)
                  .toISOString()
                  .substr(11, 8)}{" "}
                {t("hour")}
              </p>
            </div>
          </div>
        ) : (
          <div className="align-center flex h-1/2 flex-col justify-center ">
            <h3 className="text-2xl text-sky-700">{t("alertNoCoords")}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default DistanceMap;
