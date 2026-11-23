import React from 'react';
import { ArrowUpRight, Calendar, MapPin, Play, Trophy } from 'lucide-react';
import { eventConfig, summitStats } from '../data/summitData';
import { DaVivaSunburst, DaVivaRibbon, DaVivaSpiralFan, DaVivaCornerFrame } from './DaVivaMotifs';

interface HeroProps {
  onRegisterClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-24 pb-14 lg:pt-32 lg:pb-20 overflow-hidden flex flex-col justify-between">
      {/* DaViva African Wax Background Pattern Layer */}
      <div className="absolute inset-0 bg-daviva-wax opacity-45 pointer-events-none -z-10" />

      {/* Decorative Large DaViva Spiral Fans in Background */}
      <div className="absolute top-12 -left-20 opacity-30 pointer-events-none -z-10 hidden md:block">
        <DaVivaSpiralFan size={300} />
      </div>
      <div className="absolute bottom-10 -right-24 opacity-25 pointer-events-none -z-10 hidden md:block">
        <DaVivaSpiralFan size={340} />
      </div>

      {/* Atmospheric Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] lg:w-[800px] lg:h-[800px] bg-gradient-to-tr from-[#FF4600]/25 via-[#FF8A00]/15 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Meta Bar with DaViva Sunburst */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/75 border border-[#FF4600]/50 backdrop-blur-md">
            <DaVivaSunburst size={16} />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-white">
              EKITI STATE • ANNUAL SUMMIT
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-white/90 font-mono">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#FF8A00]" />
              {eventConfig.dateFormatted}
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FF4600]" />
              {eventConfig.location}, {eventConfig.state}
            </span>
          </div>
        </div>

        {/* Oversized Headline - Crisp & Punchy */}
        <div className="space-y-3 max-w-5xl">
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-white">
            WHERE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4600] via-[#FF8A00] to-[#FFB800]">CREATIVITY</span>
            <br />
            MEETS <span className="italic font-light text-white/95">POSSIBILITY.</span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base lg:text-lg text-[#94949E] font-normal leading-relaxed pt-1">
            Bringing 1,500+ Nigerian designers, filmmakers, and digital artists together to shape Ekiti’s creative economy.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={onRegisterClick}
              className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#FF4600] to-[#FF8A00] hover:from-[#E03D00] hover:to-[#FF7A00] text-white px-7 py-3.5 rounded-full font-display font-bold text-xs tracking-wider uppercase shadow-xl shadow-[#FF4600]/30 hover:scale-105 active:scale-95 transition-all"
            >
              <span>CLAIM FREE PASS</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-display font-medium text-xs tracking-wider uppercase transition-colors"
            >
              <Play className="w-3 h-3 text-[#FF4600] fill-[#FF4600]" />
              <span>Explore The Experience</span>
            </a>
          </div>
        </div>

        {/* Cinematic Visual Collage with DaViva Framing */}
        <div className="mt-8 lg:mt-12 grid grid-cols-12 gap-3 sm:gap-4 items-center">
          {/* Main Visual Feature */}
          <div className="col-span-12 lg:col-span-7 relative group overflow-hidden rounded-3xl border-2 border-[#FF4600]/30 bg-[#141416] aspect-[16/10]">
            <DaVivaCornerFrame className="absolute top-0 left-0 z-10" />
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80"
              alt="Nigerian Creative Leader"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
            
            {/* DaViva Geometric Corner Stamp */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#FF4600]/40">
              <DaVivaSunburst size={14} />
              <span className="text-[10px] font-mono font-bold text-white tracking-widest">AFRO-MODERNIST</span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <p className="text-[10px] font-mono uppercase text-[#FF8A00] tracking-widest font-bold">
                  THE SPARK 2025
                </p>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  1 Day. 2,000 Creatives. Infinite Momentum.
                </h3>
              </div>
              <span className="bg-gradient-to-r from-[#FF4600] to-[#FF8A00] text-black font-display font-black text-[11px] px-3 py-1 rounded-lg tracking-wider uppercase">
                ADO-EKITI
              </span>
            </div>
          </div>

          {/* Secondary Collage Items */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-3">
            {/* Digital Craft & UI */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-[#141416] aspect-square">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                alt="Digital Designers & Developers"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5">
                <span className="text-[9px] font-mono text-[#FF8A00] uppercase font-bold bg-black/70 px-1.5 py-0.5 rounded">
                  DESIGN & CODE
                </span>
                <p className="font-display font-bold text-xs text-white mt-1">Digital Craft</p>
              </div>
            </div>

            {/* Film & Photo */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-[#141416] aspect-square">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
                alt="Filmmakers"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5">
                <span className="text-[9px] font-mono text-[#FF8A00] uppercase font-bold bg-black/70 px-1.5 py-0.5 rounded">
                  FILM & PHOTO
                </span>
                <p className="font-display font-bold text-xs text-white mt-1">Cinematography</p>
              </div>
            </div>

            {/* Music & Sound */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-[#141416] aspect-square">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
                alt="Music Production"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5">
                <span className="text-[9px] font-mono text-[#FF8A00] uppercase font-bold bg-black/70 px-1.5 py-0.5 rounded">
                  SONIC CULTURE
                </span>
                <p className="font-display font-bold text-xs text-white mt-1">Sound Design</p>
              </div>
            </div>

            {/* Grant Stage Pill */}
            <div className="relative rounded-2xl border border-[#FF4600]/50 bg-gradient-to-br from-[#1C1C20] to-[#141416] p-3.5 flex flex-col justify-between aspect-square">
              <div className="flex items-center justify-between">
                <Trophy className="w-5 h-5 text-[#FFB800]" />
                <span className="text-[9px] font-mono text-white/60 uppercase">SEED GRANTS</span>
              </div>
              <div>
                <span className="font-display font-black text-2xl text-white">₦10M+</span>
                <p className="text-[11px] text-[#94949E] mt-0.5">Awarded live on stage</p>
              </div>
              <span className="text-[10px] font-bold text-[#FF4600] flex items-center gap-1">
                Apply with Pass →
              </span>
            </div>
          </div>
        </div>

        {/* Streamlined Stats Strip */}
        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {summitStats.map((stat, idx) => (
            <div key={idx}>
              <p className="font-display font-black text-2xl sm:text-3xl text-white">
                {stat.value}
              </p>
              <p className="text-[11px] font-semibold text-white/80 uppercase font-mono">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* DaViva Ribbon Strip Divider */}
      <div className="mt-8">
        <DaVivaRibbon />
      </div>
    </section>
  );
};
