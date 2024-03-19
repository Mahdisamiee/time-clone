import React from "react";
import CurrenciesForm from "./currencies-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "قیمت لحظه‌ای طلا و ارز",
  description:
    "قیمت لحظه‌ای  طلا 1 عیار انس طلا سکه طلا قیمت دلار قیمت یورو نفت برنت  بیتکوین. محاسبه قیمت خرید و فروش طلا. محاسبه مالیات ، سود ،اجرت ، قیمت خام خرید فروش طلا و شاخص بورس",
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
    "",
  ],
  alternates: {
    canonical: `https://harchi.app/currency/all`,
  },
};

const AllCurrenciesPage = () => {
  return (
    <>
      <CurrenciesForm />
    </>
  );
};

export default AllCurrenciesPage;
