export interface GoldPurchaseFormPropertis {
  weight?: string;
  cost?: string;
  profitPercent?: string;
  taxPercent?: string;
  feePercent?: string;
}

export interface GoldCalculatedFormProperties {
  goldCost: number;
  feeCost: number;
  sellerProfit: number;
  taxCost: number;
  finallCost: number;
}
