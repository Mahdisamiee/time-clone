import { Metadata } from "next";
import TemperatureForm from "./temperature-form";
import LocalNavbar from "@/components/shared/local-navbar";
import BreadcrumbNavbar from "@/components/shared/breadcrumb-navbar";
import { getTranslations } from "next-intl/server";

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
    ],

    alternates: {
      canonical: `/conversion/temp`,
      languages: {
        fa: `/fa/conversion/temp`,
        en: `/en/conversion/temp`,
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
