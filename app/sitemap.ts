import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://moviedubbed.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy-policy`,
    },
    {
      url: `${baseUrl}/terms-condition`,
    },
    {
      url: `${baseUrl}/disclaimer`,
    },
  ];
}
