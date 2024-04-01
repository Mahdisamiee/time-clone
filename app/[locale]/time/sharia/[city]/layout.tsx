import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const t = await getTranslations("Time.Sharia.metadata");
  const decodedCity = decodeURIComponent(params.city);
  return {
    title: t("title", { city: decodedCity }),
    description: t("description", { city: decodedCity }),
    keywords: [
      `اوقات شرعی دقیق ${decodedCity}`,
      `exact sharia time ${decodedCity}`,
      `زمان دقیق طلوع و غروب ${decodedCity}`,
      `exact sunrise and sunset ${decodedCity}`,
      `زمان طلوع آفتاب ${decodedCity}`,
      `sunrise time ${decodedCity}`,
      `طلوع آفتاب ${decodedCity}`,
      `sunrise ${decodedCity}`,
      `زمان غروب آفتاب ${decodedCity}`,
      `sunset time ${decodedCity}`,
      `غروب آفتاب ${decodedCity}`,
      `sunset ${decodedCity}`,
      `زمان اذان صبح ${decodedCity}`,
      `imaask time ${decodedCity}`,
      `اذان صبح ${decodedCity}`,
      `imaask ${decodedCity}`,
      `زمان اذان ظهر ${decodedCity}`,
      `noon time ${decodedCity}`,
      `اذان ظهر ${decodedCity}`,
      `noon ${decodedCity}`,
      `اذان مغرب ${decodedCity}`,
      `maghreb ${decodedCity}`,
      `زمان اذان مغرب ${decodedCity}`,
      `maghreb time ${decodedCity}`,
      `نیمه شب شرعی ${decodedCity}`,
      `midnight time ${decodedCity}`,
      `midnight ${decodedCity}`,
    ],
    alternates: {
      canonical: `/time/sharia/${decodedCity}`,
      languages: {
        fa: `/fa/sharia/${decodedCity}`,
        en: `/en/sharia/${decodedCity}`,
      },
    },
  };
}

export default function Layout({ children }: Props) {

  return <>{children}</>;
}
