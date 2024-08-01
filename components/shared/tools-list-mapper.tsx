import Link from "next/link";
import React, { ReactNode, memo } from "react";

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
    <ul className="mx-auto mt-6 grid grid-cols-4 gap-8 px-2 opacity-1 md:grid-cols-8">
      {tools.map((tool) => {
        return (
          <li
            key={tool.title}
            className="relative col-span-2 flex h-32 flex-col items-stretch justify-between overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md"
          >
            <Link
              className="duration-450 flex h-32 max-w-full flex-col items-center justify-center space-x-2 overflow-hidden rounded-xl px-6 py-1 text-md md:text-xl transition-colors hover:bg-sky-100"
              rel="noreferrer"
              href={tool.url}
              prefetch={true}
            >
              <p className="mb-2 text-sky-500">{tool.title}</p>
              {tool.icon ? <p>{tool.icon}</p> : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default memo(ToolsListMapper);
