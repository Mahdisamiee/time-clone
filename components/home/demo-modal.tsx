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
    age: { years: number; months: number; days: number };
    selectedDay: { year: number; month: number; day: number };
  };
}) => {
  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://precedent.dev">
            <Image
              src="/logo.png"
              alt="Precedent Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </a>
          <h3 className="font-display text-2xl font-bold">Precedent</h3>
          <p className="text-xl text-gray-500">
            سن شما {details?.age.years} سال و {details?.age.months} ماه و{" "}
            {details?.age.days} روز است.
          </p>
          <br className="my-2 w-full" />
          <p className="text-md text-gray-500">
            {persianToCalendars(
              details.selectedDay.year,
              details.selectedDay.month,
              details.selectedDay.day,
              {
                toCal: "islamic",
                dateStyle: "full",
                locale: "fa",
              },
            )}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export function useDemoModal() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(
    (details: {
      age: { years: number; months: number; days: number };
      selectedDay: { year: number; month: number; day: number };
    }) => {
      console.log("details", details);
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
        age: { years: number; months: number; days: number };
        selectedDay: { year: number; month: number; day: number };
      }) => DemoModalCallback(details),
    }),
    [setShowDemoModal, DemoModalCallback],
  );
}
