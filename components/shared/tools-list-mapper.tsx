import Link from "next/link";
import React, { ReactNode } from "react";

interface Tool {
  title: string;
  url: string;
  icon?: ReactNode;
}
interface MainToolsListProps {
  tools: Tool[];
}

const ToolsListMapper = ({ tools }: MainToolsListProps) => {
  return (
    <ul
      className="mx-auto mt-6 grid animate-fade-up grid-cols-1 gap-20 px-5 opacity-0 md:grid-cols-6"
      style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
    >
      {tools.map((tool) => {
        return (
          <li
            key={tool.title}
            className="relative col-span-2 flex h-40 flex-col items-stretch justify-between overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md"
          >
            <Link
              href={tool.url}
              target="_top"
              rel="noreferrer"
              className="duration-450 flex h-40 max-w-full animate-fade-up flex-col items-center justify-center space-x-2 overflow-hidden rounded-xl px-6 py-1 text-2xl transition-colors hover:bg-sky-100"
            >
              <p className="mb-2 font-light text-sky-500">{tool.title}</p>
              {tool.icon ? <p>{tool.icon}</p> : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ToolsListMapper;
