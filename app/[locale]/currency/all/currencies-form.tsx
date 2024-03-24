"use client";
import { API_BASE_URL, CURRENCIES_API } from "@/lib/api-constants";
import { useEffect, useState } from "react";
import { CurrencyItem } from "../shared/models/currecncies-data";
import SimpleCard from "@/components/home/simple-card";
import { useTranslations } from "next-intl";

async function getCurenciesData() {
  const res = await fetch(`${API_BASE_URL}/${CURRENCIES_API}/`, {
    next: { revalidate: 100 },
    cache: "no-store",
  });
  return res.json();
}

const CurrenciesForm = () => {
  const tCurr = useTranslations("Currency.Shared");
  const tError = useTranslations("Errors");
  const [currData, setCurrData] = useState<CurrencyItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCurenciesData();
        setCurrData(result.currencies);
      } catch (error) {
        throw new Error(tError("fetchErrorMessages")).message;
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid h-full w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {currData
        ? currData.map((curr) => (
            <SimpleCard key={curr.item}>
              <div className="flex w-full flex-col flex-nowrap items-center justify-between whitespace-nowrap ">
                <div className="flex w-full flex-row justify-between px-10">
                  <h3 className=" text-xl text-sky-900 sm:text-2xl">
                    {curr.item}
                  </h3>
                  <span className="text-md tracking-wide text-sky-600">
                    {curr.rate}
                  </span>
                </div>
                <p className="my-4 text-2xl tracking-wide text-sky-600 sm:text-4xl">
                  {curr.price}
                  <span className="text-md mr-1 text-sky-900 sm:text-lg">
                    {tCurr("rial")}
                  </span>
                </p>
              </div>
            </SimpleCard>
          ))
        : null}
    </div>
  );
};

export default CurrenciesForm;
