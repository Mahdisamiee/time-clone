import { Metadata } from "next";
import LocalNavbar from "@/components/shared/local-navbar";
import UnitForm from "./unit-form";

export const metadata: Metadata = {
  title: "تبدیل واحد",
  description: "تبدیل سلسیوس، فارانهایت، کلوین به یکدیگر و  برعکس",
  keywords: [
  ],

  alternates: {
    canonical: `https://kit365.ir/calc/unit`,
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
