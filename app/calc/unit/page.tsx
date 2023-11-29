import { Metadata } from "next";
import LocalNavbar from "@/components/shared/local-navbar";
import UnitForm from "./unit-form";

export const metadata: Metadata = {
  title: "تبدیل دما",
  description: "تبدیل سلسیوس، فارانهایت، کلوین به یکدیگر و  برعکس",
  keywords: [
    "تبدیل دما",
    "تبدیل سلسیوس به فارانهایت",
    "تبدیل سلسیوس به کلوین",
    "تبدیل کلوین به سلسیوس",
    "تبدیل فارانهایت به سلسیوس",
    "تبدیل فارانهایت به کلوین",
    "تبدیل کلوین به فارانهایت",
    "تبدیل سلسیوس به فارانهایت و برعکس",
    "تبدیل سلسیوس به کلوین و برعکس",
    "تبدیل کلوین به سلسیوس و برعکس",
    "تبدیل فارانهایت به سلسیوس و برعکس",
    "تبدیل فارانهایت به کلوین و برعکس",
    "تبدیل کلوین به فارانهایت و برعکس",
  ],

  alternates: {
    canonical: `https://kit365.ir/time/conversion`,
  },
};

const UnitHome = () => {
  return (
    <>
      {/* <LocalNavbar items={navbarItems} /> */}

      <div className="z-10 w-full max-w-3xl px-5 xl:px-0">
        {/* here we add our first client component */}
        <UnitForm />
      </div>
    </>
  );
};
export default UnitHome;
