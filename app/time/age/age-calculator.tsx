"use client";
import { useRef, useState } from "react";
import moment from "moment-jalaali";
import HijriMoment from "moment-hijri";
import { useResultModal } from "./result-modal";
import DaySelector from "./day-selector";
import PopoverMenu from "@/components/home/popover-menu";

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

const calculateAge = (jalaliBirthDate: BirthDate): ResultDetail => {
  const today = moment().startOf("day");
  const birthDate = moment(
    `${jalaliBirthDate.year}-${jalaliBirthDate.month}-${jalaliBirthDate.day}`,
    "jYYYY-jMM-jDD",
  ).startOf("day");

  let years = today.jYear() - birthDate.jYear();
  let months = today.jMonth() - birthDate.jMonth();
  let days = today.jDate() - birthDate.jDate();

  if (days < 0) {
    months -= 1;
    days += moment.jDaysInMonth(birthDate.jYear(), birthDate.jMonth());
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
};

const calculateIslamicAgeFromJalali = (jalaliBirthDate: BirthDate): ResultDetail => {
  // Convert Jalali to Gregorian
  const gregorianBirthDate = moment(`${jalaliBirthDate.year}-${jalaliBirthDate.month}-${jalaliBirthDate.day}`, 'jYYYY-jMM-jDD').startOf('day');

  // Convert Gregorian to Islamic
  const islamicBirthDate = HijriMoment(gregorianBirthDate.format('YYYY-MM-DD'), 'YYYY-MM-DD').startOf('day');

  // Get today's Islamic date
  const todayIslamic = HijriMoment().startOf('day');

  // Calculate age
  let years = todayIslamic.iYear() - islamicBirthDate.iYear();
  let months = todayIslamic.iMonth() - islamicBirthDate.iMonth();
  let days = todayIslamic.iDate() - islamicBirthDate.iDate();

  if (days < 0) {
    months -= 1;
    days += HijriMoment.iDaysInMonth(islamicBirthDate.iYear(), islamicBirthDate.iMonth());
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


const popoverMenuItems = [
  "محاسبه سن و تاریخ تولد",
  "محاسبه اختلاف سن دو نفر",
  "محاسبه سن قمری",
];

const AgeCalculator = () => {
  const { ResultModal, setResultDemoModal } = useResultModal();
  const [selectedDay, setSelectedDay] = useState<any>(null);
  const [selectedDay2, setSelectedDay2] = useState<any>(null);
  const [selectedType, setSelectedType] = useState<string | null>(
    "انتخاب نوع محاسبه",
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
  };

  const handleDayChange = (e: any) => {
    setSelectedDay(e);
  };
  const handleDay2Change = (e: any) => {
    setSelectedDay2(e);
  };

  const handleCalculateAge = () => {
    console.log(selectedDay, selectedType);
    if (selectedDay === null) {
      alert("لطفا تاریخ تولد خودتون رو مشخص کنید");
    } else {
      switch (selectedType) {
        case "محاسبه سن و تاریخ تولد": {
          const calculatedAge = calculateAge(selectedDay);
          setResult(calculatedAge);
          setResultDemoModal(true);
          break;
        }
        case "محاسبه اختلاف سن دو نفر": {
          const diff = calculateAgeDiff(
            selectedDay,
            selectedDay2,
          );
          console.log(diff);
          setResult(diff);
          setResultDemoModal(true);
          break;
        }
        case "محاسبه سن قمری": {
          const calculatedAge = calculateIslamicAgeFromJalali(
            selectedDay,
          );
          console.log(calculatedAge);
          setResult(calculatedAge);
          setResultDemoModal(true);
          break;
        }
        default:
          alert("نوع محاسبه را انتخاب کنید");
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
          className="mb-5 flex w-full max-w-3xl flex-col items-center justify-items-center p-10 px-5 xl:px-0"
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
          className="mt-20 flex w-1/3 items-center justify-center rounded-md border border-[#1d9bf0] px-3 py-2 text-[#1d9bf0] transition-all duration-75 hover:border-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none active:bg-blue-100"
        >
          <p className=" ">محاسبه</p>
        </button>
        <>{selectedDay ? ResultModal({ result, selectedDay, calcType: selectedType }) : null}</>
      </div>
    </div>
  );
};

export default AgeCalculator;
