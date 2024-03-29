"use client";
import { API_BASE_URL, CURRENCIES_API } from "@/lib/api-constants";
import { useEffect, useState } from "react";
import { CurrencySpecific } from "./models/currecncies-data";
import SpinnerLoading from "@/components/shared/spinner-loading";
import { useTranslations } from "next-intl";

async function getCurencyData(currName: string) {
  const res = await fetch(`${API_BASE_URL}/${CURRENCIES_API}/${currName}/`, {
    next: { revalidate: 100 },
    cache: "no-store",
  });
  return res.json();
}

export default function GoldLivePurchase({
  title,
  currName,
}: {
  title: string;
  currName: string;
}) {
  const t = useTranslations("Currency.Shared");

  const [data, setData] = useState<CurrencySpecific | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCurencyData(currName);
      setData(result);
    };

    fetchData();
  }, [currName]);

  return (
    <div className="py-4">
      <h1 className="block text-xl text-sky-900 sm:text-2xl">
        {title ? title : data?.item}
      </h1>

      {data !== null ? (
        <>
          <h2 className="my-10 block text-3xl tracking-wide text-sky-600 sm:text-5xl">
            {data?.price}
          </h2>

          <h3 className="text-xl text-sky-900 sm:text-2xl">{t("rial")}</h3>
          <p className="text-md my-10 tracking-wide text-sky-600">
            {data?.date} - {t("time")}: {new Date().getHours()}:
            {new Date().getMinutes()}
          </p>
        </>
      ) : (
        <div className="my-5">
          <SpinnerLoading />
        </div>
      )}
    </div>
  );
}
