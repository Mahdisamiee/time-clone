import type { Metadata, ResolvingMetadata } from "next";
import TimezoneClock from "@/components/time/timezone-clock";

// import { WORLD_CLOCK_TIMEZONES } from "@/lib/constants";
import LocalNavbar from "@/components/shared/local-navbar";
import Card from "@/components/home/simple-card";

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const decodedCity = decodeURIComponent(params.city);
  return {
    title: `ساعت دقیق ${decodedCity} | زمان جهانی ${decodedCity}`,
    description: `ساعت و زمان دقیق  ${decodedCity} | زمان دقیق به وقت ${decodedCity}  | زمان الان ${decodedCity} | کیت365`,
    // description: `ساعت دقیق {لندن} | زمان دقیق به وقت {لندن} | زمان الان {لندن}$ | کیت365`,
    keywords: [
      `زمان در ${decodedCity}`,
      `ساعت الان ${decodedCity}`,
      `ساعت دقیق ${decodedCity}`,
      `زمان به وقت ${decodedCity}`,
      `اختلاف ساعت جهانی در ${decodedCity}`,
    ],
    alternates: {
      canonical: `https://kit365.ir/time/${decodedCity}`,
    },
  };
}

const navbarItems = [
  {
    title: "تاریخ امروز",
    url: "/time",
  },
  {
    title: "تقویم ایران",
    url: "/time/calendar",
  },
  {
    title: "محاسبه سن",
    url: "/time/age",
  },
  {
    title: "فاصله دو تاریخ",
    url: "/time/diff",
  },
];

export default async function Page({ params }: { params: { city: string } }) {
  const WORLD_CLOCK_TIMEZONES = (await import("@/lib/constants"))
    .WORLD_CLOCK_TIMEZONES;
  const decodedCity = decodeURIComponent(params.city);

  const timezone =
    decodedCity &&
    WORLD_CLOCK_TIMEZONES.find(
      (option) => option.label.toLocaleLowerCase() === decodedCity,
    )?.value;

  return (
    <>
      <LocalNavbar items={navbarItems} />
      <Card>
        <div className="z-10 flex w-full max-w-3xl flex-col items-center justify-center gap-5 px-10 py-5 sm:px-3 ">
          <h1 className="text-bold text-2xl sm:text-3xl">
            زمان در {decodedCity}
          </h1>
          {timezone ? (
            <TimezoneClock timezone={timezone} />
          ) : (
            <p>منطقه انتخاب شده موجود نیست !</p>
          )}
        </div>
      </Card>
    </>
  );
}
