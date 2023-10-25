import { Metadata } from "next";
import ShariaTime from "./sharia-time";

export const metadata: Metadata = {
  // i think should use dynamic functin here instead of static object
  title: "اوقات شرعی",
  description: "اوقات شرعی شهرها",
  keywords: [
    "اوقات شرعی دقیق",
    "زمان دقیق طلوع و غروب",
    "زمان اذان صبح",
    "طلوع آفتاب",
    "غروب آفتاب",
    "اذان ظهر",
    "اذان مغرب",
    "نیمه شب شرعی",
  ],
};

export default function Sharia() {
  return (
    <div className="z-10 flex w-full max-w-3xl flex-col items-center justify-center px-10 sm:px-3">
      <ShariaTime />
    </div>
  );
}
