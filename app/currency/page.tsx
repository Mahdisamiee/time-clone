import ToolsListMapper from "@/components/shared/tools-list-mapper";
import React from "react";

export default async function CurrencyHome() {
  return (
    <div className="z-10 w-full max-w-screen-lg px-5 xl:px-0">
      <ToolsListMapper tools={tools} />
    </div>
  );
}

const tools = [
  {
    title: "طلا",
    url: "/currency/gold",
  },
  {
    title: "انس طلا",
    url: "/currency/ons",
  },
  {
    title: "مثقال طلا",
    url: "/currency/mesghal",
  },
  {
    title: "طلا 18 عیار",
    url: "/currency/geram18",
  },
  {
    title: "سکه طلا",
    url: "/currency/coin",
  },
  {
    title: "قیمت دلار",
    url: "/currency/price_dol",
  },
  {
    title: "قیمت یورو",
    url: "/currency/price_eur",
  },
];
