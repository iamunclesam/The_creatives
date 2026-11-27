import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onRegisterClick: () => void;
  onPartnerClick: () => void;
}

export const PicassoNavbar: React.FC<NavbarProps> = ({ onRegisterClick, onPartnerClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-200 bg-[#FAF7F0] border-b-[2.5px] border-[#18181B] ${
        scrolled ? 'py-2.5 shadow-[0_4px_0px_#18181B]' : 'py-3.5 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 bg-[#FF4D00] border-2 border-[#18181B] flex items-center justify-center text-white shadow-[3px_3px_0px_#18181B] group-hover:rotate-6 transition-transform">
                <span className="font-syne font-extrabold text-sm tracking-tight">EX</span>
              </div>
              <div className="flex flex-col">
                <span className="font-syne font-extrabold text-xl tracking-tight text-[#18181B] uppercase leading-tight">
                  EMERGENCEX
                </span>
                <span className="text-[10px] font-mono tracking-wider text-[#FF4D00] uppercase font-bold">
                  ADO-EKITI 2K27
                </span>
              </div>
            </a>

            {/* Clean Gallery Navigation with plain headings */}
            <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-[#18181B] font-extrabold">
              <a href="#hangout" className="text-[#FF4D00] hover:text-[#18181B] transition-colors flex items-center gap-1.5 font-black">
                <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-ping" />
                <span>Dec 12 Meetup</span>
              </a>
              <a href="#struggle" className="hover:text-[#FF4D00] transition-colors">Why attend</a>
              <a href="#workshops" className="hover:text-[#FF4D00] transition-colors">Workshops</a>
              <a href="#benefits" className="hover:text-[#FF4D00] transition-colors">What you get</a>
              <a href="#mentors" className="hover:text-[#FF4D00] transition-colors">Mentors</a>
              <button
                onClick={onPartnerClick}
                className="hover:text-[#FF4D00] transition-colors"
              >
                Partner
              </button>
            </nav>

            {/* Right Action Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#hangout"
                className="px-2.5 py-1 bg-[#FFE600] text-[#18181B] border-2 border-[#18181B] font-mono font-black text-[10px] uppercase shadow-[2px_2px_0px_#18181B] rotate-[-1deg]"
              >
                DEC 12 MEETUP
              </a>
              <button
                onClick={onRegisterClick}
                className="bg-[#FF4D00] hover:bg-[#18181B] text-white px-5 py-2.5 font-mono font-black text-xs uppercase tracking-wider transition-all border-2 border-[#18181B] shadow-[3px_3px_0px_#18181B] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 flex items-center gap-1.5"
              >
                <span>RESERVE SPOT</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#18181B] border-2 border-[#18181B] bg-white shadow-[2px_2px_0px_#18181B]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer with Ultra-High z-index and 100% Solid Background */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] sm:top-[66px] bottom-0 z-[999] bg-[#FAF7F0] border-t-[2.5px] border-[#18181B] p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
          <div className="space-y-3 pt-2">
            <a
              href="#hangout"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3.5 bg-[#FFE600] border-2 border-[#18181B] shadow-[3px_3px_0px_#18181B]"
            >
              <span className="font-syne font-black text-lg text-[#18181B] uppercase">
                ★ DEC 12 TECH MEETUP
              </span>
              <span className="text-[10px] font-mono font-black bg-[#FF4D00] text-white px-2 py-0.5 border border-[#18181B]">
                LIMITED SEATS
              </span>
            </a>

            <a
              href="#struggle"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-syne font-black text-2xl text-[#18181B] hover:text-[#FF4D00] py-2 border-b border-[#18181B]/15"
            >
              01 // WHY ATTEND
            </a>
            <a
              href="#workshops"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-syne font-black text-2xl text-[#18181B] hover:text-[#FF4D00] py-2 border-b border-[#18181B]/15"
            >
              02 // THE WORKSHOPS
            </a>
            <a
              href="#benefits"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-syne font-black text-2xl text-[#18181B] hover:text-[#FF4D00] py-2 border-b border-[#18181B]/15"
            >
              03 // WHAT YOU GET
            </a>
            <a
              href="#mentors"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-syne font-black text-2xl text-[#18181B] hover:text-[#FF4D00] py-2 border-b border-[#18181B]/15"
            >
              04 // MENTORS
            </a>

            {/* Brand Opportunity Card */}
            <div className="bg-white border-2 border-[#18181B] p-4 shadow-[3px_3px_0px_#18181B] rounded-xl mt-3">
              <span className="text-[11px] font-mono font-black text-[#FF4D00] uppercase tracking-wider block">
                ★ HAVE A CREATIVE BUSINESS?
              </span>
              <p className="font-sans text-xs text-[#18181B] font-bold mt-1 leading-snug">
                You can get stage time to tell 1,500+ people about your brand, services, or product.
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t-2 border-[#18181B] mt-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRegisterClick();
              }}
              className="w-full bg-[#FF4D00] hover:bg-[#18181B] text-white py-4 font-mono font-black text-xs uppercase tracking-widest border-2 border-[#18181B] shadow-[4px_4px_0px_#18181B] active:translate-x-0.5 active:translate-y-0.5"
            >
              RESERVE YOUR SPOT
            </button>
            <p className="text-center text-[10px] font-mono text-[#18181B]/70 font-bold">
              DEC 12 MEETUP & 2K27 SUMMIT • ADO-EKITI
            </p>
          </div>
        </div>
      )}
    </>
  );
};
