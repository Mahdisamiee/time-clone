import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Time.metadata");
  return {
    title: "محاسبه سن دقیق",
    description:
      "محاسبه سن دقیق بر مبنای سال و ماه و روز تولد و تعیین اختلاف سن ، محاسبه تاریخ تولد مطابق تقویم میلادی شمسی قمری",
    keywords: [
      "محاسبه سن",
      "محاسبه تاریخ تولد",
      "محاسبه تاریخ دقیق تولد",
      "محاسبه روز تولد",
      "محاسبه تاریخ تولد به میلادی",
      "محاسبه تاریخ تولد به قمری",
      "تبدیل تاریخ تولد",
      "تبدیل تاریخ تولد به میلادی",
      "تبدیل تاریخ تولد به قمری",
      "age calculation",
      "calculate date of birth",
      "Calculating the exact date of birth",
      "birthday calculation",
      "Calculation of date of birth in AD",
      "calculation of date of birth in lunar terms",
      "Change date of birth",
      "Convert date of birth to Gregorian",
      "Convert date of birth to lunar",
    ],
    alternates: {
      canonical: `/time/age`,
      languages: {
        fa: `/fa/time/age`,
        en: `/en/time/age`,
      },
    },
  };
}
