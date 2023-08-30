import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Lalezar, Vazirmatn, Handjet } from "next/font/google";

export const sfPro = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const handjet = Handjet({
  variable: "--font-handjet",
  subsets: ["latin"],
});
export const lalezar = Lalezar({
  variable: "--font-lalezar",
  weight: ["400"],
  subsets: ["latin", "arabic"],
});
export const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  weight: ["400", "500", "700"],
  subsets: ["latin", "arabic"],
});
