import Image from "next/image";
import Link from "next/link";
import { schools } from "@/data/schools";
import { Navigation } from "@/components/Navigation";
import { SchoolGrid } from "@/components/SchoolGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Kitesurf Schools Worldwide | Curated Directory 2026",
  description: "Discover the world's top kitesurfing schools, from Portugal to Maui. Expert-reviewed, ranked by wind reliability, instruction quality, and progression results.",
};

export default function Home() {
  const standardSchools = schools.filter((s) => s.id !== "north-wind");

  return (
    <>
      <Navigation />
      
      {/* Hero Section - Edge to Edge */}
      <header className="relative w-full h-[100svh] flex items-center bg-[#171717]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Kitesurfer catching air over dramatic ocean"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto animate-in fade-in duration-1000 mt-20">
          <p className="text-white text-xs tracking-[0.2em] uppercase font-light mb-6">
            The Definitive Global Directory
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.0] tracking-tight max-w-4xl mb-8">
            The World's Best Kitesurf Schools — Curated & Reviewed.
          </h1>
          {/* Trust stats strip */}
          <div className="flex flex-wrap gap-6 mb-12 text-white/70 text-[10px] uppercase tracking-[0.2em] font-medium">
            <span>500+ Students Taught</span>
            <span className="text-white/30">·</span>
            <span>180+ Wind Days/Year</span>
            <span className="text-white/30">·</span>
            <span>IKO Certified Instructors</span>
          </div>
          <Link
            href="#locations"
            className="inline-flex items-center text-white text-sm tracking-[0.1em] uppercase font-light group"
          >
            <span className="relative pb-1">
              Explore The Collection
              <span className="absolute bottom-0 left-0 w-full h-px bg-white transform origin-right scale-x-100 transition-transform duration-500 group-hover:scale-x-0"></span>
            </span>
            <svg className="w-4 h-4 ml-4 transform transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </Link>
        </div>
      </header>

      <main className="relative z-20">
        
        {/* Editor's Featured Pick - Asymmetrical Split Section */}
        <section id="featured-spotlight" className="w-full flex flex-col lg:flex-row min-h-[90svh] scroll-mt-20">
          {/* Image Side (Left) */}
          <div className="w-full lg:w-1/2 relative h-[60svh] lg:h-auto">
            <Image 
              src="/images/kitesurf-moledo-portugal.jpg" 
              alt="North Wind Kitesurf & Wingfoil School" 
              fill 
              className="object-cover" 
            />
          </div>
          
          {/* Content Side (Right) */}
          <div className="w-full lg:w-1/2 flex items-center p-12 md:p-24 lg:p-32 bg-[#FDFBF7]">
            <div className="max-w-xl">
              <span className="text-[#1A365D] text-xs font-light uppercase tracking-[0.15em] block mb-8">
                Editor's Pick
              </span>
              <h2 className="font-serif text-5xl md:text-6xl text-[#171717] leading-tight mb-4">
                North Wind <br/>Kitesurf & Wingfoil
              </h2>
              <div className="flex items-center text-sm text-[#171717]/60 uppercase tracking-widest font-light mb-4">
                Moledo, Portugal
              </div>
              {/* Stars + review count */}
              <div className="flex items-center space-x-2 mb-8">
                <span className="text-[#319795] text-base">★ ★ ★ ★ ★</span>
                <span className="text-xs text-[#171717]/50">124 reviews</span>
              </div>
              {/* Trust pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="border border-[#171717]/20 text-xs px-3 py-1 rounded-full text-[#171717]/70">Nortada Wind</span>
                <span className="border border-[#171717]/20 text-xs px-3 py-1 rounded-full text-[#171717]/70">IKO Certified</span>
                <span className="border border-[#171717]/20 text-xs px-3 py-1 rounded-full text-[#171717]/70">Group Max 4</span>
              </div>
              <p className="text-[#171717]/80 text-lg md:text-xl font-light leading-relaxed mb-8">
                Highlighted as our <Link href="/best-kitesurf-schools-portugal" className="underline hover:text-[#319795] transition-colors">top rated school in Portugal</Link>, North Wind offers an unmatched boutique experience. Capitalizing on fiercely reliable thermal winds off the uncrowded northern coast, they embody the absolute pinnacle of high-end, tailored progression.
              </p>
              {/* Testimonial */}
              <blockquote className="relative italic text-base text-[#171717]/60 font-light leading-relaxed mb-10 pl-6 border-l-2 border-[#319795]">
                "By day 4 I was riding upwind. The beach was pristine and uncrowded. Simply the best."
                <cite className="not-italic block mt-2 text-[10px] tracking-widest uppercase text-[#171717]/40">— Markus H., Germany</cite>
              </blockquote>
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <a href="https://northwindkiteportugal.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#1A365D] text-white px-8 py-4 text-sm uppercase tracking-[0.1em] font-medium hover:bg-[#319795] transition-colors">
                  Book Lessons →
                </a>
                <Link href="/best-kitesurf-schools-portugal" className="relative group text-[#171717]/60 text-sm tracking-[0.1em] uppercase font-light inline-flex items-center mt-4 sm:mt-0">
                  <span className="pb-1">Read The Review</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#171717] transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Global Directory Grid Component */}
        <SchoolGrid standardSchools={standardSchools} />
        
        {/* Editorial Footer Navigation */}
        <section className="w-full pt-32 pb-20 px-6 md:px-16 lg:px-24 bg-[#171717] text-[#FDFBF7]">
           <div className="max-w-[1400px] mx-auto border-t border-white/20 pt-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
                 <div className="md:col-span-2">
                    <h3 className="font-serif text-4xl mb-6">BestKitesurfSchools.</h3>
                    <p className="text-white/50 font-light max-w-sm leading-relaxed">
                      A curated editorial deep dive into the world's most elite watersport academies. Uncompromising standards.
                    </p>
                 </div>
                 <div>
                    <h5 className="text-xs font-light uppercase tracking-[0.15em] mb-8 text-white/40">Portugal Guides</h5>
                    <ul className="space-y-4 text-sm font-light text-white/80">
                       <li><Link href="/best-kitesurf-schools-portugal" className="hover:text-white transition-colors relative group"><span className="pb-1">Top Schools</span><span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span></Link></li>
                       <li><Link href="/kitesurf-portugal" className="hover:text-white transition-colors relative group"><span className="pb-1">Kite Portugal</span><span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span></Link></li>
                       <li><Link href="/kitesurf-moledo" className="hover:text-white transition-colors relative group"><span className="pb-1">Moledo Guide</span><span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span></Link></li>
                       <li><Link href="/wingfoil-beginner-guide" className="hover:text-white transition-colors relative group"><span className="pb-1">Wingfoil Tips</span><span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span></Link></li>
                       <li><Link href="/kitesurf-northern-portugal" className="hover:text-white transition-colors relative group"><span className="pb-1">Northern Portugal</span><span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span></Link></li>
                       <li><Link href="/when-to-kitesurf-portugal" className="hover:text-white transition-colors relative group"><span className="pb-1">When To Go</span><span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span></Link></li>
                    </ul>
                 </div>
                 <div>
                    <h5 className="text-xs font-light uppercase tracking-[0.15em] mb-8 text-white/40">Destinations</h5>
                    <ul className="space-y-4 text-sm font-light text-white/80">
                       <li><Link href="/kitesurf-tarifa-spain" className="hover:text-white transition-colors relative group"><span className="pb-1">Tarifa, Spain</span><span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span></Link></li>
                       <li><Link href="/kitesurf-dakhla-morocco" className="hover:text-white transition-colors relative group"><span className="pb-1">Dakhla, Morocco</span><span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span></Link></li>
                       <li><Link href="/kitesurf-essaouira-morocco" className="hover:text-white transition-colors relative group"><span className="pb-1">Essaouira, Morocco</span><span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span></Link></li>
                       <li><Link href="/kitesurf-brazil" className="hover:text-white transition-colors relative group"><span className="pb-1">Brazil</span><span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span></Link></li>
                    </ul>
                 </div>
              </div>
              <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-white/30 gap-4">
                <span>© 2026 BestKitesurfSchools.com</span>
                <div className="flex gap-6">
                  <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-white/60 transition-colors">Terms of Use</Link>
                </div>
              </div>
           </div>
        </section>
      </main>
    </>
  );
}
