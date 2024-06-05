import { Pathnames } from "next-intl/navigation";

export const locales = ["en","fa", "fr", "ar"] as const;

export const pathnames = {
  "/": "/",
  "/conversion": {
    en: "/conversion",
    fa: "/conversion",
    fr: "/conversion",
    ar: "/conversion",
  },
  "/currency": {
    en: "/currency",
    fa: "/currency",
    fr: "/currency",
    ar: "/currency",
  },
  "/map": {
    en: "/map",
    fa: "/map",
    fr: "/map",
    ar: "/map",
  },
  "/time": {
    en: "/time",
    fa: "/time",
    fr: "/time",
    ar: "/time",
  },
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
