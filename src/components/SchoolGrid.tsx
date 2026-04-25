"use client";
import { useState } from "react";
import Link from "next/link";
import { School } from "@/data/schools";

export function SchoolGrid({ standardSchools }: { standardSchools: School[] }) {
  const [filter, setFilter] = useState("all");

  const filteredSchools =
    filter === "all"
      ? standardSchools
      : standardSchools.filter((s) => s.region === filter);

  const filters = [
    { id: "all", label: "All Locations" },
    { id: "europe", label: "Europe" },
    { id: "americas", label: "Americas" },
    { id: "asia-pacific", label: "Asia & Pacific" },
    { id: "africa-middle-east", label: "Africa & Middle East" },
  ];

  return (
    <section id="locations" className="pt-16 pb-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-5 text-white">Global Directory</h2>
          <p className="text-zinc-400 max-w-2xl text-lg font-light leading-relaxed">
            Discover hand-picked kite centers across every major continent, rigorously vetted for exceptional instruction, distinct geography, and premier amenities.
          </p>
        </div>
      </div>

      <div className="flex space-x-3 overflow-x-auto pb-6 mb-10 no-scrollbar">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`whitespace-nowrap px-6 py-2 rounded-full border text-sm font-medium transition-all ${
              filter === f.id
                ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                : "border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-800/50"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filteredSchools.length === 0 ? (
        <div className="text-center py-32 bg-zinc-900/50 rounded-2xl border border-zinc-800">
          <p className="text-2xl text-zinc-600 font-serif mb-2">No schools found.</p>
          <p className="text-zinc-600 text-sm">Try selecting a different region.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredSchools.map((school) => (
            <article
              key={school.id}
              className="bg-zinc-900 rounded-xl overflow-hidden school-card-hover border border-zinc-800 p-6 md:p-8 flex flex-col"
            >
              <div className="flex justify-between items-start mb-3 gap-3">
                <Link href={`/schools/${school.id}`} className="hover:text-brand transition-colors text-white">
                  <h3 className="font-serif text-xl font-bold pr-2 leading-snug">{school.name}</h3>
                </Link>
              </div>

              <div className="flex items-center text-[10px] text-zinc-500 mb-4 font-bold tracking-widest uppercase">
                <span className="mr-1.5 opacity-70">📍</span> {school.city}, {school.country}
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow font-light">
                {school.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {school.tags.map((tag) => (
                  <span
                     key={tag}
                     className="bg-zinc-800 text-zinc-400 text-[10px] px-2.5 py-1 rounded border border-zinc-700 font-medium uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-zinc-800 flex justify-between items-center text-xs text-zinc-500 mt-auto font-medium">
                <div className="truncate max-w-[55%] text-zinc-400 mr-2">{school.pricing}</div>
                <Link
                  href={`/schools/${school.id}`}
                  className="text-white hover:text-brand font-bold transition-colors"
                >
                  Details &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
