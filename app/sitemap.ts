import { connectDB } from "../lib/mongodb";
import Vlog from "../lib/models/Vlog";

export default async function sitemap() {
  const baseUrl = "https://moviedubbed.vercel.app"; // change in production

  await connectDB();
  const vlogs = await Vlog.find({}, "slug updatedAt");

  const vlogUrls = vlogs.map((vlog: any) => ({
    url: `${baseUrl}/vlog/${vlog.slug}`,
    lastModified: vlog.updatedAt || new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms-condition`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
    },
    ...vlogUrls,
  ];
}
