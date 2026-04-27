"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export function Navigation({
  mobileBarLabel = "North Wind",
  mobileBarHref = "https://northwindkiteportugal.com/"
}: {
  mobileBarLabel?: string;
  mobileBarHref?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 px-6 md:px-16 ${
          scrolled || menuOpen
            ? "glass-nav py-5"
            : "text-white py-8 border-b border-transparent bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="font-serif text-2xl tracking-[0.05em] z-50 group hover:opacity-70 transition-opacity"
          >
            BestKitesurfSchools
          </Link>

          <ul className="hidden lg:flex space-x-10 text-[10px] uppercase tracking-[0.2em] font-medium">
            <li>
              <Link href="/" className="relative group">
                <span className="pb-1">Home</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/schools" className="relative group">
                <span className="pb-1">Directory</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group/loc">
              <span className="pb-1 cursor-pointer">Locations</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover/loc:w-full"></span>
              <div className="absolute top-full left-0 invisible group-hover/loc:visible opacity-0 group-hover/loc:opacity-100 transition-opacity duration-150 z-50">
                <div className="pt-4">
                  <div className="bg-white text-[#171717] shadow-xl p-8 w-[500px] border border-black/5">
                    <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                      <div>
                        <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#319795] mb-4">Core Focus</h4>
                        <ul className="space-y-3 text-xs font-medium">
                          <li><Link href="/kitesurf-portugal" className="hover:opacity-60 transition-opacity">Portugal Overview</Link></li>
                          <li><Link href="/kitesurf-northern-portugal" className="hover:opacity-60 transition-opacity">Northern Portugal Guide</Link></li>
                        </ul>
                        
                        <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#171717]/40 mt-8 mb-4">Europe</h4>
                        <ul className="space-y-3 text-xs font-light">
                          <li><Link href="/kitesurf-tarifa-spain" className="hover:text-[#319795] transition-colors">Tarifa, Spain</Link></li>
                          <li><Link href="/kitesurf-sicily-italy" className="hover:text-[#319795] transition-colors">Lo Stagnone, Sicily</Link></li>
                          <li><Link href="/kitesurf-netherlands" className="hover:text-[#319795] transition-colors">Workum, Netherlands</Link></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#171717]/40 mb-4">Africa & ME</h4>
                        <ul className="space-y-3 text-xs font-light">
                          <li><Link href="/kitesurf-dakhla-morocco" className="hover:text-[#319795] transition-colors">Dakhla, Morocco</Link></li>
                          <li><Link href="/kitesurf-essaouira-morocco" className="hover:text-[#319795] transition-colors">Essaouira, Morocco</Link></li>
                          <li><Link href="/kitesurf-egypt" className="hover:text-[#319795] transition-colors">Egypt (Soma Bay & Gouna)</Link></li>
                          <li><Link href="/kitesurf-zanzibar" className="hover:text-[#319795] transition-colors">Zanzibar, Tanzania</Link></li>
                        </ul>

                        <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#171717]/40 mt-8 mb-4">Global Pillars</h4>
                        <ul className="space-y-3 text-xs font-light">
                          <li><Link href="/kitesurf-brazil" className="hover:text-[#319795] transition-colors">Brazil (Ceará)</Link></li>
                          <li><Link href="/kitesurf-sri-lanka" className="hover:text-[#319795] transition-colors">Sri Lanka (Kalpitiya)</Link></li>
                          <li><Link href="/kitesurf-caribbean" className="hover:text-[#319795] transition-colors">The Caribbean</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link href="/academy" className="relative group flex items-center">
                <span className="pb-1">Learn</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/best-kitesurf-schools-portugal" className="relative group text-[#319795]">
                <span className="pb-1">Portugal Review</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden z-50 focus:outline-none text-current transition-colors hover:opacity-50"
          >
            <div className="flex flex-col space-y-1.5 w-6">
              <span className={`h-px bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-px bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-px bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#FDFBF7] z-40 flex justify-center items-center overflow-y-auto transition-opacity duration-500 lg:hidden text-[#171717] ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      >
        <ul className="w-full px-6 py-24 flex flex-col space-y-8">
          <li>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-serif hover:opacity-50 transition-opacity tracking-tight"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/schools"
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-serif hover:opacity-50 transition-opacity tracking-tight"
            >
              Directory
            </Link>
          </li>
          <li>
            <Link
              href="/academy"
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-serif hover:opacity-50 transition-opacity tracking-tight"
            >
              The Academy
            </Link>
          </li>
          <li>
            <Link
              href="/best-kitesurf-schools-portugal"
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-serif text-[#1A365D] hover:opacity-50 transition-opacity tracking-tight"
            >
              Portugal Review
            </Link>
          </li>
          <li>
            <div className="flex flex-col space-y-4 pt-4 border-t border-[#171717]/10">
              <span className="text-xs uppercase tracking-[0.2em] text-[#171717]/50">Locations</span>
              <Link href="/kitesurf-portugal" onClick={() => setMenuOpen(false)} className="text-2xl font-serif text-[#319795]">Portugal</Link>
              <Link href="/kitesurf-tarifa-spain" onClick={() => setMenuOpen(false)} className="text-2xl font-serif">Spain</Link>
              <Link href="/kitesurf-egypt" onClick={() => setMenuOpen(false)} className="text-2xl font-serif">Egypt</Link>
              <Link href="/kitesurf-dakhla-morocco" onClick={() => setMenuOpen(false)} className="text-2xl font-serif">Dakhla</Link>
              <Link href="/kitesurf-zanzibar" onClick={() => setMenuOpen(false)} className="text-2xl font-serif">Zanzibar</Link>
              <Link href="/kitesurf-sicily-italy" onClick={() => setMenuOpen(false)} className="text-2xl font-serif">Sicily</Link>
              <Link href="/kitesurf-brazil" onClick={() => setMenuOpen(false)} className="text-2xl font-serif">Brazil</Link>
              <Link href="/kitesurf-sri-lanka" onClick={() => setMenuOpen(false)} className="text-2xl font-serif">Sri Lanka</Link>
            </div>
          </li>
        </ul>
      </div>

    </>
  );
}
