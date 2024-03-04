"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center text-sky-600">مشکلی پیش آمده است !</h2>
      <p className="my-2 text-center text-sky-600">
        ممکن است وضعیت اینترنت شما ناپایدار باشد. در غیر اینصورت لطفا یکبار دیگر
        امتحان نمایید.
      </p>``
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={() => reset()}
      >
        تلاش مجدد
      </button>
    </main>
  );
}
