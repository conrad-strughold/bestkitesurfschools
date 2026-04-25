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

          <div className="hidden md:flex space-x-12 text-xs uppercase tracking-[0.15em] font-light">
            <Link href="/" className="relative group">
              <span className="pb-1">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#locations" className="relative group">
              <span className="pb-1">Locations</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden z-50 focus:outline-none text-current transition-colors hover:opacity-50"
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
        className={`fixed inset-0 bg-[#FDFBF7] z-40 flex flex-col justify-center items-center space-y-12 transition-opacity duration-500 md:hidden text-[#171717] ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="text-5xl font-serif hover:opacity-50 transition-opacity tracking-tight"
        >
          Home
        </Link>
        <Link
          href="/#locations"
          onClick={() => setMenuOpen(false)}
          className="text-5xl font-serif hover:opacity-50 transition-opacity tracking-tight"
        >
          Locations
        </Link>
      </div>
    </>
  );
}
