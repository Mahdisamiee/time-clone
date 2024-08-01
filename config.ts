// import { Pathnames } from "next-intl/navigation";
import {LocalePrefix} from 'next-intl/routing';

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
} as const;

export const localePrefix = 'always' satisfies LocalePrefix;

export type AppPathnames = keyof typeof pathnames;
