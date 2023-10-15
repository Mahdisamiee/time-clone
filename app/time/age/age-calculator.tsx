"use client";
import { useState } from "react";
import moment from "moment-jalaali";
import { useDemoModal } from "@/components/home/demo-modal";
import DayAndTypeSelect from "./day&type-select";

interface JalaliBirthDate {
  day: number;
  month: number;
  year: number;
}

interface AgeDetail {
  years: number;
  months: number;
  days: number;
}

const calculateAge = (jalaliBirthDate: JalaliBirthDate): AgeDetail => {
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

const calculateAgeDiff = (jalaliBirthDate1: JalaliBirthDate, jalaliBirthDate2: JalaliBirthDate) :AgeDetail => {
  const birthDate1 = moment(
    `${jalaliBirthDate1.year}-${jalaliBirthDate1.month}-${jalaliBirthDate1.day}`,
    "jYYYY-jMM-jDD",
  ).startOf("day");
  const birthDate2 = moment(
    `${jalaliBirthDate2.year}-${jalaliBirthDate2.month}-${jalaliBirthDate2.day}`,
    "jYYYY-jMM-jDD",
  ).startOf("day");

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
}

const AgeCalculator = () => {
  const { DemoModal, setShowDemoModal } = useDemoModal();
  const [selectedDay, setSelectedDay] = useState<any>(null);
  const [selectedType, setSelectedType] = useState<string | null>(
    "انتخاب نوع محاسبه",
  );
  const [age, setAge] = useState<AgeDetail>({
    years: 1300,
    months: 1,
    days: 1,
  });

  const handleChangeCalculate = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    setSelectedType(e.currentTarget.textContent);
  };

  const handleDayChange = (e: any) => {
    setSelectedDay(e);
  };

  const handleCalculateAge = () => {
    console.log(selectedDay, selectedType);
    if (selectedDay === null) {
      alert("لطفا تاریخ تولد خودتون رو مشخص کنید");
    } else {
      switch (selectedType) {
        case "محاسبه سن و تاریخ تولد": {

          const calculatedAge = calculateAge(selectedDay);
          const diff = calculateAgeDiff({year:1378, month:7, day: 21}, {year:1402, month:7, day: 21});
          console.log("DIFFFFFF --->",diff);
          setAge(calculatedAge);
          setShowDemoModal(true);
          break;
        }
        case "محاسبه اختلاف سن دو نفر":{

          const diff = calculateAgeDiff({year:1378, month:7, day: 21}, {year:1402, month:7, day: 21});
          console.log(diff);
          // setAge(diff);
          // setShowDemoModal(true);
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
        {/* <CalcTypeSelect /> */}
        <DayAndTypeSelect
          selectedDay={selectedDay}
          selectedType={selectedType}
          onChangeCalculateType={handleChangeCalculate}
          onDayChange={handleDayChange}
        />

        <button
          onClick={handleCalculateAge}
          className="mt-20 flex w-1/3 items-center justify-center rounded-md border border-[#1d9bf0] px-3 py-2 text-[#1d9bf0] transition-all duration-75 hover:border-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none active:bg-blue-100"
        >
          <p className=" ">محاسبه</p>
        </button>
        <>{selectedDay ? DemoModal({ age, selectedDay }) : null}</>
      </div>
    </div>
  );
};

export default AgeCalculator;
