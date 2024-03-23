import type { Metadata, ResolvingMetadata } from "next";
import TimezoneClock from "@/components/time/timezone-clock";

// import { WORLD_CLOCK_TIMEZONES } from "@/lib/constants";
import LocalNavbar from "@/components/shared/local-navbar";
import Card from "@/components/home/simple-card";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const decodedCity = decodeURIComponent(params.city);
  const t = await getTranslations("Time.CitiesTime.metadata");
  return {
    title: t("title", { city: decodedCity }),
    description: t("description", { city: decodedCity }),
    keywords: [
      `زمان در ${decodedCity}`,
      `ساعت الان ${decodedCity}`,
      `ساعت دقیق ${decodedCity}`,
      `زمان به وقت ${decodedCity}`,
      `اختلاف ساعت جهانی در ${decodedCity}`,
      `time in ${decodedCity}`,
      `The time is ${decodedCity}`,
      `exact time of ${decodedCity}`,
      `time to time ${decodedCity}`,
      `world time difference in ${decodedCity}`,
    ],
    alternates: {
      canonical: `/time/${decodedCity}`,
      languages: {
        fa: `/fa/time/${decodedCity}`,
        en: `/en/time/${decodedCity}`,
      },
    },
  };
}

export async function generateStaticParams() {
  const cities = (await import("@/lib/constants")).WORLD_CLOCK_TIMEZONES;

  return cities.map((item) => ({
    city: item.label,
  }));
}

export default async function Page({ params }: { params: { city: string } }) {
  const t = await getTranslations("Time");
  const navbarItems = [
    {
      title: t("Links.today"),
      url: "/time",
    },
    {
      title: t("Links.ageCalculation"),
      url: "/time/age",
    },
    {
      title: t("Links.dayDiff"),
      url: "/time/diff",
    },
  ];
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
            {t("CitiesTime.title", { city: decodedCity })}
          </h1>
          {timezone ? (
            <TimezoneClock timezone={timezone} />
          ) : (
            <p>{t("CitiesTime.error")}</p>
          )}
        </div>
      </Card>
    </>
  );
}
