import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";

export default function Card({
  title,
  demo,
  large,
  }: {
  title: string;
  demo: ReactNode;
  large?: boolean;
  xlarge?: boolean;
}) {
  return (
    <div
      className={`relative col-span-2 h-[28rem] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md flex flex-col items-stretch justify-between py-10 ${
        large ? "md:col-span-3" : ""
      }`}
    >
      <div className="text-center">
        <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-lale text-xl font-bold text-transparent md:text-3xl md:font-normal w-full mb-2">
          <Balancer>{title}</Balancer>
        </h2>
      </div>
      <div className="flex h-full items-center justify-center py-10">{demo}</div>
    </div>
  );
}
