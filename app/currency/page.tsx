import ToolsListMapper from "@/components/shared/tools-list-mapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "لیست ارز و طلا",
  description:
    "محاسبه و تبدیل قیمت طلا، سکه، انس طلا، طلا 18 عیار، دلار و یورو",
  keywords: [
    "محاسبه قیمت طلا",
    "محاسبه قیمت طلا 18 عیار",
    "محاسبه قیمت انس طلا",
    "محاسبه قیمت مثقال طلا",
    "محاسبه قیمت سکه طلا",
    "محاسبه قیمت دلار",
    "محاسبه قیمت یورو",
    "محاسبه خرید طلا",
    "محاسبه قیمت خرید طلا",
    "طلا 18 عیار",
    "طلا",
    "سکه طلا",
    "دلار",
    "یورو",
    "انس طلا",
  ],
  alternates: {
    canonical: `https://harchi.app/currency`,
  },
};

export default async function CurrencyHome() {
  return (
    <div className="z-10 w-full max-w-screen-lg px-5 xl:px-0">
      <ToolsListMapper tools={tools} />
    </div>
  );
}

const tools = [
  {
    title: "طلا 18 عیار",
    url: "/currency/geram18",
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
