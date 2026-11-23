# The Spark Creatives Summit 2025 — Official Landing Page

> **"WHERE CREATIVITY MEETS POSSIBILITY."**  
> A premium, visually immersive, conversion-focused landing page for **The Spark Creatives Summit** in Ekiti State, Nigeria.

Inspired by the editorial elegance, bold typography, and visual energy of premier African youth summits (such as [Ekiti Youth Summit](https://ekitiyouthsummit.ng/)), crafted with world-class design systems and frontend engineering.

---

## 🌟 Overview & Key Sections

1. **Sticky Navigation (`Navbar.tsx`)**:
   - Distinctive **The Spark** wordmark with glowing spark glyph.
   - Smooth-scrolling anchor links: *Home, About, Experience, Speakers, Programme, Showcase, Partners*.
   - Prominent **"REGISTER NOW"** CTA button and **"Partner With Us"** link.
   - High-performance mobile drawer with event metadata and quick-actions.

2. **Hero Section (`Hero.tsx`)**:
   - Oversized brutalist/editorial headline: `WHERE CREATIVITY MEETS POSSIBILITY.`
   - Supporting narrative on shaping the future of the African creative economy.
   - Dynamic location and date badges: `Saturday, 25 October 2025 • Ado-Ekiti, Ekiti State, Nigeria`.
   - High-impact dual CTAs: `REGISTER NOW — FREE RSVP` & `Explore The Experience`.
   - Cinematic collage of Nigerian creative disciplines: photography, design, cinematography, sound design, creative coding, and pitch stage grants.
   - Key impact metrics strip: `1,800+ Attendees`, `24+ Keynotes & Mentors`, `6 Tracks`, `₦10M+ Pitch Grants`.

3. **High-Energy Marquee Banner (`MarqueeBanner.tsx`)**:
   - Angled ticker strip highlighting summit disciplines, technologies, and city pride.

4. **Event Introduction & Manifesto (`EventIntro.tsx`)**:
   - Headline: `CREATIVITY IS NO LONGER A SIDE HUSTLE. IT'S AN ECONOMY.`
   - Split-screen editorial layout with large photography and Convener's Note.
   - 4 Strategic Pillars: *Talent Ignition & Craft*, *Technological Superpowers (AI & Code)*, *Sustainable Commercialization*, and *Global Market Access*.

5. **The Experience (`Experience.tsx`)**:
   - Headline: `MORE THAN A SUMMIT. AN EXPERIENCE.`
   - 6 visually distinctive interactive cards with zoom effects and key takeaways:
     1. Creative Masterclasses
     2. Technology & Innovation
     3. Business & Entrepreneurship
     4. Industry Conversations
     5. Networking & Collaboration
     6. Creative Showcases & Sound Stage

6. **Speakers & Faculty (`Speakers.tsx`)**:
   - Headline: `LEARN FROM PEOPLE WHO ARE BUILDING THE FUTURE.`
   - Category filtering pills: *All, Design, Tech, Film & Media, Music & Culture, Business & Venture*.
   - Speaker cards featuring high-res portraits, company tags, talk topics, and social links (X, LinkedIn, Instagram).
   - Interactive speaker detail modal with full biography and keynote badges.
   - "Call for Presenters & Speaker Nomination" banner.

7. **Curated Programme / Schedule (`Programme.tsx`)**:
   - Interactive track switcher: *All Tracks, Main Stage, Masterclass Lab, Tech Sandbox, Creative Lounge*.
   - Vertical timeline layout with time badges, session descriptions, facilitator tags, and highlight indicators.
   - One-click **"Add to Calendar (.ics)"** generation for attendees.

8. **Why Attend? (`WhyAttend.tsx`)**:
   - Headline: `YOUR NEXT OPPORTUNITY COULD START HERE.`
   - 6 numbered cards (01 to 06) detailing tangible career benefits, 1-on-1 portfolio review clinics, and ₦10M+ pitch grant eligibility.
   - Highlight callout for subsidized catering and delegate kits.

9. **The Community / Creative Showcase (`CommunityShowcase.tsx`)**:
   - Dynamic masonry editorial gallery spotlighting creators, engineers, and filmmakers with original quotes and project titles.

10. **Partners & Sponsors (`Partners.tsx`)**:
    - Headline: `POWERED BY PARTNERS WHO BELIEVE IN POSSIBILITIES.`
    - Multi-tiered sponsor grids for *Strategic Government Partners*, *Technology & Cloud Infrastructure*, *Media & Broadcast Giants*, and *Grassroots Creative Hubs*.
    - Prominent **"Partner With Us"** CTA button opening an interactive sponsorship prospectus request modal.

11. **Registration CTA & Pass Tiers (`RegistrationCTA.tsx`)**:
    - Headline: `THE FUTURE IS CREATIVE. WILL YOU BE THERE?`
    - Live countdown timer to the summit date.
    - 3 clear pass tiers:
      - **General Creative Pass**: 100% Subsidized / Free with RSVP
      - **Masterclass & Pro Pass**: ₦7,500 Subsidized pass with 1-on-1 portfolio reviews & certification
      - **Executive & VIP Access**: ₦25,000 with VIP speaker lounge & dinner access
    - Accreditation guarantee bar.

12. **Interactive Modals**:
    - `RegistrationModal.tsx`: Built-in express RSVP form with instant digital boarding pass, QR code preview, and celebratory confetti.
    - `PartnerModal.tsx`: Dedicated corporate inquiry form for brands and prospective sponsors.

13. **Footer (`Footer.tsx`)**:
    - Complete brand wordmark, secretariat and venue details, quick links, social media handles (X, Instagram, LinkedIn, TikTok), newsletter dispatch signup, and smooth back-to-top button.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation & Effects**: [Framer Motion](https://www.framer.com/motion/) + [Canvas Confetti](https://github.com/catdad/canvas-confetti)
- **Typography**: Space Grotesk, Sora, Inter via Google Fonts

---

## ⚙️ Central Configuration (`src/data/summitData.ts`)

All content, dates, venues, speakers, ticket tiers, sponsor logos, and links are decoupled into a single configuration file:

```typescript
// src/data/summitData.ts

export const eventConfig = {
  name: "The Spark Creatives Summit",
  dateFormatted: "Saturday, 25 October 2025",
  venue: "Ekiti State Civic & Cultural Centre",
  location: "Ado-Ekiti",
  state: "Ekiti State",
  country: "Nigeria",
  
  // Connect your external ticketing URL here (Eventbrite, Paystack, Tix.africa)
  // or leave as "#register" to use the built-in express registration modal:
  registrationUrl: "#register",
  
  contact: {
    email: "hello@thesparksummit.ng",
    phone: "+234 (0) 803 123 4567",
  }
};
```

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

