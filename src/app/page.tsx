import Image from "next/image";
import Link from "next/link";
import { schools } from "@/data/schools";
import { Navigation } from "@/components/Navigation";
import { SchoolGrid } from "@/components/SchoolGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Kitesurf Schools | The World's Finest Instruction",
  description: "A curated directory of the world's best kitesurfing schools. Discover premier centers globally from Brazil to Portugal.",
};

export default function Home() {
  const featuredSchools = schools.filter((s) => s.featured);
  const standardSchools = schools.filter((s) => !s.featured && s.id !== "north-wind");

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
              href="#featured-spotlight"
              className="inline-block bg-white text-zinc-950 font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95"
            >
              Explore Directory
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-20 bg-zinc-950 text-zinc-100">
        
        {/* Deep Spotlight Section (Conversion feature) */}
        <section id="featured-spotlight" className="pt-24 pb-16 px-6 md:px-12 max-w-6xl mx-auto scroll-mt-20">
           <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col md:flex-row group">
             <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                <Image src="/images/kitesurf-moledo-portugal.jpg" alt="North Wind Kitesurf & Wingfoil School" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute top-6 left-6 bg-brand text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                  Spotlight 2026
                </div>
             </div>
             <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">North Wind Kitesurf & Wingfoil School</h3>
                <p className="text-zinc-400 font-light leading-relaxed mb-6">
                  Featured as our <Link href="/best-kitesurf-schools-portugal" className="text-brand hover:underline">top rated school in Portugal</Link>, North Wind offers an unmatched boutique experience. Positioned on the uncrowded northern coast in Moledo, they capitalize on fiercely reliable thermal winds. Avoid the crowded southern beaches and experience true tailored progression.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a href="https://northwindkiteportugal.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-3 rounded-xl font-bold text-center hover:bg-zinc-200 transition-colors shadow-md">
                    Book Lessons
                  </a>
                  <Link href="/portugal/kitesurf-school" className="bg-transparent border border-zinc-700 text-zinc-300 px-8 py-3 rounded-xl font-bold text-center hover:bg-zinc-800 hover:text-white transition-colors">
                    Read The Review
                  </Link>
                </div>
             </div>
           </div>
        </section>

        {/* Global Directory Section Component */}
        <SchoolGrid standardSchools={standardSchools} />
        
        {/* SEO Internal Link Footer Expansion */}
        <section className="border-t border-zinc-900 bg-black pt-20 pb-10 px-6 md:px-12">
           <div className="max-w-5xl mx-auto">
              <h4 className="font-serif text-2xl font-bold text-white mb-6">Regional Guides & Deep Dives</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                 <div>
                    <h5 className="text-brand text-xs font-bold uppercase tracking-widest mb-3">Portugal Masterclass</h5>
                    <ul className="space-y-2 text-sm text-zinc-500 font-light">
                       <li><Link href="/best-kitesurf-schools-portugal" className="hover:text-white transition-colors">The Best Kitesurf Schools in Portugal</Link></li>
                       <li><Link href="/portugal/kitesurf-school" className="hover:text-white transition-colors">Ultimate Guide to Kitesurf School Portugal</Link></li>
                       <li><Link href="/portugal/moledo" className="hover:text-white transition-colors">Moledo Kitesurf Spot Guide</Link></li>
                       <li><Link href="/wingfoil-portugal" className="hover:text-white transition-colors">Wingfoil Portugal Directory</Link></li>
                    </ul>
                 </div>
                 {/* Placeholders for future programmatic expansion */}
                 <div>
                    <h5 className="text-zinc-600 text-xs font-bold uppercase tracking-widest mb-3">Americas</h5>
                    <ul className="space-y-2 text-sm text-zinc-600 font-light">
                       <li className="cursor-not-allowed">Best Schools in Dominican Republic</li>
                       <li className="cursor-not-allowed">Hatteras Sound Riding Guide</li>
                       <li className="cursor-not-allowed">Brazil Trade Winds Mastery</li>
                    </ul>
                 </div>
                 <div>
                    <h5 className="text-zinc-600 text-xs font-bold uppercase tracking-widest mb-3">Africa & Middle East</h5>
                    <ul className="space-y-2 text-sm text-zinc-600 font-light">
                       <li className="cursor-not-allowed">Dakhla Lagoon Reviews</li>
                       <li className="cursor-not-allowed">Egypt Red Sea Kitesurfing</li>
                       <li className="cursor-not-allowed">Cape Town Big Air Strategy</li>
                    </ul>
                 </div>
              </div>
           </div>
        </section>

      </main>

      <footer className="bg-black text-zinc-100 pb-16 px-6 md:px-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto text-center pt-16">
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
