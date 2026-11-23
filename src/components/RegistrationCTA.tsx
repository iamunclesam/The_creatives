import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Check, Ticket, ShieldCheck } from 'lucide-react';
import { ticketTiers, eventConfig } from '../data/summitData';
import { TicketTier } from '../types';
import { DaVivaSunburst, DaVivaRibbon } from './DaVivaMotifs';

interface RegistrationCTAProps {
  onSelectTier: (tier: TicketTier) => void;
}

export const RegistrationCTA: React.FC<RegistrationCTAProps> = ({ onSelectTier }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(`${eventConfig.date}T09:00:00+01:00`).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="register" className="py-16 lg:py-24 relative bg-[#080808] border-t border-white/10 overflow-hidden">
      {/* DaViva Ribbon Top Divider */}
      <div className="mb-12">
        <DaVivaRibbon />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Header - Clean & Punchy */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF4600]/10 border border-[#FF4600]/30 text-xs font-mono font-bold uppercase text-[#FF4600]">
            <DaVivaSunburst size={12} />
            <span>ACCREDITATION & PASSES</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[0.95]">
            THE FUTURE IS CREATIVE.{' '}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4600] via-[#FF8A00] to-white">
              WILL YOU BE THERE?
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#94949E] max-w-xl mx-auto">
            1,500+ creatives, tech builders, and cultural leaders in one room. Reserve your spot now.
          </p>

          {/* Countdown Clock */}
          <div className="pt-3 flex items-center justify-center gap-2.5 sm:gap-4">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINUTES', value: timeLeft.minutes },
              { label: 'SECONDS', value: timeLeft.seconds }
            ].map((unit, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#141416] border border-white/10 flex items-center justify-center font-display font-black text-xl sm:text-2xl text-white shadow-lg">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <span className="text-[9px] font-mono tracking-widest uppercase text-white/50 mt-1">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Ticket Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-10">
          {ticketTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all ${
                tier.isPopular
                  ? 'bg-gradient-to-b from-[#1C1C22] to-[#121214] border-2 border-[#FF4600] shadow-xl shadow-[#FF4600]/15 lg:-translate-y-2'
                  : 'bg-[#141416] border border-white/10 hover:border-white/20'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF4600] text-white text-[9px] font-mono font-black tracking-widest uppercase px-3 py-0.5 rounded-full shadow-md">
                  POPULAR PASS
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF8A00]">
                    {tier.badge}
                  </span>
                  <Ticket className="w-4 h-4 text-white/40" />
                </div>

                <h3 className="font-display font-black text-xl text-white">
                  {tier.name}
                </h3>

                <p className="text-xs text-[#94949E] mt-1">
                  {tier.description}
                </p>

                {/* Price Display */}
                <div className="mt-4 mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display font-black text-3xl text-white">
                      {tier.price}
                    </span>
                    <span className="text-[11px] font-mono text-[#94949E]">
                      / participant
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-white/50">
                    {tier.priceLabel}
                  </span>
                </div>

                {/* Features list */}
                <div className="space-y-2">
                  {tier.features.slice(0, 4).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-white/90">
                      <Check className="w-3.5 h-3.5 text-[#FF4600] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  onClick={() => onSelectTier(tier)}
                  className={`w-full py-3.5 rounded-full font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    tier.isPopular
                      ? 'bg-[#FF4600] hover:bg-[#E03D00] text-white shadow-lg shadow-[#FF4600]/30 hover:scale-[1.01]'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Accreditation Guarantee Bar */}
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-white/60">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#FF4600]" />
            <span>Instant confirmation with digital pass QR & calendar invite</span>
          </div>
          <div>Venue: {eventConfig.venue}, {eventConfig.location}</div>
        </div>
      </div>
    </section>
  );
};
