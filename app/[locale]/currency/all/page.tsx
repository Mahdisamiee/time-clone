import React from "react";
import CurrenciesForm from "./currencies-form";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Currency.All.metadata");
  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "محاسبه قیمت طلا",
      "محاسبه قیمت طلا 18 عیار",
      "قیمت انس طلا",
      "قیمت مثقال طلا",
      "قیمت سکه طلا",
      "قیمت دلار",
      "قیمت نفت برنت",
      "قیمت بیتکوین",
      "شاخص بورس",
      "قیمت یورو",
      "محاسبه خرید طلا",
      "محاسبه قیمت خرید طلا",
      "Gold price calculation",
      "calculation of the price of 18 karat gold",
      "The price of gold",
      "The price of a shekel of gold",
      "gold coin price",
      "dollar price",
      "Brent oil price",
      "bitcoin price",
      "Stock index",
      "Euro's Price",
      "Gold purchase calculation",
      "calculation of the purchase price of gold",
    ],
    alternates: {
      canonical: `/currency/all`,
      languages: {
        fa: `/fa/currency/all`,
        en: `/en/currency/all`,
      },
    },
  };
}

const AllCurrenciesPage = () => {
  return (
    <>
      <CurrenciesForm />
    </>
  );
};

export default AllCurrenciesPage;
