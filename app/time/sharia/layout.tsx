
import LocalNavbar from "@/components/shared/local-navbar";
import { ReactNode } from "react";

const navbarItems = [
  {
    title: "تاریخ امروز",
    url: "/time/today",
  },
  {
    title: "تقویم ایران",
    url: "/time/calendar",
  },
  {
    title: "تبدیل تاریخ",
    url: "/time/conversion",
  },
  {
    title: "ساعت کشورها",
    url: "/time/worldclock",
  },
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="z-10 flex w-full max-w-3xl flex-col items-center justify-center px-10 sm:px-3">
      <LocalNavbar items={navbarItems} />
      {children}
    </div>
  );
}
