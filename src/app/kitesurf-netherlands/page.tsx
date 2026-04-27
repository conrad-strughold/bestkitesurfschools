import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitesurfing in the Netherlands: Workum & IJsselmeer Guide 2026",
  description: "The Netherlands offers world-class shallow water kitesurfing on the IJsselmeer. Discover Workum, Enkhuizen, and more in our 2026 guide.",
};

export default function KitesurfNetherlandsPage() {
  return (
    <>
      <Navigation />
      <header className="relative min-h-[60svh] w-full flex flex-col justify-end pt-40 pb-20 px-6 md:px-16 lg:px-24 bg-[#171717]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/netherlands-kite.png"
            alt="Kitesurfing in the Netherlands"
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
            <span className="opacity-80">Netherlands</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
            The Netherlands: Europe's Secret Kitesurfing Hub
          </h1>
          <p className="text-white/70 max-w-xl text-lg font-light leading-relaxed">
            Raw, windy, and home to some of the world's most accessible shallow-water lagoons, the Netherlands is a kiter's paradise.
          </p>
        </div>
      </header>

      <main className="bg-[#FDFBF7] py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-serif text-4xl mb-8">The IJsselmeer Engine</h2>
          <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-12">
            While it doesn't have the tropical warmth of the Caribbean, the Netherlands makes up for it with wind consistency and safety. The IJsselmeer—a massive inland sea—is almost entirely shallow near the shore, especially at spots like Workum. This creates a perfect environment for learning without the stress of deep water or ocean swell.
          </p>

          <div className="bg-white p-12 shadow-sm border border-black/5 mb-20">
            <h3 className="font-serif text-2xl mb-4 text-[#1A365D]">Workum: The Best Learning Spot</h3>
            <p className="text-[#171717]/70 font-light leading-relaxed mb-6">
              Workum is legendary. The water is waist-deep for hundreds of metres offshore, which means you can walk back upwind easily. It's the home base for dozens of IKO and VDWS certified schools and a vibrant camping community.
            </p>
            <Link href="/schools" className="inline-block text-[10px] uppercase tracking-widest font-bold border-b border-black pb-1">View Netherlands Schools →</Link>
          </div>

          <p className="text-lg text-[#171717]/70 leading-[1.8] font-light italic">
            "Dutch kiters are some of the most skilled in the world. The varied conditions—from the shallow IJsselmeer to the North Sea waves—create incredibly versatile riders. If you learn here, you can ride anywhere."
          </p>
        </div>
      </main>
    </>
  );
}
