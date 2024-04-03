"use client";
import { API_BASE_URL, CURRENCIES_API } from "@/lib/api-constants";
import { useEffect, useState } from "react";
import { CurrencyItem } from "./models/currecncies-data";
import SpinnerLoading from "@/components/shared/spinner-loading";
import { useLocale, useTranslations } from "next-intl";

async function getCurenciesData() {
  const res = await fetch(`${API_BASE_URL}/${CURRENCIES_API}/`, {
    next: { revalidate: 100 },
    cache: "no-store",
  });
  return res.json();
}

const CurrenciesLivePurchase = () => {
  const t = useTranslations("Errors");
  const locale = useLocale();
  const [currData, setCurrData] = useState<CurrencyItem[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCurenciesData();
        setCurrData(result.currencies);
      } catch (error) {
        throw new Error(t("fetchErrorMessage")).message;
      }
    };

    fetchData();
  }, [t]);

  return (
    <div className="flex h-full w-full flex-row items-center justify-between gap-10 overflow-x-auto overflow-y-hidden">
      {currData ? (
        currData.map((curr) => (
          <div
            key={curr.item}
            className="flex flex-1 flex-col flex-nowrap items-start justify-between whitespace-nowrap "
          >
            <h3 className="text-nowrap ">{locale === "fa" ? curr.item : curr.eitem}</h3>
            <p className="tracking-wide text-sky-600">{curr.price}</p>
            <p className="text-sm tracking-wide text-sky-600"> {curr.rate}</p>
          </div>
        ))
      ) : (
        <div className="w-100 flex-1 flex-row justify-center">
          <SpinnerLoading />
        </div>
      )}
    </div>
  );
};

export default CurrenciesLivePurchase;
