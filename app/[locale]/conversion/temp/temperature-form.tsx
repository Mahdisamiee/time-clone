"use client";
import SpinnerLoading from "@/components/shared/spinner-loading";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useId, useState } from "react";
import Select from "react-select";

const options = [
  {
    value: "celsius2fahrenheit",
    label: "تبدیل سلسیوس به فارانهایت",
    lLabel: "Celsius to Fahrenheit conversion",
  },
  {
    value: "fahrenheit2celsius",
    label: "تبدیل فارانهایت به سلسیوس",
    lLabel: "Fahrenheit to Celsius conversion",
  },
  {
    value: "celsius2kelvin",
    label: "تبدیل سلسیوس به کلوین",
    lLabel: "Celsius to Kelvin",
  },
  {
    value: "kelvin2celsius",
    label: "تبدیل کلوین به سلسیوس",
    lLabel: "Kelvin to Celsius conversion",
  },
  {
    value: "kelvin2fahrenheit",
    label: "تبدیل کلوین به فارانهایت",
    lLabel: "Kelvin to Fahrenheit conversion",
  },
  {
    value: "fahrenheit2kelvin",
    label: "تبدیل فارانهایت به کلوین",
    lLabel: "Fahrenheit to Kelvin",
  },
];

type OptionType = {
  value: string;
  label: string;
};

const TemperatureForm = () => {
  const t = useTranslations("Conversion.Temperature");
  const locale = useLocale();
  const [selectedMode, setSelectedMode] = useState<OptionType | null>(null);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState(null);
  const [generatedOptions, setGeneratedOptions] = useState<OptionType[]>();

  useEffect(() => {
    const newOptions = options.map((option) =>
      locale === "fa"
        ? { value: option.value, label: option.label }
        : { value: option.value, label: option.lLabel },
    );
    setGeneratedOptions(newOptions);
  }, [locale]);

  const handleSelectMode = (option: OptionType | null) => {
    if (option === null) return;
    setSelectedMode(() => option);
  };

  const handleChangeValue = (e: any) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (selectedMode === null || value === "") {
      alert("لطفا حالت  تبدیل یا مقدار تبدیل را وارد کنید!");
      return;
    }
    try {
      const payload = { conv_mode: selectedMode?.value, val: value };
      setLoading(true);
      const res = await fetch(
        "https://harchi.app/api/conversions-api/temp-conv/",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          cache: "no-cache",
          next: {
            revalidate: 0,
          },
          body: JSON.stringify(payload),
        },
      );
      const result = await res.json();
      setResult(() => result.result);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-around gap-5 py-10">
      <Select
        instanceId={useId()}
        className="w-full text-center text-lg sm:w-3/4 sm:text-right"
        value={selectedMode}
        onChange={handleSelectMode}
        options={generatedOptions}
        placeholder={t("selectType")}
        isLoading={loading}
        isDisabled={loading}
      />
      <input
        type="number"
        className="w-full rounded-md border-[#ccc] transition-all duration-100 hover:border-[#B3B3B3] sm:w-3/4"
        value={value}
        onChange={handleChangeValue}
        placeholder={t("valuePlaceholder")}
        disabled={loading}
      />
      <button
        onClick={handleSubmit}
        type="submit"
        disabled={loading}
        className="text-md font-md mb-2 block w-full rounded bg-blue-500 px-6 pb-2 pt-2.5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] sm:w-3/4 dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        {t("submit")}
      </button>

      {result !== null ? (
        <div className="mt-5 text-center">
          <h1 className="text-2xl text-sky-950">
            {t("result")} {selectedMode?.label}
          </h1>
          <p className="mt-5 text-2xl tracking-wide text-sky-600">{result}</p>
        </div>
      ) : loading && result == null ? (
        <SpinnerLoading />
      ) : null}
    </div>
  );
};

export default TemperatureForm;
