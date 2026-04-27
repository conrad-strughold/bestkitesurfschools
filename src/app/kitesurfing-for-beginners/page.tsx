
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitesurfing For Beginners | Best Kitesurf Schools",
  description: "Kitesurfing for beginners: everything you need to know before your first lesson. Gear, costs, safety, and how long it takes to learn. Start here.",
  openGraph: {
    title: "Kitesurfing For Beginners",
    description: "Read our comprehensive guide to kitesurfing for beginners on BestKitesurfSchools.",
    url: "https://bestkitesurfschools.com/kitesurfing-for-beginners",
    images: [{ url: "https://bestkitesurfschools.com/images/hero.png", width: 1200, height: 630, alt: "Kitesurfing For Beginners" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitesurfing For Beginners | Best Kitesurf Schools",
    description: "Read our comprehensive guide to kitesurfing for beginners.",
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
            alt="Kitesurfing For Beginners"
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
            Kitesurfing For Beginners
          </h1>
        </div>
      </header>

      <main className="relative z-20 bg-[#FDFBF7] text-[#171717]">
        <div className="w-full px-6 md:px-16 lg:px-24 py-24 max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">
            
            {/* Main Content Column */}
            <div className="lg:w-2/3 editorial-content">
              
      <h2 className="font-serif text-4xl mb-6 mt-12">What is Kitesurfing?</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Kitesurfing, or kiteboarding, is a wind-powered surface watersport using a kite and a board to move across the water. It harnesses the power of the wind through a large parachute type kite to propel a rider across the water on a small surfboard or a kiteboard (similar to a wakeboard).
      </p>
      
      <h2 className="font-serif text-4xl mb-6 mt-12">Difficulty Level & Learning Curve</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        The initial learning curve can be steep. Unlike surfing where you can paddle out on day one, kitesurfing requires learning to fly a kite before you even think about the board. However, once the "click" happens, progression is incredibly fast. Most beginners are riding upwind within their first 1-2 weeks of practice.
      </p>

      <h2 className="font-serif text-4xl mb-6 mt-12">The Basic Steps</h2>
      <ul className="space-y-6 mb-8 mt-4">
        <li className="flex items-start">
           <span className="text-[#1A365D] font-serif text-2xl mr-4">1.</span>
           <p className="text-[#171717]/80 font-light leading-[1.8]"><strong>Kite Control:</strong> Flying trainer kites on the beach to understand the wind window and power zones.</p>
        </li>
        <li className="flex items-start">
           <span className="text-[#1A365D] font-serif text-2xl mr-4">2.</span>
           <p className="text-[#171717]/80 font-light leading-[1.8]"><strong>Body Dragging:</strong> Using the kite's power to pull you through the water without a board. This teaches essential safety.</p>
        </li>
        <li className="flex items-start">
           <span className="text-[#1A365D] font-serif text-2xl mr-4">3.</span>
           <p className="text-[#171717]/80 font-light leading-[1.8]"><strong>The Water Start:</strong> Putting the board on your feet and diving the kite to generate the power needed to stand up and ride.</p>
        </li>
      </ul>

      <h2 className="font-serif text-4xl mb-6 mt-12">Safety First</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Modern equipment has massive depower capabilities, making the sport safer than ever. However, weather awareness and safety releases must become second nature. Always start with a certified instructor. If you are looking for an incredible destination with wide-open, uncrowded beaches perfect for safe learning, Northern Portugal (specifically <Link href="/kitesurf-moledo" className="underline hover:text-[#319795]">Moledo</Link>) provides exceptional thermal winds away from the chaos of southern shores.
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
