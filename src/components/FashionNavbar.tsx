import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { TapeSticker } from './ArtElements';

interface NavbarProps {
  onRegisterClick: () => void;
  onPartnerClick: () => void;
}

export const FashionNavbar: React.FC<NavbarProps> = ({ onRegisterClick, onPartnerClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#F7F5F0]/90 backdrop-blur-md border-b border-black/10 py-3 shadow-sm' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with quirky Gen Z flair */}
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="font-syne font-black text-2xl text-black tracking-tight uppercase group-hover:text-[#FF5500] transition-colors">
              THE SPARK
            </span>
            <TapeSticker text="OCT 25" className="hidden sm:inline-block rotate-[3deg] text-[9px] py-0.5" />
          </a>

          {/* Casual Friendly Nav */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-widest text-black/80 font-bold">
            <a href="#about" className="hover:text-[#FF5500] transition-colors">The Vibe</a>
            <a href="#focus" className="hover:text-[#FF5500] transition-colors">What to Expect</a>
            <a href="#faculty" className="hover:text-[#FF5500] transition-colors">The Speakers</a>
            <a href="#attend" className="hover:text-[#FF5500] transition-colors">Get Passes</a>
            <button
              onClick={onPartnerClick}
              className="hover:text-[#FF5500] transition-colors"
            >
              Partner
            </button>
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-[11px] font-mono text-black/50 font-bold">
              ADO-EKITI
            </span>
            <button
              onClick={onRegisterClick}
              className="bg-black hover:bg-[#FF5500] text-white px-5 py-2.5 rounded-full font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 shadow-[2px_2px_0px_#FF5500] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
            >
              <span>CLAIM PASS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-[#F7F5F0] z-40 p-6 flex flex-col justify-between border-t border-black/10">
          <div className="space-y-4 pt-4">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-syne font-black text-3xl text-black hover:text-[#FF5500]"
            >
              THE VIBE
            </a>
            <a
              href="#focus"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-syne font-black text-3xl text-black hover:text-[#FF5500]"
            >
              WHAT TO EXPECT
            </a>
            <a
              href="#faculty"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-syne font-black text-3xl text-black hover:text-[#FF5500]"
            >
              WHO'S PULLING UP
            </a>
            <a
              href="#attend"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-syne font-black text-3xl text-black hover:text-[#FF5500]"
            >
              FREE TICKETS
            </a>
          </div>

          <div className="space-y-3 pt-6 border-t border-black/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRegisterClick();
              }}
              className="w-full bg-[#FF5500] text-white py-4 rounded-full font-mono font-bold text-xs uppercase tracking-widest shadow-[3px_3px_0px_#000]"
            >
              CLAIM YOUR FREE PASS
            </button>
            <p className="text-center text-[10px] font-mono text-black/50">
              EKITI CIVIC CENTRE • OCT 25, 2025 • FREE CHOW
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
