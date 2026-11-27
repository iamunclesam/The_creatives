import { EventConfig, Speaker, ExperienceCardItem, ScheduleItem, WhyAttendItem, CommunityShowcaseItem, PartnerCategory, TicketTier } from '../types';

export const eventConfig: EventConfig = {
  name: "EmergenceX 2K27",
  tagline: "Where African Creatives Build & Earn",
  heroHeadline: "STOP WORKING FOR EXPOSURE. EMERGE.",
  heroSubheadline: "Bringing together the next generation of creatives, innovators and industry leaders to turn craft into sustainable careers.",
  date: "2K27",
  dateFormatted: "Pre-Event Hangout: Dec 12th • Main Summit 2K27",
  time: "9:00 AM – 6:00 PM WAT",
  venue: "Ekiti State Civic & Cultural Centre",
  location: "Ado-Ekiti",
  state: "Ekiti State",
  country: "Nigeria",
  expectedAttendance: "1,500 – 2,000 Creatives",
  // If you have an external ticketing link like Eventbrite or Paystack, put it here:
  // e.g. "https://eventbrite.com/e/emergencex-2025"
  registrationUrl: "#register", 
  socialLinks: {
    instagram: "https://instagram.com/emergencex",
    twitter: "https://x.com/emergencex",
    linkedin: "https://linkedin.com/company/emergencex",
    tiktok: "https://tiktok.com/@emergencex",
    youtube: "https://youtube.com/@emergencex",
  },
  contact: {
    email: "hello@emergencex.ng",
    phone: "+234 (0) 803 123 4567",
    address: "Civic Centre Boulevard, Ado-Ekiti, Ekiti State, Nigeria",
  }
};

export const summitStats = [
  { value: "1,800+", label: "Expected Attendees", description: "Designers, Devs, Creators & Innovators" },
  { value: "24+", label: "Industry Heavyweights", description: "Keynotes, Mentors & Masterclass Leads" },
  { value: "6", label: "Specialized Tracks", description: "From AI Tools to Creative Monetization" },
  { value: "₦10M+", label: "Creative Pitch Grants", description: "Direct Seed Funding for Young Talent" },
];

export const experienceCards: ExperienceCardItem[] = [
  {
    id: "masterclasses",
    title: "Creative Masterclasses",
    subtitle: "Hands-on Craft & World-class Execution",
    description: "Deep-dive breakout studios led by award-winning visual directors, product designers, and 3D artists. Walk away with practical toolkits and refined techniques.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80",
    tag: "SKILL ELEVATION",
    highlights: ["Brand identity architecture", "Advanced generative UI/UX", "Editorial color grading & cinematography"]
  },
  {
    id: "tech-innovation",
    title: "Digital Media & Creative Tech",
    subtitle: "Spatial Design, Web & Modern Media",
    description: "Discover how modern digital tools, creative coding, and high-performance interactive media amplify African storytelling and design execution.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
    tag: "DIGITAL FRONTIER",
    highlights: ["Interactive digital design pipelines", "Next-gen creative coding & web animation", "Building cross-platform digital experiences"]
  },
  {
    id: "business-entrepreneurship",
    title: "Business & Entrepreneurship",
    subtitle: "Turning Craft into Sustainable Wealth",
    description: "Unpack client acquisition, cross-border pricing, contract protection, licensing, agency growth, and building scalable creative enterprises from Africa to the world.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
    tag: "MONETIZATION",
    highlights: ["Global client pitching frameworks", "Equity & intellectual property", "Agency scaling blueprint"]
  },
  {
    id: "industry-conversations",
    title: "Industry Conversations",
    subtitle: "Unfiltered Panels & Provocative Firesides",
    description: "Candid discussions with African cultural leaders, tech founders, and global venture builders on the true trajectory of Nigeria's creative economy.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
    tag: "FIRESIDE SESSIONS",
    highlights: ["The next decade of African media", "Venture capital in creative industries", "Policy & creative infrastructure"]
  },
  {
    id: "networking-collaboration",
    title: "Networking & Collaboration",
    subtitle: "High-density Creative Collision",
    description: "Connect with co-founders, art directors, producers, developers, and agency executives in curated match-making lounges designed for organic synergy.",
    image: "https://images.unsplash.com/photo-1528605248659-1440064c7490?auto=format&fit=crop&w=1000&q=80",
    tag: "ECOSYSTEM",
    highlights: ["Curated 1-on-1 mentor sprints", "Talent speed-dating lounge", "Collaboration bulletin & deal room"]
  },
  {
    id: "creative-showcases",
    title: "Creative Showcases & Sound Stage",
    subtitle: "Live Exhibitions, Projections & Audio Magic",
    description: "An experiential sensory gallery featuring live photography studios, interactive digital installations, VR showcases, and sunset indie musical performances.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80",
    tag: "LIVE EXHIBITION",
    highlights: ["Interactive physical/digital galleries", "Live creator podcast booths", "Sunset acoustic and beat performance"]
  }
];

export const speakersData: Speaker[] = [
  {
    id: "speaker-1",
    name: "Toluwani Adeyemi",
    role: "Principal Design Director & Founder",
    company: "Studio Ochre & Form",
    bio: "Pioneering African editorial design and brand identity systems for global tech leaders and cultural institutions across Lagos, London, and New York.",
    category: "Design",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    socials: { twitter: "https://x.com", linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
    topic: "Building World-Class African Design Systems",
    isKeynote: true
  },
  {
    id: "speaker-2",
    name: "Chukwudi Nnamdi",
    role: "Head of Creative Engineering & Interactive Media",
    company: "Kinetix Africa Labs",
    bio: "Leading pioneering research in interactive digital media, real-time creative coding, and developer ecosystems tailored for African creators.",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    socials: { twitter: "https://x.com", linkedin: "https://linkedin.com", portfolio: "https://kinetix.africa" },
    topic: "Creative Coding & High-Performance Interactive Media",
    isKeynote: true
  },
  {
    id: "speaker-3",
    name: "Eniola Fayemi",
    role: "Documentary Director & Cinematographer",
    company: "Ekiti Cinema Collective",
    bio: "Award-winning visual storyteller whose documentaries on indigenous craftsmanship and youth movements have screened at Sundance and TIFF.",
    category: "Film & Media",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    socials: { instagram: "https://instagram.com", twitter: "https://x.com" },
    topic: "Cinematic Storytelling on Lean Indie Budgets",
    isKeynote: false
  },
  {
    id: "speaker-4",
    name: "Babatunde Alabi",
    role: "General Partner & Angel Investor",
    company: "StandOut Capital West Africa",
    bio: "Backed over 35 seed-stage creative tech startups and media ventures. Championing capital allocation into regional creative talent hubs.",
    category: "Business & Venture",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    socials: { linkedin: "https://linkedin.com", twitter: "https://x.com" },
    topic: "Unlocking Capital: How Creative Founders Raise Smart Money",
    isKeynote: true
  },
  {
    id: "speaker-5",
    name: "Similoluwa Badmus",
    role: "Sound Architect & Producer",
    company: "Sonic Roots Sound Lab",
    bio: "Grammy-credited record producer and spatial audio engineer blending traditional Yoruba acoustic rhythms with modern electronic Afrobeats.",
    category: "Music & Culture",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
    socials: { instagram: "https://instagram.com", twitter: "https://x.com" },
    topic: "The Sonic Frontier: Global Music Licensing & Royalties",
    isKeynote: false
  },
  {
    id: "speaker-6",
    name: "Damilola Olatunji",
    role: "VP of Product & Creative Tech",
    company: "Monolith Media Group",
    bio: "Building omnichannel digital media engines with millions of daily active readers across West and East Africa.",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=800&q=80",
    socials: { twitter: "https://x.com", linkedin: "https://linkedin.com" },
    topic: "Scaling Audience Engines from Zero to Millions",
    isKeynote: false
  },
  {
    id: "speaker-7",
    name: "Morayo Adeleke",
    role: "Creative Strategist & Brand Architect",
    company: "HyperLocal Studio",
    bio: "Consultant for international brands entering West African youth consumer markets through high-impact cultural storytelling.",
    category: "Design",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
    topic: "Culture as Currency: Crafting Brands That Matter",
    isKeynote: false
  },
  {
    id: "speaker-8",
    name: "Kazeem Balogun",
    role: "Managing Director",
    company: "Creative Economy Acceleration Hub",
    bio: "Advising governments and private foundations on policies, digital infrastructure, and vocational grants for creative youth.",
    category: "Business & Venture",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    socials: { twitter: "https://x.com", linkedin: "https://linkedin.com" },
    topic: "Regional Hubs as the Catalyst for National Wealth",
    isKeynote: false
  }
];

export const scheduleData: ScheduleItem[] = [
  {
    id: "prog-1",
    time: "08:30 AM — 09:30 AM",
    title: "Registration, Creative Check-in & Morning Coffee",
    category: "Registration & Arrival",
    track: "Main Stage",
    description: "Badge pick-up, swag kit distribution, interactive photo station, and networking over fresh local coffee and pastries.",
    location: "Grand Atrium & Welcome Plaza",
  },
  {
    id: "prog-2",
    time: "09:30 AM — 10:15 AM",
    title: "Opening Ceremony: The Ignition Keynote",
    category: "Opening Session",
    track: "Main Stage",
    description: "Welcome address from summit conveners, cultural drum performance, and setting the stage for Ekiti's emerging creative renaissance.",
    speakers: ["Convener & State Creative Council", "Toluwani Adeyemi"],
    location: "Main Auditorium",
    isHighlight: true
  },
  {
    id: "prog-3",
    time: "10:20 AM — 11:30 AM",
    title: "Keynote Conversations: 'The African Creative Century'",
    category: "Keynote Conversations",
    track: "Main Stage",
    description: "How African talent is redefining global visual language, music charts, design aesthetics, and high-growth creative software.",
    speakers: ["Chukwudi Nnamdi", "Babatunde Alabi", "Morayo Adeleke"],
    location: "Main Auditorium",
    isHighlight: true
  },
  {
    id: "prog-4",
    time: "11:45 AM — 01:15 PM",
    title: "Breakout Masterclasses: Practical Craft & Toolkits",
    category: "Creative Masterclasses",
    track: "Masterclass Lab",
    description: "Simultaneous hands-on labs in 3 zones: Visual Design & Typography, Cinematic Light & Video Production, and Sound Engineering.",
    speakers: ["Toluwani Adeyemi", "Eniola Fayemi", "Similoluwa Badmus"],
    location: "Innovation Studios A, B & C",
  },
  {
    id: "prog-5",
    time: "01:15 PM — 02:15 PM",
    title: "Curated Lunch, Creator Showcase & Sound Demos",
    category: "Networking",
    track: "Creative Lounge",
    description: "Gourmet culinary experience, live DJ sets, interactive VR showcases, and open creative exhibition viewing.",
    location: "Festival Courtyard & Exhibition Hall",
  },
  {
    id: "prog-6",
    time: "02:15 PM — 03:30 PM",
    title: "Technology Sessions: AI, Spatial Web & Creative Coding",
    category: "Technology Sessions",
    track: "Tech Sandbox",
    description: "Live demonstrations of generative tools, open-source models, interactive web animation, and developer workflows for creators.",
    speakers: ["Chukwudi Nnamdi", "Damilola Olatunji"],
    location: "Tech Sandbox Hall",
    isHighlight: true
  },
  {
    id: "prog-7",
    time: "03:45 PM — 04:45 PM",
    title: "Panel & Pitch: 'Monetizing Talent & Raising Seed Grants'",
    category: "Panel Discussions",
    track: "Main Stage",
    description: "Live pitch battle: 5 pre-selected young creative founders pitch for ₦10M+ in non-dilutive creative grant funding before a live jury.",
    speakers: ["Babatunde Alabi", "Kazeem Balogun", "Investor Jury Panel"],
    location: "Main Auditorium",
    isHighlight: true
  },
  {
    id: "prog-8",
    time: "05:00 PM — 06:30 PM",
    title: "Closing Sunset Experience, Awards & Live Jam Session",
    category: "Closing Experience",
    track: "Main Stage",
    description: "Summit declaration, pitch winner announcements, collaborative sunset music session, and open networking mixer.",
    location: "Amphitheatre & Rooftop Terrace",
    isHighlight: true
  }
];

export const whyAttendPoints: WhyAttendItem[] = [
  {
    number: "01",
    title: "Learn From People Who've Done It",
    description: "Gain direct, battle-tested wisdom from world-class designers, filmmakers, developers and founders with proven track records.",
    highlight: "Real case studies, zero theoretical fluff.",
    iconName: "Compass"
  },
  {
    number: "02",
    title: "Master Modern Digital Tools & Craft",
    description: "Explore the intersection of spatial design, creative coding, and rich African visual culture to leapfrog career boundaries.",
    highlight: "Early access to design workflows & toolkits.",
    iconName: "Palette"
  },
  {
    number: "03",
    title: "Find Your Co-Founders & Collaborators",
    description: "Step into an electric atmosphere of 1,500+ peers. Connect with developers looking for designers, and directors looking for cinematographers.",
    highlight: "High-intent networking and matchmaking.",
    iconName: "Users"
  },
  {
    number: "04",
    title: "Direct Access to Mentors & Industry Leaders",
    description: "Participate in small-group mentor sprint tables where you can get immediate, unvarnished feedback on your portfolio or deck.",
    highlight: "1-on-1 portfolio review clinics.",
    iconName: "Sparkles"
  },
  {
    number: "05",
    title: "Monetize Beyond Borders",
    description: "Learn how to price services internationally, handle cross-border payments, draft air-tight contracts, and win global contracts from Ekiti.",
    highlight: "Practical foreign-exchange monetization.",
    iconName: "TrendingUp"
  },
  {
    number: "06",
    title: "Compete for ₦10M+ in Pitch Grants",
    description: "Submit your creative project or digital product for the EmergenceX Grant Showcase to win catalytic non-dilutive capital and incubation.",
    highlight: "Real funding on the main stage.",
    iconName: "Trophy"
  }
];

export const communityShowcaseItems: CommunityShowcaseItem[] = [
  {
    id: "art-1",
    name: "Tise Oluwatoyin",
    discipline: "Visual Identity & 3D Artist",
    quote: "Ekiti has the rawest creative pulse. We're showing the world that groundbreaking design doesn't require living in London or New York.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
    tag: "3D & Brand Identity",
    projectTitle: "Neo-Yoruba Typographic Artifacts"
  },
  {
    id: "art-2",
    name: "Kelechi Eze",
    discipline: "Creative Technologist & UI Engineer",
    quote: "Building digital experiences that celebrate our culture through fluid motion and code is where my heart beats.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    tag: "Creative Coding",
    projectTitle: "Spatial Audio Visualizer for Afrobeats"
  },
  {
    id: "art-3",
    name: "Amina Adele",
    discipline: "Documentary Filmmaker",
    quote: "Every town in Ekiti has stories waiting to be framed with international cinematic precision.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
    tag: "Cinematography",
    projectTitle: "Voices of the Highlands (Short Film)"
  },
  {
    id: "art-4",
    name: "Segun Arinze",
    discipline: "Sound Engineer & Beat Architect",
    quote: "Sound isn't just entertainment; it's emotional engineering. At EmergenceX, we connect the beats to real commerce.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    tag: "Sound & Music",
    projectTitle: "Harmonic Frequencies of West Africa"
  },
  {
    id: "art-5",
    name: "Yinka Balogun",
    discipline: "Editorial Fashion Photographer",
    quote: "Light, texture, and identity. We capture the unyielding dignity of African youth culture.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80",
    tag: "Fashion Photography",
    projectTitle: "Ado After Dark (Lookbook)"
  },
  {
    id: "art-6",
    name: "Femi Dare",
    discipline: "Full-Stack Creative Developer",
    quote: "The future belongs to creators who understand how software connects with human emotion.",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=900&q=80",
    tag: "Web3 & Creative Tech",
    projectTitle: "Creator Registry Protocol"
  }
];

export const partnerCategories: PartnerCategory[] = [
  {
    category: "Strategic Government & Institutional Partners",
    description: "Key institutions supporting youth enterprise and digital economy expansion.",
    partners: [
      { name: "Ekiti State Government", logoText: "EKITI STATE GOVERNMENT", tier: "Anchor Partner" },
      { name: "Ministry of Innovation & Digital Economy", logoText: "INNOVATION & DIGITAL ECONOMY", tier: "Strategic Partner" },
      { name: "National Information Technology Development", logoText: "NITDA NIGERIA", tier: "Patron" },
    ]
  },
  {
    category: "Technology & Infrastructure Partners",
    description: "Leading tech platforms empowering creative workflows and cloud computing.",
    partners: [
      { name: "Vercel / Cloud Infrastructure", logoText: "VERCEL CREATIVE LABS", tier: "Tech Sponsor" },
      { name: "Figma Africa Community", logoText: "FIGMA COMMUNITY EKITI", tier: "Design Sponsor" },
      { name: "GitHub Education", logoText: "GITHUB CAMPUS", tier: "Developer Sponsor" },
      { name: "Paystack / Stripe", logoText: "PAYSTACK COMMERCE", tier: "Fintech Partner" },
    ]
  },
  {
    category: "Media, Culture & Broadcast Partners",
    description: "Storytellers amplifying African talent to millions worldwide.",
    partners: [
      { name: "Pulse Nigeria", logoText: "PULSE NIGERIA", tier: "Media Partner" },
      { name: "BellaNaija Style & Tech", logoText: "BELLANAIJA", tier: "Media Partner" },
      { name: "TechCabal", logoText: "TECHCABAL", tier: "Editorial Partner" },
      { name: "Channels Digital", logoText: "CHANNELS TV DIGITAL", tier: "Broadcast Partner" },
    ]
  },
  {
    category: "Community & Creative Hubs",
    description: "Grassroots academies, developer circles, and creative collectives.",
    partners: [
      { name: "Ado Creators Collective", logoText: "ADO CREATORS GUILD", tier: "Community" },
      { name: "Ekiti Tech Hub", logoText: "EKITI TECH HUB", tier: "Incubation" },
      { name: "Designers Guild of Nigeria", logoText: "DGN NIGERIA", tier: "Network" },
      { name: "Google Developer Groups Ekiti", logoText: "GDG ADO-EKITI", tier: "Community" },
    ]
  }
];

export const ticketTiers: TicketTier[] = [
  {
    id: "hangout-pass",
    name: "Dec 12th Tech Hangout Pass",
    badge: "LIMITED (80 SEATS)",
    price: "FREE",
    priceLabel: "Pre-Event RSVP",
    description: "Hands-on tech workshop, live coding, project reviews, free food, and networking in preparation for 2K27.",
    features: [
      "Guaranteed seat at Dec 12th Tech Hangout",
      "Live screen-share builds & coding teardowns",
      "1-on-1 portfolio review slot with mentors",
      "Free snacks, drinks & networking session",
      "Automatic VIP priority for 2K27 Main Passes",
    ],
    isPopular: true,
    ctaText: "RSVP for Dec 12th Hangout"
  },
  {
    id: "2k27-creative-pass",
    name: "EmergenceX 2K27 Main Summit",
    badge: "100% FREE RSVP",
    price: "FREE",
    priceLabel: "Main 2K27 Summit Pass",
    description: "Full general access to the 1,500+ creative gathering in Ado-Ekiti in year 2K27.",
    features: [
      "Access to all 4 Craft Labs (Design, Video, Audio, Code)",
      "Main auditorium stages & keynotes",
      "Eligibility to pitch for ₦10M seed cash",
      "Official EmergenceX 2K27 badge & creator swag kit",
      "Full lunch & refreshments included",
    ],
    isPopular: false,
    ctaText: "Claim Free 2K27 Pass"
  },
  {
    id: "all-access-pass",
    name: "All-Access (Hangout + 2K27)",
    badge: "RECOMMENDED",
    price: "FREE",
    priceLabel: "Full Creator Accreditation",
    description: "Guaranteed entry to BOTH the Dec 12th Tech Workshop and the EmergenceX 2K27 Main Summit.",
    features: [
      "Entry to Dec 12th Tech Workshop Hangout",
      "Priority seat at EmergenceX 2K27 Main Summit",
      "Direct line to speaker mentor network",
      "Access to asset packs & contract templates",
      "Stage pitch priority submission",
    ],
    isPopular: false,
    ctaText: "Get All-Access Accreditation"
  }
];

export const faqList = [
  {
    question: "Where exactly is EmergenceX taking place?",
    answer: "The summit is hosted at the prestigious Ekiti State Civic & Cultural Centre in Ado-Ekiti, Ekiti State, Nigeria. It features a state-of-the-art auditorium, multiple breakout studios, an outdoor amphitheatre, and an exhibition atrium."
  },
  {
    question: "Who should attend the summit?",
    answer: "The summit is built for designers, developers, photographers, filmmakers, music producers, content creators, tech founders, marketers, writers, and young Nigerians passionate about turning creative talent into sustainable, globally competitive careers."
  },
  {
    question: "Is attendance free or paid?",
    answer: "General Creative Passes are 100% subsidized (free) through our strategic government and sponsor partners! We also offer subsidized Pro Masterclass Passes (₦7,500) and VIP Executive Passes (₦25,000) for attendees who want dedicated breakout seats, 1-on-1 portfolio reviews, and exclusive speaker lounge access."
  },
  {
    question: "How do I apply for the ₦10M+ Creative Pitch Grants?",
    answer: "Once you register for any pass, you will receive an invitation link to submit your creative project, studio proposal, or tech product deck. The top 5 finalists will pitch live on the main stage before our investor jury."
  },
  {
    question: "Can I sponsor or exhibit my brand?",
    answer: "Yes! Brands and creative studios can partner with us or secure showcase booths in the Grand Atrium. Click on 'Partner With Us' in the navigation or sponsorship section to connect directly with our partnership secretariat."
  }
];

