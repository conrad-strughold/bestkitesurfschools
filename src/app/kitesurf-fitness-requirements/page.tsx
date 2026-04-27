
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Do You Need To Be Strong To Kitesurf? | Best Kitesurf Schools",
  description: "Do you need to be strong or fit to learn kitesurfing? The honest answer, plus what fitness actually helps — and what you can ignore as a beginner.",
  openGraph: {
    title: "Do You Need To Be Strong To Kitesurf?",
    description: "Read our comprehensive guide to do you need to be strong to kitesurf? on BestKitesurfSchools.",
    url: "https://bestkitesurfschools.com/kitesurf-fitness-requirements",
    images: [{ url: "https://bestkitesurfschools.com/images/hero.png", width: 1200, height: 630, alt: "Do You Need To Be Strong To Kitesurf?" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Do You Need To Be Strong To Kitesurf? | Best Kitesurf Schools",
    description: "Read our comprehensive guide to do you need to be strong to kitesurf?.",
    images: ["https://bestkitesurfschools.com/images/hero.png"],
  }
};

export default function GuidePage() {
  return (
    <>
      <Navigation />
      
      {/* Editorial Hero */}
      <header className="relative min-h-[65svh] w-full flex flex-col justify-end pt-40 pb-20 px-6 md:px-16 lg:px-24 bg-[#171717]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#171717]"></div>
          <Image
            src="/images/hero.png"
            alt="Do You Need To Be Strong To Kitesurf?"
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
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-8">
            Do You Need To Be Strong To Kitesurf?
          </h1>
        </div>
      </header>

      <main className="relative z-20 bg-[#FDFBF7] text-[#171717]">
        <div className="w-full px-6 md:px-16 lg:px-24 py-24 max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">
            
            {/* Main Content Column */}
            <div className="lg:w-2/3 editorial-content">
              
      <h2 className="font-serif text-4xl mb-6 mt-12">The Biggest Misconception</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        "I don't have the upper body strength for that." It is the most common phrase heard on the beach by spectators, and it is entirely false.
      </p>

      <h2 className="font-serif text-4xl mb-6 mt-12">Harnessing The Elements</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Unlike wakeboarding where the pull goes directly through your arms and back, in kitesurfing, 95% of the kite's force is directed straight to your center of gravity via the seat or waist harness.
      </p>
      
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        You steer the bar purely with your fingertips. If your arms are burning, you are holding the bar far too tightly or using outdated, non-depower equipment. Core strength and leg endurance (specifically the quads) are much more vital than upper body muscle.
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
