import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Academy | Best Kitesurf Schools",
  description: "Your master directory for learning kitesurfing. Gear guides, wind explanations, and step-by-step video tutorials.",
};

export default function AcademyIndex() {
  return (
    <>
      <Navigation />
      
      {/* Editorial Hero */}
      <header className="relative w-full h-[60svh] flex items-end pb-16 bg-[#171717]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/northern-portugal-kitesurf.jpg"
            alt="Kitesurf Academy"
            fill
            className="object-cover opacity-60 mix-blend-overlay grayscale"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          <h1 className="font-serif text-6xl md:text-8xl text-white leading-[0.95] tracking-tight mb-8">
            The Academy
          </h1>
          <p className="text-white/70 text-lg font-light tracking-wide max-w-xl">
            A comprehensive, masterclass-level database of wind theory, gear selection, and video technique tutorials.
          </p>
        </div>
      </header>

      <main className="w-full bg-[#FDFBF7] text-[#171717]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-32 space-y-32">
          
          {/* Section 1: Video Enhanced Tutorials */}
          <section>
            <div className="flex items-center space-x-4 mb-16">
              <span className="w-8 h-px bg-[#171717]"></span>
              <h2 className="font-serif text-4xl">Video Tutorials</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <Link href="/how-to-water-start-kitesurf" className="group block border-b border-[#171717]/10 pb-8 hover:opacity-70 transition-opacity">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#1A365D] mb-4 block">Core Skill</span>
                  <h3 className="font-serif text-3xl mb-4">How To Water Start</h3>
                  <p className="text-[#171717]/60 font-light text-sm">The make-or-break move. Learn to balance kite power and board resistance.</p>
               </Link>
               <Link href="/how-to-control-kite" className="group block border-b border-[#171717]/10 pb-8 hover:opacity-70 transition-opacity">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#1A365D] mb-4 block">Fundamentals</span>
                  <h3 className="font-serif text-3xl mb-4">Steering & Control</h3>
                  <p className="text-[#171717]/60 font-light text-sm">Mastering the wind window, power zones, and the safety release.</p>
               </Link>
               <Link href="/kitesurf-body-drag" className="group block border-b border-[#171717]/10 pb-8 hover:opacity-70 transition-opacity">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#1A365D] mb-4 block">Safety</span>
                  <h3 className="font-serif text-3xl mb-4">Body Dragging</h3>
                  <p className="text-[#171717]/60 font-light text-sm">How to recover your board and navigate deep water safely.</p>
               </Link>
               <Link href="/kitesurf-first-ride" className="group block border-b border-[#171717]/10 pb-8 hover:opacity-70 transition-opacity">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#1A365D] mb-4 block">Progression</span>
                  <h3 className="font-serif text-3xl mb-4">Your First Ride</h3>
                  <p className="text-[#171717]/60 font-light text-sm">Sustaining the glide and converting lateral drag to forward momentum.</p>
               </Link>
               <Link href="/wingfoil-beginner-guide" className="group block border-b border-[#171717]/10 pb-8 hover:opacity-70 transition-opacity">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#1A365D] mb-4 block">New Sport</span>
                  <h3 className="font-serif text-3xl mb-4">Wingfoil Basics</h3>
                  <p className="text-[#171717]/60 font-light text-sm">Taking flight for the first time on a hydrofoil.</p>
               </Link>
            </div>
          </section>

          {/* Section 2: Core Fundamentals */}
          <section>
            <div className="flex items-center space-x-4 mb-16">
              <span className="w-8 h-px bg-[#171717]"></span>
              <h2 className="font-serif text-4xl">Theory & Learning Frameworks</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
               <div className="md:col-span-2 border border-[#171717]/10 p-12 bg-white flex flex-col justify-center">
                  <h3 className="font-serif text-4xl mb-6">Start Here</h3>
                  <p className="text-lg text-[#171717]/70 font-light mb-8 max-w-xl">
                    Kitesurfing has a steep initial learning curve. Understand exactly what to expect from day one on the beach to your first independent ride.
                  </p>
                  <div className="flex flex-col space-y-4">
                     <Link href="/kitesurfing-for-beginners" className="text-sm font-medium uppercase tracking-[0.1em] hover:text-[#1A365D] transition-colors border-b border-[#171717]/10 pb-2 inline-block max-w-sm">→ Kitesurfing For Beginners</Link>
                     <Link href="/how-to-learn-kitesurfing" className="text-sm font-medium uppercase tracking-[0.1em] hover:text-[#1A365D] transition-colors border-b border-[#171717]/10 pb-2 inline-block max-w-sm">→ Realistic Learning Timelines</Link>
                     <Link href="/is-kitesurfing-dangerous" className="text-sm font-medium uppercase tracking-[0.1em] hover:text-[#1A365D] transition-colors border-b border-[#171717]/10 pb-2 inline-block max-w-sm">→ Is Kitesurfing Dangerous?</Link>
                  </div>
               </div>
               
               <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#1A365D] mb-4 block">Location Focus</span>
                    <h3 className="font-serif text-3xl mb-4">Why Portugal?</h3>
                    <p className="text-[#171717]/70 font-light text-sm mb-6 leading-relaxed">
                      Discover why thousands of riders flock to the Atlantic coast every summer, and why heading North changes everything.
                    </p>
                  </div>
                  <div className="space-y-3">
                     <Link href="/kitesurf-portugal" className="block text-xs uppercase tracking-widest font-medium hover:text-[#319795]">Portugal Overview</Link>
                     <Link href="/kitesurf-moledo" className="block text-xs uppercase tracking-widest font-medium hover:text-[#319795]">Moledo Spot Guide</Link>
                  </div>
               </div>
            </div>
          </section>

          {/* Section 3: Wind & Gear Lists */}
          <section>
            <div className="flex items-center space-x-4 mb-16">
              <span className="w-8 h-px bg-[#171717]"></span>
              <h2 className="font-serif text-4xl">Technical Knowledge</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-[#171717]/10 pt-16">
               <div className="md:col-span-1">
                 <h3 className="font-serif text-2xl mb-8">Wind & Weather</h3>
               </div>
               <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                 <Link href="/kitesurf-wind-guide" className="group">
                    <h4 className="font-serif text-xl mb-3 group-hover:text-[#1A365D] transition-colors">Reading The Elements</h4>
                    <p className="text-sm text-[#171717]/60 font-light">Onshore, offshore, and the magic of thermal acceleration.</p>
                 </Link>
                 <Link href="/best-wind-apps-kitesurfing" className="group">
                    <h4 className="font-serif text-xl mb-3 group-hover:text-[#1A365D] transition-colors">Best Forecasting Apps</h4>
                    <p className="text-sm text-[#171717]/60 font-light">How to interpret Windguru and Windy without guessing.</p>
                 </Link>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-[#171717]/10 pt-16 mt-16">
               <div className="md:col-span-1">
                 <h3 className="font-serif text-2xl mb-8">Gear & Brands</h3>
               </div>
               <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                 <Link href="/best-kitesurf-brands" className="group">
                    <h4 className="font-serif text-xl mb-3 group-hover:text-[#1A365D] transition-colors">The Best Kitesurf Brands</h4>
                    <p className="text-sm text-[#171717]/60 font-light">Breaking down Duotone, North, and Cabrinha in 2026.</p>
                 </Link>
                 <Link href="/kitesurf-gear-beginners" className="group">
                    <h4 className="font-serif text-xl mb-3 group-hover:text-[#1A365D] transition-colors">Essential Beginner Gear</h4>
                    <p className="text-sm text-[#171717]/60 font-light">What you need, and exactly why you shouldn't buy it yet.</p>
                 </Link>
               </div>
            </div>
          </section>

        </div>
      </main>
      
      <footer className="w-full bg-[#171717] text-[#FDFBF7] py-20 px-6 md:px-16 text-center">
        <Link href="/" className="inline-flex flex-col items-center group relative">
          <span className="text-xs tracking-[0.15em] uppercase font-light pb-2">Return Home</span>
          <span className="w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </footer>
    </>
  );
}
