
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To Learn Kitesurfing | Best Kitesurf Schools",
  description: "Comprehensive guide to how to learn kitesurfing.",
};

export default function GuidePage() {
  return (
    <>
      <Navigation />
      
      {/* Editorial Hero */}
      <header className="relative h-[60svh] w-full flex items-end pb-24 px-6 md:px-16 lg:px-24 bg-[#171717]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#171717]"></div>
          <Image
            src="/images/hero.png"
            alt="How To Learn Kitesurfing"
            fill
            className="object-cover opacity-50 mix-blend-overlay grayscale"
            priority
          />
        </div>

        <div className="relative z-10 w-full max-w-[1000px] mx-auto">
          <div className="mb-8 flex items-center space-x-3 text-white text-[10px] tracking-[0.2em] uppercase font-medium">
            <Link href="/" className="hover:opacity-60 transition-opacity">Home</Link>
            <span className="opacity-40">/</span>
            <span className="opacity-80">Knowledge Hub</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tight mb-8">
            How To Learn Kitesurfing
          </h1>
        </div>
      </header>

      <main className="relative z-20 bg-[#FDFBF7] text-[#171717]">
        <div className="w-full px-6 md:px-16 lg:px-24 py-24 max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">
            
            {/* Main Content Column */}
            <div className="lg:w-2/3 editorial-content">
              
      <h2 className="font-serif text-4xl mb-6 mt-12">The Realistic Timeline</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Expecting to ride flawlessly on day one is unrealistic. A typical progression timeline looks like this: Days 1-2 involve kite control and body dragging. Day 3 introduces board starts. Days 4-7 are dedicated to sustained riding and trying to stay upwind. Achieving independence usually takes 10 to 15 hours of professional instruction.
      </p>

      <h2 className="font-serif text-4xl mb-6 mt-12">Self-Learning vs Lessons</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        <strong>Never attempt to self-teach kitesurfing.</strong> Watching videos can help with theory, but the sport requires muscle memory and real-time feedback. Self-taught riders develop dangerous habits and put others at risk. Certified lessons are mandatory. Working with schools in Europe, specifically in regions with reliable thermal winds like <Link href="/kitesurf-portugal" className="underline hover:text-[#319795]">Portugal</Link>, dramatically accelerates learning.
      </p>

      <h2 className="font-serif text-4xl mb-6 mt-12">Progression Stages</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Once you master the basic ride, progression moves to riding upwind, executing smooth transitions (turns) without sinking, and eventually loading the board for your first jumps. Choosing a less crowded spot with vast open water—such as <Link href="/kitesurf-moledo" className="underline hover:text-[#319795]">Moledo</Link> in northern Portugal—removes the stress of dodging other learners, allowing total focus on technique.
      </p>
    
              
              

              <div className="mt-24 p-8 border border-[#171717]/10 bg-[#FDFBF7]">
                 <h4 className="font-serif text-2xl mb-4">The ultimate progression secret? Professional instruction.</h4>
                 <p className="text-[#171717]/70 font-light leading-relaxed mb-6">
                   While self-study is valuable, nothing replaces time on the water with certified experts. Looking for lessons in Europe? Portugal offers legendary thermal winds and spectacular uncrowded beaches if you know where to look.
                 </p>
                 <a href="https://northwindkiteportugal.com" target="_blank" rel="noopener noreferrer" className="inline-block border-b border-[#1A365D] text-[#1A365D] font-medium uppercase tracking-widest text-xs pb-1 hover:opacity-70 transition-opacity">
                   View Kitesurf School in Moledo
                 </a>
              </div>
            </div>

            {/* Sidebar Column */}
            <aside className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="border-t border-[#171717]/10 pt-12 mb-16">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-8 text-[#171717]/50">Trending Guides</h3>
                  <ul className="space-y-4 text-sm font-light text-[#171717]/80">
                     <li><Link href="/kitesurf-portugal" className="hover:text-[#319795] transition-colors relative group"><span className="pb-1">Kitesurf Portugal</span><span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#319795] transition-all group-hover:w-full"></span></Link></li>
                     <li><Link href="/best-kitesurf-schools-portugal" className="hover:text-[#319795] transition-colors relative group"><span className="pb-1">Best Schools in Portugal</span><span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#319795] transition-all group-hover:w-full"></span></Link></li>
                     <li><Link href="/kitesurfing-for-beginners" className="hover:text-[#319795] transition-colors relative group"><span className="pb-1">Beginner's Guide</span><span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#319795] transition-all group-hover:w-full"></span></Link></li>
                     <li><Link href="/kitesurf-moledo" className="hover:text-[#319795] transition-colors relative group"><span className="pb-1">Moledo Spot Guide</span><span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#319795] transition-all group-hover:w-full"></span></Link></li>
                  </ul>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </main>
    </>
  );
}
