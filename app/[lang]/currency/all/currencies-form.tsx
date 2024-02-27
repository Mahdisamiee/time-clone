"use client";
import { API_BASE_URL, CURRENCIES_API } from "@/lib/api-constants";
import { useEffect, useState } from "react";
import { CurrencyItem } from "../shared/models/currecncies-data";
import SimpleCard from "@/components/home/simple-card";

async function getCurenciesData() {
  const res = await fetch(`${API_BASE_URL}/${CURRENCIES_API}/`, {
    next: { revalidate: 100 },
    cache: "no-store",
  });
  return res.json();
}

const CurrenciesForm = () => {
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
    <div className="grid h-full w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {currData
        ? currData.map((curr) => (
            <SimpleCard key={curr.item}>
              <div className="flex flex-col flex-nowrap w-full items-center justify-between whitespace-nowrap ">
                <div className="flex flex-row justify-between px-10 w-full">
                  <h3 className=" text-xl text-sky-900 sm:text-2xl">
                    {curr.item}
                  </h3>
                  <span className="text-md tracking-wide text-sky-600">
                    {curr.rate}
                  </span>
                </div>
                <p className="my-4 text-2xl tracking-wide text-sky-600 sm:text-4xl">
                  {curr.price}
                  <span className="text-md text-sky-900 sm:text-lg mr-1">ریال</span>
                </p>
              </div>
            </SimpleCard>
          ))
        : null}
    </div>
  );
};

export default CurrenciesForm;
