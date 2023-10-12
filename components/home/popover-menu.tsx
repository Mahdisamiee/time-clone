"use client";

import { MouseEvent, useState } from "react";
import Popover from "@/components/shared/popover";
import { ChevronDown } from "lucide-react";

export default function PopoverMenu({
  items,
  value,
  onClickItem,
}: {
  items: string[];
  value: string | null;
  onClickItem: (e: MouseEvent) => void;
}) {
  const [openPopover, setOpenPopover] = useState(false);
  return (
    <Popover
      content={
        <div className="w-full rounded-md bg-white p-2 sm:w-60">
          {items.map((item, index) => (
            <button
              key={`${item}-${index}`}
              className="flex w-full items-center justify-start rounded-md p-2 text-left text-md transition-all duration-75 hover:bg-gray-100 active:bg-gray-200"
              onClick={(e) => {
                onClickItem(e);
                setOpenPopover(!openPopover);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      }
      openPopover={openPopover}
      setOpenPopover={setOpenPopover}
    >
      <button
        onClick={() => setOpenPopover(!openPopover)}
        className="text-xl flex w-60 items-center justify-between rounded-md border border-gray-300 px-5 py-3 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100 mt-10"
      >
        <p className="text-gray-600">{value}</p>
        <ChevronDown
          className={`h-4 w-4 text-gray-600 transition-all ${
            openPopover ? "rotate-180" : ""
          }`}
        />
      </button>
    </Popover>
  );
}
