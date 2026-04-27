"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export function LeadGenBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-700 transform ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-[#1A365D]/95 backdrop-blur-md text-white py-4 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-4">
          <span className="w-8 h-px bg-white/30 hidden md:block"></span>
          <p className="text-xs md:text-sm tracking-widest uppercase font-light">
            Planning a kitesurf trip in 2026? <span className="hidden sm:inline opacity-60">—</span> <span className="font-medium">Get Expert Travel Advice</span>
          </p>
        </div>
        
        <a 
          href="mailto:booking@northwindkiteportugal.com?subject=Travel Advice Request"
          className="bg-white text-[#1A365D] px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#319795] hover:text-white transition-all"
        >
          Request Advice
        </a>
      </div>
    </div>
  );
}
