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
    { id: "all", label: "Global" },
    { id: "europe", label: "Europe" },
    { id: "americas", label: "Americas" },
    { id: "asia-pacific", label: "Asia & Pacific" },
    { id: "africa-middle-east", label: "Africa & Middle East" },
  ];

  return (
    <section id="locations" className="w-full pt-32 pb-40 px-6 md:px-16 lg:px-24 bg-[#FDFBF7]">
      <div className="max-w-[1400px] mx-auto scroll-mt-24">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-5xl md:text-7xl text-[#171717] leading-none tracking-tight mb-8">
              The Directory
            </h2>
            <p className="text-[#171717]/60 text-lg md:text-xl font-light leading-relaxed">
              An uncompromised selection. Exquisite locations, elite instruction, and authentic watersport heritage.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 pt-4">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`relative text-xs uppercase tracking-[0.15em] font-light pb-1 group transition-colors ${
                  filter === f.id
                    ? "text-[#1A365D] font-medium"
                    : "text-[#171717]/50 hover:text-[#171717]"
                }`}
              >
                {f.label}
                <span className={`absolute bottom-0 left-0 h-[1px] bg-current transition-all duration-500 ${filter === f.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
          </div>
        </div>

        {/* Editorial List (No Cards, No Grid) */}
        <div className="border-t border-[#171717]/10">
          {filteredSchools.length === 0 ? (
            <div className="py-32 text-[#171717]/40 font-serif text-3xl italic">
              No results discovered.
            </div>
          ) : (
            filteredSchools.map((school) => (
              <article
                key={school.id}
                className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 md:py-16 border-b border-[#171717]/10 school-item-hover"
              >
                {/* Info Column */}
                <div className="md:w-5/12 flex flex-col pr-8 mb-6 md:mb-0">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#171717]/40 font-medium mb-4">
                    {school.city}, {school.country}
                  </div>
                  <Link href={`/schools/${school.id}`} className="font-serif text-3xl md:text-4xl text-[#171717] hover:text-[#1A365D] transition-colors leading-[1.1]">
                    {school.name}
                  </Link>
                </div>

                {/* Description Column */}
                <div className="md:w-5/12 text-sm md:text-base text-[#171717]/60 font-light leading-relaxed pr-8 mb-8 md:mb-0">
                  {school.description}
                </div>

                {/* Micro Info & CTA Column */}
                <div className="md:w-2/12 flex md:justify-end items-center md:items-end flex-col">
                  <Link
                    href={`/schools/${school.id}`}
                    className="relative text-xs uppercase tracking-[0.1em] text-[#171717] font-medium inline-block overflow-hidden pb-1"
                  >
                    View Details
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#171717] hover-line-target"></span>
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>

      </div>
    </section>
  );
}
