import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onRegisterClick: () => void;
}

export const OldNewsHeader: React.FC<HeaderProps> = ({ onRegisterClick }) => {
  return (
    <header className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-2">
      {/* Top News Ears Bar */}
      <div className="flex flex-wrap items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#1A1815]/75 border-b border-[#1A1815]/30 pb-2">
        <div className="flex items-center gap-2">
          <span className="font-bold">VOL. 01 — NO. 2025</span>
          <span>•</span>
          <span>CIRCULATION: 2,000</span>
        </div>
        <div className="font-bold hidden sm:block">
          ADO-EKITI, EKITI STATE, NIGERIA
        </div>
        <div className="font-bold text-[#C9381A]">
          ★ PRICE: ZERO KOBO (FREE) ★
        </div>
      </div>

      {/* Vintage Woodcut Rule */}
      <div className="vintage-rule my-3" />

      {/* Massive Vintage Broadsheet Masthead */}
      <div className="text-center py-4 sm:py-6">
        <h1 className="font-playfair font-black text-6xl sm:text-8xl lg:text-9xl tracking-tight uppercase leading-[0.88] text-[#1A1815]">
          THE SPARK
        </h1>
        <p className="font-serif italic text-base sm:text-xl text-[#1A1815]/80 mt-2">
          An Independent Broadside for the Next Generation of African Creators
        </p>
      </div>

      {/* Double Border Dateline Strip */}
      <div className="border-y-2 border-[#1A1815] py-2 flex flex-wrap items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#1A1815] gap-2">
        <span>OCTOBER 25, 2025</span>
        <span className="hidden md:inline">EKITI STATE CIVIC & CULTURAL CENTRE</span>
        <div className="flex items-center gap-3">
          <span className="text-[#C9381A]">FREE ENTRY</span>
          <button
            onClick={onRegisterClick}
            className="bg-[#1A1815] hover:bg-[#C9381A] text-[#EFE9DC] px-3.5 py-1 text-[11px] uppercase font-bold transition-colors shadow-[2px_2px_0px_#C9381A]"
          >
            GET PASS ✂
          </button>
        </div>
      </div>
    </header>
  );
};

