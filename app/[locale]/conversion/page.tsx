import ToolsListMapper from "@/components/shared/tools-list-mapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تبدیل‌ ها",
  description:
    "تبدیل دما، طول، زمان، جرم، مساحت، پهنای باند، حافظه دیجیتال، انرژِی، حجم، سرعت، فشار به هم و برعکس",
  keywords: [
    "تبدیل دما",
    "تبدیل طول",
    "تبدیل زمان",
    "تبدیل جرم",
    "تبدیل مساحت",
    "تبدیل پهنای باند",
    "تبدیل حافظه دیجیتال",
    "تبدیل انرژی",
    "تبدیل حجم",
    "تبدیل سرعت",
    "تبدیل فشار",
  ],
  alternates: {
    canonical: `/conversion`,
    languages: {
      fa: `/fa/conversion`,
      en: `/en/conversion`,
    },
  },
};

export default async function Home() {
  return (
    <div className="z-10 w-full max-w-screen-lg px-5 xl:px-0">
      <ToolsListMapper tools={tools} />
    </div>
  );
}

const tools = [
  {
    title: "تبدیل دما",
    url: "/conversion/temp",
  },
  {
    title: "تبدیل طول",
    url: "/conversion/length",
  },
  {
    title: "تبدیل زمان",
    url: "/conversion/time",
  },
  {
    title: "تبدیل جرم",
    url: "/conversion/mass",
  },
  {
    title: "تبدیل مساحت",
    url: "/conversion/area",
  },
  {
    title: "تبدیل پهنای باند",
    url: "/conversion/data-transfer",
  },
  {
    title: "تبدیل حافظه دیجیتال",
    url: "/conversion/digital-storage",
  },
  {
    title: "تبدیل انرژی",
    url: "/conversion/energy",
  },
  {
    title: "تبدیل حجم",
    url: "/conversion/volume",
  },
  {
    title: "تبدیل سرعت",
    url: "/conversion/speed",
  },
  {
    title: "تبدیل فشار",
    url: "/conversion/pressure",
  },
];
