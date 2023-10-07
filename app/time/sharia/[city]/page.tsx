import type { Metadata, ResolvingMetadata } from "next";
import ShariaTime from "@/components/time/sharia-time";

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const decodedCity = decodeURIComponent(params.city);
  return {
    title: `اوقات شرعی ${decodedCity}`,
  };
}

export default function Page({ params }: { params: { city: string } }) {
  const decodedCity = decodeURIComponent(params.city);
  return (
    <div className="z-10 flex w-full max-w-3xl flex-col items-center justify-center px-10 sm:px-3">
      <p>اوقات شرعی {decodedCity}</p>
      <ShariaTime city={decodedCity} />
    </div>
  );
}
