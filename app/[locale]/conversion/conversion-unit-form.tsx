"use client";
import SpinnerLoading from "@/components/shared/spinner-loading";
import { UnitMode } from "@/lib/models/conversion";
import debounce from "lodash.debounce";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import {
  ChangeEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useState
} from "react";
import Select from "react-select";
import {
  fetchUnitOptions,
  postConversion,
  validateForm,
} from "services/unit-services";
import { defaultUnitsForMode } from "./unit-config";

const ConversionUnitForm = ({
  unitMode,
  unitData,
}: {
  unitMode: UnitMode;
  unitData?: string;
}) => {
  const t = useTranslations("Conversion.UnitForm");
  const router = useRouter();

  const defaults = defaultUnitsForMode[unitMode];
  const [fromUnit, setFromUnit] = useState(defaults ? defaults.fromUnit : "");
  const [toUnit, setToUnit] = useState(defaults ? defaults.toUnit : "");
  const [unitOptions, setUnitOptions] = useState<any>();
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (unitMode) {
      setLoading(true);
      fetchUnitOptions(unitMode)
        .then((result) => {
          if (result.units) setUnitOptions(result.units);
        })
        .catch((error) =>
          console.error("Failed to fetch unit options:", error.message),
        )
        .finally(() => setLoading(false));
    }
  }, [unitMode]);

  useEffect(() => {
    if (unitData && unitData.includes("-to-")) {
      const [initialFromUnit, initialToUnit] = unitData.split("-to-");
      setFromUnit(initialFromUnit);
      setToUnit(initialToUnit);
    }
  }, [unitData]);

  const updateRoute = useCallback(
    debounce((newFromUnit: string, newToUnit: string) => {
      const newPath = `/conversion/${unitMode}/${newFromUnit}-to-${newToUnit}`;
      router.push(newPath);
      setResult(null);
    }, 300),
    [unitMode],
  );

  const handleFromUnitChange = (option: { value: string }) => {
    updateRoute(option.value, toUnit);
    setFromUnit(option.value);
  };

  const handleToUnitChange = (option: { value: string }) => {
    updateRoute(fromUnit, option.value);
    setToUnit(option.value);
  };

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.currentTarget.value);

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      const payload = {
        unit: unitMode,
        from_unit: fromUnit,
        to_unit: toUnit,
        val: value,
      };

      if (!validateForm(payload)) return;

      const conversionResult = await postConversion(payload);
      setResult(conversionResult.result);
    } catch (error: any) {
      alert(t("errorMessage"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-10 flex flex-col items-center justify-around gap-5 px-5 py-10">
      <h1 className="my-4 text-xl capitalize text-sky-500">
        {t("title")} {unitMode}
      </h1>
      <div className="sm-100 grid w-full grid-cols-1 gap-5 sm:grid-cols-3">
        <Select
          className="w-full text-center text-lg sm:text-right"
          defaultValue={fromUnit}
          value={unitOptions?.find(
            (option: { value: string }) => option.value === fromUnit,
          )}
          onChange={handleFromUnitChange}
          options={unitOptions}
          placeholder={t("from")}
          isLoading={loading}
          isDisabled={loading}
        />
        <Select
          className="w-full text-center text-lg sm:text-right"
          defaultValue={toUnit}
          value={unitOptions?.find(
            (option: { value: string }) => option.value === toUnit,
          )}
          onChange={handleToUnitChange}
          options={unitOptions}
          placeholder={t("to")}
          isLoading={loading}
          isDisabled={loading}
        />
        <input
          type="number"
          className="w-full rounded-md border-[#ccc] transition-all duration-100 hover:border-[#B3B3B3]"
          value={value}
          onChange={handleChangeValue}
          disabled={loading}
          placeholder={t("value")}
        />
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        disabled={loading}
        className="text-md font-md sm-100 mb-2 block w-full rounded bg-sky-500 px-6 pb-2 pt-2.5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-sky-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        {t("submit")}
      </button>

      {result !== null ? (
        <div className="mt-5 text-center">
          <h1 className="text-2xl capitalize text-sky-950">
            {t("result", { fromUnit: fromUnit, toUnit: toUnit })}
          </h1>
          <p className="mt-5 text-2xl tracking-wide text-sky-600">{result}</p>
        </div>
      ) : loading && result == null ? (
        <SpinnerLoading />
      ) : null}
    </div>
  );
};

export default ConversionUnitForm;
