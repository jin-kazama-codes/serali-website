import { AIAgent, PainPoint, IndustryOverhaulData, PricingPlan, Founder } from "./types";

export const BRAND_COLORS = {
  bgWallpaper: "#07090D", // Black and Navy Fusion
  shapeFillL4: "#0B0E17",
  shapeFillL3: "#182131",
  shapeFillL2: "#233248",
  shapeFillL1: "#314767",
  outline: "#192032",
  gold: "#DFB74A",
  subtleGold: "#D9B14E",
  brightGold: "#BE9B43",
  offWhite: "#CBD5E1",
  white: "#F8FAFC",
  green: "#009678",
  darkGreen: "#0A2320",
  red: "#FF4C5C",
  darkRed: "#1E0F14",
  blue: "#38BDF8",
};

export const AI_AGENTS: AIAgent[] = [
  {
    id: "arthur",
    name: "Arthur",
    role: "Real Estate Specialist",
    industry: "Real Estate",
    voiceName: "Zephyr (Professional British Male)",
    description: "Optimized for lead capture and qualifying potential renters/buyers within 5 minutes.",
    accent: "British, polished RP",
    metrics: [
      { label: "Response Latency", value: "<1.2s" },
      { label: "Conversion Lift", value: "+100x" },
    ],
    initialMessage: "Welcome to Serali Estates. I am Arthur. I am ready to qualify purchasing intent, verify budgets, or schedule viewings for our property catalog. How can I assist you today?",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
    systemInstruction: `You are Arthur, an elite Serali AI Real Estate Agent designed to run outbound and inbound customer conversations for high-end properties.
    Your tone is extremely polite, professional, and British (London agency vibe).
    Your goals:
    1. Greet the customer and introduce Serali Estates.
    2. Help qualify buying or renting inquiries.
    3. Ask for their preferred location, budget, and bedroom count.
    4. Simulate scheduling a viewing.
    Keep your answers highly professional, short, and conversational. Do not output markdown, maintain a natural telephone cadence. If they ask about CRM updates, inform them that Salesforce has been updated in real-time.`
  },
  {
    id: "sarah",
    name: "Sarah",
    role: "Secure Core Banking Agent",
    industry: "Banking",
    voiceName: "Kore (Clear, Trustworthy Female)",
    description: "Handles repetitive tier-1 queries, compliance-heavy KYC, and instant identity verification.",
    accent: "Neutral, calm, and reassuring",
    metrics: [
      { label: "Repetitive Task Autonomy", value: "80%" },
      { label: "E2E Compliance", value: "100%" },
    ],
    initialMessage: "Hello, this is Sarah from Serali Core Banking. For security compliance, I've initialized end-to-end encryption. I can help verify your identity, process secure transaction status, or guide you through KYC. May I have your name to begin?",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop",
    systemInstruction: `You are Sarah, Serali's Secure Core Banking Assistant.
    Your tone is exceptionally crisp, objective, highly reassuring, and compliant (like a premium UK private banking executive).
    Your goals:
    1. Reassure the user on data privacy (GDPR, SOC2 compliance).
    2. Guide them through mock identity verification (asking for account holder name).
    3. Handle basic tier-1 queries (like balance status, transaction lock, or KYC uploading).
    Keep your responses short, helpful, and natural. Do not use bullets or markdown, simulate an interactive spoken call.`
  },
  {
    id: "clara",
    name: "Clara",
    role: "Clinical Waitlist Coordinator",
    industry: "Healthcare",
    voiceName: "Charon (Warm, Caring Female)",
    description: "Validates waiting lists, automates scheduling, and resolves operational leakage.",
    accent: "Warm, empathetic Received Pronunciation",
    metrics: [
      { label: "No-Show Reduction", value: "18%" },
      { label: "Administrative Savings", value: "£42k/mo" },
    ],
    initialMessage: "Hello, this is Clara calling from Serali Care. I am managing the clinical waiting lists to make sure we get you seen as soon as possible. I would love to check your appointment status or update your booking availability. Are you hoping to schedule a consultation?",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop",
    systemInstruction: `You are Clara, Serali's Clinical Waitlist Coordinator.
    Your tone is exceptionally warm, empathetic, caring, and highly patient (medical receptionist style).
    Your goals:
    1. Reduce anxiety while handling booking logistics.
    2. Ask the patient if they are validating their waitlist status.
    3. Update their clinic scheduling availability (e.g., mornings or afternoons).
    Maintain a reassuring, friendly, and non-judgmental presence. Keep replies to 1-2 spoken sentences.`
  },
  {
    id: "charles",
    name: "Charles",
    role: "Higher Ed Support Officer",
    industry: "Higher Education",
    voiceName: "Fenrir (Engaging, Clear Male)",
    description: "Built to handle massive 300%-500% seasonal call surges during Clearing and enrollment.",
    accent: "Modern, approachable English",
    metrics: [
      { label: "Call Spike Cover", value: "300-500%" },
      { label: "Admissions Pipeline", value: "Infinite" },
    ],
    initialMessage: "Hi there! Charles here from Serali Admissions. I know Clearing and university deadlines can be hectic, but I'm here to handle the logistics so we can secure your spot. What degree program are you looking to apply for today?",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop",
    systemInstruction: `You are Charles, Serali's Higher Education Admissions Officer.
    Your tone is young, energetic, helpful, and highly clear (aiming to ease student anxiety during enrollment spikes).
    Your goals:
    1. Ask the student what degree program they are applying for.
    2. Guide them through verifying their qualifications or Clearing status.
    3. Offer reassurance that they will not be put on hold and that their record is locked in.
    Ensure answers are conversational, motivating, and fast. Keep responses brief.`
  }
];

export const PAIN_POINTS: PainPoint[] = [
  {
    id: "rising-cost",
    title: "Rising Cost Pressures",
    description: "Rising labour costs and higher national insurance continuously require a rethink amongst cost-conscious CFOs.",
    icon: "TrendingUp",
    metric: "£2,500",
    metricLabel: "Fixed human agent cost/mo"
  },
  {
    id: "multilingual",
    title: "Multilingual Complexity",
    description: "Serving customers from diverse backgrounds whose linguistic needs vary presents massive operational complexity.",
    icon: "Globe2",
    metric: "75+",
    metricLabel: "Languages required natively"
  },
  {
    id: "burnout",
    title: "Staff Burnout & High Attrition",
    description: "50-60% attrition rate in the first 90-180 days, and 13 weeks on average to onboard new agents at costs of up to £20,000.",
    icon: "Users2",
    metric: "50-60%",
    metricLabel: "Attrition in first 180 days"
  },
  {
    id: "cover-24-7",
    title: "High Cost 24/7 Cover",
    description: "24/7 support requires redundant headcount, causing budget waste during quiet hours and lost leads during volume spikes.",
    icon: "Clock",
    metric: "71%",
    metricLabel: "Leaked out-of-hours leads"
  },
  {
    id: "inconsistent-quality",
    title: "Inconsistent Quality",
    description: "Highly dependent on good training and the agent's mood and judgment to deliver the ideal business result each time.",
    icon: "ShieldAlert",
    metric: "80%",
    metricLabel: "Time wasted on repetitive tier-1"
  },
  {
    id: "scale-barriers",
    title: "Scale Barriers",
    description: "Long lead times to recruit, onboard and deploy new agent cohorts, making real-time scaling mathematically impossible.",
    icon: "Sliders",
    metric: "13wks",
    metricLabel: "Onboarding time per cohort"
  }
];

export const INDUSTRY_OVERHAUL: IndustryOverhaulData[] = [
  {
    id: "real-estate",
    name: "Real Estate",
    tagline: "Conversion Risks",
    icon: "Home",
    pains: [
      "Delayed responses hurt real estate conversions: replying within 5 minutes makes a lead 100x more likely to qualify.",
      "Human teams drop up to 71% of after-hours and weekend enquiries.",
      "Agents are caught in a constant loop of chasing cold leads and handling fragmented database entries, leading to leaked commissions."
    ],
    metrics: [
      { label: "After-Hours Enquiries Lost", value: "71%", comparison: "Dropped by humans" },
      { label: "Likelihood to Qualify Within 5m", value: "100x", comparison: "Serali response advantage" }
    ],
    solution: "Serali intercepts inbound enquiries across portals instantly, qualifying buyer intent, verifying cash/mortgage status, and pushing qualified leads straight into the agent's calendar."
  },
  {
    id: "healthcare",
    name: "Healthcare",
    tagline: "Operational Leakage",
    icon: "Stethoscope",
    pains: [
      "Global appointment no-show rate averages 10–18%.",
      "The UK alone reports c.7.8m 'Did Not Attend's (DNAs) per annum, caused by archaic outreach methods and fragmented patient portals.",
      "Millions of hours of routine staff time are wasted manually validating waitlists, managing bookings, and answering simple queries."
    ],
    metrics: [
      { label: "Annual UK Clinic DNAs", value: "7.8m", comparison: "Lost clinic capacity" },
      { label: "Appointment No-Shows", value: "10-18%", comparison: "Permanently resolved" }
    ],
    solution: "Serali automates clinical waiting list validation, executing conversational outreach call campaigns that confirm appointments and update hospital patient systems securely."
  },
  {
    id: "banking",
    name: "Banking",
    tagline: "Redundant Overhead",
    icon: "Landmark",
    pains: [
      "High costs from human agents spending 80% of their time on repetitive tier-1 tasks.",
      "Compliance friction during manual identity verification and document checks.",
      "Struggle to balance call spikes (e.g. during lunch hours) leading to abandoned calls and client frustration."
    ],
    metrics: [
      { label: "Tier-1 Routine Tasks", value: "80%", comparison: "Automated by Serali" },
      { label: "Identity Check Friction", value: "Zero", comparison: "E2E secure compliance" }
    ],
    solution: "Serali handles identity verification natively using high-security voice biometrics and deep core banking CRM integrations, routing only complex edge-cases to human directors."
  },
  {
    id: "higher-education",
    name: "Higher Education",
    tagline: "Seasonal Churn",
    icon: "GraduationCap",
    pains: [
      "Unpredictable enrollment spikes (like UK Clearing or US application deadlines) surge call volumes by 300–500%.",
      "Spikes cause dropped calls, poor temporary staff support, and lost student enrollments.",
      "With human infrastructure locked into a rigid 1-to-1 ratio, clearing departments simply run out of hands, forfeiting millions."
    ],
    metrics: [
      { label: "Clearing Call Surges", value: "300-500%", comparison: "Handled seamlessly" },
      { label: "Tuition Revenue Saved", value: "Millions", comparison: "Through instant answers" }
    ],
    solution: "Serali deploys hundreds of concurrent, fully-trained digital university advisors instantly during enrollment peaks, guiding prospective students through admissions protocols without hold queues."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Omni Core",
    description: "Foundational multi-channel AI communication workspace.",
    price: "£200",
    minutes: "5,000",
    features: [
      { label: "75+ Languages & Local Accents", included: true },
      { label: "Full Admin Area & Analytics", included: true },
      { label: "Campaign Management Engine", included: true },
      { label: "Omni Channel (Email, SMS, WhatsApp)", included: true },
      { label: "Lead Management Kanban Board", included: false },
      { label: "CRM / ERP API Connectivity", included: false },
      { label: "Organisational Long-term Memory", included: false },
      { label: "Multi-Agent Orchestration", included: false },
      { label: "Support: Live Chat + Email", included: true },
    ],
    accentColor: "blue",
  },
  {
    name: "Omni Core Plus",
    description: "Core workspace with an added sales and lead tracking pipeline.",
    price: "£300",
    minutes: "5,000",
    features: [
      { label: "75+ Languages & Local Accents", included: true },
      { label: "Full Admin Area & Analytics", included: true },
      { label: "Campaign Management Engine", included: true },
      { label: "Omni Channel (Email, SMS, WhatsApp)", included: true },
      { label: "Lead Management Kanban Board", included: true },
      { label: "CRM / ERP API Connectivity", included: false },
      { label: "Organisational Long-term Memory", included: false },
      { label: "Multi-Agent Orchestration", included: false },
      { label: "Support: Live Chat + Email", included: true },
    ],
    accentColor: "gold",
    isPopular: true,
  },
  {
    name: "Omni Integrated",
    description: "Connected CRM/ERP, long-term memory, and multi-agent orchestration.",
    price: "£350",
    minutes: "15,000",
    features: [
      { label: "75+ Languages & Local Accents", included: true },
      { label: "Full Admin Area & Analytics", included: true },
      { label: "Campaign Management Engine", included: true },
      { label: "Omni Channel (Email, SMS, WhatsApp)", included: true },
      { label: "Lead Management Kanban Board", included: true },
      { label: "CRM / ERP API (Hubspot, Salesforce)", included: true },
      { label: "Organisational Long-term Memory", included: true },
      { label: "Multi-Agent Orchestration", included: true },
      { label: "Support: Call Back + Live Chat + Email", included: true },
    ],
    accentColor: "green",
  },
  {
    name: "Omni Integrated Pro",
    description: "Unlimited, custom-engineered, fully-supported enterprise engine.",
    price: "£450",
    minutes: "Unlimited",
    features: [
      { label: "75+ Languages & Local Accents", included: true },
      { label: "Full Admin Area & Analytics", included: true },
      { label: "Campaign Management Engine", included: true },
      { label: "Omni Channel (Email, SMS, WhatsApp, Calendars)", included: true },
      { label: "Lead Management Kanban Board", included: true },
      { label: "In-House Custom CRM Integration", included: true },
      { label: "Organisational Long-term Memory", included: true },
      { label: "Multi-Agent Orchestration", included: true },
      { label: "Support: 24/7 Phone, Email & Live Chat", included: true },
    ],
    accentColor: "red",
  }
];

export const FOUNDERS: Founder[] = [
  {
    name: "Rishi Doshi",
    role: "Chief Executive Officer",
    flag: "uk",
    bio: [
      "12+ years across Fintech, Tier 1 banking and 'Big 4' management consulting.",
      "Specialist in product management, growth strategy and business transformation.",
      "Scaled pre & post IPO hypergrowth Fintechs as Senior & Group Product Manager.",
      "Agentic AI background via the first and largest UK retail bank to deploy at scale.",
      "Educated with top first class hons in law from the UK."
    ],
    skills: ["Growth Strategy", "Product Scale", "Regulatory Compliance", "Legal Architecture"],
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    companies: ["HSBC", "Barclays", "Santander", "Lloyds Bank", "KPMG", "openpay", "zip"]
  },
  {
    name: "Aafaq Ahmad",
    role: "Chief AI Officer",
    flag: "in",
    bio: [
      "12+ years full stack software engineering via large global IT firms, serving Fintech and enterprise brands.",
      "Specialist in coding complex full-stack AI ecosystems, custom LLMs, and memory routers at scale.",
      "Skilled in Lang Graph, RAG, Javascript, MySQL, PostgreSQL, React, Next, Node, JSON, Azure, MongoDB, Qdrant, AWS, Google Cloud etc.",
      "Educated with a bachelors in computer science from India."
    ],
    skills: ["LangGraph Architectures", "Core LLMs", "Memory Pipelines", "Full Stack Infrastructure"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    companies: ["Citi Bank", "Banamex", "BlueYonder", "WebMD", "Fortis"]
  },
  {
    name: "Abhishek Pandey",
    role: "Chief Technology Officer",
    flag: "uk",
    bio: [
      "12+ years full stack software engineering via large IT firms, serving mainly Tier 1 banks.",
      "Specialist in agentic AI coding, data products, data resilience, and data security for large banks and regulated environments.",
      "Skilled in Lang Graph, Python, Node, React, Vue, DevOps, Google Cloud, AWS, and enterprise cybersecurity.",
      "Educated with a bachelors in computer science."
    ],
    skills: ["Agentic Security", "Data Resilience", "Enterprise DevOps", "Multi-Agent Orchestration"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    companies: ["Lloyds Bank", "Standard Chartered", "TomTom", "Publicis Sapient", "Wipro", "Thales"]
  }
];
