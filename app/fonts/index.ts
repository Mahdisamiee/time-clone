import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Vazirmatn } from "next/font/google";

export const sfPro = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
  display: "swap",
  adjustFontFallback: false,
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});
export const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  weight: ["700"],
  subsets: ["latin", "arabic"],
  display: "swap",
  adjustFontFallback: false,
});
