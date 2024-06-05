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
  const t = useTranslations("Currency.PriceDol");
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
  const t = await getTranslations("Currency.PriceDol.metadata");
  return {
    title: "قیمت لحظه‌ای دلار",
    description:
      "قیمت لحظه‌ای دلار امروز ، محاسبه خرید و فروش دلار به صورت لحظه‌ای",
    keywords: [
      "قیمت دلار",
      "قیمت دلار آمریکا",
      "قیمت لحظه‌ای دلار",
      "قیمت لحظه‌ای دلار آمریکا",
      "قیمت دلار امروز",
      "قیمت دلار آمریکا امروز",
      "دلار دست دوم",
      "دلار آمریکا دست دوم",
      "دلار دست دوم امروز",
      "قیمت دلار دست دوم",
      "قیمت دلار دست دوم امروز",
      "دلار چند",
      "دلار آمریکا چند",
      "دلار چند امروز",
      "دلار آمریکا چند امروز",
      "قیمت دلار چند",
      "قیمت دلار آمریکا چند",
      "قیمت دلار چند امروز",
      "قیمت دلار آمریکا چند امروز",
      "دلار",
      "دلار آمریکا",
      "دلار امروز",
      "دلار آمریکا امروز",
      "دلار لحظه‌ای",
      "دلار آمریکا لحظه‌ای",
      "دلار لحظه‌ای امروز",
      "دلار آمریکا لحظه‌ای امروز",
      "dollar price",
      "US dollar price",
      "spot dollar price",
      "The current price of the US dollar",
      "Today's Dollar Price",
      "US dollar price today",
      "secondhand dollar",
      "second hand US dollar",
      "Today's second-hand dollar",
      "second hand dollar price",
      "Today's used dollar price",
      "how many dollars",
      "how many US dollars",
      "How many dollars today",
      "How many US dollars today",
      "How many dollars is the price",
      "How much is the price in US dollars",
      "How much is the dollar price today?",
      "How much is the price of the US dollar today?",
      "Dollar",
      "U.S. dollar",
      "Today's Dollar",
      "US dollar today",
      "spot dollar",
      "U.S. dollar spot",
      "Today's Spot Dollar",
      "U.S. dollar today's moment",
      "prix en dollars",
      "Prix en dollars américains",
      "prix au comptant en dollars",
      "Le prix actuel du dollar américain",
      "Prix en dollars d'aujourd'hui",
      "Prix en dollars américains aujourd'hui",
      "dollar d'occasion",
      "Dollar américain d'occasion",
      "Le dollar d'occasion d'aujourd'hui",
      "prix en dollars d'occasion",
      "Prix en dollars d'occasion d'aujourd'hui",
      "combien de dollars",
      "combien de dollars américains",
      "Combien de dollars aujourd'hui",
      "Combien de dollars américains aujourd'hui",
      "Combien de dollars est le prix",
      "Combien coûte le prix en dollars américains",
      "Combien coûte le dollar aujourd'hui ?",
      "Quel est le prix du dollar américain aujourd'hui ?",
      "Dollar",
      "Dollars américain",
      "Le dollar d'aujourd'hui",
      "Le dollar américain aujourd'hui",
      "dollar au comptant",
      "Spot du dollar américain",
      "Le dollar au comptant d'aujourd'hui",
      "Le dollar américain, le moment d'aujourd'hui",
      "سعر الدولار",
      "سعر الدولار الأمريكي",
      "سعر الدولار الفوري",
      "السعر الحالي للدولار الأمريكي",
      "سعر الدولار اليوم",
      "سعر الدولار الأمريكي اليوم",
      "الدولار المستعمل",
      "الدولار الأمريكي المستعمل",
      "الدولار المستعمل اليوم",
      "سعر الدولار المستعمل",
      "سعر الدولار المستخدم اليوم",
      "كم هو عدد الدولارات",
      "كم دولار أمريكي",
      "كم دولار اليوم",
      "كم دولار أمريكي اليوم",
      "كم دولار هو السعر",
      "كم هو السعر بالدولار الأمريكي",
      "كم سعر الدولار اليوم؟",
      "كم سعر الدولار الأمريكي اليوم؟",
      "دولار",
      "الدولار الأمريكي",
      "الدولار اليوم",
      "الدولار الأمريكي اليوم",
      "الدولار الفوري",
      "بقعة الدولار الأمريكي",
      "الدولار الفوري اليوم",
      "الدولار الأمريكي لحظة اليوم",
    ],
    alternates: {
      canonical: `/currency/price_dol`,
      languages: {
        fa: `/fa/currency/price_dol`,
        en: `/en/currency/price_dol`,
        fr: `/fr/currency/price_dol`,
        ar: `/ar/currency/price_dol`,
      },
    },
  };
}
