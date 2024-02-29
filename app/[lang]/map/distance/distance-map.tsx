"use client";
// MapContainer.tsx
import React, { FormEvent, useEffect, useRef, useState } from "react";
import Map from "ol/Map";
import View from "ol/View";
import { Draw } from "ol/interaction";
import { OSM, Vector as VectorSource } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { LineString, Point } from "ol/geom";
import { Feature } from "ol";
import { fromLonLat, toLonLat } from "ol/proj";
import { Style, Fill, Icon, Stroke } from "ol/style";
import { defaults as defaultControls } from "ol/control";
import "./index.css";
import axios from "axios";

const DistanceMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<Map>();
  const [result, setResult] = useState<any>();
  const [points, setPoints] = useState<Feature<Point>[]>([]);
  const vectorSourceRef = useRef<VectorSource>(new VectorSource());

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
    const draw = new Draw({
      source: vectorSourceRef.current,
      type: "Point", // Change to 'LineString', 'Polygon', etc. as needed
    });
    initialMap.addInteraction(draw);

    draw.on("drawend", (e) => {
      const feature = e.feature as Feature<Point>;

      setPoints((prevPoints) => {
        let newPoints = [...prevPoints, feature];

        // If there are now three points, remove the first one from the map and the array
        if (newPoints.length > 2) {
          // Remove the oldest point from the map's vector source
          const oldestFeature = newPoints.shift(); // Remove and get the first item
          if (oldestFeature) {
            vectorSourceRef.current.removeFeature(oldestFeature);
          }
        }

        return newPoints;
      });
    });

    // **** Add Snap interaction
    // const snap = new Snap({ source: vectorSourceRef.current });
    // initialMap.addInteraction(snap);

    setMap(initialMap);
    // Clean up on unmount
    return () => {
      initialMap.setTarget(undefined);
    };
  }, []);

  const handleClearMap = (e: FormEvent) => {
    e.preventDefault();
    vectorSourceRef.current.clear();
    setPoints([]);
    setResult(null);
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

        const response = await axios.post(
          "https://harchi.app/api/map-api/dist-mat/",
          payload,
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
          },
        );
        setResult(response.data);
      } catch (error) {
        console.error(error);
      }

      // Reset points to allow for new points to be selected
      setPoints([]);
    } else {
      alert("لطفاً دو موقعیت را در صفحه انتخاب کنید");
    }
  };

  return (
    <div className="grid h-full w-full grid-cols-1 gap-10 md:grid-cols-2 ">
      <div className="">
        <div
          ref={mapRef}
          className="map  h-[30rem] w-full overflow-hidden rounded-lg bg-blue-200 p-1 shadow-lg"
        ></div>

        <div className="grid grid-cols-4 gap-5">
          <button
            onClick={handleClearMap}
            type="submit"
            className="text-md font-md col-span-1 my-3 block w-full rounded bg-gray-400 px-6 pb-2 pt-2.5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            پاک کردن
          </button>
          <button
            onClick={handleSendCoords}
            type="submit"
            disabled={points.length !== 2}
            className="text-md font-md col-span-3 my-3 block w-full rounded bg-sky-500 px-6 pb-2 pt-2.5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-sky-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            محاسبه
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-3xl text-sky-950">فاصله شهرها</h1>
        <p className="text-md mb-10 tracking-wide text-sky-600">
          با انتخاب 2 نقطه در نقشه فاصله بین آن ها و زمان لازم برای حرکت بین
          آنها را مشاهده نمایید
        </p>

        {!!result ? (
          <div className=" mt-5 flex h-2/3 flex-col items-center justify-around py-10">
            <div>
              <h3 className="text-2xl text-sky-900">
                فاصله دو نقطه انتخاب شده برابر است با :
              </h3>
              <p className="text-2xl tracking-wide text-sky-600">
                {(result?.distance[0].distance / 1000).toFixed(2)} کیلومتر
              </p>
            </div>
            <div>
              <h3 className="text-2xl text-sky-900">
                حد فاصل زمانی برابر است با :
              </h3>
              <p className="text-2xl tracking-wide text-sky-600">
                {(result?.duration[0].duration / 3600).toFixed(2)} ساعت.
              </p>
            </div>
          </div>
        ) : (
          <div className="align-center flex h-1/2 flex-col justify-center ">
            <h3 className="text-2xl text-sky-700">
              هنوز نقطه‌ای انتخاب نکرده‌اید...
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default DistanceMap;
