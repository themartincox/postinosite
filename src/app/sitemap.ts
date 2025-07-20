import type { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/blog-data'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://postino.cc'
  const currentDate = new Date().toISOString()

  // Get all blog posts
  const blogPosts = getAllBlogPosts()

  // Core pages
  const corePages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/success`,
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
  ]

  // Main service categories
  const serviceCategories = [
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
      url: `${baseUrl}/seo-services`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/content-strategy`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Growth Marketing sub-services
  const growthMarketingPages = [
    // Inbound category and services
    `${baseUrl}/growth-marketing/inbound`,
    `${baseUrl}/growth-marketing/inbound/seo`,
    `${baseUrl}/growth-marketing/inbound/content-strategy-creation`,
    `${baseUrl}/growth-marketing/inbound/email-marketing-automation`,
    `${baseUrl}/growth-marketing/inbound/social-media-management`,

    // Branding category and services
    `${baseUrl}/growth-marketing/branding`,
    `${baseUrl}/growth-marketing/branding/brand-identity-development`,
    `${baseUrl}/growth-marketing/branding/collateral-design`,
    `${baseUrl}/growth-marketing/branding/website-design-development`,
    `${baseUrl}/growth-marketing/branding/website-design-development/nextjs-development`,
    `${baseUrl}/growth-marketing/branding/website-design-development/shopify-development`,
    `${baseUrl}/growth-marketing/branding/website-design-development/wordpress-development`,
    `${baseUrl}/growth-marketing/branding/website-design-development/headless-commerce`,
    `${baseUrl}/growth-marketing/branding/conversion-funnels`,

    // Strategy category and services
    `${baseUrl}/growth-marketing/strategy`,
    `${baseUrl}/growth-marketing/strategy/research-market-analysis`,
    `${baseUrl}/growth-marketing/strategy/marketing-planning`,
    `${baseUrl}/growth-marketing/strategy/analytics-reporting`,
    `${baseUrl}/growth-marketing/strategy/conversion-rate-optimization`,

    // AI Search category and services
    `${baseUrl}/growth-marketing/ai-search`,
    `${baseUrl}/growth-marketing/ai-search/ai-keyword-research`,
    `${baseUrl}/growth-marketing/ai-search/content-relevance-optimization`,
    `${baseUrl}/growth-marketing/ai-search/predictive-seo-analytics`,
    `${baseUrl}/growth-marketing/ai-search/organic-visibility-enhancement`,
  ].map(url => ({
    url,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // AI Automation sub-services
  const aiAutomationPages = [
    // Process category and services
    `${baseUrl}/ai-automation/process`,
    `${baseUrl}/ai-automation/process/business-process-automation`,
    `${baseUrl}/ai-automation/process/workflow-automation`,
    `${baseUrl}/ai-automation/process/task-management`,
    `${baseUrl}/ai-automation/process/system-integration`,
    `${baseUrl}/ai-automation/process/quality-control-systems`,

    // Intelligence category and services
    `${baseUrl}/ai-automation/intelligence`,
    `${baseUrl}/ai-automation/intelligence/predictive-analytics`,
    `${baseUrl}/ai-automation/intelligence/customer-segmentation`,
    `${baseUrl}/ai-automation/intelligence/personalised-outreach`,

    // Custom AI category and services
    `${baseUrl}/ai-automation/custom-ai`,
    `${baseUrl}/ai-automation/custom-ai/intelligent-chatbots`,
    `${baseUrl}/ai-automation/custom-ai/automated-lead-routing`,
    `${baseUrl}/ai-automation/custom-ai/predictive-ai-models`,
  ].map(url => ({
    url,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Lead generation and demo pages
  const leadGenPages = [
    {
      url: `${baseUrl}/revenue-forecast`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/website-audit`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
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
    {
      url: `${baseUrl}/ai-automation-hub`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ]

  // Industries pages
  const industryPages = [
    {
      url: `${baseUrl}/industries`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries/dental-practices`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/medical-practices`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/cosmetic-clinics`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wellness-beauty`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ecommerce`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Local landing pages - Enhanced with FAQ sections and comprehensive structured data
  const localPages = [
    {
      url: `${baseUrl}/bingham`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9, // Increased priority due to FAQ sections and enhanced structured data
    },
    {
      url: `${baseUrl}/rushcliffe`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9, // Increased priority due to FAQ sections and enhanced structured data
    },
    {
      url: `${baseUrl}/nottingham-marketing-agency`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8, // Increased priority for comprehensive local SEO
    },
    {
      url: `${baseUrl}/midlands-ai-automation`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8, // Regional AI automation services targeting East Midlands
    },
  ]

  // Local booking pages - Live payment systems (noindexed but included for sitemap completeness)
  const bookingPages = [
    // Bingham booking pages
    {
      url: `${baseUrl}/bingham/book/website-design`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/bingham/book/ai-chatbot`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/bingham/book/local-marketing`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/bingham/book/automation`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    // Rushcliffe booking pages
    {
      url: `${baseUrl}/rushcliffe/book/website-design`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/rushcliffe/book/ai-chatbot`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/rushcliffe/book/local-marketing`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/rushcliffe/book/automation`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ]

  // Content pages
  const contentPages = [
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Blog post pages
  const blogPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...corePages,
    ...serviceCategories,
    ...growthMarketingPages,
    ...aiAutomationPages,
    ...leadGenPages,
    ...industryPages,
    ...localPages,
    ...bookingPages,
    ...contentPages,
    ...blogPages,
  ]
}
