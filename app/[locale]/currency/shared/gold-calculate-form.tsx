"use client";

import { ChangeEvent, useState } from "react";
import {
  GoldCalculatedFormProperties,
  GoldPurchaseFormPropertis,
} from "./models/gold-purchase-form-properties";
import { calculateGoldPurchasePrice } from "./services/calculate-gold-price-service";

const GoldCalculateForm = () => {
  const [goldForm, setGoldForm] = useState<GoldPurchaseFormPropertis>({
    weight: "",
    cost: "",
    profitPercent: "",
    taxPercent: "",
    feePercent: "",
  });
  const [tax, setTax] = useState<boolean>(false);
  const [result, setResult] = useState<GoldCalculatedFormProperties>();

  function handleChangeValue(event: ChangeEvent<HTMLInputElement>): void {
    const target = event.currentTarget;
    setGoldForm((prevVal) => {
      return { ...prevVal, [target.name]: target.value };
    });
  }

  function handleTaxChecked(event: ChangeEvent<HTMLInputElement>): void {
    setTax(event.target.checked);
  }

  const handleSubmit = () => {
    const result = calculateGoldPurchasePrice(goldForm);
    setResult(result);
  };

  return (
    <div className="grid w-full grid-cols-1 place-content-around gap-10 py-2 md:grid-cols-5">
      <div className="col-span-1 flex flex-col items-center justify-around gap-10 md:col-span-3">
        <h1 className="text-xl capitalize text-sky-500">
          محاسبه خرید و فروش به تومان
        </h1>
        {/* Calc Settings (from, to, val) Box */}
        <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-3">
          {/* from_unit Selector */}

          {/* value to Convert selector */}
          <input
            type="number"
            min={1}
            name="weight"
            value={goldForm.weight}
            onChange={handleChangeValue}
            className="w-full rounded-md border-[#ccc] transition-all duration-100 hover:border-[#B3B3B3]"
            placeholder="مقدار طلا (گرم)"
          />

          {/* value to Convert selector */}
          <input
            type="number"
            min={1}
            name="cost"
            onChange={handleChangeValue}
            value={goldForm.cost}
            className="w-full rounded-md border-[#ccc] transition-all duration-100 hover:border-[#B3B3B3]"
            placeholder="قیمت 1 گرم طلا"
          />
          <div className="flex items-center justify-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value="tax"
              onChange={handleTaxChecked}
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 "
            />
            <label className="ms-2 text-sm font-medium text-gray-600">
              تبدیل با محاسبه مالیات
            </label>
          </div>
          {/* value to Convert selector */}
          {tax ? (
            <>
              <input
                type="number"
                min={0}
                name="profitPercent"
                onChange={handleChangeValue}
                value={goldForm.profitPercent}
                className="w-full rounded-md border-[#ccc] transition-all duration-100 hover:border-[#B3B3B3]"
                placeholder="درصد سود فروشنده"
                disabled={!tax}
              />
              <input
                type="number"
                min={0}
                name="taxPercent"
                onChange={handleChangeValue}
                value={goldForm.taxPercent}
                className="w-full rounded-md border-[#ccc] transition-all duration-100 hover:border-[#B3B3B3]"
                placeholder="درصد مالیات"
                disabled={!tax}
              />
              {/* value to Convert selector */}
              <input
                type="number"
                min={0}
                name="feePercent"
                onChange={handleChangeValue}
                value={goldForm.feePercent}
                className="w-full rounded-md border-[#ccc] transition-all duration-100 hover:border-[#B3B3B3]"
                placeholder="درصد اجرت"
                disabled={!tax}
              />
            </>
          ) : null}
        </div>
        {/* Submit button to Send Data */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="text-md font-md mb-2 block w-full rounded bg-blue-500 px-6 pb-2 pt-2.5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] "
        >
          محاسبه
        </button>
      </div>

      <div className="col-span-1 md:col-span-2">
        <h1 className="text-xl capitalize text-sky-950">نتیجه تبدیل</h1>

        <div className="mt-5 text-center">
          <ul className="sm:text-md grid h-full w-full grid-rows-4 gap-4 px-3 text-center text-base ">
            <li className="grid w-full grid-cols-4 gap-1">
              <h4 className="col-span-4 inline-block py-2 text-right align-middle text-sky-600 lg:col-span-2">
                قیمت نهایی:
              </h4>
              <span className="text-md col-span-4 inline-block whitespace-nowrap rounded bg-sky-200 px-1 py-2 text-center align-middle font-bold text-sky-800 lg:col-span-2 ">
                {result?.finallCost}
              </span>
            </li>
            <li className="grid w-full grid-cols-4 gap-1">
              <h4 className="col-span-4 inline-block py-2 text-right align-middle text-sky-600 lg:col-span-2">
                قیمت خام طلا:
              </h4>
              <span className="text-md col-span-4 inline-block whitespace-nowrap rounded bg-sky-200 px-1 py-2 text-center align-middle font-bold text-sky-800 lg:col-span-2 ">
                {result?.goldCost}
              </span>
            </li>
            <li className="grid w-full grid-cols-4 gap-1">
              <h4 className="col-span-4 inline-block py-2 text-right align-middle text-sky-600 lg:col-span-2">
                میزان اجرت:
              </h4>
              <span className="text-md col-span-4 inline-block whitespace-nowrap rounded bg-sky-200 px-1 py-2 text-center align-middle font-bold text-sky-800 lg:col-span-2 ">
                {result?.feeCost}
              </span>
            </li>
            <li className="grid w-full grid-cols-4 gap-1">
              <h4 className="col-span-4 inline-block py-2 text-right align-middle text-sky-600 lg:col-span-2">
                مقدار مالیات:
              </h4>
              <span className="text-md col-span-4 inline-block whitespace-nowrap rounded bg-sky-200 px-1 py-2 text-center align-middle font-bold text-sky-800 lg:col-span-2 ">
                {result?.taxCost}
              </span>
            </li>
            <li className="grid w-full grid-cols-4 gap-1">
              <h4 className="col-span-4 inline-block py-2 text-right align-middle text-sky-600 lg:col-span-2">
                سود فروشنده:
              </h4>
              <span className="text-md col-span-4 inline-block whitespace-nowrap rounded bg-sky-200 px-1 py-2 text-center align-middle font-bold text-sky-800 lg:col-span-2 ">
                {result?.sellerProfit}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GoldCalculateForm;
