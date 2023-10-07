import ms from "ms";

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return "never";
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? "" : " ago"
  }`;
};

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init);

  if (!res.ok) {
    const json = await res.json();
    if (json.error) {
      const error = new Error(json.error) as Error & {
        status: number;
      };
      error.status = res.status;
      throw error;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }

  return res.json();
}

export function nFormatter(num: number, digits?: number) {
  if (!num) return "0";
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits || 1).replace(rx, "$1") + item.symbol
    : "0";
}

export function capitalize(str: string) {
  if (!str || typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const truncate = (str: string, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length)}...`;
};

export const dayFormatter = (jalaliDay: string | null = null) => {
  if (jalaliDay !== null || jalaliDay !== "") {
    const jalaliMonthLookup = [
      { value: "1", symbol: "فروردین" },
      { value: "2", symbol: "اردیبهشت" },
      { value: "3", symbol: "خرداد" },
      { value: "4", symbol: "تیر" },
      { value: "5", symbol: "مرداد" },
      { value: "6", symbol: "شهریور" },
      { value: "7", symbol: "مهر" },
      { value: "8", symbol: "آبان" },
      { value: "9", symbol: "آذر" },
      { value: "10", symbol: "دی" },
      { value: "11", symbol: "بهمن" },
      { value: "12", symbol: "اسفند" },
    ];
    const qamariMonthLookup = [
      { value: "1", symbol: "محرم" },
      { value: "2", symbol: "صفر" },
      { value: "3", symbol: "ربیع‌الاول" },
      { value: "4", symbol: "ربیع‌الثانی" },
      { value: "5", symbol: "جمادی‌الاول" },
      { value: "6", symbol: "جمادی‌الثانی" },
      { value: "7", symbol: "رجب" },
      { value: "8", symbol: "شعبان" },
      { value: "9", symbol: "رمضان" },
      { value: "10", symbol: "شوال" },
      { value: "11", symbol: "ذی‌القعده" },
      { value: "12", symbol: "ذی‌الحجه" },
    ];

    const monthValue = jalaliDay?.split(" - ")[0].split("/")[1];
    const dayValue = jalaliDay?.split(" - ")[0].split("/")[2];
    const newMonthFormat = jalaliMonthLookup.find(
      (item) => item.value === monthValue,
    )?.symbol;
    return `${dayValue} ${newMonthFormat}`;
  }
};
