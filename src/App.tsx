import React, { useState } from 'react';
import { PicassoNavbar } from './components/PicassoNavbar';
import { PicassoHero } from './components/PicassoHero';
import { PicassoTicker } from './components/PicassoTicker';
import { PicassoManifesto } from './components/PicassoManifesto';
import { PicassoWorkspaces } from './components/PicassoWorkspaces';
import { PicassoWhyAttend } from './components/PicassoWhyAttend';
import { PicassoFaculty } from './components/PicassoFaculty';
import { PicassoTicketCanvas } from './components/PicassoTicketCanvas';
import { PicassoFooter } from './components/PicassoFooter';
import { RegistrationModal } from './components/RegistrationModal';
import { PartnerModal } from './components/PartnerModal';
import { TicketTier } from './types';
import { ticketTiers, eventConfig } from './data/summitData';

export function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<TicketTier | null>(null);

  const handleOpenRegistration = (tier?: TicketTier) => {
    if (eventConfig.registrationUrl.startsWith('http')) {
      window.open(eventConfig.registrationUrl, '_blank');
      return;
    }
    setSelectedTier(tier || ticketTiers[0]);
    setIsRegisterModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#18181B] selection:bg-[#C94A29] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* 1. Picasso Exhibition Navigation */}
      <PicassoNavbar
        onRegisterClick={() => handleOpenRegistration()}
        onPartnerClick={() => setIsPartnerModalOpen(true)}
      />

      <main>
        {/* 2. Deconstructed Cubist Hero with Picasso Contour Line Art & Collage */}
        <PicassoHero onRegisterClick={() => handleOpenRegistration()} />

        {/* Dynamic Electric Ticker */}
        <PicassoTicker />

        {/* 3. The Manifesto & 4 Asymmetrical Pillars */}
        <PicassoManifesto onRegisterClick={() => handleOpenRegistration()} />

        {/* 4. The 4 Creative Workshops */}
        <PicassoWorkspaces />

        {/* 5. What You Get By Attending (6 Opportunities) */}
        <PicassoWhyAttend onRegisterClick={() => handleOpenRegistration()} />

        {/* 6. Speakers & Mentors Exhibition */}
        <PicassoFaculty />

        {/* 7. Picasso Exhibition Ticket Canvas */}
        <PicassoTicketCanvas onRegisterClick={() => handleOpenRegistration()} />
      </main>

      {/* 8. Exhibition Footer */}
      <PicassoFooter />

      {/* Express Registration Modal */}
      <RegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        selectedTier={selectedTier}
      />

      {/* Partnership Inquiry Modal */}
      <PartnerModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
      />
    </div>
  );
}

export default App;
