import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Currency.Ons.metadata");
  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "قیمت طلا 18 عیار",
      "قیمت لحظه‌ای طلا 18 عیار",
      "قیمت طلا 18 عیار امروز",
      "طلا 18 عیار دست دوم",
      "طلا 18 عیار دست دوم امروز",
      "قیمت طلا 18 عیار دست دوم",
      "قیمت طلا 18 عیار دست دوم امروز",
      "طلا 18 عیار 740",
      "طلا 18 عیار 740 امروز",
      "قیمت طلا 18 عیار 740",
      "قیمت طلا 18 عیار 740 امروز",
      "طلا 18 عیار چند",
      "طلا 18 عیار چند امروز",
      "قیمت طلا 18 عیار چند",
      "قیمت طلا 18 عیار چند امروز",
      "طلا 18 عیار",
      "طلا 18 عیار امروز",
      "طلا 18 عیار لحظه‌ای",
      "طلا 18 عیار لحظه‌ای امروز",
    ],
    alternates: {
      canonical: `/currency/mesghal`,
      languages: {
        fa: `/fa/currency/mesghal`,
        en: `/en/currency/mesghal`,
      },
    },
  };
}
