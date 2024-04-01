import { unstable_setRequestLocale } from "next-intl/server";
import ShariaTime from "../sharia-time";

type Props = {
  params: { locale: string; city: string };
};
// to create pages and use in auto-creating sitemap.xml
// export async function generateStaticParams() {
//   const cities = (await import("@/lib/constants")).WORLD_SHARIA_CITIES;

//   let result: { city: string }[] = [];
//   cities.map((item) => {
//     result.push({
//       city: item.label,
//     });
//     item.lLabel &&
//       result.push({
//         city: item.lLabel,
//       });
//   });
//   return result;
// }

export default function Page({ params }: Props) {
  const decodedCity = decodeURIComponent(params.city);

  unstable_setRequestLocale(params.locale);

  return (
    <>
      <h4 className="mt-3 text-xl capitalize">{decodedCity}</h4>
      <ShariaTime city={decodedCity} />
    </>
  );
}
