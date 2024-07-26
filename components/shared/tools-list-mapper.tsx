import Link from "next/link";
import { ReactNode, memo } from "react";

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
    <ul className="opacity-1 mx-auto mt-6 grid grid-cols-4 gap-6 px-5 md:grid-cols-8">
      {tools.map((tool) => (
        <li
          key={tool.title}
          className="relative col-span-2 flex h-28 flex-col items-stretch justify-between overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md"
        >
          <Link
            href={tool.url}
            prefetch={false}
            target="_top"
            rel="noreferrer"
            className="duration-450 flex h-28 max-w-full flex-col items-center justify-center space-x-2 overflow-hidden rounded-xl px-3 py-1 text-md md:text-xl transition-colors hover:bg-sky-100"
          >
            <p className="mb-2 font-light text-sky-500">{tool.title}</p>
            {tool.icon && <p>{tool.icon}</p>}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default memo(ToolsListMapper);
