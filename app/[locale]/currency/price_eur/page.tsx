import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import ArzCalculateForm from "../shared/arz-calculate-form";
import CurrenciesLivePurchase from "../shared/currencies-live-purchase";
import GoldLivePurchase from "../shared/gold-live-purchase";
import SharedLayout from "../shared/shared-layout";

type Props = {
  params: { locale: string;  };
};


const GoldPage = ({params: {locale}}: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Currency.PriceEur");
  
  return (
    <SharedLayout
      livePurchase={<GoldLivePurchase title={t("title")} currName="یورو" />}
      calculateForm={
        <ArzCalculateForm
          vahed={t("vahed")}
          country={t("country")}
          market={t("market")}
          type={t("type")}
        />
      }
      summaryPurchase={<CurrenciesLivePurchase />}
    />
  );
};

export default GoldPage;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Currency.PriceEur.metadata");
  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "قیمت یورو",
      "قیمت لحظه‌ای یورو",
      "قیمت یورو امروز",
      "یورو دست دوم",
      "یورو دست دوم امروز",
      "قیمت یورو دست دوم",
      "قیمت یورو دست دوم امروز",
      "یورو چند",
      "یورو چند امروز",
      "قیمت یورو چند",
      "قیمت یورو چند امروز",
      "یورو",
      "یورو امروز",
      "یورو لحظه‌ای",
      "یورو لحظه‌ای امروز",
      "Euro's Price",
      "Euro spot price",
      "Today's Euro Price",
      "second hand euro",
      "Today's Second Hand Euro",
      "second hand euro price",
      "Today's used euro price",
      "a few euros",
      "how many euros today",
      "How much is the price of Euros",
      "How much is the price of the euro today?",
      "euro",
      "Euro Today",
      "Instant Euro",
      "Today's Moment Euro",
      "Le prix de l'euro",
      "Prix spot en euros",
      "Le prix en euros d'aujourd'hui",
      "euros d'occasion",
      "L'euro d'occasion d'aujourd'hui",
      "prix en euros d'occasion",
      "Prix de l'occasion en euros aujourd'hui",
      "quelques euros",
      "combien d'euros aujourd'hui",
      "Combien coûte l'euro",
      "Combien coûte l'euro aujourd'hui ?",
      "euro",
      "L'euro aujourd'hui",
      "Euros instantanés",
      "Le moment euro d'aujourd'hui",
      "سعر اليورو",
      "السعر الفوري لليورو",
      "سعر اليورو اليوم",
      "اليورو المستعمل",
      "اليورو المستعمل اليوم",
      "سعر اليورو المستعمل",
      "سعر اليورو المستخدم اليوم",
      "بضعة يورو",
      "كم يورو اليوم",
      "كم سعر اليورو",
      "كم هو سعر اليورو اليوم؟",
      "اليورو",
      "اليورو اليوم",
      "اليورو الفوري",
      "لحظة اليورو اليوم",
    ],
    alternates: {
      canonical: `/currency/price_eur`,
      languages: {
        fa: `/fa/currency/price_eur`,
        en: `/en/currency/price_eur`,
        fr: `/fr/currency/price_eur`,
        ar: `/ar/currency/price_eur`,
      },
    },
  };
}
