import ms from "ms";

import hijriMoment from "moment-hijri";
import jalaaliMoment from "moment-jalaali";

function jalaaliMonthLength(jalaaliYear: any, jalaaliMonth: any) {
  if (jalaaliMonth < 1 || jalaaliMonth > 12) {
    throw new Error("Invalid Jalaali month.");
  }

  const jalCal = [
    0,
    31,
    31,
    31,
    31,
    31,
    30,
    30,
    30,
    30,
    30,
    29, // Days in Jalaali months
  ];

  if (jalaaliMonth === 12 && (jalaaliYear % 33) % 4 === 1) {
    return 30; // Special case for Jalaali leap year
  }

  return jalCal[jalaaliMonth];
}

function isHijriDateValid(year: any, month: any, day: any) {
  if (year < 1356 || year > 1500) {
    return false; // Year should be within the valid Hijri year range
  }

  if (month < 1 || month > 12) {
    return false; // Month should be between 1 and 12
  }

  const hijriMonthLength = hijriMoment.iDaysInMonth(year, month - 1);

  if (day < 1 || day > hijriMonthLength) {
    return false; // Day should be within the valid range for the selected month
  }

  return true; // Date is valid
}

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

/**
 *
 *  resource  : https://stackoverflow.com/questions/71421825/how-to-convert-persian-jalali-dates-to-other-18-calendar-dates-in-javascript-w
 *  resource2 : https://stackoverflow.com/questions/71222556/how-to-convert-any-of-the-5-islamic-hijri-calendars-dates-to-any-of-18-world
 */
export const persianToCalendars = (
  year: number,
  month: number,
  day: number,
  op: any = {},
): any => {
  const formatOut = (gD: Date) =>
    "toCal" in op
      ? ((op.calendar = op.toCal),
        new Intl.DateTimeFormat(op.locale ?? "en", op).format(gD))
      : gD;

  const dFormat = new Intl.DateTimeFormat("en-u-ca-persian", {
    dateStyle: "short",
    timeZone: "UTC",
  });

  let gD: Date = new Date(Date.UTC(2000, month - 1, day));
  gD = new Date(gD.setUTCDate(gD.getUTCDate() + 226895));

  const gY: number = gD.getUTCFullYear() - 2000 + year;
  gD = new Date(
    `${gY < 0 ? "-" : "+"}${("00000" + Math.abs(gY)).slice(-6)}-${(
      "0" +
      (gD.getUTCMonth() + 1)
    ).slice(-2)}-${("0" + gD.getUTCDate()).slice(-2)}`,
  );

  let [pM, pD, pY] = [...dFormat.format(gD).split("/")];
  let i = 0;
  gD = new Date(
    gD.setUTCDate(
      gD.getUTCDate() +
        Math.floor(
          year * 365.25 +
            month * 30.44 +
            day -
            (parseInt(pY.split(" ")[0]) * 365.25 +
              parseInt(pM) * 30.44 +
              parseInt(pD)),
        ) -
        2,
    ),
  );

  while (i < 4) {
    [pM, pD, pY] = [...dFormat.format(gD).split("/")];
    if (
      parseInt(pD) === day &&
      parseInt(pM) === month &&
      parseInt(pY.split(" ")[0]) === year
    ) {
      return formatOut(gD);
    }
    gD = new Date(gD.setUTCDate(gD.getUTCDate() + 1));
    i++;
  }

  throw new Error("Invalid Persian Date!");
};

export const hijriToCalendars = (
  year: number,
  month: number,
  day: number,
  op: any = {},
): string => {
  op.fromCal ??= "islamic-umalqura";
  let gD = new Date(Date.UTC(2000, 0, 1));
  gD = new Date(
    gD.setUTCDate(
      gD.getUTCDate() +
        ~~(227022 + (year + (month - 1) / 12 + day / 354) * 354.367),
    ),
  );
  const gY = gD.getUTCFullYear() - 2000;
  const dFormat = new Intl.DateTimeFormat("en-u-ca-" + op.fromCal, {
    dateStyle: "short",
    timeZone: "UTC",
  });
  gD = new Date(
    (gY < 0 ? "-" : "+") +
      ("00000" + Math.abs(gY)).slice(-6) +
      "-" +
      ("0" + (gD.getUTCMonth() + 1)).slice(-2) +
      "-" +
      ("0" + gD.getUTCDate()).slice(-2),
  );
  let [iM, iD, iY] = [...dFormat.format(gD).split("/")];
  let i = 0;
  gD = new Date(
    gD.setUTCDate(
      gD.getUTCDate() +
        ~~(
          year * 354 +
          month * 29.53 +
          day -
          (parseInt(iY.split(" ")[0]) * 354 +
            parseInt(iM) * 29.53 +
            parseInt(iD) -
            2)
        ),
    ),
  );
  while (i < 4) {
    [iM, iD, iY] = [...dFormat.format(gD).split("/")];
    if (
      parseInt(iD) == day &&
      parseInt(iM) == month &&
      parseInt(iY.split(" ")[0]) == year
    ) {
      return formatOutput(gD);
    }
    gD = new Date(gD.setUTCDate(gD.getUTCDate() + 1));
    i++;
  }
  throw new Error("Invalid " + op.fromCal + " date!");

  function formatOutput(gD: Date): string {
    return "toCal" in op
      ? ((op.calendar = op.toCal),
        new Intl.DateTimeFormat(op.locale ?? "en", op).format(gD))
      : gD.toISOString();
  }
};

export const convertHijriToGregorian = (islamicBirthDate: {
  year: number | null;
  month: number | null;
  day: number | null;
}) => {

  if (
    !isHijriDateValid(
      islamicBirthDate.year,
      islamicBirthDate.month,
      islamicBirthDate.day,
    )
  ){
    throw new Error("Invalid Hijri Day.");
  }

  const islamicDate = hijriMoment(
    `${islamicBirthDate.year}-${islamicBirthDate.month}-${islamicBirthDate.day}`,
    "iYYYY-iMM-iDD",
  ).startOf("day"); // Start of Islamic day

  // Convert Islamic date to Gregorian using moment-hijri
  const gregorianDate = islamicDate.format("YYYY-MM-DD");

  // Parse the Gregorian date to get year, month, and day
  const gregorianParts = gregorianDate.split("-");
  const gregorianYear = parseInt(gregorianParts[0]);
  const gregorianMonth = parseInt(gregorianParts[1]);
  const gregorianDay = parseInt(gregorianParts[2]);
  return { year: gregorianYear, month: gregorianMonth, day: gregorianDay };
};

export const convertJalaliToGregorian = (jalaliBirthDate: {
  year: number | null;
  month: number | null;
  day: number | null;
}) => {
  // Check if the year is valid (between 1 and 9999)
  if (
    jalaliBirthDate.year === null ||
    jalaliBirthDate.year < 1 ||
    jalaliBirthDate.year > 9999
  ) {
    throw new Error("Invalid Jalaali year.");
  }

  // Check if the month is valid (between 1 and 12)
  if (
    jalaliBirthDate.month === null ||
    jalaliBirthDate.month < 1 ||
    jalaliBirthDate.month > 12
  ) {
    throw new Error("Invalid Jalaali month.");
  }

  // Determine the maximum number of days in the selected month
  const maxDaysInMonth = jalaaliMonthLength(
    jalaliBirthDate.year,
    jalaliBirthDate.month,
  );

  // Check if the selected day is within the valid range
  if (
    jalaliBirthDate.day === null ||
    jalaliBirthDate.day < 1 ||
    jalaliBirthDate.day > maxDaysInMonth
  ) {
    throw new Error("Invalid Jalaali day for the selected month.");
  }

  // If the year, month, and day are valid, proceed with the conversion
  const jalaliDate = jalaaliMoment(
    `${jalaliBirthDate.year}-${jalaliBirthDate.month}-${jalaliBirthDate.day}`,
    "jYYYY-jMM-jDD",
  ).startOf("day"); // Start of Jalali day

  // Convert Jalali date to Gregorian using moment-jalaali
  const gregorianDate = jalaliDate.format("YYYY-MM-DD");

  // Parse the Gregorian date to get year, month, and day
  const gregorianParts = gregorianDate.split("-");
  const gregorianYear = parseInt(gregorianParts[0]);
  const gregorianMonth = parseInt(gregorianParts[1]);
  const gregorianDay = parseInt(gregorianParts[2]);

  return { year: gregorianYear, month: gregorianMonth, day: gregorianDay };
};

export const convertGregorianToJalali = (gregorianBirthDate: {
  year: number | null;
  month: number | null;
  day: number | null;
}) => {
  // Check if the month is valid (between 1 and 12)
  if (
    gregorianBirthDate.month === null ||
    gregorianBirthDate.month < 1 ||
    gregorianBirthDate.month > 12
  ) {
    throw new Error("Invalid Gregorian month.");
  }

  // Determine the maximum number of days in the selected month
  const maxDaysInMonth = new Date(
    gregorianBirthDate.year!,
    gregorianBirthDate.month,
    0,
  ).getDate();

  // Check if the selected day is within the valid range
  if (
    gregorianBirthDate.day === null ||
    gregorianBirthDate.day < 1 ||
    gregorianBirthDate.day > maxDaysInMonth
  ) {
    throw new Error("Invalid Gregorian day for the selected month.");
  }

  // If the day is valid, proceed with the conversion
  const gregorianDate = jalaaliMoment(
    `${gregorianBirthDate.year}-${gregorianBirthDate.month}-${gregorianBirthDate.day}`,
    "YYYY-MM-DD",
  ).startOf("day"); // Start of Gregorian day

  // Convert Gregorian date to Jalali using moment-jalaali
  const jalaliDate = gregorianDate.format("jYYYY-jMM-jDD");

  // Parse the Jalali date to get year, month, and day
  const jalaliParts = jalaliDate.split("-");
  const jalaliYear = parseInt(jalaliParts[0]);
  const jalaliMonth = parseInt(jalaliParts[1]);
  const jalaliDay = parseInt(jalaliParts[2]);

  return { year: jalaliYear, month: jalaliMonth, day: jalaliDay };
};

export const convertGregorianToHijri = (gregorianBirthDate: {
  year: number | null;
  month: number | null;
  day: number | null;
}) => {
  // Check if the month is valid (between 1 and 12)
  if (
    gregorianBirthDate.month === null ||
    gregorianBirthDate.month < 1 ||
    gregorianBirthDate.month > 12
  ) {
    throw new Error("Invalid Gregorian month.");
  }

  // Determine the maximum number of days in the selected month
  const maxDaysInMonth = new Date(
    gregorianBirthDate.year!,
    gregorianBirthDate.month,
    0,
  ).getDate();

  // Check if the selected day is within the valid range
  if (
    gregorianBirthDate.day === null ||
    gregorianBirthDate.day < 1 ||
    gregorianBirthDate.day > maxDaysInMonth
  ) {
    throw new Error("Invalid Gregorian day for the selected month.");
  }

  // If the month and day are valid, proceed with the conversion
  const gregorianDate = `${gregorianBirthDate.year}-${gregorianBirthDate.month}-${gregorianBirthDate.day}`;

  // Convert Gregorian date to Hijri using moment-hijri
  const hijriDate = hijriMoment(gregorianDate, "YYYY-MM-DD");
  return {
    year: hijriDate.iYear(),
    month: hijriDate.iMonth() + 1, // Add 1 to the month because moment-hijri months are 0-based
    day: hijriDate.iDate(),
  };
};
