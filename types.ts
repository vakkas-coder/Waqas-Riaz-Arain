
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'SEO' | 'Technical' | 'Marketing';
}

export interface Tool {
  name: string;
  icon: string;
}
