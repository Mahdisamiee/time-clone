import { Pathnames } from "next-intl/navigation";

export const locales = ["en","fa"] as const;

export const pathnames = {
  "/": "/",
  "/conversion": {
    en: "/conversion",
    fa: "/conversion",
  },
  "/currency": {
    en: "/currency",
    fa: "/currency",
  },
  "/map": {
    en: "/map",
    fa: "/map",
  },
  "/time": {
    en: "/time",
    fa: "/time",
  },
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
