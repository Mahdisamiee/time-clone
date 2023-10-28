import { ReactNode } from "react";

export default function SimpleCard({ children }: { children: ReactNode }) {
  return (
    <div className="z-10 flex items-center justify-center w-full max-w-3xl rounded-lg bg-inherit sm:bg-white p-6 shadow-none sm:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
      {children}
    </div>
  );
}
