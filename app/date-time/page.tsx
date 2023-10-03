
import Card from "@/components/home/card";
import { Twitter, LinkedIn } from "@/components/shared/icons";
import ComponentGrid from "@/components/home/component-grid";
import LiveClock from "@/components/home/timezone-clock";
import LocalClock from "@/components/home/local-clock";
import ShariaTime from "@/components/home/sharia-time";
import MainCalendar from "@/components/home/calendar";

export default async function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <LocalClock />
        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-5 xl:px-0">
        {features.map(({ title, demo, large }) => (
          <Card
            key={title}
            title={title}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}
      </div>
    </>
  );
}

const features = [
  // {
  //   title: "Beautiful, reusable components",
  //   large: true,
  // },
  {
    title: "تقویم روزانه",
    demo: <MainCalendar />,
  },
  {
    title: "اوقات شرعی",
    large: true,
    demo: <ShariaTime />,
  },
  {
    title: "ساعت دقیق سایر کشور ها",
    large: true,
    demo: <LiveClock />,
  },
  
  
];
