import React from 'react';
import { Sparkles, ArrowUp, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';
import { eventConfig } from '../data/summitData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050506] text-white border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF4600] to-[#FF8A00] flex items-center justify-center text-white shadow-lg shadow-[#FF4600]/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl tracking-wider text-white">
                  THE SPARK
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#94949E] uppercase font-mono">
                  CREATIVES SUMMIT • EKITI
                </span>
              </div>
            </div>

            <p className="text-sm text-[#94949E] max-w-sm leading-relaxed">
              A landmark gathering connecting creativity, technology, innovation, entrepreneurship and economic opportunities in Ekiti State, Nigeria. Shaping the next generation of global African creators.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={eventConfig.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FF4600] flex items-center justify-center text-white transition-all"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={eventConfig.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FF4600] flex items-center justify-center text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={eventConfig.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FF4600] flex items-center justify-center text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={eventConfig.socialLinks.tiktok}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FF4600] flex items-center justify-center text-white transition-all font-mono text-xs font-bold"
                aria-label="TikTok"
              >
                TK
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase font-bold tracking-widest text-[#FF4600]">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-sm text-[#94949E]">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Manifesto</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">The Experience</a></li>
              <li><a href="#speakers" className="hover:text-white transition-colors">Speakers</a></li>
              <li><a href="#showcase" className="hover:text-white transition-colors">Community Gallery</a></li>
              <li><a href="#partners" className="hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase font-bold tracking-widest text-[#FF4600]">
              SECRETARIAT & VENUE
            </h4>
            <div className="space-y-3 text-sm text-[#94949E]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF4600] shrink-0 mt-1" />
                <span>{eventConfig.venue}, {eventConfig.location}, {eventConfig.state}, Nigeria</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF4600] shrink-0" />
                <a href={`mailto:${eventConfig.contact.email}`} className="hover:text-white transition-colors">
                  {eventConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF4600] shrink-0" />
                <span>{eventConfig.contact.phone}</span>
              </div>
            </div>
          </div>

          {/* Newsletter / Bulletin */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase font-bold tracking-widest text-[#FF4600]">
              SUMMIT DISPATCH
            </h4>
            <p className="text-xs text-[#94949E] leading-relaxed">
              Get the latest speaker additions and pitch grant alerts straight to your inbox.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing to The Spark Summit Dispatches!"); }} className="space-y-2">
              <input
                type="email"
                placeholder="your.email@example.com"
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-white/40 focus:outline-none focus:border-[#FF4600]"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-[#FF4600] hover:bg-[#E03D00] text-white text-xs font-mono uppercase font-bold rounded-xl transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94949E]">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} The Spark Creatives Summit. All rights reserved.</span>
            <span className="hidden md:inline">• Ekiti State, Nigeria</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

