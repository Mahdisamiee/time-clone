import type { Metadata, ResolvingMetadata } from "next";
import CityTime from "./city-time";
import TimezoneClock from "@/components/time/timezone-clock";

import { WORLD_CLOCK_TIMEZONES } from "@/lib/constants";

// export async function generateMetadata({
//   params,
// }: {
//   params: { city: string };
// }): Promise<Metadata> {
//   const decodedCity = decodeURIComponent(params.city);
//   return {
//     title: `اوقات شرعی ${decodedCity} | زمان طلوع و غروب آفتاب + زمان اذان`,
//     description: `اوقات شرعی دقیق شهر ${decodedCity} | طلوع و غروب دقیق آفتاب ${decodedCity} به همراه زمان دقیق اذان صبح، اذان ظهر و اذان مغرب | کیت ۳۶۵`,
//     keywords: [
//       `اوقات شرعی دقیق ${decodedCity}`,
//       `زمان دقیق طلوع و غروب ${decodedCity}`,
//       `زمان طلوع آفتاب ${decodedCity}`,
//       `طلوع آفتاب ${decodedCity}`,
//       `زمان غروب آفتاب ${decodedCity}`,
//       `غروب آفتاب ${decodedCity}`,
//       `زمان اذان صبح ${decodedCity}`,
//       `اذان صبح ${decodedCity}`,
//       `زمان اذان ظهر ${decodedCity}`,
//       `اذان ظهر ${decodedCity}`,
//       `اذان مغرب ${decodedCity}`,
//       `زمان اذان مغرب ${decodedCity}`,
//       `نیمه شب شرعی ${decodedCity}`,
//     ],
//     alternates: {
//       canonical: `https://kit365.ir/time/sharia/${decodedCity}`,
//     },
//   };
// }

export default function Page({ params }: { params: { city: string } }) {
  const decodedCity = decodeURIComponent(params.city);
  const timezone =
    decodedCity &&
    WORLD_CLOCK_TIMEZONES.find(
      (option) => option.label.toLocaleLowerCase() === decodedCity,
    )?.value;

    console.log(
      "here -> ",
      decodedCity,
      timezone,
      WORLD_CLOCK_TIMEZONES.find(
        (option) => option.label.toLocaleLowerCase() === decodedCity,
      ),
    );
  return (
    <div className="z-10 flex w-full max-w-3xl flex-col items-center justify-center px-10 sm:px-3">
      <h2 className="text-xl">زمان در : {decodedCity}</h2>
      {
        timezone ? 
      <TimezoneClock timezone={timezone} /> : <p>منطقه انتخاب شده موجود نیست !</p>
      }
    </div>
  );
}
