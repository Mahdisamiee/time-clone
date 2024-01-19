"use client";
import { API_BASE_URL, CURRENCIES_API } from "@/lib/api-constants";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CurrencyDataProperties } from "./models/currecncies-data";

async function getCurencyData(currName: string) {
  const res = await fetch(`${API_BASE_URL}/${CURRENCIES_API}/${currName}`, {
    next: { revalidate: 100 },
    cache: "no-store",
  });
  return res.json();
}

export default function GoldLivePurchase({ title }: { title: string }) {
  const [data, setData] = useState<CurrencyDataProperties>();

  const path = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      const arr = path.split("/");
      const currency = arr[arr.length - 1];
      const result = await getCurencyData(currency);
      setData(result);
    };

    // fetchData();
  }, [path]);

  return (
    <div className="py-4">
      <h1 className="block text-xl text-sky-900 sm:text-2xl">{title}</h1>

      <h2 className="my-10 block text-3xl tracking-wide text-sky-600 sm:text-5xl">
        5,600,452
      </h2>

      <h3 className="text-xl text-sky-900 sm:text-2xl">تومان</h3>
      <p className="text-md my-10 tracking-wide text-sky-600">
        شنبه، 23 آذر 1402
      </p>
    </div>
  );
}
