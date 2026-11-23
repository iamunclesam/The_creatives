import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Calendar, MapPin } from 'lucide-react';
import { eventConfig } from '../data/summitData';

interface NavbarProps {
  onRegisterClick: () => void;
  onPartnerClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick, onPartnerClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Partners', href: '#partners' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF4600] via-[#FF8A00] to-[#FFB800] p-0.5 flex items-center justify-center text-white shadow-lg shadow-[#FF4600]/30 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#0D0D10] rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-black text-sm text-[#FF4600]">SPK</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base sm:text-lg tracking-wider text-white flex items-center gap-1.5 leading-tight">
                  THE SPARK
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF4600] animate-pulse"></span>
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#FF8A00] uppercase font-mono font-semibold">
                  CREATIVES SUMMIT • EKITI
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] px-4 py-1.5 rounded-full backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium text-white/75 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onPartnerClick}
                className="text-xs uppercase tracking-wider font-semibold text-white/80 hover:text-white px-3 py-2 transition-colors duration-200 hidden md:block"
              >
                Partner With Us
              </button>
              
              <button
                onClick={onRegisterClick}
                className="group relative inline-flex items-center gap-2 bg-[#FF4600] hover:bg-[#E03D00] text-white px-5 py-2.5 rounded-full font-display font-semibold text-xs tracking-wider uppercase shadow-lg shadow-[#FF4600]/30 hover:shadow-[#FF4600]/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>REGISTER NOW</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onRegisterClick}
                className="bg-[#FF4600] text-white text-[11px] font-bold px-3 py-1.5 rounded-full tracking-wider uppercase"
              >
                REGISTER
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080808]/95 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col justify-between sm:hidden animate-in fade-in duration-200">
          <div className="space-y-4">
            <div className="border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-xs text-[#FF4600] font-mono tracking-wider mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{eventConfig.dateFormatted}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#94949E]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{eventConfig.venue}, {eventConfig.location}</span>
              </div>
            </div>

            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-display font-medium text-white/90 hover:text-[#FF4600] py-2 border-b border-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRegisterClick();
              }}
              className="w-full bg-[#FF4600] hover:bg-[#E03D00] text-white py-3.5 rounded-xl font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-[#FF4600]/30"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onPartnerClick();
              }}
              className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 py-3 rounded-xl font-medium text-sm tracking-wide"
            >
              Partner With Us
            </button>
          </div>
        </div>
      )}
    </>
  );
};

