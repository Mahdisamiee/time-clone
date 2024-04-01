import ToolsListMapper from "@/components/shared/tools-list-mapper";
import {
  getTranslations,
  unstable_setRequestLocale
} from "next-intl/server";

type Props = {
  params: { locale: string;  };
};

export default async function Home({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("Map.Links");
  
  const tools = [
    {
      title: t("distance"),
      url: "map/distance",
      icon: null,
    },
  ];
  return (
    <div className="z-10 w-full max-w-screen-lg px-5 xl:px-0">
      <ToolsListMapper tools={tools} />
    </div>
  );
}
