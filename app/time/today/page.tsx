import { Metadata } from "next";

export const metadata: Metadata = {
  // i think should use dynamic functin here instead of static object
  title: "تاریخ امروز (امروز چندمه)",
  description: "اوقات شرعی شهرها",
  keywords: [
    "اوقات شرعی دقیق",
    "زمان دقیق طلوع و غروب",
    "زمان اذان صبح",
    "طلوع آفتاب",
    "غروب آفتاب",
    "اذان ظهر",
    "اذان مغرب",
    "نیمه شب شرعی",
  ],
};





const Today = () => {
    return (
        <div className="z-10 flex w-full max-w-3xl flex-col items-center justify-center px-10 sm:px-3">
          <p> today </p>
        </div>
      );
}

export default Today

