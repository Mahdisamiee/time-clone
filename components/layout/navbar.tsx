"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import LocaleSwitcer from "./locale-switcher";
import { useTranslations } from "next-intl";

export default function NavBar() {
  const scrolled = useScroll(50);
  const t = useTranslations("Index");

  return (
    <>
      <div
        className={`fixed top-0 flex w-full justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/30 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <Link href="/" className="flex items-center font-vazir text-xl">
            <Image
              src="/logo2.png"
              alt="Time logo"
              width="90"
              height="90"
              className="ml-1 rounded-sm"
            ></Image>
            <p>{t("title")}</p>
            <p className="hidden md:inline-block">| {t("description")}</p>
          </Link>
          <LocaleSwitcer />
        </div>
      </div>
    </>
  );
}
