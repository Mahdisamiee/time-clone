import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  

  return [
    {
      url: "https://twitter.com/Tehran_chi",
      lastModified: new Date(),
    },
    {
      url: "https://www.linkedin.com/company/nano1",
      lastModified: new Date(),
    },
  ];
}
