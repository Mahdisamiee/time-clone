import { GoldPurchaseFormPropertis } from "../models/gold-purchase-form-properties";

export const calculateGoldPurchasePrice = (
  dataForm: GoldPurchaseFormPropertis,
) => {
  const formater = new Intl.NumberFormat();

  const goldCost: number = Number(dataForm.weight) * Number(dataForm.cost);
  const feeCost: number = (Number(dataForm.feePercent) * goldCost) / 100;
  const sellerProfit: number =
    ((feeCost + goldCost) * Number(dataForm.profitPercent)) / 100;
  const taxCost: number =
    ((feeCost + sellerProfit) * Number(dataForm.taxPercent)) / 100;

  const finallCost = goldCost + feeCost + sellerProfit + taxCost;

  return {
    goldCost: formater.format(goldCost),
    feeCost: formater.format(feeCost),
    sellerProfit: formater.format(sellerProfit),
    taxCost: formater.format(taxCost),
    finallCost: formater.format(finallCost),
  };
};
