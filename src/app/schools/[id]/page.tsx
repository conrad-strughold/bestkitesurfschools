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
      
      {/* Hero Section */}
      <header className="relative h-[65svh] w-full flex flex-col justify-end overflow-hidden pb-16 px-6 md:px-12 border-b border-zinc-900">
        <div className="absolute inset-0 z-0">
          <Image
            src={school.image || "/images/hero.png"}
            alt={school.name}
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/20"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="mb-4 flex items-center space-x-2 text-brand text-xs font-bold tracking-widest uppercase">
            <Link href="/" className="hover:text-white transition-colors">Directory</Link>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400">{school.region.replace("-", " ")}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-white font-bold leading-tight mb-6 tracking-tight drop-shadow-2xl">
            {school.name}
          </h1>
          <div className="flex items-center text-zinc-300 text-lg md:text-xl font-light tracking-wide">
            <span className="mr-2 opacity-80">📍</span> {school.city}, {school.country}
          </div>
        </div>
      </header>

      <main className="relative z-20 bg-zinc-950 text-zinc-100 py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white">The Experience</h2>
            <div className="w-12 h-1 bg-brand mb-8"></div>
            
            <p className="text-lg text-zinc-400 leading-relaxed font-light mb-8 whitespace-pre-wrap">
              {school.longDescription || school.description}
            </p>

            <h3 className="font-serif text-2xl font-bold mb-5 mt-12 text-white">Specialties & Vibe</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {school.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-zinc-900 text-zinc-300 text-sm px-4 py-2 rounded-lg border border-zinc-800 font-medium uppercase tracking-wide shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {school.gallery && school.gallery.length > 0 && (
              <>
                <h3 className="font-serif text-2xl font-bold mb-5 mt-12 text-white">Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {school.gallery.map((img, i) => (
                    <div key={i} className="relative h-48 sm:h-64 rounded-xl overflow-hidden border border-zinc-800">
                      <Image src={img} alt={`${school.name} view ${i}`} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl">
              <h3 className="font-serif text-2xl font-bold mb-6 text-white">Quick Facts</h3>
              
              <div className="space-y-5 mb-8">
                <div>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">Season</p>
                  <p className="font-medium text-zinc-200">{school.season}</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">Pricing Guide</p>
                  <p className="font-medium text-zinc-200">{school.pricing}</p>
                </div>
                {school.certification && (
                  <div>
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">Certification</p>
                    <p className="font-medium text-zinc-200">{school.certification}</p>
                  </div>
                )}
              </div>

              <a
                href={school.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full bg-white hover:bg-zinc-200 text-black font-semibold py-4 rounded-xl transition-all duration-300 shadow-md mb-4"
              >
                Visit Official Website
              </a>
              <a
                href={`mailto:${school.contact}`}
                className="block text-center w-full bg-transparent border border-zinc-700 text-white hover:bg-zinc-800 font-semibold py-3.5 rounded-xl transition-all duration-300"
              >
                Contact School
              </a>
            </div>

            {school.equipment && (
              <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl">
                <h3 className="font-serif text-xl font-bold mb-4 text-white">Equipment Vault</h3>
                <ul className="space-y-3">
                  {school.equipment.map((eq, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mr-3"></span>
                      {eq}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {school.amenities && (
              <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl">
                <h3 className="font-serif text-xl font-bold mb-4 text-white">Amenities</h3>
                <ul className="space-y-3">
                  {school.amenities.map((am, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mr-3"></span>
                      {am}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
          </aside>
        </div>
      </main>
      
      <footer className="bg-black text-zinc-100 py-12 px-6 md:px-12 border-t border-zinc-900 text-center text-sm">
        <Link href="/" className="inline-block mb-4 text-zinc-500 hover:text-white transition-colors">&larr; Back to Directory</Link>
        <p className="text-zinc-700">&copy; 2026 BestKitesurfSchools.com</p>
      </footer>
    </>
  );
}
