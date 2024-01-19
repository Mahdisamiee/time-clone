"use client";
import { API_BASE_URL, CURRENCIES_API } from "@/lib/api-constants";
import React, { useEffect, useState } from "react";
import { CurrencyDataProperties } from "./models/currecncies-data";

async function getCurenciesData() {
  const res = await fetch(`${API_BASE_URL}/${CURRENCIES_API}`);
  return res.json();
}

const CurrenciesLivePurchase = () => {
  const [currData, setCurrData] = useState<CurrencyDataProperties[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCurenciesData();
        setCurrData(result);
      } catch (error) {
        throw new Error("مشکلی در دریافت اطلاعات پیش آمده است!").message;
      }
    };

    fetchData();
  }, []);

  return (
    <div
      
      className="flex flex-row gap-10 w-full h-full justify-between items-center overflow-x-auto overflow-y-hidden"
    >
      {currData
        ? currData.map((curr) => (
            <div
              key={curr.item}
              className="flex-1 flex flex-col flex-nowrap whitespace-nowrap items-start justify-between "
            >
              <h3 className="text-sky-900 text-nowrap">{curr.item}</h3>
              <p className="tracking-wide text-sky-600">{curr.price}</p>
              <p className="tracking-wide text-sky-600 text-sm"> {curr.rate}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default CurrenciesLivePurchase;
