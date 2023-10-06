import { Metadata } from "next";
import ShariaTime from "@/components/time/sharia-time";


export default function Page({ params }: { params: { city: string } }) {
  const decodedCity = decodeURIComponent(params.city)
  return (
    <div className="z-10 w-full max-w-3xl px-10 sm:px-3 flex flex-col items-center justify-center">
      <p>اوقات شرعی {decodedCity}</p>
      <ShariaTime city={decodedCity}/>
    </div>
  );
}
