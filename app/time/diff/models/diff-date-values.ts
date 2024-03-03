export interface DiffDateCalculator {
  date_type: "jalali" | "hijri" | "gregorian";
  start_year: number;
  start_month: number;
  start_day: number;
  end_year: number;
  end_month: number;
  end_day: number;
}
