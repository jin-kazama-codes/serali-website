export interface AIAgent {
  id: string;
  name: string;
  role: string;
  industry: string;
  voiceName: string;
  description: string;
  systemInstruction: string;
  initialMessage: string;
  avatar: string;
  accent: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface PainPoint {
  id: string;
  title: string;
  description: string;
  icon: string;
  metric: string;
  metricLabel: string;
}

export interface IndustryOverhaulData {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  pains: string[];
  metrics: {
    label: string;
    value: string;
    comparison: string;
  }[];
  solution: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  minutes: string;
  features: {
    label: string;
    included: boolean;
  }[];
  accentColor: string;
  isPopular?: boolean;
}

export interface Founder {
  name: string;
  role: string;
  bio: string[];
  skills: string[];
  avatar: string;
  companies: string[];
  flag: 'uk' | 'in';
}
