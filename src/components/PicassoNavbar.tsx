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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-[#FAF7F0]/95 backdrop-blur-md border-b-[2.5px] border-[#18181B] ${
      scrolled ? 'py-2.5 shadow-[0_4px_0px_#18181B]' : 'py-3.5 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Cubist Star and Asymmetric Badge */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-[#FF4D00] border-2 border-[#18181B] flex items-center justify-center text-white shadow-[3px_3px_0px_#18181B] group-hover:rotate-6 transition-transform">
              <span className="font-syne font-black text-sm">SO</span>
            </div>
            <div className="flex flex-col">
              <span className="font-syne font-black text-xl tracking-tight text-[#18181B] uppercase leading-tight">
                STANDOUT
              </span>
              <span className="text-[10px] font-mono tracking-wider text-[#FF4D00] uppercase font-bold">
                ADO-EKITI 2025
              </span>
            </div>
          </a>

          {/* Clean Gallery Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-[#18181B] font-extrabold">
            <a href="#struggle" className="hover:text-[#FF4D00] transition-colors">The Struggle</a>
            <a href="#workshops" className="hover:text-[#FF4D00] transition-colors">Craft Labs</a>
            <a href="#benefits" className="hover:text-[#FF4D00] transition-colors">What You Get</a>
            <a href="#mentors" className="hover:text-[#FF4D00] transition-colors">Mentors</a>
            <button
              onClick={onPartnerClick}
              className="hover:text-[#FF4D00] transition-colors"
            >
              Partner
            </button>
          </nav>

          {/* Right Action Button with Pop */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="px-2.5 py-1 bg-[#FFE600] text-[#18181B] border-2 border-[#18181B] font-mono font-black text-[10px] uppercase shadow-[2px_2px_0px_#18181B] rotate-[-1deg]">
              100% FREE
            </span>
            <button
              onClick={onRegisterClick}
              className="bg-[#FF4D00] hover:bg-[#18181B] text-white px-5 py-2.5 font-mono font-black text-xs uppercase tracking-wider transition-all border-2 border-[#18181B] shadow-[3px_3px_0px_#18181B] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 flex items-center gap-1.5"
            >
              <span>CLAIM PASS</span>
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[67px] bg-[#FAF7F0] z-40 p-6 flex flex-col justify-between border-t-2 border-[#18181B]">
          <div className="space-y-4 pt-4">
            <a
              href="#struggle"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-syne font-black text-2xl text-[#18181B] hover:text-[#FF4D00]"
            >
              01 // THE STRUGGLE
            </a>
            <a
              href="#workshops"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-syne font-black text-2xl text-[#18181B] hover:text-[#FF4D00]"
            >
              02 // CRAFT LABS
            </a>
            <a
              href="#benefits"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-syne font-black text-2xl text-[#18181B] hover:text-[#FF4D00]"
            >
              03 // WHAT YOU GET
            </a>
            <a
              href="#mentors"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-syne font-black text-2xl text-[#18181B] hover:text-[#FF4D00]"
            >
              04 // MENTORS
            </a>
          </div>

          <div className="space-y-3 pt-6 border-t-2 border-[#18181B]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRegisterClick();
              }}
              className="w-full bg-[#FF4D00] text-white py-4 font-mono font-black text-xs uppercase tracking-widest border-2 border-[#18181B] shadow-[4px_4px_0px_#18181B]"
            >
              CLAIM YOUR FREE PASS
            </button>
            <p className="text-center text-[10px] font-mono text-[#18181B]/70 font-bold">
              OCTOBER 25, 2025 • ADO-EKITI CIVIC CENTRE
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
