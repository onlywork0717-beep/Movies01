import { connectDB } from "../../lib/mongodb";
import Vlog from "../../lib/models/Vlog";
import VlogCard from "@/components/VlogCard";

export default async function HomePage() {
  await connectDB();

  const vlogs = await Vlog.find({}).sort({ createdAt: -1 }).limit(6).lean();

  return (
    <main className="flex flex-row py-10 px-10 flex-wrap gap-8 items-center justify-center ">
      {vlogs.map((vlog) => (
        <VlogCard
          key={vlog._id.toString()}
          title={vlog.title}
          slug={vlog.slug}
          image={vlog.image}
          description={vlog.description}
        />
      ))}
    </main>
  );
}
