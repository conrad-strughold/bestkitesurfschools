import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitesurfing in Sri Lanka: Kalpitiya Lagoon Guide 2026",
  description: "Kalpitiya is Asia's wind capital. Over 20 knots daily during summer. Explore the lagoon, Vella Island downwinders, and the best kite camps for 2026.",
};

export default function KitesurfSriLankaPage() {
  return (
    <>
      <Navigation />
      <header className="relative min-h-[60svh] w-full flex flex-col justify-end pt-40 pb-20 px-6 md:px-16 lg:px-24 bg-[#171717]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/portugal-kitesurf-main.jpg"
            alt="Kitesurfing in Sri Lanka"
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
            <span className="opacity-80">Sri Lanka</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
            Sri Lanka: The Wind Jewel of Asia
          </h1>
          <p className="text-white/70 max-w-xl text-lg font-light leading-relaxed">
            Kalpitiya offers relentless wind, tropical warmth, and a level of hospitality that makes it one of the world's most addictive kite destinations.
          </p>
        </div>
      </header>

      <main className="bg-[#FDFBF7] py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-serif text-4xl mb-8">20+ Knots, Every Day</h2>
          <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-12">
            The summer season (May to October) in Kalpitiya is legendary. The wind blows 24/7, rarely dropping below 20 knots. The main lagoon is huge, allowing hundreds of kiters to ride without ever feeling crowded. If you're looking for an immersive kite camp experience with like-minded riders, this is the place.
          </p>

          <aside className="border-l-4 border-[#319795] bg-[#E8F4F4] p-8 mb-16">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1A365D] mb-4">Vella Island Downwinders</h4>
            <p className="text-sm text-[#171717]/70 font-light leading-relaxed">
              No trip to Sri Lanka is complete without the 45-minute boat trip to Vella Island. It's a tiny sandbar with perfectly offshore wind, creating the flattest water you will ever experience. It's often called the 'best kiting in the world'.
            </p>
          </aside>

          <Link href="/schools" className="inline-block text-sm uppercase tracking-widest font-bold border-b-2 border-black pb-1">Discover Kalpitiya Camps →</Link>
        </div>
      </main>
    </>
  );
}
