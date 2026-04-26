import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { schools } from "@/data/schools";
import { Navigation } from "@/components/Navigation";

export function generateStaticParams() {
  return schools.map((school) => ({
    id: school.id,
  }));
}

export default async function SchoolPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const school = schools.find((s) => s.id === resolvedParams.id);

  if (!school) {
    notFound();
  }

  return (
    <>
      <Navigation />
      
      {/* Editorial Hero */}
      <header className="relative min-h-[65svh] w-full flex flex-col justify-end pt-40 pb-20 px-6 md:px-16 lg:px-24 bg-[#171717]">
        <div className="absolute inset-0 z-0">
          <Image
            src={school.image || "/images/hero.png"}
            alt={school.name}
            fill
            className="object-cover opacity-80 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center space-x-3 text-white text-[10px] tracking-[0.2em] uppercase font-medium">
              <Link href="/#locations" className="hover:opacity-60 transition-opacity">Directory</Link>
              <span className="opacity-40">/</span>
              <span className="opacity-80">{school.country}</span>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tight mb-8">
              {school.name}
            </h1>
            <div className="text-white/60 text-lg md:text-xl font-light tracking-wide uppercase">
              {school.city}, {school.country}
            </div>
          </div>
          
          <div className="md:w-64 pb-2">
            <a
              href={school.website}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-white text-xs tracking-[0.15em] uppercase font-medium group inline-flex items-center"
            >
              <span className="pb-1 border-b border-white/30 group-hover:border-white transition-colors">Visit Official Website</span>
              <svg className="w-4 h-4 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-20 bg-[#FDFBF7] text-[#171717]">
        {/* Layout Shift: Text left, info right */}
        <div className="w-full px-6 md:px-16 lg:px-24 py-32 max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">
            
            {/* Editorial Content */}
            <div className="lg:w-3/5">
              <p className="text-xl md:text-3xl text-[#171717] leading-relaxed font-light mb-16 tracking-tight">
                {school.description}
              </p>
              
              <div className="w-full h-px bg-[#171717]/10 mb-16"></div>
              
              <h2 className="font-serif text-4xl mb-8">The Philosophy</h2>
              <p className="text-base md:text-lg text-[#171717]/70 leading-[1.8] font-light mb-16 whitespace-pre-wrap">
                {school.longDescription || "A dedication to the purity of the sport and an uncompromising relationship with the local elements."}
              </p>

              {school.gallery && school.gallery.length > 0 && (
                <div className="mt-24">
                  <div className="w-full h-px bg-[#171717]/10 mb-12"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {school.gallery.map((img, i) => (
                      <div key={i} className="relative h-80 md:h-[500px]">
                        <Image src={img} alt={`${school.name} view ${i}`} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Data */}
            <aside className="lg:w-2/5">
              <div className="sticky top-32">
                
                <div className="border-t border-[#171717]/10 pt-12 mb-16">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-8 text-[#171717]/50">Essential Detail</h3>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col">
                      <span className="text-[10px] tracking-[0.1em] uppercase text-[#171717]/40 mb-2">Season</span>
                      <span className="font-serif text-2xl text-[#1A365D]">{school.season}</span>
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="text-[10px] tracking-[0.1em] uppercase text-[#171717]/40 mb-2">Investment</span>
                      <span className="font-serif text-2xl">{school.pricing}</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[10px] tracking-[0.1em] uppercase text-[#171717]/40 mb-2">Direct Contact</span>
                      <a href={`mailto:${school.contact}`} className="font-serif text-xl hover:text-[#319795] transition-colors">{school.contact}</a>
                    </div>
                  </div>
                </div>

                {school.tags.length > 0 && (
                  <div className="border-t border-[#171717]/10 pt-12 mb-16">
                    <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-8 text-[#171717]/50">Characteristics</h3>
                    <div className="flex flex-col space-y-4">
                      {school.tags.map((tag) => (
                        <span key={tag} className="font-light text-[#171717]/80 flex items-center">
                          <span className="w-6 h-px bg-[#171717]/20 mr-4"></span>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
              </div>
            </aside>

          </div>
        </div>
      </main>
      
      <footer className="w-full bg-[#171717] text-[#FDFBF7] py-20 px-6 md:px-16 text-center">
        <Link href="/#locations" className="inline-flex flex-col items-center group relative">
          <span className="text-xs tracking-[0.15em] uppercase font-light pb-2">Return to Directory</span>
          <span className="w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </footer>
    </>
  );
}
