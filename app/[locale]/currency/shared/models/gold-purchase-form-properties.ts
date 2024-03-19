export interface GoldPurchaseFormPropertis {
  weight?: string;
  cost?: string;
  profitPercent?: string;
  taxPercent?: string;
  feePercent?: string;
}

export interface GoldCalculatedFormProperties {
  goldCost: string;
  feeCost: string;
  sellerProfit: string;
  taxCost: string;
  finallCost: string;
}
