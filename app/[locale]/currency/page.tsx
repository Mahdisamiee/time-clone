import ToolsListMapper from "@/components/shared/tools-list-mapper";
import { Metadata } from "next";
import {
  getTranslations,
  unstable_setRequestLocale
} from "next-intl/server";

type Props = {
  params: { locale: string;  };
};

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
      "Calcul du prix de l'or",
      "calcul du prix de l'or 18 carats",
      "Calcul du prix de l'once d'or",
      "calculer le prix d'un shekel d'or",
      "calculer le prix des pièces d'or",
      "Calcul du prix en dollars",
      "Calcul du prix en euros",
      "Calcul de l'achat d'or",
      "calcul du prix d'achat de l'or",
      "Or 18 carats",
      "or",
      "Pièce d'or",
      "Dollar",
      "euro",
      "Anas Or",
      "حساب سعر الذهب",
      "حساب سعر الذهب عيار 18 قيراط",
      "حساب سعر أوقية الذهب",
      "حساب سعر شيكل الذهب",
      "حساب سعر العملات الذهبية",
      "حساب سعر الدولار",
      "حساب سعر اليورو",
      "حساب شراء الذهب",
      "حساب سعر شراء الذهب",
      "ذهب عيار 18 قيراط",
      "ذهب",
      "عملة ذهبية",
      "دولار",
      "اليورو",
      "أنس الذهب",
    ],
    alternates: {
      canonical: `/currency`,
      languages: {
        fa: `/fa/currency`,
        en: `/en/currency`,
        fr: `/fr/currency`,
        ar: `/ar/currency`,
      },
    },
  };
}

export default async function CurrencyHome({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
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
