

import Link from "next/link";

type LocalNavbarItems = {
  items: {
    title: string;
    url: string;
  }[];
};

const LocalNavbar = ({ items }: LocalNavbarItems) => {
  const gridVariants: any = {
    1: "grid-cols-2 sm:grid-cols-3 md:grid-cols-1",
    2: "grid-cols-2 sm:grid-cols-3 md:grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3 md:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-2 md:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 md:grid-cols-5",
    6: "grid-cols-2 sm:grid-cols-3 md:grid-cols-6",
    7: "grid-cols-2 sm:grid-cols-3 md:grid-cols-7",
    8: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
  };

  const spanVariants: any = {
    1: "col-span-2 sm:col-span-3 md:col-span-1",
    2: "col-span-2 sm:col-span-3 md:col-span-2",
    3: "col-span-2 sm:col-span-3 md:col-span-3",
    4: "col-span-2 sm:col-span-2 md:col-span-4",
    5: "col-span-2 sm:col-span-3 md:col-span-5",
    6: "col-span-2 sm:col-span-3 md:col-span-6",
    7: "col-span-2 sm:col-span-3 md:col-span-7",
    8: "col-span-2 sm:col-span-3 md:col-span-4",
  };
  console.log("items => ", gridVariants[items.length - 1]);
  return (
    <div
      className={`z-10 grid ${gridVariants[items.length]} auto-rows-auto gap-5`}
    >
      {items.map((item) => {
        return (
          <Link
            prefetch={true}
            key={`${item.url}`}
            className="w-18 flex items-center justify-center rounded-md border border-gray-300 px-2 py-1 transition-all duration-100 hover:border-blue-500 focus:outline-none active:bg-gray-100"
            href={item.url}
          >
            <p className="text-gray-600">{item.title}</p>
          </Link>
        );
      })}
      <hr
        className={`${
          spanVariants[items.length]
        } mb-10 mt-2 h-0.5 w-full rounded bg-gray-200`}
      />
    </div>
  );
};

export default LocalNavbar;
