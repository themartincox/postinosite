import ServicePageTemplate from "@/components/ServicePageTemplate"
import { Search, BarChart3, Target, TrendingUp, Users, Eye } from "lucide-react"

export default function ResearchMarketAnalysisPage() {
  return (
    <ServicePageTemplate
      serviceName="Research & Market Analysis"
      serviceSlug="research-market-analysis"
      categoryName="Strategy"
      categorySlug="strategy"
      parentService="growth-marketing"
      heroTitle="Strategic Market Intelligence That Drives Growth"
      heroDescription="Gain competitive advantage with comprehensive market research and analysis that reveals untapped opportunities, validates business decisions, and guides strategic growth initiatives."
      heroColor="midnight-blue"
      serviceOverview="Our research and market analysis service provides deep insights into your market landscape, competitor strategies, and customer behaviour patterns. Using advanced analytics and proven research methodologies, we deliver actionable intelligence that informs strategic decisions, reduces market risks, and identifies high-value growth opportunities your competitors haven't discovered."
      keyBenefits={[
        "Identify untapped market opportunities worth £2M+ in potential revenue",
        "Reduce business risks through validated market insights",
        "Gain competitive intelligence to outmanoeuvre rivals",
        "Optimise product-market fit with customer behaviour analysis",
        "Inform strategic decisions with data-driven recommendations",
        "Accelerate market entry with comprehensive landscape analysis"
      ]}
      serviceFeatures={[
        {
          title: "Competitive Intelligence",
          description: "Comprehensive analysis of competitor strategies, positioning, and market performance",
          icon: Search
        },
        {
          title: "Market Sizing & Trends",
          description: "Detailed market analysis including size, growth projections, and emerging trends",
          icon: BarChart3
        },
        {
          title: "Customer Segmentation",
          description: "Advanced audience analysis revealing untapped segments and positioning opportunities",
          icon: Target
        },
        {
          title: "Opportunity Mapping",
          description: "Strategic identification of high-value growth opportunities and market gaps",
          icon: TrendingUp
        },
        {
          title: "Buyer Persona Research",
          description: "Deep customer insights including motivations, pain points, and purchasing behaviour",
          icon: Users
        },
        {
          title: "Industry Landscape Analysis",
          description: "Comprehensive overview of industry dynamics, regulations, and future outlook",
          icon: Eye
        }
      ]}
      processSteps={[
        {
          step: "01",
          title: "Research Objectives & Methodology",
          description: "We define specific research objectives aligned with your business goals and establish robust methodologies for data collection and analysis."
        },
        {
          step: "02",
          title: "Data Collection & Primary Research",
          description: "Comprehensive data gathering through multiple sources including surveys, interviews, industry reports, and proprietary databases for complete market intelligence."
        },
        {
          step: "03",
          title: "Analysis & Insight Development",
          description: "Advanced analytical techniques reveal patterns, opportunities, and strategic insights that inform business decisions and competitive positioning."
        },
        {
          step: "04",
          title: "Strategic Recommendations",
          description: "Actionable recommendations with implementation roadmaps, prioritised opportunities, and strategic guidance for maximum business impact."
        }
      ]}
      resultMetrics={[
        {
          metric: "Opportunity Value",
          value: "£2.3M+",
          description: "Average potential revenue identified per research project"
        },
        {
          metric: "Decision Accuracy",
          value: "+275%",
          description: "Improvement in strategic decision success rates"
        },
        {
          metric: "Market Entry Speed",
          value: "+180%",
          description: "Faster market penetration with validated insights"
        }
      ]}
      caseStudy={{
        company: "GreenTech Solutions",
        industry: "Renewable Energy",
        challenge: "Considering expansion into European markets but lacking comprehensive understanding of regulatory landscape, competitive positioning, and customer preferences across different regions.",
        result: "Detailed market analysis identified €15M opportunity in Nordic markets, revealed optimal entry strategy, and provided competitive intelligence that enabled successful launch capturing 12% market share within 18 months.",
        metric: "€15M market opportunity identified"
      }}
      investmentInfo={{
        description: "Comprehensive market research and strategic analysis that provides the intelligence needed for confident business decisions. Investment varies based on research scope, market complexity, and deliverable requirements.",
        startingFrom: "£3,500",
        consultationPrice: "£450"
      }}
      faqs={[
        {
          question: "What research methodologies do you use for market analysis?",
          answer: "We employ a mixed-methods approach including primary research (surveys, interviews, focus groups), secondary research (industry reports, databases), competitive analysis, and proprietary analytics tools. This ensures comprehensive and reliable insights for strategic decision-making."
        },
        {
          question: "How do you ensure the accuracy and reliability of your research?",
          answer: "We use multiple data sources for triangulation, employ statistical significance testing, conduct peer reviews of findings, and validate insights through expert interviews. Our methodologies follow industry best practices for market research reliability."
        },
        {
          question: "Can you research international markets and cultural considerations?",
          answer: "Absolutely. We have extensive experience researching global markets, including cultural nuances, regulatory environments, and regional business practices. Our international research capabilities support expansion strategies and cross-border business development."
        },
        {
          question: "How quickly can you complete a market research project?",
          answer: "Timeline depends on project scope and complexity. Basic market analysis typically takes 3-4 weeks, whilst comprehensive studies require 6-8 weeks. We provide detailed project timelines during the planning phase and offer expedited options when needed."
        }
      ]}
      relatedServices={[
        {
          name: "Conversion Funnel Optimisation",
          slug: "/growth-marketing/branding/conversion-funnels",
          description: "Apply research insights to optimise customer journeys"
        },
        {
          name: "Content Strategy & Creation",
          slug: "/growth-marketing/inbound/content-strategy-creation",
          description: "Content strategies informed by market research"
        },
        {
          name: "Predictive Analytics",
          slug: "/ai-automation/intelligence/predictive-analytics",
          description: "AI-powered forecasting and market predictions"
        }
      ]}
    />
  )
}