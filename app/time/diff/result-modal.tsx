import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
// import { persianToCalendars } from "@/lib/utils";

const ResultModal = ({
  showResultModal,
  setShowResultModal,
  details,
}: {
  showResultModal: boolean;
  setShowResultModal: Dispatch<SetStateAction<boolean>>;
  details: {
    results: string[];
  };
}) => {
  return (
    <Modal showModal={showResultModal} setShowModal={setShowResultModal}>
      <div className="h-2/3 w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex h-full flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:space-y-6 md:px-16">
          <>
            <h3 className="my-5 text-2xl font-bold">
              تاریخ انتخابی برابر با سایر تقویم ها
            </h3>
            <hr className="mb-10 mt-2 h-0.5 w-full rounded bg-blue-400" />
            {details.results &&
              details.results.map((result) => (
                <p key={result} className="text-lg sm:text-xl text-gray-700">
                  {result}
                </p>
              ))}
            <hr className="my-2 mb-10 mt-2 h-0.5 w-full rounded bg-blue-400" />
            <p className="text-2xl text-gray-500">here we put more info!</p>
            <a href="https://precedent.dev">
              <Image
                src="/logo.png"
                alt="Precedent Logo"
                className="h-10 w-10 rounded-full"
                width={20}
                height={20}
              />
            </a>
          </>
        </div>
      </div>
    </Modal>
  );
};

export function useResultModal() {
  const [showResultModal, setShowResultModal] = useState(false);

  const ResultModalCallback = useCallback(
    (details: { results: string[] }) => {
      return (
        <ResultModal
          showResultModal={showResultModal}
          setShowResultModal={setShowResultModal}
          details={details}
        />
      );
    },
    [showResultModal, setShowResultModal],
  );

  return useMemo(
    () => ({
      setShowResultModal,
      ResultModal: (details: { results: string[] }) =>
        ResultModalCallback(details),
    }),
    [setShowResultModal, ResultModalCallback],
  );
}
