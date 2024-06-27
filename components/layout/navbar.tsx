"use client";

import useScroll from "@/lib/hooks/use-scroll";
import cx from "classnames";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { memo, useMemo } from "react";
import LocaleSwitcer from "./locale-switcher";

function NavBar() {
  const scrolled = useScroll(50);
  const t = useTranslations("Index");

  const navbarClasses = useMemo(
    () =>
      cx("fixed top-0 flex w-full justify-center z-30 transition-all", {
        "border-b border-gray-200 bg-white/30 backdrop-blur-xl": scrolled,
        "bg-white/0": !scrolled,
      }),
    [scrolled],
  );

  return (
    <>
      <div className={navbarClasses}>
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <Link href="/" className="flex items-center font-vazir text-xl">
            <Image
              src="/logo2.png"
              alt="Time logo"
              width="90"
              height="90"
              className="ml-1 rounded-sm"
              priority
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

export default memo(NavBar);
