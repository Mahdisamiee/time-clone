"use client";
import { ChangeEvent, MouseEvent, useEffect, useId, useState } from "react";
import Select from "react-select";
import {
  fetchUnitOptions,
  postConversion,
  validateForm,
} from "services/unit-services";

const createUnitOptions = (units: string[]) => {
  return units.map((unit) => ({
    value: unit,
    label: `${unit.toLocaleUpperCase()}`,
  }));
};

const ConversionUnitForm = ({ unitMode }: { unitMode: string }) => {
  const [unitOptions, setUnitOptions] = useState<any>();
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const handleUnitOptions = async () => {
      try {
        setLoading(true);
        const result = await fetchUnitOptions(unitMode);
        const units = result.units;
        if (units) {
          setUnitOptions(createUnitOptions(units));
        }
      } catch (error: any) {
        console.error("Failed to fetch unit options:", error.message);
      } finally {
        setLoading(false);
      }
    };
    console.log("hello");
    handleUnitOptions();
  }, []);

  function handleChangeValue(event: ChangeEvent<HTMLInputElement>): void {
    setValue(event.currentTarget.value);
  }

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const payload = {
      unit: unitMode,
      from_unit: fromUnit,
      to_unit: toUnit,
      val: value,
    };

    if (!validateForm(payload)) {
      return;
    }

    try {
      setLoading(true);
      const result = await postConversion(payload);
      setResult(result.result);
    } catch (error: any) {
      console.error("Error during conversion:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-10 flex flex-col items-center justify-around gap-5 py-10">
      <h3>نوع تبدیل رو از پدر میگیرم</h3>
      {/* Calc Settings (from, to, val) Box */}
      <div className="grid w-full grid-cols-1 gap-5 sm:w-3/4 sm:grid-cols-3">
        {/* from_unit Selector */}
        <Select
          instanceId={useId()}
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
          instanceId={useId()}
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

export default ConversionUnitForm;
