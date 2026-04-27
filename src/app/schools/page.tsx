import Image from "next/image";
import Link from "next/link";
import { schools } from "@/data/schools";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "World's Best Kitesurf Schools: The Full Directory 2026 | BestKitesurfSchools",
  description: "Browse our curated list of the world's most elite kitesurfing and wingfoiling schools. Ranked by instruction quality, safety, and local wind reliability.",
};

export default function SchoolsIndexPage() {
  const regions = Array.from(new Set(schools.map(s => s.region)));

  return (
    <>
      <Navigation />
      
      <header className="relative min-h-[50svh] w-full flex flex-col justify-end pt-40 pb-20 px-6 md:px-16 lg:px-24 bg-[#171717]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-main.jpg"
            alt="World Class Kitesurfing Schools"
            fill
            className="object-cover opacity-60 mix-blend-overlay grayscale"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 w-full max-w-[1400px] mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1] tracking-tight mb-8">
            The School Directory
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light tracking-wide max-w-2xl">
            A comprehensive, vetted collection of the world's finest kitesurfing and wingfoiling operations.
          </p>
        </div>
      </header>

      <main className="w-full bg-[#FDFBF7] text-[#171717]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-32">
          
          {regions.map((region) => (
            <section key={region} className="mb-32 last:mb-0">
              <div className="flex items-center space-x-6 mb-16">
                <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-[#1A365D] whitespace-nowrap">Global Region</span>
                <div className="h-px w-full bg-[#171717]/10"></div>
                <h2 className="font-serif text-3xl md:text-5xl capitalize">{region.replace("-", " ")}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                {schools
                  .filter((s) => s.region === region)
                  .map((school) => (
                    <Link 
                      key={school.id} 
                      href={`/schools/${school.id}`}
                      className="group flex flex-col"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden mb-8">
                        <Image
                          src={school.image || "/images/hero-main.jpg"}
                          alt={school.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                        {school.featured && (
                          <div className="absolute top-6 left-6 bg-[#319795] text-white text-[8px] uppercase tracking-[0.2em] font-bold px-3 py-1.5">
                            Expert Review
                          </div>
                        )}
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#171717]/40 mb-3">{school.city}, {school.country}</span>
                        <h3 className="font-serif text-2xl mb-4 group-hover:text-[#1A365D] transition-colors leading-tight">{school.name}</h3>
                        <p className="text-sm text-[#171717]/60 font-light leading-relaxed mb-6 line-clamp-2">
                          {school.description}
                        </p>
                        <div className="mt-auto flex items-center text-[10px] uppercase tracking-[0.2em] font-medium border-b border-[#171717]/10 pb-2 w-fit group-hover:border-[#1A365D] transition-colors">
                          View Analysis
                          <svg className="w-3 h-3 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </div>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </section>
          ))}
          
        </div>
      </main>

      <footer className="w-full bg-[#171717] py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-16 text-white/40">
           <div className="max-w-md">
              <h4 className="font-serif text-2xl text-white mb-6">Can't decide?</h4>
              <p className="text-sm font-light leading-relaxed mb-8">
                Our editorial team has personally vetted these schools based on IKO/VDWS certification, equipment renewal cycles, and client feedback. 
              </p>
           </div>
           <Link href="/academy" className="group">
              <span className="text-[10px] uppercase tracking-[0.2em] block mb-4">Foundation Knowledge</span>
              <span className="text-2xl font-serif text-white border-b border-white/20 group-hover:border-white transition-all pb-2">The Kitesurf Academy →</span>
           </Link>
        </div>
      </footer>
    </>
  );
}
