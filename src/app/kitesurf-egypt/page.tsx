import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitesurfing in Egypt 2026: El Gouna vs Soma Bay | BestKitesurfSchools",
  description: "Kitesurfing in Egypt: find the best shallow lagoons in El Gouna and Soma Bay. Wind seasons, school reviews, and planning your Red Sea trip for 2026.",
};

export default function KitesurfEgyptPage() {
  return (
    <>
      <Navigation />
      <header className="relative min-h-[60svh] w-full flex flex-col justify-end pt-40 pb-20 px-6 md:px-16 lg:px-24 bg-[#171717]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/soma-bay-kite.png"
            alt="Kitesurfing in Egypt"
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
            <span className="opacity-80">Egypt</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
            Kitesurfing in Egypt: The Red Sea Lagoon Guide
          </h1>
          <p className="text-white/70 max-w-xl text-lg font-light leading-relaxed">
            From the massive lagoons of El Gouna to the pristine slicks of Soma Bay, Egypt remains the world's most consistent shallow-water playground.
          </p>
        </div>
      </header>

      <main className="bg-[#FDFBF7] py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-serif text-4xl mb-8">Why the Red Sea is Unbeatable</h2>
          <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-12">
            Egypt is defined by two things: relentless thermal wind and crystal clear, waist-deep lagoons. For beginners, it's the ultimate incubator. For pros, it's a freestyle factory. With over 300 windy days a year and a professional infrastructure of VDWS and IKO schools, the Red Sea coast is a mandatory pilgrimage for every kiter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-[#1A365D]">El Gouna</h3>
              <p className="text-sm text-[#171717]/70 leading-relaxed font-light">
                A purpose-built luxury resort town with massive, shallow lagoons. Perfect for families and those looking for high-end amenities alongside their sessions.
              </p>
              <Link href="/schools" className="inline-block text-[10px] uppercase tracking-widest font-bold border-b border-black pb-1">View Gouna Schools →</Link>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-[#1A365D]">Soma Bay</h3>
              <p className="text-sm text-[#171717]/70 leading-relaxed font-light">
                Located south of Hurghada, Soma Bay offers cleaner wind and more space. The lagoons here are legendary for their turquoise flat water.
              </p>
              <Link href="/schools" className="inline-block text-[10px] uppercase tracking-widest font-bold border-b border-black pb-1">View Soma Bay Schools →</Link>
            </div>
          </div>

          <div className="bg-white p-12 shadow-sm border border-black/5">
                <h2 className="font-serif text-3xl mb-4 text-[#1A365D]">Expert Travel Tip</h2>
                <p className="text-[#171717]/70 font-light leading-relaxed italic">
                  "If you want the best wind stats, visit from April to October. If you want the best luxury value and pleasant temperatures, the winter months are surprisingly consistent due to thermal compression in the Red Sea basin."
                </p>
          </div>
        </div>
      </main>
    </>
  );
}
