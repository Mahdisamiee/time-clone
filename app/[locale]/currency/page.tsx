import ToolsListMapper from "@/components/shared/tools-list-mapper";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Currency.metadata");
  return {
    title: t("title"),
    description: t("description"),
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
      "Gold price calculation",
      "calculation of the price of 18 karat gold",
      "Calculation of the price of an ounce of gold",
      "calculating the price of a shekel of gold",
      "calculating the price of gold coins",
      "Dollar Price Calculation",
      "Euro price calculation",
      "Gold purchase calculation",
      "calculation of the purchase price of gold",
      "18 karat gold",
      "gold",
      "Gold coin",
      "Dollar",
      "euro",
      "Anas Gold",
    ],
    alternates: {
      canonical: `/currency`,
      languages: {
        fa: `/fa/currency`,
        en: `/en/currency`,
      },
    },
  };
}

export default async function CurrencyHome() {
  const t = await getTranslations("Currency.Links");

  const tools = [
    {
      title: t("geram18"),
      url: "/currency/geram18",
    },
    {
      title: t("ons"),
      url: "/currency/ons",
    },
    {
      title: t("mesghal"),
      url: "/currency/mesghal",
    },
    {
      title: t("coin"),
      url: "/currency/coin",
    },
    {
      title: t("priceDol"),
      url: "/currency/price_dol",
    },
    {
      title: t("priceEur"),
      url: "/currency/price_eur",
    },
  ];
  return (
    <div className="z-10 w-full max-w-screen-lg px-5 xl:px-0">
      <ToolsListMapper tools={tools} />
    </div>
  );
}
