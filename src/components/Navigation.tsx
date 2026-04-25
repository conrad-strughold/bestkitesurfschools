"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export function Navigation() {
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

          <div className="hidden lg:flex space-x-10 text-[10px] uppercase tracking-[0.2em] font-medium">
            <Link href="/" className="relative group">
              <span className="pb-1">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#locations" className="relative group">
              <span className="pb-1">Directory</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/academy" className="relative group flex items-center">
              <span className="pb-1">The Academy & Guides</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/best-kitesurf-schools-portugal" className="relative group text-[#319795]">
              <span className="pb-1">Portugal Review</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

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
      >
        <div className="w-full px-6 py-24 flex flex-col space-y-8">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-4xl font-serif hover:opacity-50 transition-opacity tracking-tight"
          >
            Home
          </Link>
          <Link
            href="/#locations"
            onClick={() => setMenuOpen(false)}
            className="text-4xl font-serif hover:opacity-50 transition-opacity tracking-tight"
          >
            Directory
          </Link>
          <Link
            href="/academy"
            onClick={() => setMenuOpen(false)}
            className="text-4xl font-serif hover:opacity-50 transition-opacity tracking-tight"
          >
            The Academy
          </Link>
          <Link
            href="/best-kitesurf-schools-portugal"
            onClick={() => setMenuOpen(false)}
            className="text-4xl font-serif text-[#1A365D] hover:opacity-50 transition-opacity tracking-tight"
          >
            Portugal Review
          </Link>
        </div>
      </div>
    </>
  );
}
