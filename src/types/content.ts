export type Pillar = 'Growth Marketing' | 'AI & Automation';

export interface Service {
  title: string;
  slug: string;
  pillar: Pillar;
  summary: string;
  body?: string;
  relatedCaseStudies?: string[];
}

export interface Industry {
  title: string;
  slug: string;
  overview?: string;
}

export interface CaseStudy {
  title: string;
  slug: string;
  client: string;
  industry: string;               // slug
  services: string[];             // service slugs
  outcomes: { metric: 'Leads'|'Revenue Uplift'|'Hours Saved'|'CSAT'; value: number|string; unit?: string }[];
  companySize?: 'Micro'|'SMB'|'Mid‑market';
  stack?: string[];
  region?: 'UK'|'EU'|'US'|'Global';
  year?: number;
  summary: string;
}

export interface Resource {
  title: string;
  slug: string;
  topic: 'SEO'|'Content'|'Email'|'Social'|'Branding'|'Automation'|'CRM/Intelligence';
  type: 'Article'|'Guide'|'Template'|'Video'|'Demo';
  audience: 'Owner'|'Marketing'|'Ops/RevOps'|'CTO';
  difficulty: 'Foundations'|'Intermediate'|'Advanced';
  date: string;
  summary: string;
}

