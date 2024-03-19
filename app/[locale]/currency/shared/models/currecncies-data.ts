export interface CurrencyDataProperties {
  currencies: CurrencyItem[];
  date: string;
  time: string;
}

export interface CurrencySpecific {
  item: string;
  price: string;
  rate: string;
  flag: string;
  date: string;
  time: string;
}

export interface CurrencyItem {
  item: string;
  price: string;
  rate: string;
  flag: string;
}
