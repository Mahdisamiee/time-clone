import Footer from "@/components/layout/footer";
import Nav from "@/components/layout/nav";
import cx from "classnames";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Suspense } from "react";
import { sfPro, vazirmatn } from "./fonts";
import "./globals.css";

const GTM_ID = "GTM-TN59LRQS";
const locales = ["fa", "en"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
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
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang="locale" dir={locale == "fa" ? "rtl" : "ltr"}>
      {/* Analytics */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>

      <body className={cx(vazirmatn.variable, sfPro.variable)}>
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

        {/* <Analytics /> */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      </body>
    </html>
  );
}
