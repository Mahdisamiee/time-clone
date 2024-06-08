"use client";
import { useRef, useState } from "react";
import moment from "moment-jalaali";
import HijriMoment from "moment-hijri";
import { useResultModal } from "./result-modal";
import DaySelector from "./day-selector";
import PopoverMenu from "@/components/home/popover-menu";
import { ageCalculatorService } from "./services/age-calculator-service";
import { useLocale, useTranslations } from "next-intl";

interface BirthDate {
  day: number;
  month: number;
  year: number;
}

interface ResultDetail {
  years: number;
  months: number;
  days: number;
}

// Constant Functions and Objects
const createMomentFromJalali = (jalaliDate: BirthDate) => {
  return moment(
    `${jalaliDate.year}-${jalaliDate.month}-${jalaliDate.day}`,
    "jYYYY-jMM-jDD",
  ).startOf("day");
};



const calculateIslamicAgeFromJalali = (
  jalaliBirthDate: BirthDate,
): ResultDetail => {
  // Convert Jalali to Gregorian
  const gregorianBirthDate = moment(
    `${jalaliBirthDate.year}-${jalaliBirthDate.month}-${jalaliBirthDate.day}`,
    "jYYYY-jMM-jDD",
  ).startOf("day");

  // Convert Gregorian to Islamic
  const islamicBirthDate = HijriMoment(
    gregorianBirthDate.format("YYYY-MM-DD"),
    "YYYY-MM-DD",
  ).startOf("day");

  // Get today's Islamic date
  const todayIslamic = HijriMoment().startOf("day");

  // Calculate age
  let years = todayIslamic.iYear() - islamicBirthDate.iYear();
  let months = todayIslamic.iMonth() - islamicBirthDate.iMonth();
  let days = todayIslamic.iDate() - islamicBirthDate.iDate();

  if (days < 0) {
    months -= 1;
    days += HijriMoment.iDaysInMonth(
      islamicBirthDate.iYear(),
      islamicBirthDate.iMonth(),
    );
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
};

const calculateAgeDiff = (
  jalaliBirthDate1: BirthDate,
  jalaliBirthDate2: BirthDate,
): ResultDetail => {
  let birthDate1 = createMomentFromJalali(jalaliBirthDate1);
  let birthDate2 = createMomentFromJalali(jalaliBirthDate2);

  if (birthDate2.isBefore(birthDate1)) {
    [birthDate1, birthDate2] = [birthDate2, birthDate1];
  }

  let years = birthDate2.jYear() - birthDate1.jYear();
  let months = birthDate2.jMonth() - birthDate1.jMonth();
  let days = birthDate2.jDate() - birthDate1.jDate();

  if (days < 0) {
    months -= 1;
    days += moment.jDaysInMonth(birthDate1.jYear(), birthDate1.jMonth());
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
};

const AgeCalculator = () => {
  const t = useTranslations("Time.Age.AgeCalculator");
  const locale = useLocale();
  const popoverMenuItems = [t("calculateAge"), t("ageDiff"), t("hijriAge")];

  const { ResultModal, setResultDemoModal } = useResultModal();
  const [selectedDay, setSelectedDay] = useState<any>(null);
  const [selectedDay2, setSelectedDay2] = useState<any>(null);
  const [selectedType, setSelectedType] = useState<string | null>(
    t("typeSelect"),
  );
  const [result, setResult] = useState<ResultDetail>({
    years: 1300,
    months: 1,
    days: 1,
  });

  const selectTypeRef = useRef<HTMLDivElement>(null);

  const handleSelectTypeFocus = () => {
    selectTypeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChangeCalculate = (e: React.MouseEvent) => {
    setSelectedType(e.currentTarget.textContent);
    setSelectedDay(null);
    setSelectedDay2(null);
  };

  const handleDayChange = (e: any) => {
    setSelectedDay(e);
  };
  const handleDay2Change = (e: any) => {
    setSelectedDay2(e);
  };

  const handleCalculateAge = async () => {
    if (selectedDay === null) {
      alert(t("alertSelectBirthDate"));
    } else {
      switch (selectedType) {
        case t("calculateAge"): {
          const result = await ageCalculatorService({
            date_type: locale == "fa" || locale == "ar" ? "jalali" : "gregorian",
            start_year: selectedDay.year,
            start_month: selectedDay.month,
            start_day: selectedDay.day,
          });
          setResult({
            days: result?.days,
            months: result?.monthes,
            years: result?.years,
          });
          setResultDemoModal(true);
          break;
        }
        case t("ageDiff"): {
          const diff = calculateAgeDiff(selectedDay, selectedDay2);
          setResult(diff);
          setResultDemoModal(true);
          break;
        }
        case t("hijriAge"): {
          const calculatedAge = calculateIslamicAgeFromJalali(selectedDay);
          setResult(calculatedAge);
          setResultDemoModal(true);
          break;
        }
        default:
          alert(t("alertSelectType"));
          break;
      }
    }
  };

  return (
    <div>
      <div
        className="mx-auto mt-8 flex animate-fade-up flex-col items-center justify-center opacity-0"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        <div
          className="mb-5 flex w-full max-w-3xl flex-col items-center justify-items-center px-3 py-7 xl:px-0"
          ref={selectTypeRef}
          onClick={handleSelectTypeFocus}
        >
          <PopoverMenu
            onClickItem={handleChangeCalculate}
            value={selectedType}
            items={popoverMenuItems}
          />
        </div>
        {/* <CalcTypeSelect /> */}
        <DaySelector
          selectedDay={selectedDay}
          selectedDay2={selectedDay2}
          selectedType={selectedType}
          onDayChange={handleDayChange}
          onDay2Change={handleDay2Change}
        />

        {/* Modal */}
        <button
          onClick={handleCalculateAge}
          className="mt-20 flex w-1/3 items-center justify-center rounded-md border border-sky-600 px-3 py-2 text-sky-700 transition-all duration-75 hover:border-sky-600 hover:bg-sky-500 hover:text-white focus:outline-none active:bg-sky-200"
        >
          <p>{t("submit")}</p>
        </button>
        <>
          {selectedDay
            ? ResultModal({ result, selectedDay, calcType: selectedType })
            : null}
        </>
      </div>
    </div>
  );
};

export default AgeCalculator;
