import { NextIntlClientProvider, createTranslator } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ReactNode, Suspense } from "react";
import cx from "classnames";
import Footer from "@/components/layout/footer";
import Nav from "@/components/layout/nav";
import { sfPro, vazirmatn } from "../fonts";
import { locales } from "../../config";
import "../globals.css";

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
      default: t("Index.metadata.title.default"),
      template: `${t("Index.metadata.title.template")} | %s`,
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
    <html lang={locale} dir={locale == "fa" ? "rtl" : "ltr"}>
      <body className={cx(vazirmatn.className, sfPro.className)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="fixed h-screen w-full bg-gradient-to-bl from-indigo-50 via-white to-cyan-100" />
          <Suspense fallback="...">
            {/* @ts-expect-error Server Component */}
            <Nav />
          </Suspense>
          <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 font-vazir">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
