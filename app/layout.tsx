import Script from "next/script";
import { Metadata } from "next";
import "./globals.css";
import { sfPro, inter, lalezar, vazirmatn } from "./fonts";
import cx from "classnames";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

const GTM_ID = "GTM-TN59LRQS";

export const metadata: Metadata = {
  title: {
    default: "کیت 365 | ابزارهای مورد نیاز در روزهای سال",
    template: "%s | کیت 365",
  },
  description:
    "کیت365 - ساعت دقیق امروز و تقویم، اوقات شرعی و اذان امروز، محاسبه آنلاین، تبدیل تاریخ و واحد، نقشه و فاصله",

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
    "تقویم ۱۴۰۱",
    "تقویم اردیبهشت ۱۴۰۲",
    "ساعت رسمی ایران  1402",
    "ساعت دقیق با ثانیه",
    "ساعت تهران الان",
    "ساعت به وقت ایران الان",
    "ساعت و تاریخ امروز",
    "تبدیل ساعت به وقت ایران",
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
    "اوقات شرعی آذربایجان شرقی",
    "اوقات شرعی آذربایجان غربی",
    "اوقات شرعی اردبیل",
    "اوقات شرعی اصفهان",
    "اوقات شرعی البرز",
    "اوقات شرعی ایلام",
    "اوقات شرعی بوشهر",
    "اوقات شرعی تهران",
    "اوقات شرعی چهارمحال و بختیاری",
    "اوقات شرعی خراسان جنوبی",
    "اوقات شرعی خراسان رضوی",
    "اوقات شرعی خراسان شمالی",
    "اوقات شرعی خوزستان",
    "اوقات شرعی زنجان",
    "اوقات شرعی سمنان",
    "اوقات شرعی سیستان و بلوچستان",
    "اوقات شرعی فارس",
    "اوقات شرعی قزوین",
    "اوقات شرعی قم",
    "اوقات شرعی کردستان",
    "اوقات شرعی کرمان",
    "اوقات شرعی کرمانشاه",
    "اوقات شرعی کهگیلویه وبویراحمد",
    "اوقات شرعی گلستان",
    "اوقات شرعی گیلان",
    "اوقات شرعی لرستان",
    "اوقات شرعی مازندران",
    "اوقات شرعی مرکزی",
    "اوقات شرعی هرمزگان",
    "اوقات شرعی همدان",
    "اوقات شرعی یزد",
    "اذان آذربایجان شرقی",
    "اذان آذربایجان غربی",
    "اذان اردبیل",
    "اذان اصفهان",
    "اذان البرز",
    "اذان ایلام",
    "اذان بوشهر",
    "اذان تهران",
    "اذان چهارمحال و بختیاری",
    "اذان خراسان جنوبی",
    "اذان خراسان رضوی",
    "اذان خراسان شمالی",
    "اذان خوزستان",
    "اذان زنجان",
    "اذان سمنان",
    "اذان سیستان و بلوچستان",
    "اذان فارس",
    "اذان قزوین",
    "اذان قم",
    "اذان کردستان",
    "اذان کرمان",
    "اذان کرمانشاه",
    "اذان کهگیلویه وبویراحمد",
    "اذان گلستان",
    "اذان گیلان",
    "اذان لرستان",
    "اذان مازندران",
    "اذان مرکزی",
    "اذان هرمزگان",
    "اذان همدان",
    "اذان یزد",
    "طلوع آذربایجان شرقی",
    "طلوع آذربایجان غربی",
    "طلوع اردبیل",
    "طلوع اصفهان",
    "طلوع البرز",
    "طلوع ایلام",
    "طلوع بوشهر",
    "طلوع تهران",
    "طلوع چهارمحال و بختیاری",
    "طلوع خراسان جنوبی",
    "طلوع خراسان رضوی",
    "طلوع خراسان شمالی",
    "طلوع خوزستان",
    "طلوع زنجان",
    "طلوع سمنان",
    "طلوع سیستان و بلوچستان",
    "طلوع فارس",
    "طلوع قزوین",
    "طلوع قم",
    "طلوع کردستان",
    "طلوع کرمان",
    "طلوع کرمانشاه",
    "طلوع کهگیلویه وبویراحمد",
    "طلوع گلستان",
    "طلوع گیلان",
    "طلوع لرستان",
    "طلوع مازندران",
    "طلوع مرکزی",
    "طلوع هرمزگان",
    "طلوع همدان",
    "طلوع یزد",
    "طلوع آفتاب آذربایجان شرقی",
    "طلوع آفتاب آذربایجان غربی",
    "طلوع آفتاب اردبیل",
    "طلوع آفتاب اصفهان",
    "طلوع آفتاب البرز",
    "طلوع آفتاب ایلام",
    "طلوع آفتاب بوشهر",
    "طلوع آفتاب تهران",
    "طلوع آفتاب چهارمحال و بختیاری",
    "طلوع آفتاب خراسان جنوبی",
    "طلوع آفتاب خراسان رضوی",
    "طلوع آفتاب خراسان شمالی",
    "طلوع آفتاب خوزستان",
    "طلوع آفتاب زنجان",
    "طلوع آفتاب سمنان",
    "طلوع آفتاب سیستان و بلوچستان",
    "طلوع آفتاب فارس",
    "طلوع آفتاب قزوین",
    "طلوع آفتاب قم",
    "طلوع آفتاب کردستان",
    "طلوع آفتاب کرمان",
    "طلوع آفتاب کرمانشاه",
    "طلوع آفتاب کهگیلویه وبویراحمد",
    "طلوع آفتاب گلستان",
    "طلوع آفتاب گیلان",
    "طلوع آفتاب لرستان",
    "طلوع آفتاب مازندران",
    "طلوع آفتاب مرکزی",
    "طلوع آفتاب هرمزگان",
    "طلوع آفتاب همدان",
    "طلوع آفتاب یزد",
    "غروب آذربایجان شرقی",
    "غروب آذربایجان غربی",
    "غروب اردبیل",
    "غروب اصفهان",
    "غروب البرز",
    "غروب ایلام",
    "غروب بوشهر",
    "غروب تهران",
    "غروب چهارمحال و بختیاری",
    "غروب خراسان جنوبی",
    "غروب خراسان رضوی",
    "غروب خراسان شمالی",
    "غروب خوزستان",
    "غروب زنجان",
    "غروب سمنان",
    "غروب سیستان و بلوچستان",
    "غروب فارس",
    "غروب قزوین",
    "غروب قم",
    "غروب کردستان",
    "غروب کرمان",
    "غروب کرمانشاه",
    "غروب کهگیلویه وبویراحمد",
    "غروب گلستان",
    "غروب گیلان",
    "غروب لرستان",
    "غروب مازندران",
    "غروب مرکزی",
    "غروب هرمزگان",
    "غروب همدان",
    "غروب یزد",
    "غروب آفتاب آذربایجان شرقی",
    "غروب آفتاب آذربایجان غربی",
    "غروب آفتاب اردبیل",
    "غروب آفتاب اصفهان",
    "غروب آفتاب البرز",
    "غروب آفتاب ایلام",
    "غروب آفتاب بوشهر",
    "غروب آفتاب تهران",
    "غروب آفتاب چهارمحال و بختیاری",
    "غروب آفتاب خراسان جنوبی",
    "غروب آفتاب خراسان رضوی",
    "غروب آفتاب خراسان شمالی",
    "غروب آفتاب خوزستان",
    "غروب آفتاب زنجان",
    "غروب آفتاب سمنان",
    "غروب آفتاب سیستان و بلوچستان",
    "غروب آفتاب فارس",
    "غروب آفتاب قزوین",
    "غروب آفتاب قم",
    "غروب آفتاب کردستان",
    "غروب آفتاب کرمان",
    "غروب آفتاب کرمانشاه",
    "غروب آفتاب کهگیلویه وبویراحمد",
    "غروب آفتاب گلستان",
    "غروب آفتاب گیلان",
    "غروب آفتاب لرستان",
    "غروب آفتاب مازندران",
    "غروب آفتاب مرکزی",
    "غروب آفتاب هرمزگان",
    "غروب آفتاب همدان",
    "غروب آفتاب یزد",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Precedent - Building blocks for your Next.js project",
    description:
      "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
    creator: "@steventey",
  },
  metadataBase: new URL("http://kit365.ir"),
  alternates:{
    canonical:"/"
  },
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
