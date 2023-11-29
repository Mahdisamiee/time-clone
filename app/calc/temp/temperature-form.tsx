"use client";
import { useEffect, useState } from "react";
import Select from "react-select";

const options = [
  { value: "celsius2fahrenheit", label: "تبدیل سلسیوس به فارانهایت" },
  { value: "fahrenheit2celsius", label: "تبدیل فارانهایت به سلسیوس" },
  { value: "celsius2kelvin", label: "تبدیل سلسیوس به کلوین" },
  { value: "kelvin2celsius", label: "تبدیل کلوین به سلسیوس" },
  { value: "kelvin2f", label: "تبدیل کلوین به فارانهایت" },
  { value: "fahrenheit2kelvin", label: "تبدیل فارانهایت به کلوین" },
];

type OptionType = {
  value: string;
  label: string;
};

const TemperatureForm = () => {
  const [selectedMode, setSelectedMode] = useState<any>(null);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSelectMode = (option: OptionType) => {
    setSelectedMode(() => option.value);
  };

  const handleChangeValue = (e: any) => {
    setValue(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const payload = { conv_mode: selectedMode, val: value };
      setLoading(true);
      const res = await fetch(
        "https://kit365.ir/api/conversions-api/temp-conv",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );
      setLoading(false);
      console.log(res);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-around gap-5 py-10">
      <Select
        className="w-full text-center text-lg sm:w-3/4 sm:text-right"
        defaultValue={selectedMode}
        onChange={handleSelectMode}
        options={options}
        placeholder={"انتخاب حالت تبدیل"}
      />
      <input
        type="number"
        className="w-full rounded-md border-[#ccc] transition-all duration-100 hover:border-[#B3B3B3] sm:w-3/4"
        value={value}
        onChange={handleChangeValue}
        placeholder="وارد کردن دما"
      />
      <button
        onClick={handleSubmit}
        type="submit"
        disabled={loading}
        className="text-md font-md mb-2 block w-full rounded bg-blue-500 px-6 pb-2 pt-2.5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] sm:w-3/4"
      >
        محاسبه
      </button>
    </div>
  );
};

export default TemperatureForm;
