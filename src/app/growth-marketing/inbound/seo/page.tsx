import ServicePageTemplate from "@/components/ServicePageTemplate"
import { Search, Target, BarChart3, TrendingUp, Eye, Globe, Zap, Users } from "lucide-react"

export default function SEOServicePage() {
  return (
    <ServicePageTemplate
      serviceName="SEO Strategy & Implementation"
      serviceSlug="seo"
      categoryName="Inbound Marketing"
      categorySlug="inbound"
      parentService="growth-marketing"

      heroTitle="AI-Enhanced SEO That Dominates Search Rankings"
      heroDescription="Combine proven SEO methodologies with cutting-edge AI insights to achieve top search rankings, drive qualified organic traffic, and generate more leads from your ideal customers."
      heroColor="forest-green"

      serviceOverview="Our SEO service goes beyond traditional optimisation. We use advanced AI tools to identify opportunities your competitors miss, create content that both search engines and users love, and build sustainable organic growth that compounds over time. Every strategy is custom-built for your industry, audience, and business goals."

      keyBenefits={[
        "Achieve top 3 rankings for your most valuable keywords",
        "Drive 285% more qualified organic traffic within 6 months",
        "Reduce customer acquisition costs compared to paid advertising",
        "Build long-term asset value through organic search presence",
        "Establish thought leadership and industry authority",
        "Generate leads 24/7 without ongoing ad spend"
      ]}

      serviceFeatures={[
        {
          title: "Technical SEO Audit",
          description: "Comprehensive analysis of site structure, speed, and technical performance",
          icon: Search
        },
        {
          title: "AI-Driven Keyword Research",
          description: "Machine learning algorithms identify high-opportunity keywords",
          icon: Target
        },
        {
          title: "Content Strategy & Creation",
          description: "SEO-optimised content that ranks and converts visitors",
          icon: BarChart3
        },
        {
          title: "Link Building & Authority",
          description: "Strategic link acquisition to build domain authority",
          icon: Globe
        },
        {
          title: "Local SEO Optimisation",
          description: "Dominate local search results and Google Business Profile",
          icon: Users
        },
        {
          title: "Performance Tracking",
          description: "Advanced analytics and reporting on rankings and traffic",
          icon: TrendingUp
        }
      ]}

      processSteps={[
        {
          step: "01",
          title: "SEO Audit & Analysis",
          description: "Comprehensive technical audit, keyword research, and competitor analysis"
        },
        {
          step: "02",
          title: "Strategy Development",
          description: "Custom SEO strategy aligned with business objectives and market opportunities"
        },
        {
          step: "03",
          title: "Implementation & Optimisation",
          description: "Execute technical fixes, content creation, and link building campaigns"
        },
        {
          step: "04",
          title: "Monitoring & Refinement",
          description: "Continuous monitoring, reporting, and strategy refinement for growth"
        }
      ]}

      resultMetrics={[
        {
          metric: "Organic Traffic Increase",
          value: "285%",
          description: "Average increase within 6 months"
        },
        {
          metric: "Keywords in Top 10",
          value: "1,247",
          description: "Average rankings achieved"
        },
        {
          metric: "Lead Generation Growth",
          value: "156%",
          description: "More qualified prospects from search"
        }
      ]}

      caseStudy={{
        company: "Precision Manufacturing Ltd",
        industry: "B2B Manufacturing",
        challenge: "Struggling with low online visibility and losing potential customers to competitors who ranked higher in search results.",
        result: "Achieved 340% increase in organic traffic, 23 first-page rankings for target keywords, and 89% more qualified enquiries within 8 months.",
        metric: "340% Traffic Growth"
      }}

      investmentInfo={{
        description: "Our SEO services are designed for businesses serious about long-term organic growth. Investment varies based on competition level and scope.",
        startingFrom: "£2,500/month",
        consultationPrice: "£50"
      }}

      faqs={[
        {
          question: "How long does it take to see SEO results?",
          answer: "Most clients see initial improvements within 3-4 months, with significant results typically achieved within 6-8 months. SEO is a long-term strategy that builds compound growth over time."
        },
        {
          question: "What makes your SEO approach different?",
          answer: "We combine traditional SEO expertise with AI-powered insights to identify opportunities others miss. Our approach focuses on sustainable, white-hat techniques that deliver lasting results."
        },
        {
          question: "Do you guarantee specific rankings?",
          answer: "While we can't guarantee specific rankings (no ethical SEO company can), we do guarantee improved organic visibility, traffic growth, and enhanced search performance based on our proven methodology."
        },
        {
          question: "How do you measure SEO success?",
          answer: "We track rankings, organic traffic, click-through rates, and most importantly, business metrics like leads and conversions generated from organic search."
        }
      ]}

      relatedServices={[
        {
          name: "Content Strategy",
          slug: "content-strategy",
          description: "Strategic content creation that supports SEO and engages your audience"
        },
        {
          name: "Email Marketing",
          slug: "email-marketing",
          description: "Nurture organic traffic through automated email sequences"
        },
        {
          name: "Social Media Marketing",
          slug: "social-media",
          description: "Amplify your content reach through social media channels"
        }
      ]}
    />
  )
}
