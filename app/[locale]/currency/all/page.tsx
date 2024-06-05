import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import CurrenciesForm from "./currencies-form";

type Props = {
  params: { locale: string };
};

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
      "Calcul du prix de l'or",
      "calcul du prix de l'or 18 carats",
      "Le prix de l'or",
      "Le prix d'un shekel d'or",
      "prix de la pièce d'or",
      "prix en dollars",
      "Prix du pétrole Brent",
      "prix du bitcoin",
      "Indice boursier",
      "Le prix de l'euro",
      "Calcul de l'achat d'or",
      "calcul du prix d'achat de l'or",
      "حساب سعر الذهب",
      "حساب سعر الذهب عيار 18 قيراط",
      "سعر الذهب",
      "سعر شيكل الذهب",
      "سعر العملة الذهبية",
      "سعر الدولار",
      "سعر نفط برنت",
      "سعر البيتكوين",
      "مؤشر الأسهم",
      "سعر اليورو",
      "حساب شراء الذهب",
      "حساب سعر شراء الذهب",
    ],
    alternates: {
      canonical: `/currency/all`,
      languages: {
        fa: `/fa/currency/all`,
        en: `/en/currency/all`,
        fr: `/fr/currency/all`,
        ar: `/ar/currency/all`,
      },
    },
  };
}

const AllCurrenciesPage = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  return (
    <>
      <CurrenciesForm />
    </>
  );
};

export default AllCurrenciesPage;
