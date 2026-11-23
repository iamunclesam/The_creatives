import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Newspaper, Clock, MapPin, Tag } from 'lucide-react';

interface HeaderProps {
  onRegisterClick: () => void;
  onPartnerClick: () => void;
}

export const NewspaperHeader: React.FC<HeaderProps> = ({ onRegisterClick, onPartnerClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Mini Header (Appears when scrolled) */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#F4EFEB]/95 backdrop-blur-md border-b-2 border-black py-2.5 px-4 sm:px-8 shadow-sm ${
        scrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-playfair font-black text-lg tracking-tight uppercase">
              THE SPARK CHRONICLE
            </span>
            <span className="hidden md:inline-block text-[10px] font-mono bg-black text-[#F4EFEB] px-2 py-0.5 uppercase font-bold">
              LATE CITY EDITION
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-mono hidden sm:inline text-black/70">
              ADO-EKITI • OCT 25, 2025
            </span>
            <button
              onClick={onRegisterClick}
              className="bg-[#FF4500] hover:bg-black text-white px-4 py-1.5 font-mono font-bold text-xs uppercase tracking-wider transition-colors border border-black shadow-[2px_2px_0px_#000]"
            >
              CLAIM PASS (FREE)
            </button>
          </div>
        </div>
      </div>

      {/* Main Broadside Newspaper Masthead */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        {/* Top News Ears Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center text-center sm:text-left py-2 border-b border-black/30 text-[11px] font-mono uppercase text-black/70 gap-2">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <span>VOL. 01 — NO. 2025</span>
            <span>•</span>
            <span>CIRCULATION: 2,000 COPIES</span>
          </div>
          <div className="text-center font-bold text-black hidden sm:block">
            ADO-EKITI, NIGERIA
          </div>
          <div className="flex items-center justify-center sm:justify-end gap-3 font-bold text-[#FF4500]">
            <span>PRICE: 100% FREE (SUBSIDIZED)</span>
          </div>
        </div>

        {/* Oxford Rule (Thick over Thin) */}
        <div className="oxford-rule my-3" />

        {/* Grand Broadsheet Masthead Title */}
        <div className="text-center py-4 sm:py-6">
          <h1 className="font-playfair font-black text-4xl sm:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] text-black">
            THE SPARK GAZETTE
          </h1>
          <p className="font-serif italic text-base sm:text-xl text-black/80 mt-2 font-normal">
            The Official Broadside of the African Creative & Technological Renaissance
          </p>
        </div>

        {/* Double Oxford Rule with Dateline */}
        <div className="border-y-2 border-black py-2 my-2 flex flex-wrap items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-black gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF4500]" />
            <span>SATURDAY, OCTOBER 25, 2025</span>
          </div>
          <div className="hidden md:block">
            EKITI STATE CIVIC & CULTURAL CENTRE • 9:00 AM SHARP
          </div>
          <div className="flex items-center gap-4">
            <button onClick={onPartnerClick} className="hover:text-[#FF4500] underline">
              PARTNER DESK
            </button>
            <span className="text-[#FF4500]">★ FREE ADMISSION ★</span>
          </div>
        </div>

        {/* Newspaper Section Navigation Bar */}
        <nav className="flex items-center justify-center sm:justify-between py-2 border-b border-black text-xs font-mono uppercase tracking-widest text-black/90 font-bold overflow-x-auto gap-4 sm:gap-6">
          <div className="flex items-center gap-6 whitespace-nowrap">
            <a href="#front-page" className="hover:text-[#FF4500] hover:underline">[ 01. FRONT PAGE ]</a>
            <a href="#editorial" className="hover:text-[#FF4500] hover:underline">[ 02. EDITORIAL ]</a>
            <a href="#desks" className="hover:text-[#FF4500] hover:underline">[ 03. CREATIVE DESKS ]</a>
            <a href="#faculty" className="hover:text-[#FF4500] hover:underline">[ 04. THE FACULTY ]</a>
            <a href="#ticket-stub" className="text-[#FF4500] hover:underline">[ 05. CLAIM PASS ✂ ]</a>
          </div>

          <button
            onClick={onRegisterClick}
            className="hidden sm:inline-block bg-black hover:bg-[#FF4500] text-white px-4 py-1 text-xs font-mono uppercase font-bold tracking-wider transition-colors shadow-[2px_2px_0px_#FF4500]"
          >
            GET PASS
          </button>
        </nav>
      </header>
    </>
  );
};

