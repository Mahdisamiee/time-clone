import Footer from "@/components/layout/footer";
import Nav from "@/components/layout/nav";
import { GoogleTagManager } from "@next/third-parties/google";
import cx from "classnames";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ReactNode, Suspense } from "react";
import { locales } from "../../config";
import { vazirmatn } from "../fonts";
import "../globals.css";



const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  return {
    title: {
      template: ` %s | ${t("Index.metadata.title.template")}`,
      default: t("Index.metadata.title.default"),
    },
    metadataBase: new URL("https://whatever.plus"),
    alternates: {
      canonical: "/",
      languages: {
        fa: "/fa",
        en: "/en",
        fr: "/fr",
        ar: "/ar",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale == "fa" || locale == "ar" ? "rtl" : "ltr"}>
      <GoogleTagManager gtmId={GTM_ID ? GTM_ID : "GTM-KMVJBLN7"} />
      <body className={cx(vazirmatn.className)}>
        <div className="fixed h-screen w-full bg-gradient-to-bl from-indigo-50 via-white to-cyan-100" />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Suspense fallback="...">
            <Nav />
            <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 font-vazir">
              {children}
            </main>
            <Footer />
          </Suspense>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
