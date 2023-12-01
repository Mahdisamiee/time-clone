"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Select from "react-select";

const options = [
  { value: "length", label: "طول" },
  { value: "time", label: "زمان" },
  { value: "mass", label: "جرم" },
  { value: "area", label: "مساحت" },
  { value: "data-transfer", label: "سرعت انتقال - data transfer" },
  { value: "digital-storage", label: "حافظه - digital storage" },
  { value: "energy", label: "انرژی" },
  { value: "volume", label: "حجم" },
  { value: "speed", label: "سرعت" },
  { value: "pressure", label: "فشار" },
];

type OptionType = {
  value: string;
  label: string;
};

const createUnitOptions = (units: string[]) => {
  return units.map((unit) => ({
    value: unit,
    label: `${unit.toLocaleUpperCase()}`,
  }));
};

const UnitForm = () => {
  const [selectedMode, setSelectedMode] = useState<any>(null);
  const [unitOptions, setUnitOptions] = useState<any>();
  const [fromUnit, setFromUnit] = useState();
  const [toUnit, setToUnit] = useState();
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState(null);

  /**
   * #### Change Calculation Mode
   *
   * fetch new unit depends on specific each Calculation Mode(length, time, mass ,...)
   * @param option
   */
  const handleSelectMode = async (option: OptionType) => {
    setSelectedMode(() => option.value);
    setLoading(true);
    try {
      const res = await fetch(
        `https://kit365.ir/api/conversions-api/generic-conv/${option.value}/`,
        {
          cache: "no-cache",
          next: {
            revalidate: 0,
          },
          method: "GET",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      );
      const result = await res.json();
      const units = result.units;
      console.log(result);
      setUnitOptions(() => createUnitOptions(units));
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  /**
   * #### Change Value
   *
   * to set the value of input box and update "value" State
   * @param e
   */
  const handleChangeValue = (e: any) => {
    setValue(e.currentTarget.value);
  };

  /**
   * Submit Data to API and get back Result
   * @param e
   */
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const payload = {
        unit: selectedMode,
        from_unit: fromUnit,
        to_unit: toUnit,
        val: value,
      };
      setLoading(true);
      const res = await fetch(
        "https://kit365.ir/api/conversions-api/generic-conv/",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );
      const result = await res.json();
      console.log(result);
      setResult(result.result);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-around gap-5 py-10">
      {/* Unit Format Selector */}
      <Select
        className="w-full text-center text-lg sm:w-3/4 sm:text-right"
        defaultValue={selectedMode}
        onChange={handleSelectMode}
        options={options}
        placeholder={"انتخاب نوع تبدیل"}
        isLoading={loading}
        isDisabled={loading}
      />
      {/* Calc Settings (from, to, val) Box */}
      <div className={`grid w-full grid-cols-1 gap-5 sm:w-3/4 sm:grid-cols-3`}>
        {/* from_unit Selector */}
        <Select
          className="w-full text-center text-lg sm:text-right"
          defaultValue={fromUnit}
          onChange={(option: any) => setFromUnit(option.value)}
          options={unitOptions}
          placeholder={"تبدیل از "}
          isLoading={loading}
          isDisabled={loading}
        />
        {/* to_unit Selector */}
        <Select
          className="w-full text-center text-lg sm:text-right"
          defaultValue={toUnit}
          onChange={(option: any) => setToUnit(option.value)}
          options={unitOptions}
          placeholder={"تبدیل به"}
          isLoading={loading}
          isDisabled={loading}
        />
        {/* value to Convert selector */}
        <input
          type="number"
          className="w-full rounded-md border-[#ccc] transition-all duration-100 hover:border-[#B3B3B3]"
          value={value}
          onChange={handleChangeValue}
          disabled={loading}
          placeholder="مقدار..."
        />
      </div>
      {/* Submit button to Send Data */}
      <button
        onClick={handleSubmit}
        type="submit"
        disabled={loading}
        className="text-md font-md mb-2 block w-full rounded bg-blue-500 px-6 pb-2 pt-2.5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] sm:w-3/4"
      >
        محاسبه
      </button>

      {result !== null ? (
        <div className="mt-5 text-center">
          <h1 className="text-2xl text-sky-950">
            نتیجه تبدیل از {fromUnit} به {toUnit} :{" "}
          </h1>
          <p className="mt-5 text-2xl tracking-wide text-sky-600">{result}</p>
        </div>
      ) : null}
    </div>
  );
};

export default UnitForm;
