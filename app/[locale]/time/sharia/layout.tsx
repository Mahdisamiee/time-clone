"use client"
import LocalNavbar from "@/components/shared/local-navbar";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

type Props = {
  locale: string;
  children: ReactNode;
};

export default function Layout({ children, locale }: Props) {
  // unstable_setRequestLocale(locale);
  const t = useTranslations("Time.Links");

  const navbarItems = [
    {
      title: t("today"),
      url: "/time/today",
    },
    {
      title: t("dateConvert"),
      url: "/time/conversion",
    },
    {
      title: t("worldClock"),
      url: "/time/worldclock",
    },
  ];

  return (
    <div className="z-10 flex w-full max-w-3xl flex-col items-center justify-center px-10 sm:px-3">
      <LocalNavbar items={navbarItems} />
      {children}
    </div>
  );
}
