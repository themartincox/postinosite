import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://postino.cc'
  const currentDate = new Date().toISOString()

  // Static pages with priorities
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    // Core service pages with FAQ schema
    {
      url: `${baseUrl}/growth-marketing`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-automation`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nottingham-marketing-agency`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/midlands-ai-automation`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    // Industry pages with schema
    {
      url: `${baseUrl}/industries`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/dental-practices`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/industries/medical-practices`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/industries/cosmetic-clinics`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    // Content & authority pages
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    // Lead generation pages
    {
      url: `${baseUrl}/revenue-forecast`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/website-audit`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/growth-consultation`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-automation-demo`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    // Local landing pages
    {
      url: `${baseUrl}/bingham`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/rushcliffe`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Growth Marketing service pages
  const growthMarketingPages = [
    'inbound',
    'inbound/seo',
    'inbound/content-strategy-creation',
    'inbound/email-marketing-automation',
    'inbound/social-media-management',
    'ai-search',
    'ai-search/ai-keyword-research',
    'ai-search/content-relevance-optimization',
    'ai-search/predictive-seo-analytics',
    'ai-search/organic-visibility-enhancement',
    'branding',
    'branding/brand-identity-development',
    'branding/collateral-design',
    'branding/website-design-development',
    'branding/conversion-funnels',
    'strategy',
    'strategy/research-market-analysis',
    'strategy/marketing-planning',
    'strategy/analytics-reporting',
    'strategy/conversion-rate-optimization',
  ].map(page => ({
    url: `${baseUrl}/growth-marketing/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // AI Automation service pages
  const aiAutomationPages = [
    'process',
    'process/workflow-automation',
    'process/task-management',
    'process/system-integration',
    'process/business-process-automation',
    'process/quality-control-systems',
    'intelligence',
    'intelligence/predictive-analytics',
    'intelligence/customer-segmentation',
    'intelligence/personalised-outreach',
    'custom-ai',
    'custom-ai/intelligent-chatbots',
    'custom-ai/automated-lead-routing',
    'custom-ai/predictive-ai-models',
  ].map(page => ({
    url: `${baseUrl}/ai-automation/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Blog posts (latest content gets higher priority)
  const blogPosts = [
    // July 2025 posts (newest)
    'aeo-vs-seo-practical-guide-smes',
    'structured-data-schema-ai-search-visibility',
    'crafting-conversational-content-ai-loves',
    'zero-click-traffic-measuring-real-business-impact',
    'aeo-vs-geo-vs-aio-vs-aaio-what-marketers-should-know',
    'smart-aeo-identifying-high-value-queries',
    'becoming-cited-source-ai-answers',
    'human-touch-ai-driven-search-why-it-matters',
    // June 2025 posts
    'overcoming-aeo-pitfalls-avoiding-misdirection',
    'future-proofing-seo-agentic-ai',
    // Legacy posts
    'creating-seamless-b2b-user-experiences-that-convert',
    'mastering-thought-leadership-content-on-linkedin',
    'complete-guide-seo-topic-clusters-content-mapping',
  ].map((slug, index) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: index < 5 ? 0.8 : index < 10 ? 0.7 : 0.6, // Newest posts get highest priority
  }))

  // Booking pages
  const bookingPages = [
    'bingham/book/website-design',
    'bingham/book/ai-chatbot',
    'bingham/book/local-marketing',
    'bingham/book/automation',
    'rushcliffe/book/website-design',
    'rushcliffe/book/ai-chatbot',
    'rushcliffe/book/local-marketing',
    'rushcliffe/book/automation',
  ].map(page => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  // Additional service pages
  const additionalPages = [
    'content-strategy',
    'seo-services',
    'ecommerce',
    'wellness-beauty',
    'ai-automation-hub',
    'success',
    'offline',
  ].map(page => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [
    ...staticPages,
    ...growthMarketingPages,
    ...aiAutomationPages,
    ...blogPosts,
    ...bookingPages,
    ...additionalPages,
  ]
}
