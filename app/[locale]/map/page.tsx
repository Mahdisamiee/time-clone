import ToolsListMapper from "@/components/shared/tools-list-mapper";

export default async function Home() {
  return (
    <div className="z-10 w-full max-w-screen-lg px-5 xl:px-0">
      <ToolsListMapper tools={tools} />
    </div>
  );
}

const tools = [
  {
    title: "فاصله شهرها",
    url: "map/distance",
    icon: null,
  },
];
