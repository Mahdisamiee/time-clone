import Link from "next/link";

export default async function Home() {
  return (
    <div className="z-10 w-full max-w-screen-lg px-5 xl:px-0">
      <ul
        className="mx-auto mt-6 grid animate-fade-up grid-cols-1 gap-20 px-5 opacity-0 md:grid-cols-6"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        {tools.map((tool) => {
          return (
            <li
              key={tool.title}
              className={`relative col-span-2 flex h-40 flex-col items-stretch justify-between overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md`}
            >
              <Link
                href={tool.url}
                target="_top"
                rel="noreferrer"
                className="duration-450 flex h-40 max-w-full animate-fade-up flex-col items-center justify-center space-x-2 overflow-hidden rounded-xl px-7 py-2 text-3xl transition-colors hover:bg-blue-100"
              >
                <p className="mb-2 font-light text-[#1d9bf0]">{tool.title}</p>
                <p>{tool.icon}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const tools = [
  {
    title: "وقت و زمان",
    url: "/time",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#1d9bf0"
        className="h-12 w-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "نقشه و فاصله",
    url: "/map",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#1d9bf0"
        className="h-12 w-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
        />
      </svg>
    ),
  },
  {
    title: "تبدیل واحد",
    url: "/calc",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#1d9bf0"
        className="h-12 w-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
        />
      </svg>
    ),
  },
  {
    title: "وضعیت آب و هوا",
    url: "/weather",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#1d9bf0"
        className="h-12 w-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
      </svg>
    ),
  },
];
