import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitesurfing in the Caribbean: Cabarete, Aruba & More | BestKitesurfSchools",
  description: "Experience the crystal clear trade winds of the Caribbean. Guide to kitesurfing in Cabarete, Aruba, and the Grenadines for 2026.",
};

export default function KitesurfCaribbeanPage() {
  return (
    <>
      <Navigation />
      <header className="relative min-h-[60svh] w-full flex flex-col justify-end pt-40 pb-20 px-6 md:px-16 lg:px-24 bg-[#171717]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/aruba-kite.png"
            alt="Kitesurfing in the Caribbean"
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
            <span className="opacity-80">Caribbean</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
            The Caribbean: Endless Trade Winds & Turquoise Water
          </h1>
          <p className="text-white/70 max-w-xl text-lg font-light leading-relaxed">
            From the bustling kite town of Cabarete to the exclusive flat-water spots of Aruba, the Caribbean is the ultimate warm-water escape.
          </p>
        </div>
      </header>

      <main className="bg-[#FDFBF7] py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-serif text-4xl mb-8">The Caribbean Window</h2>
          <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-12">
            The Caribbean's kiting is powered by the trade winds. These steady breezes are most consistent from December through July, with many spots peaking in June and July. The water is always warm (28°C+), meaning you can leave the wetsuit at home and ride in boardshorts or a bikini year-round.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-white p-8 shadow-sm border border-black/5">
              <h3 className="font-serif text-xl mb-3 text-[#1A365D]">Cabarete, DR</h3>
              <p className="text-sm text-[#171717]/70 font-light">
                The Caribbean's undisputed kite capital. A mix of ocean shorebreak and reef-protected flat water with a legendary après-kite scene.
              </p>
              <Link href="/schools" className="inline-block mt-4 text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1">View Cabarete Schools →</Link>
            </div>
            <div className="bg-white p-8 shadow-sm border border-black/5">
              <h3 className="font-serif text-xl mb-3 text-[#1A365D]">Aruba</h3>
              <p className="text-sm text-[#171717]/70 font-light">
                Known as 'One Happy Island', Aruba offers incredibly reliable offshore trade winds and shallow lagoons at Fisherman's Huts.
              </p>
              <Link href="/schools" className="inline-block mt-4 text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1">View Aruba Schools →</Link>
            </div>
          </div>

          <Link href="/schools" className="inline-block text-sm uppercase tracking-widest font-bold border-b-2 border-[#1A365D] pb-1 text-[#1A365D]">Explore all Caribbean Schools →</Link>
        </div>
      </main>
    </>
  );
}
