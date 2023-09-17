import Script from "next/script";
import { Metadata } from "next";
import "./globals.css";
import { sfPro, inter, lalezar, vazirmatn } from "./fonts";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

const GTM_ID = "GTM-TZXPH9S3";

export const metadata: Metadata = {
  title: {
    default: "Batime - باتایم، ساعت و تقویم رسمی ایران و جهان",
    template : "%s | Batime.ir"
  },
  description:
    "ساعت دقیق و رسمی ایران و سایر نقاط جهان، تقویم شمسی و جلالی ، تقویم ماهانه و تقویم سالیانه از امکانات با تایم است",

  keywords: [
    "ساعت ایران",
    "ساعت چنده",
    "ساعت چنده?",
    "ساعت کاری",
    "ساعت کاری بانک ها",
    "ساعت تورنتو",
    "ساعت جهانی",
    "ساعت کانادا",
    "ساعت تهران الان",
    "ساعت دقیق الان",
    "ساعت دقیق با ثانیه",
    "تبدیل ساعت به وقت ایران",
    "تقویم 1402",
    "ساعت و تاریخ امروز",
    "ساعت جهانی ایران امروز",
    "ساعت جهانی آلمان",
    "تقویم 1402.",
    "دانلود تقویم 1402",
    "تقویم 1402 برای دسکتاپ",
    "تقویم ۱۴۰۱",
    "تقویم اردیبهشت ۱۴۰۲",
    "دانلود رایگان تقویم 1402",
    "دانلود تقویم 1402 با کیفیت بالا",
    "تقویم 1402 pdf",
    "دانلود تقویم 1402 برای دسکتاپ",
    "ساعت رسمی ایران  1402",
    "ساعت دقیق با ثانیه",
    "ساعت تهران الان",
    "ساعت به وقت ایران الان",
    "ساعت و تاریخ امروز",
    "تبدیل ساعت به وقت ایران",
    "تقویم ۱۴۰۲",
    "ساعت جهانی",
    "تغییر ساعت در ایران",
    "ساعت تورنتو به وقت ایران",
    "ساعت کانادا به وقت ایران",
    "تبدیل ساعت ایران به کانادا",
    "تبدیل ساعت ایران به تورنتو",
    "ساعت به وقت کانادا ونکوور",
    "ساعت به وقت کانادا مونترال",
    "تبدیل ساعت ایران به ونکوور",
    "ساعت کانادا اتاوا",
    "ساعت جهانی",
    "ساعت جهانی چیست",
    "الان چنده",
    "ساعت رسمي ايران الان",
    "ساعت دقیق تهران",
    "ساعت رسمی کشور",
    "ساعت رسمی کشور الان",
    "الانچنده",
    "الان به وقت تهران ساعت چنده",
    "ساعت به وقت الان",
    "ساعت الان ایران چند است؟",
    "ساعت ذقیق",
    "امروز چندمه",
    "تاریخ امروز",
    "ساعت و تقویم ایران",
    "ساعت جهان",
  ],
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Precedent - Building blocks for your Next.js project",
  //   description:
  //     "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  //   creator: "@steventey",
  // },
  metadataBase: new URL("https://batime.ir"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
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

      <body
        className={cx(
          sfPro.variable,
          inter.variable,
          lalezar.variable,
          vazirmatn.variable,
        )}
      >
        <div className="fixed h-screen w-full bg-gradient-to-bl from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 font-lale">
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
