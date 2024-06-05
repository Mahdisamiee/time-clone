import BreadcrumbNavbar from "@/components/shared/breadcrumb-navbar";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import TemperatureForm from "./temperature-form";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Conversion.Temperature.metadata");

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "تبدیل دما",
      "تبدیل سلسیوس به فارانهایت",
      "تبدیل سلسیوس به کلوین",
      "تبدیل کلوین به سلسیوس",
      "تبدیل فارانهایت به سلسیوس",
      "تبدیل فارانهایت به کلوین",
      "تبدیل کلوین به فارانهایت",
      "تبدیل سلسیوس به فارانهایت و برعکس",
      "تبدیل سلسیوس به کلوین و برعکس",
      "تبدیل کلوین به سلسیوس و برعکس",
      "تبدیل فارانهایت به سلسیوس و برعکس",
      "تبدیل فارانهایت به کلوین و برعکس",
      "تبدیل کلوین به فارانهایت و برعکس",
      "temperature conversion",
      "Celsius to Fahrenheit Conversion",
      "Celsius to Kelvin Conversion",
      "Kelvin to Celsius Conversion",
      "Convert Fahrenheit to Celsius",
      "Convert Fahrenheit to Kelvin",
      "Kelvin to Fahrenheit conversion",
      "Celsius to Fahrenheit and vice versa",
      "Celsius to Kelvin conversion and vice versa",
      "Kelvin to Celsius conversion and vice versa",
      "Fahrenheit to Celsius and vice versa",
      "Fahrenheit to Kelvin and vice versa",
      "Converting Kelvin to Fahrenheit and vice versa",
      "conversion de température",
      "Conversion Celsius en Fahrenheit",
      "Conversion Celsius en Kelvin",
      "Conversion Kelvin en Celsius",
      "Convertir les degrés Fahrenheit en Celsius",
      "Convertir les degrés Fahrenheit en Kelvin",
      "Conversion Kelvin en Fahrenheit",
      "Celsius à Fahrenheit et vice versa",
      "Conversion Celsius en Kelvin et vice versa",
      "Conversion Kelvin en Celsius et vice versa",
      "Fahrenheit en Celsius et vice versa",
      "Fahrenheit en Kelvin et vice versa",
      "Conversion de Kelvin en Fahrenheit et vice versa",
      "تحويل درجة الحرارة",
      "التحويل من درجة مئوية إلى فهرنهايت",
      "تحويل مئوية إلى كلفن",
      "تحويل كلفن إلى درجة مئوية",
      "تحويل فهرنهايت إلى مئوية",
      "تحويل فهرنهايت إلى كلفن",
      "التحويل من كلفن إلى فهرنهايت",
      "من درجة مئوية إلى فهرنهايت والعكس",
      "التحويل من درجة مئوية إلى كلفن والعكس",
      "التحويل من كلفن إلى درجة مئوية والعكس",
      "فهرنهايت إلى مئوية والعكس",
      "فهرنهايت إلى كلفن والعكس",
      "تحويل الكلفن إلى فهرنهايت والعكس",
      "تحويل درجة الحرارة",
      "التحويل من مئوية إلى فهرنهايت",
      "التحويل مئوية إلى كلفن",
      "تحويل كلفن إلى مئوية",
    ],

    alternates: {
      canonical: `/conversion/temp`,
      languages: {
        fa: `/fa/conversion/temp`,
        en: `/en/conversion/temp`,
        fr: `/fr/conversion/temp`,
        ar: `/ar/conversion/temp`,
      },
    },
  };
}

const TemperatureHome = () => {
  return (
    <>
      {/* <LocalNavbar items={navbarItems} /> */}

      <div className="z-10 w-full max-w-3xl px-5 xl:px-0">
        <BreadcrumbNavbar params={{ mode: "Temperature" }} />
        <TemperatureForm />
      </div>
    </>
  );
};
export default TemperatureHome;
