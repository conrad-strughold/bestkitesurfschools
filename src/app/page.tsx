import Image from "next/image";
import Link from "next/link";
import { schools } from "@/data/schools";
import { Navigation } from "@/components/Navigation";
import { SchoolGrid } from "@/components/SchoolGrid";

export default function Home() {
  const featuredSchools = schools.filter((s) => s.featured);
  const standardSchools = schools.filter((s) => !s.featured);

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <header className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Kitesurfer catching air over dramatic ocean"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/50 to-zinc-950"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-8 tracking-tight drop-shadow-2xl">
            The World's Best <br />
            <span className="italic font-light">Kitesurf Schools</span>
          </h1>
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="w-16 h-px bg-brand mb-6"></div>
            <p className="text-zinc-300 text-lg md:text-xl font-light tracking-wide max-w-xl">
              Curated. Verified. Trusted by riders worldwide. Uncover the absolute pinnacle of kitesurf education.
            </p>
          </div>
          <div>
            <Link
              href="#locations"
              className="inline-block bg-white text-zinc-950 font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95"
            >
              Explore Directory
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-20 bg-zinc-950 text-zinc-100">
        {/* Editor's Picks Section */}
        <section id="featured" className="pt-24 md:pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <span className="text-brand uppercase tracking-widest text-xs font-bold mb-3 block">
              Premium Selection
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Editor's Picks</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            {featuredSchools.map((school, index) => (
              <article
                key={school.id}
                className="bg-zinc-900 rounded-2xl overflow-hidden school-card-hover shadow-sm border border-zinc-800 flex flex-col"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Link href={`/schools/${school.id}`} className="block h-64 md:h-72 overflow-hidden relative">
                  <Image
                    src={school.image}
                    alt={`${school.name} Kiteboarding`}
                    fill
                    className="object-cover transition-transform duration-1000 hover:scale-110 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md border border-white/10">
                    Editor's Pick
                  </div>
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-3 gap-4">
                    <Link href={`/schools/${school.id}`} className="hover:text-brand transition-colors">
                      <h3 className="font-serif text-2xl font-bold leading-tight text-white">{school.name}</h3>
                    </Link>
                  </div>
                  <div className="flex items-center text-xs text-zinc-400 mb-5 font-semibold tracking-wider uppercase">
                    <span className="mr-1.5 opacity-70">📍</span> {school.city}, {school.country}
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow font-light">
                    {school.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {school.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-zinc-800 text-zinc-300 text-[10px] px-2.5 py-1 rounded border border-zinc-700 font-medium uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-5 border-t border-zinc-800 flex justify-between items-center text-xs text-zinc-500 mt-auto font-medium">
                    <div className="text-zinc-300">{school.pricing}</div>
                    <Link
                      href={`/schools/${school.id}`}
                      className="text-white bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-full transition-colors border border-zinc-700 hover:border-zinc-500"
                    >
                      View Profile &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Directory Section Component */}
        <SchoolGrid standardSchools={standardSchools} />
      </main>

      <footer className="bg-black text-zinc-100 py-16 px-6 md:px-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="font-serif text-3xl font-bold mb-2">BestKitesurfSchools</h3>
          <p className="text-zinc-500 text-sm tracking-wide">The World's Finest Instruction</p>
          <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
            <p>&copy; 2026 BestKitesurfSchools.com. All rights reserved.</p>
            <p className="italic">Not affiliated with any individual school. Independently researched.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
