import type { CaseStudy, Resource } from '@/types/content';

export function caseStudyJsonLd(cs: CaseStudy) {
  return {
    '@context':'https://schema.org',
    '@type':'CaseStudy',
    'name': cs.title,
    'description': cs.summary,
    'datePublished': cs.year ? `${cs.year}-01-01` : undefined,
    'industry': cs.industry,
    'keywords': [...cs.services, ...(cs.stack ?? [])].join(', ')
  };
}

export function articleJsonLd(r: Resource) {
  return {
    '@context':'https://schema.org',
    '@type':'BlogPosting',
    'headline': r.title,
    'datePublished': r.date
  };
}

