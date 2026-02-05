
import React from 'react';
import { 
  Search, 
  BarChart3, 
  Globe, 
  Settings, 
  MapPin, 
  ShoppingBag, 
  TrendingUp, 
  Database,
  Link,
  Cpu,
  Mail,
  Phone,
  Linkedin
} from 'lucide-react';
import { Service, ExperienceItem, Skill, Tool } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'SEO Audit',
    description: 'Comprehensive analysis of your website technical, on-page, and off-page health to identify growth opportunities.',
    icon: 'Search'
  },
  {
    id: '2',
    title: 'Technical SEO',
    description: 'Optimizing site architecture, crawlability, and Core Web Vitals to ensure search engines index you perfectly.',
    icon: 'Settings'
  },
  {
    id: '3',
    title: 'Local SEO',
    description: 'Dominating local search results and Google Maps to drive physical and regional traffic to your business.',
    icon: 'MapPin'
  },
  {
    id: '4',
    title: 'E-commerce SEO',
    description: 'Scaling online stores by optimizing product pages, categories, and conversion-focused architecture.',
    icon: 'ShoppingBag'
  },
  {
    id: '5',
    title: 'Link Building',
    description: 'Strategic outreach and backlink acquisition to build authority and trust in your specific industry.',
    icon: 'Link'
  },
  {
    id: '6',
    title: 'Keyword Strategy',
    description: 'Data-driven research to target high-intent keywords that actually drive revenue, not just traffic.',
    icon: 'TrendingUp'
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp1',
    role: 'SEO Specialist (Self-Employed)',
    company: 'Independent Consultant',
    period: '2021 - Present',
    description: [
      'Delivering full-scale SEO strategies for international clients.',
      'Achieving 200%+ traffic growth for competitive niches.',
      'Managing complete technical audits and implementation roadmaps.'
    ]
  },
  {
    id: 'exp2',
    role: 'SEO Specialist',
    company: 'Gexton',
    period: '2019 - 2021',
    description: [
      'Lead SEO strategies for multiple B2B and B2C projects.',
      'Reduced bounce rates by 30% through content optimization.',
      'Optimized site speed and technical performance metrics.'
    ]
  },
  {
    id: 'exp3',
    role: 'Digital Marketing Trainer',
    company: 'PITP-II',
    period: '2018 - 2019',
    description: [
      'Educated over 500+ students on the fundamentals of SEO.',
      'Developed curriculum for advanced Keyword Research and Link Building.',
      'Mentored aspiring digital marketers on career pathways.'
    ]
  }
];

export const TOOLS: Tool[] = [
  { name: 'Ahrefs', icon: 'https://cdn.worldvectorlogo.com/logos/ahrefs.svg' },
  { name: 'SEMrush', icon: 'https://cdn.worldvectorlogo.com/logos/semrush.svg' },
  { name: 'Google Search Console', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Search_Console.svg' },
  { name: 'Google Analytics', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Google_Analytics_logo.svg' },
  { name: 'Screaming Frog', icon: 'https://www.screamingfrog.co.uk/wp-content/themes/screamingfrog/images/logo.png' },
  { name: 'Yoast SEO', icon: 'https://yoast.com/app/uploads/2020/09/Yoast_SEO_logo.svg' }
];

export const SKILLS: Skill[] = [
  { name: 'On-Page SEO', level: 95, category: 'SEO' },
  { name: 'Technical SEO', level: 90, category: 'Technical' },
  { name: 'Keyword Research', level: 98, category: 'SEO' },
  { name: 'Local SEO', level: 85, category: 'SEO' },
  { name: 'GSC & Analytics', level: 92, category: 'Technical' },
  { name: 'Content Strategy', level: 88, category: 'Marketing' }
];

export const getIcon = (name: string, className?: string) => {
  switch (name) {
    case 'Search': return <Search className={className} />;
    case 'BarChart3': return <BarChart3 className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'Settings': return <Settings className={className} />;
    case 'MapPin': return <MapPin className={className} />;
    case 'ShoppingBag': return <ShoppingBag className={className} />;
    case 'TrendingUp': return <TrendingUp className={className} />;
    case 'Database': return <Database className={className} />;
    case 'Link': return <Link className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    case 'Mail': return <Mail className={className} />;
    case 'Phone': return <Phone className={className} />;
    case 'Linkedin': return <Linkedin className={className} />;
    default: return <Globe className={className} />;
  }
};
