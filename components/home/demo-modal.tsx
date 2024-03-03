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

const DemoModal = ({
  showDemoModal,
  setShowDemoModal,
  details,
}: {
  showDemoModal: boolean;
  setShowDemoModal: Dispatch<SetStateAction<boolean>>;
  details: {
    calcType: string | null;
    result: { years: number; months: number; days: number };
    selectedDay: { year: number; month: number; day: number };
  };
}) => {
  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
      <div className="h-2/3 w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex h-full flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:space-y-6 md:px-16">
        <a href="https://harchi.app" className="text-sky-600">
              Harchi.app | هرچی
            </a>
          {details?.calcType === "محاسبه سن و تاریخ تولد" ? (
            <>
              <h3 className="mb-10 text-3xl font-bold">
                سن شما مطابق تقویم شمسی
              </h3>
              <hr className="w-full" />
              <p className="text-2xl text-gray-500">
                سن شما {details?.result.years} سال و {details?.result.months}{" "}
                ماه و {details?.result.days} روز است.
              </p>
              <hr className="my-2  w-full" />
              <p className="text-md text-gray-500">
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
              </p>
              <p className="text-md text-gray-500">
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
              </p>
              <p className="text-md text-gray-500">
                {persianToCalendars(
                  details.selectedDay.year,
                  details.selectedDay.month,
                  details.selectedDay.day,
                  {
                    toCal: "iso8601",
                    dateStyle: "full",
                    locale: "fa",
                  },
                )}
              </p>
            </>
          ) : details?.calcType === "محاسبه اختلاف سن دو نفر" ? (
            <>
              <h3 className="mb-10 text-3xl font-bold">
                اختلاف سن مطابق تقویم شمسی
              </h3>
              <hr className="w-full" />
              <p className="text-2xl text-gray-500">
                اختلاف سن شما : {details?.result.years} سال و{" "}
                {details?.result.months} ماه و {details?.result.days} روز است.
              </p>
            </>
          ) : (
            <>
              <h3 className="mb-10 text-3xl font-bold">محاسبه سن قمری شما</h3>
              <hr className="w-full" />
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

export function useDemoModal() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(
    (details: {
      calcType: string | null;
      result: { years: number; months: number; days: number };
      selectedDay: { year: number; month: number; day: number };
    }) => {
      return (
        <DemoModal
          showDemoModal={showDemoModal}
          setShowDemoModal={setShowDemoModal}
          details={details}
        />
      );
    },
    [showDemoModal, setShowDemoModal],
  );

  return useMemo(
    () => ({
      setShowDemoModal,
      DemoModal: (details: {
        calcType: string | null;
        result: { years: number; months: number; days: number };
        selectedDay: { year: number; month: number; day: number };
      }) => DemoModalCallback(details),
    }),
    [setShowDemoModal, DemoModalCallback],
  );
}
