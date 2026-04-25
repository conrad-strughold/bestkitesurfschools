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
        className={`fixed w-full z-50 transition-all duration-300 px-6 md:px-12 ${
          scrolled || menuOpen
            ? "glass-nav text-navy py-4"
            : "text-sand py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="font-serif text-2xl md:text-3xl font-bold tracking-tight z-50 group"
          >
            BestKitesurf<span className="text-accent group-hover:opacity-80 transition-opacity">Schools</span>
          </Link>

          <div className="hidden md:flex space-x-10 text-sm font-medium tracking-wide">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/#locations" className="hover:text-accent transition-colors">
              Locations
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden z-50 focus:outline-none text-current transition-colors hover:text-accent"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-sand z-40 flex flex-col justify-center items-center space-y-8 transition-opacity duration-300 md:hidden text-navy ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="text-4xl font-serif hover:text-accent transition-colors"
        >
          Home
        </Link>
        <Link
          href="/#locations"
          onClick={() => setMenuOpen(false)}
          className="text-4xl font-serif hover:text-accent transition-colors"
        >
          Locations
        </Link>
      </div>
    </>
  );
}
