import Card from "@/components/home/card";
import { Twitter, LinkedIn } from "@/components/shared/icons";
import ComponentGrid from "@/components/home/component-grid";
import LiveClock from "@/components/home/timezone-clock";
import LocalClock from "@/components/home/local-clock";
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

        <a
          href="https://twitter.com/Tehran_chi"
          target="_blank"
          rel="noreferrer"
          className="mx-auto my-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <LinkedIn className="h-5 w-5 text-[#1d9bf0] mx-1" />
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Introducing Nano1
          </p>
        </a>
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
    title: "ساعت دقیق سایر کشور ها",
    large: true,
    demo: <LiveClock />,
  },
  {
    title: "تقویم روزانه",
    demo: <MainCalendar />,
  },
];
