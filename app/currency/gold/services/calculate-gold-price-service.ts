import { GoldPurchaseFormPropertis } from "../models/gold-purchase-form-properties";

export const calculateGoldPurchasePrice = (
  dataForm: GoldPurchaseFormPropertis,
) => {
  const goldCost: number = Number(dataForm.weight) * Number(dataForm.cost);
  const feeCost: number = (Number(dataForm.feePercent) * goldCost) / 100;
  const sellerProfit: number =
    ((feeCost + goldCost) * Number(dataForm.profitPercent)) / 100;
  const taxCost: number =
    ((feeCost + sellerProfit) * Number(dataForm.taxPercent)) / 100;

  const finallCost = goldCost + feeCost + sellerProfit + taxCost;

  return {
    goldCost,
    feeCost,
    sellerProfit,
    taxCost,
    finallCost,
  };
};
