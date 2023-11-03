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
  alternates: {
    canonical: `https://kit365.ir/time/sharia`,
  },
};

export default function Sharia() {
  return <ShariaTime />;
}
