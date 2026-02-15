"use client";

import { useEffect, useState } from "react";
import VlogCard from "./VlogCard";

type Vlog = {
  _id: string;
  title: string;
  slug: string;
  image: string;
  description: string;
};

export default function Body() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Vlog[]>([]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const fetchVlogs = async () => {
      const res = await fetch(`/api/search?q=${query}`);
      const data = await res.json();
      setResults(data);
    };

    fetchVlogs();
  }, [query]);

  return (
    <main className="bg-[#17203D] flex flex-col items-center gap-8 py-10 ">
      <input
        type="text"
        placeholder="Search movies..."
        className="bg-white rounded-2xl w-[60%] h-12 px-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <p className="text-white text-2xl w-[45%] text-center">
        Search the Movies and Download Completly Free
      </p>

      {/* RESULTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[80%]">
        {results.map((vlog) => (
          <VlogCard
            key={vlog._id}
            title={vlog.title}
            slug={vlog.slug}
            image={vlog.image}
            description={vlog.description}
          />
        ))}
      </div>
    </main>
  );
}
