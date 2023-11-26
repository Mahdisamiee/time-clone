import Card from "@/components/home/card";
import LiveClock from "@/components/time/timezone-clock";
import AnalogClock from "@/components/time/analog-clock";
import ShariaTime from "@/app/time/sharia/sharia-time";
// import MainCalendar from "@/components/time/calendar";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "تبدیل واحد",
  description: "تبدیل تمام واحد های موجود به هم",
  keywords: [],
  alternates: {
    canonical: `https://kit365.ir/calc`,
  },
};

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
    title: "تبدیل دما",
    url: "/calc/temp",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#1d9bf0"
        viewBox="0 0 1200 1199.999"
        className="h-12 w-12"
      >
        <path d="M516.083,893.54c0,54.29,44.259,98.484,98.683,98.484c54.355,0,98.616-44.194,98.616-98.484 c0-54.355-44.261-98.616-98.616-98.616C560.342,794.924,516.083,839.185,516.083,893.54z" />
        <path d="M702.684,430.14V178.558c0-43.324-35.234-78.559-78.559-78.559h-21.193 c-43.324,0-78.626,35.234-78.626,78.559v429.963l-133.34,133.341H165.738v26.054h236.017l122.552-122.553v93.736 c0,0.868,0.067,1.671,0.067,2.54c-61.177,33.029-100.221,97.881-100.221,167.815c0,105.034,85.51,190.546,190.546,190.546 c105.101,0,190.613-85.512,190.613-190.546c0-71.004-39.983-136.39-102.628-169.018V466.982l105.7-105.702h222.696v-26.055 H797.596L702.684,430.14z M550.381,513.184h56.495V487.11h-56.495v-42.255h56.495v-26.074h-56.495v-42.255h56.495v-26.076 h-56.495v-42.254h56.495v-26.076h-56.495v-42.253h56.495V213.86h-56.495v-35.302c0-28.948,23.601-52.483,52.551-52.483h21.193 c29.017,0,52.55,23.535,52.55,52.483v277.591L550.381,582.445V513.184z M683.628,760.091 c58.101,26.811,95.608,85.445,95.608,149.362c0,90.66-73.812,164.472-164.537,164.472c-90.66,0-164.472-73.812-164.472-164.472 c0-62.98,36.705-121.215,93.467-148.425l8.224-3.945l-1.27-12.635c-0.134-1.872-0.267-3.611-0.267-5.349V619.288l126.294-126.297 v246.108c0,1.671-0.065,3.343-0.266,5.081l-1.271,11.968L683.628,760.091z" />
        <path d="M856.228,182.56c10.363,0,17.363,1.814,22.027,3.885l6.222-29.276c-8.293-3.114-19.7-4.928-30.063-4.928 c-47.162,0-72.561,30.319-72.561,67.374c0,39.913,26.178,64.79,67.118,64.79c15.028,0,28.249-2.593,35.241-5.7l-4.664-29.027 c-5.956,2.336-13.213,3.885-22.541,3.885c-19.178,0-34.728-12.177-34.728-35.497C822.023,197.331,835.501,182.56,856.228,182.56z" />
        <polygon points="980.108,143.948 954.71,143.948 954.71,200.445 900.547,200.445 900.547,224.801 954.71,224.801 954.71,281.812 980.108,281.812 980.108,224.801 1034.262,224.801 1034.262,200.445 980.108,200.445 " />
        <path d="M267.548,588.953c10.363,0,17.364,1.815,22.028,3.887l6.22-29.277c-8.292-3.114-19.699-4.928-30.063-4.928 c-47.162,0-72.56,30.319-72.56,67.376c0,39.912,26.177,64.79,67.118,64.79c15.028,0,28.248-2.593,35.241-5.7l-4.663-29.027 c-5.957,2.336-13.214,3.885-22.542,3.885c-19.178,0-34.727-12.178-34.727-35.499C233.342,603.724,246.821,588.953,267.548,588.953z" />
        <rect x="312.382" y="607.096" width="67.897" height="26.169" />
      </svg>
    ),
  },
  {
    title: "تبدیل واحد‌های رایج",
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
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
        />
      </svg>
    ),
  },
  {
    title: "تبدیل وزن به حجم",
    url: "",
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
];
