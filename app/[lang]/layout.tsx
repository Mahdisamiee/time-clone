import Footer from "@/components/layout/footer";
import Nav from "@/components/layout/nav";
import cx from "classnames";
import { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import { vazirmatn } from "./fonts";
import "./globals.css";
import { getDictionary } from "./dictionaries";

const GTM_ID = "GTM-TN59LRQS";

export const metadata: Metadata = {
  title: {
    default: "هرچی | ابزارهای مورد نیاز در روزهای سال",
    template: "%s | هرچی",
  },
  description:
    "هرچی - ساعت دقیق امروز و تقویم، اوقات شرعی و اذان امروز، محاسبه آنلاین، تبدیل تاریخ و واحد، نقشه و فاصله",
  twitter: {
    card: "summary_large_image",
    title: "harchi.app - everyday you may need something. ",
    description:
      "Harchi.app provide Time, Sharia Times, Map, Distance, Area, Unit Conversion's and other tools",
    creator: "Innofinity",
  },
  metadataBase: new URL("https://harchi.app"),
  alternates: {
    canonical: "/",
  },
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dict = await getDictionary(params.lang);
  return (
    <html lang={params.lang} dir={params.lang === "fa" ? "rtl" : "ltr"}>
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

      <body className={cx(vazirmatn.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-bl from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 font-vazir">
          {children}
        </main>
        <Footer />

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
