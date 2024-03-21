import { Metadata } from "next";
import ShariaTime from "./sharia-time";

export const metadata: Metadata = {
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
    canonical: `/time/sharia`,
    languages: {
      fa: `/fa/time/sharia`,
      en: `/en/time/sharia`,
    },
  },
};

export default function Sharia() {
  return <ShariaTime />;
}
