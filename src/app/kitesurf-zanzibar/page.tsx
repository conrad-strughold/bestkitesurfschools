import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitesurfing in Zanzibar: Paje Beach & Reef Guide 2026",
  description: "Explore the turquoise lagoons of Zanzibar. Best kite spots in Paje, trade wind seasons (Kusi & Kaskasi), and top school recommendations.",
};

export default function KitesurfazanzibarPage() {
  return (
    <>
      <Navigation />
      <header className="relative min-h-[60svh] w-full flex flex-col justify-end pt-40 pb-20 px-6 md:px-16 lg:px-24 bg-[#171717]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/zanzibar-kite.png"
            alt="Kitesurfing in Zanzibar"
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
            <span className="opacity-80">Zanzibar</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
            Zanzibar: The Indian Ocean's Turquoise Dream
          </h1>
          <p className="text-white/70 max-w-xl text-lg font-light leading-relaxed">
            Paje Beach offers 1.5km of reef-protected shallow water, powered by reliable trade winds and a vibrant island culture.
          </p>
        </div>
      </header>

      <main className="bg-[#FDFBF7] py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-serif text-4xl mb-8">The Island of Eternal Winds</h2>
          <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-12">
            Zanzibar is a dual-season destination. The **Kusi** wind blows from the Southeast from June to October, providing strong, reliable conditions. The **Kaskasi** follows from December to February, offering warmer, slightly lighter breezes from the Northeast.
          </p>

          <div className="bg-white p-12 shadow-sm border border-black/5 mb-20">
            <h3 className="font-serif text-2xl mb-4 text-[#1A365D]">Paje Beach: The Epicentre</h3>
            <p className="text-[#171717]/70 font-light leading-relaxed mb-6">
              Paje is where the action is. The coastline is protected by a reef 1.5km out, creating a massive, flat playground. It's the highest concentration of IKO schools in Africa and a global hub for the kite community.
            </p>
            <Link href="/schools" className="inline-block text-[10px] uppercase tracking-widest font-bold border-b border-black pb-1">Browse Zanzibar Schools →</Link>
          </div>

          <p className="text-lg text-[#171717]/70 leading-[1.8] font-light italic">
            "Beyond the kiting, Zanzibar offers Stone Town's history, spice tours, and some of the world's most beautiful sunset dhow cruises. It's a destination that satisfies the soul as much as the kite session."
          </p>
        </div>
      </main>
    </>
  );
}
