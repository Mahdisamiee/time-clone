import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";

export default function Card({
  title,
  demo,
  large,
  xlarge,
}: {
  title: string;
  demo: ReactNode;
  large?: boolean;
  xlarge?: boolean;
}) {
  return (
    <div
      className={`relative col-span-2 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md flex flex-col items-stretch justify-center ${
        large ? "md:col-span-3" : xlarge ? "md:col-span-3" : ""
      }`}
    >
      <div className="text-center">
        <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal w-full mb-2">
          <Balancer>{title}</Balancer>
        </h2>
      </div>
      <div className="flex h-100 items-center justify-center">{demo}</div>
    </div>
  );
}
