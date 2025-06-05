import ServicePageTemplate from "@/components/ServicePageTemplate"
import { Eye, Search, TrendingUp, Target, Zap, BarChart3 } from "lucide-react"

export default function OrganicVisibilityEnhancementPage() {
  return (
    <ServicePageTemplate
      serviceName="Organic Visibility Enhancement"
      serviceSlug="organic-visibility-enhancement"
      categoryName="AI Search Optimisation"
      categorySlug="ai-search"
      parentService="growth-marketing"
      heroTitle="Dominate Search Results With AI-Enhanced Visibility"
      heroDescription="Maximise your organic search presence through comprehensive visibility strategies that combine traditional SEO excellence with cutting-edge AI insights for sustained search dominance."
      heroColor="coral-red"
      serviceOverview="Our organic visibility enhancement service employs advanced AI technologies alongside proven SEO methodologies to dramatically improve your search presence across all relevant queries. We optimise technical foundations, enhance content relevance, build authoritative link profiles, and leverage AI insights to achieve and maintain top search rankings that drive qualified traffic and measurable business growth."
      keyBenefits={[
        "Increase organic search visibility by 320% across target keywords",
        "Generate £5.20 in revenue for every £1 invested in visibility enhancement",
        "Achieve top 3 rankings for 85% of targeted high-value keywords",
        "Improve brand discovery and awareness through enhanced search presence",
        "Create sustainable competitive advantages in organic search",
        "Reduce dependence on paid advertising through strong organic performance"
      ]}
      serviceFeatures={[
        {
          title: "Technical SEO Optimisation",
          description: "Comprehensive technical improvements for search engine accessibility and performance",
          icon: Search
        },
        {
          title: "AI-Enhanced Content Strategy",
          description: "Content optimisation using AI insights for maximum relevance and search visibility",
          icon: Eye
        },
        {
          title: "Authority Building",
          description: "Strategic link building and digital PR for enhanced domain authority and rankings",
          icon: TrendingUp
        },
        {
          title: "Local Search Optimisation",
          description: "Enhanced visibility for location-based searches and local business discovery",
          icon: Target
        },
        {
          title: "Featured Snippet Optimisation",
          description: "Strategic optimisation for featured snippets and enhanced SERP presence",
          icon: Zap
        },
        {
          title: "Performance Monitoring",
          description: "Comprehensive tracking of visibility metrics and search performance improvements",
          icon: BarChart3
        }
      ]}
      processSteps={[
        {
          step: "01",
          title: "Visibility Audit & Analysis",
          description: "Comprehensive assessment of current search visibility, technical issues, content gaps, and competitive analysis to establish enhancement strategy foundation."
        },
        {
          step: "02",
          title: "AI-Driven Optimisation Strategy",
          description: "Development of multi-faceted visibility enhancement strategy combining technical SEO, content optimisation, and authority building based on AI insights and competitive intelligence."
        },
        {
          step: "03",
          title: "Implementation & Enhancement",
          description: "Systematic implementation of visibility improvements including technical fixes, content optimisation, link building, and AI-guided search presence enhancement."
        },
        {
          step: "04",
          title: "Monitoring & Continuous Improvement",
          description: "Ongoing visibility monitoring, performance analysis, and strategic adjustments to maintain and improve search rankings and organic presence."
        }
      ]}
      resultMetrics={[
        {
          metric: "Visibility Increase",
          value: "+320%",
          description: "Average improvement in organic search visibility"
        },
        {
          metric: "Top 3 Rankings",
          value: "85%",
          description: "Percentage of target keywords ranking in top 3"
        },
        {
          metric: "Organic ROI",
          value: "520%",
          description: "Return on organic visibility investment"
        }
      ]}
      caseStudy={{
        company: "ProfessionalCare Services",
        industry: "Healthcare & Wellness",
        challenge: "Limited organic visibility with most target keywords ranking on page 2-3 of search results, resulting in minimal organic traffic and heavy reliance on expensive paid advertising for customer acquisition.",
        result: "Comprehensive visibility enhancement achieved top 3 rankings for 92% of target keywords, increased organic traffic by 450%, generated £180K additional revenue, and reduced paid advertising costs by 60% whilst maintaining lead volume.",
        metric: "450% organic traffic increase"
      }}
      investmentInfo={{
        description: "Comprehensive organic visibility enhancement that establishes search dominance through technical excellence, content optimisation, and authority building. Investment reflects the multi-faceted approach and sustained competitive advantage creation.",
        startingFrom: "£4,200",
        consultationPrice: "£495"
      }}
      faqs={[
        {
          question: "How long does it take to see significant visibility improvements?",
          answer: "Initial improvements typically appear within 6-8 weeks for quick wins, whilst comprehensive visibility enhancement shows substantial results within 3-4 months. Sustained growth continues as authority builds and optimisations compound."
        },
        {
          question: "Do you guarantee specific ranking positions?",
          answer: "Whilst we can't guarantee specific positions due to search algorithm variables, our systematic approach consistently delivers significant visibility improvements. We provide realistic projections based on competitive analysis and proven methodologies."
        },
        {
          question: "What makes your approach different from traditional SEO?",
          answer: "We combine proven SEO fundamentals with advanced AI insights, predictive analytics, and comprehensive visibility strategies. This holistic approach addresses technical, content, and authority factors simultaneously for maximum impact."
        },
        {
          question: "Can you help with visibility in competitive industries?",
          answer: "Yes, we specialise in competitive markets where strategic differentiation is crucial. Our AI-enhanced approach often identifies opportunities that competitors miss, enabling visibility breakthroughs even in saturated markets."
        }
      ]}
      relatedServices={[
        {
          name: "Content Relevance Optimisation",
          slug: "content-relevance-optimization",
          description: "AI-optimised content for enhanced search relevance"
        },
        {
          name: "Predictive SEO Analytics",
          slug: "predictive-seo-analytics",
          description: "Predictive insights for visibility strategy planning"
        },
        {
          name: "AI Keyword Research",
          slug: "ai-keyword-research",
          description: "Advanced keyword strategies for visibility enhancement"
        }
      ]}
    />
  )
}