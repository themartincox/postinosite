import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://postino.cc'

  const routes = [
    '',
    '/about',
    '/contact',
    '/growth-consultation',
    '/ai-automation-demo',
    '/case-studies',
    '/pricing',
    '/resources',
    '/blog',
    '/nottingham-marketing-agency',

    // Services
    '/growth-marketing',
    '/growth-marketing/inbound',
    '/growth-marketing/inbound/seo',
    '/growth-marketing/inbound/content-strategy-creation',
    '/growth-marketing/inbound/email-marketing-automation',
    '/growth-marketing/inbound/social-media-management',
    '/growth-marketing/branding',
    '/growth-marketing/branding/brand-identity-development',
    '/growth-marketing/branding/collateral-design',
    '/growth-marketing/branding/website-design-development',
    '/growth-marketing/branding/conversion-funnels',
    '/growth-marketing/strategy',
    '/growth-marketing/strategy/research-market-analysis',
    '/growth-marketing/strategy/marketing-planning',
    '/growth-marketing/strategy/analytics-reporting',
    '/growth-marketing/strategy/conversion-rate-optimization',
    '/growth-marketing/ai-search',
    '/growth-marketing/ai-search/ai-keyword-research',
    '/growth-marketing/ai-search/content-relevance-optimization',
    '/growth-marketing/ai-search/predictive-seo-analytics',
    '/growth-marketing/ai-search/organic-visibility-enhancement',

    // AI Automation
    '/ai-automation',
    '/ai-automation/process',
    '/ai-automation/process/business-process-automation',
    '/ai-automation/process/workflow-automation',
    '/ai-automation/process/task-management',
    '/ai-automation/process/system-integration',
    '/ai-automation/process/quality-control-systems',
    '/ai-automation/intelligence',
    '/ai-automation/intelligence/predictive-analytics',
    '/ai-automation/intelligence/customer-segmentation',
    '/ai-automation/intelligence/personalised-outreach',
    '/ai-automation/custom-ai',
    '/ai-automation/custom-ai/intelligent-chatbots',
    '/ai-automation/custom-ai/automated-lead-routing',
    '/ai-automation/custom-ai/predictive-ai-models',

    // Other Services
    '/seo-services',
    '/content-strategy',
    '/ai-automation-hub',

    // Industries
    '/industries',
    '/industries/dental-practices',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.includes('/growth-marketing') || route.includes('/ai-automation') ? 0.8 : 0.6,
  }))
}
