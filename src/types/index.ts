export interface EventConfig {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  date: string;
  dateFormatted: string;
  time: string;
  venue: string;
  location: string;
  state: string;
  country: string;
  expectedAttendance: string;
  registrationUrl: string; // Configurable external or modal registration
  socialLinks: {
    instagram: string;
    twitter: string;
    linkedin: string;
    tiktok: string;
    youtube?: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  category: 'Design' | 'Tech' | 'Film & Media' | 'Music & Culture' | 'Business & Venture';
  image: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    portfolio?: string;
  };
  topic?: string;
  isKeynote?: boolean;
}

export interface ExperienceCardItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  highlights: string[];
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  category: string;
  track: 'Main Stage' | 'Masterclass Lab' | 'Tech Sandbox' | 'Creative Lounge';
  description: string;
  speakers?: string[];
  location: string;
  isHighlight?: boolean;
}

export interface WhyAttendItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
  iconName: string;
}

export interface CommunityShowcaseItem {
  id: string;
  name: string;
  discipline: string;
  quote: string;
  image: string;
  tag: string;
  projectTitle: string;
}

export interface PartnerCategory {
  category: string;
  description: string;
  partners: {
    name: string;
    logoText: string;
    logoUrl?: string;
    tier?: string;
  }[];
}

export interface TicketTier {
  id: string;
  name: string;
  badge: string;
  price: string;
  priceLabel: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

