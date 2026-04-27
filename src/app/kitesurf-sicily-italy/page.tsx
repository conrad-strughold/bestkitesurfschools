import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitesurfing in Sicily: Lo Stagnone Spot Guide 2026",
  description: "Lo Stagnone is Europe's premier flat-water lagoon. Discover the best schools, wind seasons, and Sicilian kite culture in our 2026 guide.",
};

export default function KitesurfSicilyPage() {
  return (
    <>
      <Navigation />
      <header className="relative min-h-[60svh] w-full flex flex-col justify-end pt-40 pb-20 px-6 md:px-16 lg:px-24 bg-[#171717]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sicily-kite.png"
            alt="Kitesurfing in Sicily"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 w-full max-w-[1000px] mx-auto">
          <div className="mb-4 flex items-center space-x-3 text-white text-[10px] tracking-[0.2em] uppercase font-medium">
            <Link href="/" className="hover:opacity-60 transition-opacity">Home</Link>
            <span className="opacity-40">/</span>
            <span className="opacity-80">Sicily</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
            Sicily: Europe's Flat Water Capital
          </h1>
          <p className="text-white/70 max-w-xl text-lg font-light leading-relaxed">
            The Lo Stagnone lagoon offers miles of waist-deep, butter-flat water against a backdrop of historic windmills and salt pans.
          </p>
        </div>
      </header>

      <main className="bg-[#FDFBF7] py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-serif text-4xl mb-8">The Miracle of Lo Stagnone</h2>
          <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-12">
            Located near Marsala, Lo Stagnone is a nature reserve that has become a globally renowned kitesurfing destination. Because the lagoon is huge and protected from the open sea, the water remains flat even when the wind is howling. This makes it the single best place in Europe to learn new freestyle tricks or take your first water starts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-white p-8 shadow-sm border border-black/5">
              <h3 className="font-serif text-xl mb-3 text-[#1A365D]">The Wind Engine</h3>
              <p className="text-sm text-[#171717]/70 font-light">
                The prevailing NW wind (Maestrale) is clean and consistent from spring to autumn. Thermal effects often accelerate the breeze past the forecast.
              </p>
            </div>
            <div className="bg-white p-8 shadow-sm border border-black/5">
              <h3 className="font-serif text-xl mb-3 text-[#1A365D]">Pro Community</h3>
              <p className="text-sm text-[#171717]/70 font-light">
                Home to schools founded by pro riders like Alby Rondina, the level of instruction and the vibe at the beach is elite.
              </p>
            </div>
          </div>

          <Link href="/schools" className="inline-block text-sm uppercase tracking-widest font-bold border-b-2 border-[#1A365D] pb-1 text-[#1A365D]">Find your Sicily Kite School →</Link>
        </div>
      </main>
    </>
  );
}
