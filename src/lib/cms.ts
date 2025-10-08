import { CaseStudy, Resource } from '@/types/content';

// TODO: replace with real CMS. For now, filter in memory.
const CASE_STUDIES: CaseStudy[] = [];
const RESOURCES: Resource[] = [];

export async function fetchFacetOptions() {
  const data = await fetchCaseStudies({});
  const industries = [...new Set(data.map(c=>c.industry))].sort();
  const services = [...new Set(data.flatMap(c=>c.services))].sort();
  const stacks = [...new Set((data.flatMap(c=>c.stack ?? [])))].sort();
  return { industries, services, stacks };
}

export async function fetchCaseStudies(params: Record<string, any>) {
  // Prefer Sanity if configured
  const hasSanity = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && !!process.env.NEXT_PUBLIC_SANITY_DATASET;
  let docs: CaseStudy[] = CASE_STUDIES;
  if (hasSanity) {
    try {
      const { client } = await import('@/lib/sanity-client');
      type Raw = {
        company: string;
        industry: string;
        services?: string[];
        results?: { leadIncrease?: string; revenueIncrease?: string; timeSaved?: string };
        _createdAt?: string;
      };
      const raw: Raw[] = await client.fetch(`*[_type=="caseStudy"]{company,industry,services,results,_createdAt}`);
      docs = raw.map((r): CaseStudy => {
        const slug = r.company ? r.company.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'') : '';
        const outcomes: CaseStudy['outcomes'] = [];
        if (r.results?.leadIncrease) outcomes.push({ metric: 'Leads', value: r.results.leadIncrease });
        if (r.results?.revenueIncrease) outcomes.push({ metric: 'Revenue Uplift', value: r.results.revenueIncrease });
        if (r.results?.timeSaved) outcomes.push({ metric: 'Hours Saved', value: r.results.timeSaved });
        const year = r._createdAt ? new Date(r._createdAt).getFullYear() : undefined;
        return {
          title: r.company || 'Case Study',
          slug,
          client: r.company || 'Client',
          industry: r.industry || 'Other',
          services: r.services ?? [],
          outcomes,
          year,
          summary: `Results achieved for ${r.company}`,
        } as CaseStudy;
      });
    } catch (e) {
      // Fallback to static
      docs = CASE_STUDIES;
    }
  }

  const sp = new URLSearchParams(params as any);
  const by = (key:string) => sp.getAll(key).flatMap(v=>v.split(','));
  const sel = {
    industry: new Set(by('industry')),
    service:  new Set(by('service')),
    outcome:  new Set(by('outcome')),
    size:     new Set(by('size')),
    stack:    new Set(by('stack')),
    year:     sp.get('year'),
    region:   new Set(by('region'))
  };
  return docs.filter(c => {
    const and = (cond:boolean) => cond;
    return and(sel.industry.size ? sel.industry.has(c.industry) : true)
      && and(sel.service.size ? c.services.some(s=>sel.service.has(s)) : true)
      && and(sel.size.size ? (sel.size.has(c.companySize ?? '')) : true)
      && and(sel.stack.size ? (c.stack ?? []).some(s=>sel.stack.has(s)) : true)
      && and(sel.region.size ? sel.region.has(c.region ?? '') : true)
      && and(sel.year ? (c.year ? c.year >= Number(sel.year) : false) : true);
  });
}

export async function fetchResources(params: Record<string, any>) {
  const hasSanity = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && !!process.env.NEXT_PUBLIC_SANITY_DATASET;
  let docs: Resource[] = RESOURCES;
  if (hasSanity) {
    try {
      const { client } = await import('@/lib/sanity-client');
      type Raw = {
        title: string;
        slug?: { current: string };
        excerpt?: string;
        publishedAt?: string;
        category?: { title?: string } | string;
      };
      const raw: Raw[] = await client.fetch(`*[_type=="blogPost" && status=="published"]|order(publishedAt desc){title,slug,excerpt,publishedAt,category->{title}}`);
      docs = raw.map((r): Resource => {
        const topicTitle = typeof r.category === 'string' ? r.category : (r.category?.title || 'Content');
        const normalise = (s:string) => s.toLowerCase();
        let topic: Resource['topic'] = 'Content';
        if (/seo/i.test(topicTitle)) topic = 'SEO';
        else if (/email/i.test(topicTitle)) topic = 'Email';
        else if (/social/i.test(topicTitle)) topic = 'Social';
        else if (/brand/i.test(topicTitle)) topic = 'Branding';
        else if (/automation|crm|intelligence/i.test(topicTitle)) topic = 'Automation';
        return {
          title: r.title,
          slug: r.slug?.current || r.title.toLowerCase().replace(/[^a-z0-9]+/g,'-'),
          topic,
          type: 'Article',
          audience: 'Marketing',
          difficulty: 'Foundations',
          date: r.publishedAt || new Date().toISOString(),
          summary: r.excerpt || '',
        } as Resource;
      });
    } catch (_e) {
      docs = RESOURCES;
    }
  }

  const sp = new URLSearchParams(params as any);
  const pick = (id:string) => new Set(sp.getAll(id).flatMap(v=>v.split(',')));
  const topic = pick('topic'), type = pick('type'), audience = pick('audience'), difficulty = pick('difficulty');
  return docs.filter(r =>
    (topic.size ? topic.has(r.topic) : true) &&
    (type.size ? type.has(r.type) : true) &&
    (audience.size ? audience.has(r.audience) : true) &&
    (difficulty.size ? difficulty.has(r.difficulty) : true)
  );
}
