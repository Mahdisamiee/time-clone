import type { Metadata } from "next";
import ShariaTime from "@/app/time/sharia/sharia-time";

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const decodedCity = decodeURIComponent(params.city);
  return {
    title: `اوقات شرعی ${decodedCity} | زمان طلوع و غروب آفتاب + زمان اذان`,
    description: `اوقات شرعی دقیق شهر ${decodedCity} | طلوع و غروب دقیق آفتاب ${decodedCity} به همراه زمان دقیق اذان صبح، اذان ظهر و اذان مغرب | کیت ۳۶۵`,
    keywords: [
      `اوقات شرعی دقیق ${decodedCity}`,
      `زمان دقیق طلوع و غروب ${decodedCity}`,
      `زمان طلوع آفتاب ${decodedCity}`,
      `طلوع آفتاب ${decodedCity}`,
      `زمان غروب آفتاب ${decodedCity}`,
      `غروب آفتاب ${decodedCity}`,
      `زمان اذان صبح ${decodedCity}`,
      `اذان صبح ${decodedCity}`,
      `زمان اذان ظهر ${decodedCity}`,
      `اذان ظهر ${decodedCity}`,
      `اذان مغرب ${decodedCity}`,
      `زمان اذان مغرب ${decodedCity}`,
      `نیمه شب شرعی ${decodedCity}`,
    ],
    alternates: {
      canonical: `https://kit365.ir/time/sharia/${decodedCity}`,
    },
  };
}


// to create pages and use in auto-creating sitemap.xml
export async function generateStaticParams() {
  const cities = (await import("@/lib/constants")).WORLD_SHARIA_CITIES;

  let result: { city: string }[] = [];
  cities.map((item) => {
    result.push({
      city: item.label,
    });
    item.lLabel &&
      result.push({
        city: item.lLabel,
      });
  });
  return result;
}

export default function Page({ params }: { params: { city: string } }) {
  const decodedCity = decodeURIComponent(params.city);
  return (
    <>
      <p className="mt-3">اوقات شرعی {decodedCity}</p>
      <ShariaTime city={decodedCity} />
    </>
  );
}
