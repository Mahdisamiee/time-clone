import Modal from "@/components/shared/modal";
import { persianToCalendars } from "@/lib/utils";
import { useTranslations } from "next-intl";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";

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
  const t = useTranslations("Time.Age.ResultModal");

  return (
    <Modal showModal={showResultModal} setShowModal={setResultDemoModal}>
      <div className="h-2/3 w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex h-full flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:space-y-6 md:px-16">
          <a href="whatever.plus" className="text-sky-600">
            Whatever.plus | هرچی
          </a>
          {details?.calcType === t("calculateAge") ? (
            <>
              <h3 className="mb-10 text-3xl font-bold text-gray-800">
                {t("resultTitle")}
              </h3>
              <hr className="mb-10 mt-2 h-1 w-full rounded bg-sky-300" />
              <p className="text-2xl text-gray-500">
                {t("result", {
                  years: details?.result.years,
                  months: details?.result?.months,
                  days: details?.result.days,
                })}
              </p>
              <hr className="mb-10 mt-2 h-1 w-full rounded bg-sky-300" />
              {/* <h4 className="text-md text-gray-500">
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
              </h4> */}
            </>
          ) : details?.calcType === t("ageDiff") ? (
            <>
              <h3 className="mb-10 text-3xl font-bold text-gray-800">
                {t("diffResultTitle")}
              </h3>
              <hr className="mb-10 mt-2 h-1 w-full rounded bg-sky-300" />
              <p className="text-2xl text-gray-500">
                {t("diffResult", {
                  years: details?.result.years,
                  months: details?.result?.months,
                  days: details?.result.days,
                })}
              </p>
            </>
          ) : (
            <>
              <h3 className="mb-10 text-3xl font-bold text-gray-800">
                {t("hijriResultTitle")}
              </h3>
              <hr className="mb-10 mt-2 h-0.5 w-full rounded bg-gray-200" />
              <p className="text-2xl text-gray-500">
                {t("hijriResult", {
                  years: details?.result.years,
                  months: details?.result?.months,
                  days: details?.result.days,
                })}
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
  const t = useTranslations("Time.Age.ResultModal");
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
            <p>{t("error")}</p>
          </>
        );
    },
    [showResultModal, setResultDemoModal, t],
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
