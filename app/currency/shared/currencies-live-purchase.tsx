"use client";
import { API_BASE_URL, CURRENCIES_API } from "@/lib/api-constants";
import { useEffect, useState } from "react";
import { CurrencyItem } from "./models/currecncies-data";

async function getCurenciesData() {
  const res = await fetch(`${API_BASE_URL}/${CURRENCIES_API}/`, {
    next: { revalidate: 100 },
    cache: "no-store",
  });
  return res.json();
}

const CurrenciesLivePurchase = () => {
  const [currData, setCurrData] = useState<CurrencyItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCurenciesData();
        setCurrData(result.currencies);
      } catch (error) {
        throw new Error("مشکلی در دریافت اطلاعات پیش آمده است!").message;
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex h-full w-full flex-row items-center justify-between gap-10 overflow-x-auto overflow-y-hidden">
      {currData
        ? currData.map((curr) => (
            <div
              key={curr.item}
              className="flex flex-1 flex-col flex-nowrap items-start justify-between whitespace-nowrap "
            >
              <h3 className="text-nowrap text-sky-900">{curr.item}</h3>
              <p className="tracking-wide text-sky-600">{curr.price}</p>
              <p className="text-sm tracking-wide text-sky-600"> {curr.rate}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default CurrenciesLivePurchase;
