import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { PicassoGeometricStar } from './PicassoArt';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#FAF6EE]/95 backdrop-blur-md border-b-2 border-[#18181B] py-3 shadow-md' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Cubist Star and Asymmetric Badge */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-[#C94A29] border-2 border-[#18181B] flex items-center justify-center text-white shadow-[3px_3px_0px_#18181B] group-hover:rotate-6 transition-transform">
              <span className="font-syne font-black text-sm">SPK</span>
            </div>
            <div className="flex flex-col">
              <span className="font-syne font-black text-xl tracking-tight text-[#18181B] uppercase leading-tight">
                THE SPARK
              </span>
              {/* <span className="text-[10px] font-mono tracking-[0.2em] text-[#C94A29] uppercase font-bold">
                CANVAS // EKITI 2025
              </span> */}
            </div>
          </a>

          {/* Clean Gallery Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-widest text-[#18181B]/80 font-bold">
            <a href="#manifesto" className="hover:text-[#C94A29] transition-colors">Manifesto</a>
            <a href="#workspaces" className="hover:text-[#C94A29] transition-colors">Workshops</a>
            <a href="#why-attend" className="hover:text-[#C94A29] transition-colors">What You Get</a>
            <a href="#faculty" className="hover:text-[#C94A29] transition-colors">Mentors</a>
            <button
              onClick={onPartnerClick}
              className="hover:text-[#C94A29] transition-colors"
            >
              Partner
            </button>
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-[11px] font-mono text-[#18181B]/60 font-bold">
              ADO-EKITI • OCT 25
            </span>
            <button
              onClick={onRegisterClick}
              className="bg-[#C94A29] hover:bg-[#18181B] text-white px-5 py-2.5 font-mono font-bold text-xs uppercase tracking-wider transition-all border-2 border-[#18181B] shadow-[3px_3px_0px_#18181B] active:translate-x-0.5 active:translate-y-0.5 flex items-center gap-1.5"
            >
              <span>CLAIM PASS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#18181B]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-[#FAF6EE] z-40 p-6 flex flex-col justify-between border-t-2 border-[#18181B]">
          <div className="space-y-4 pt-4">
            <a
              href="#manifesto"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-syne font-black text-3xl text-[#18181B] hover:text-[#C94A29]"
            >
              01 // MANIFESTO
            </a>
            <a
              href="#workspaces"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-syne font-black text-3xl text-[#18181B] hover:text-[#C94A29]"
            >
              02 // WORKSHOPS
            </a>
            <a
              href="#why-attend"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-syne font-black text-3xl text-[#18181B] hover:text-[#C94A29]"
            >
              03 // WHAT YOU GET
            </a>
            <a
              href="#faculty"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-syne font-black text-3xl text-[#18181B] hover:text-[#C94A29]"
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
              className="w-full bg-[#C94A29] text-white py-4 font-mono font-bold text-xs uppercase tracking-widest border-2 border-[#18181B] shadow-[4px_4px_0px_#18181B]"
            >
              CLAIM YOUR FREE PASS
            </button>
            <p className="text-center text-[10px] font-mono text-[#18181B]/60">
              OCTOBER 25, 2025 • ADO-EKITI CIVIC CENTRE
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

