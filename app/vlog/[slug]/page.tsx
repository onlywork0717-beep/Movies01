import { connectDB } from "../../../lib/mongodb";
import Vlog from "../../../lib/models/Vlog";
import { notFound } from "next/navigation";
import Header from "../../components/Header";

import { Metadata } from "next";
import HomePage from "@/components/HomePage";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  await connectDB();
  const vlog = await Vlog.findOne({ slug });

  if (!vlog) return {};

  return {
    metadataBase: new URL("http://localhost:3000"), // change in prod
    title: vlog.title,
    description: vlog.description,
    openGraph: {
      title: vlog.title,
      description: vlog.description,
      images: [vlog.image],
    },
  };
}

export default async function VlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  await connectDB();
  const vlog = await Vlog.findOne({ slug });

  if (!vlog) notFound();

  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center py-15 px-10 gap-5   ">
        <h1 className="text-blue-950 text-4xl font-bold pb-2  text-center text-wrap">
          {vlog.title}
        </h1>
        <img
          src={vlog.image}
          alt={vlog.title}
          className="w-72 h-96 object-cover rounded-lg "
        />
        <p className="px-2 md:px-10 py-4 text-center text-wrap ">
          {vlog.description}
        </p>
        <p className="px-2 md:px-10 py-4 text-center text-wrap ">
          Click Download button below to Download the movie
        </p>
        <button className="py-3 px-5 bg-green-500 border-black rounded-2xl text-white font-bold text-[16px] ">
          <a href={vlog.link} target="_">
            Download
          </a>
        </button>
      </main>
      <HomePage />
      <Footer />
    </>
  );
}
