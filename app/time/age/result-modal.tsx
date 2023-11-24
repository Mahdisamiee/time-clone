import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
import { persianToCalendars } from "@/lib/utils";

const ResultModal = ({
  showResultModal,
  setResultDemoModal,
  details,
}: {
  showResultModal: boolean;
  setResultDemoModal: Dispatch<SetStateAction<boolean>>;
  details: {
    calcType: string | null;
    result: { years: number; months: number; days: number };
    selectedDay: { year: number; month: number; day: number };
  };
}) => {
  return (
    <Modal showModal={showResultModal} setShowModal={setResultDemoModal}>
      <div className="h-2/3 w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex h-full flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:space-y-6 md:px-16">
          <a href="https://kit365.ir">
            <Image
              src="/logo.png"
              alt="Precedent Logo"
              className="h-7 w-7 rounded-full"
              width={20}
              height={20}
            />
          </a>
          {details?.calcType === "محاسبه سن و تاریخ تولد" ? (
            <>
              <h3 className="mb-10 text-3xl font-bold text-gray-800">
                سن شما مطابق تقویم شمسی
              </h3>
              <hr className="mb-10 mt-2 h-1 w-full rounded bg-sky-300" />
              <p className="text-2xl text-gray-500">
                سن شما {details?.result.years} سال و {details?.result.months}{" "}
                ماه و {details?.result.days} روز است.
              </p>
              <hr className="mb-10 mt-2 h-1 w-full rounded bg-sky-300" />
              <h4 className="text-md text-gray-500">
                <p className="inline text-lg text-sky-800">قمری : </p>
                {persianToCalendars(
                  details.selectedDay.year,
                  details.selectedDay.month,
                  details.selectedDay.day,
                  {
                    toCal: "islamic-civil",
                    dateStyle: "full",
                    locale: "fa",
                  },
                )}
              </h4>
              <h4 className="text-md text-gray-500">
                <p className="inline text-lg text-sky-800">میلادی : </p>
                {persianToCalendars(
                  details.selectedDay.year,
                  details.selectedDay.month,
                  details.selectedDay.day,
                  {
                    toCal: "iso8601",
                    dateStyle: "full",
                    locale: "en",
                  },
                )}
              </h4>
            </>
          ) : details?.calcType === "محاسبه اختلاف سن دو نفر" ? (
            <>
              <h3 className="mb-10 text-3xl font-bold text-gray-800">
                اختلاف سن دو نفر
              </h3>
              <hr className="mb-10 mt-2 h-1 w-full rounded bg-sky-300" />
              <p className="text-2xl text-gray-500">
                اختلاف سن دو نفر برابر : {details?.result.years} سال و{" "}
                {details?.result.months} ماه و {details?.result.days} روز است.
              </p>
            </>
          ) : (
            <>
              <h3 className="mb-10 text-3xl font-bold text-gray-800">
                محاسبه سن قمری شما
              </h3>
              <hr className="mb-10 mt-2 h-0.5 w-full rounded bg-gray-200" />
              <p className="text-2xl text-gray-500">
                سن قمری شما : {details?.result.years} سال و{" "}
                {details?.result.months} ماه و {details?.result.days} روز قمری
                است.
              </p>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};

export function useResultModal() {
  const [showResultModal, setResultDemoModal] = useState(false);

  const ResultModalCallback = useCallback(
    (details: {
      calcType: string | null;
      result: { years: number; months: number; days: number };
      selectedDay: { year: number; month: number; day: number };
    }) => {
      if (details.result && details.selectedDay)
        return (
          <ResultModal
            showResultModal={showResultModal}
            setResultDemoModal={setResultDemoModal}
            details={details}
          />
        );
      else
        return (
          <>
            <p>مشکلی در نمایش پیش آمده است. لطفا یکبار دیگر امتحان کنید</p>
          </>
        );
    },
    [showResultModal, setResultDemoModal],
  );

  return useMemo(
    () => ({
      setResultDemoModal,
      ResultModal: (details: {
        calcType: string | null;
        result: { years: number; months: number; days: number };
        selectedDay: { year: number; month: number; day: number };
      }) => ResultModalCallback(details),
    }),
    [setResultDemoModal, ResultModalCallback],
  );
}
