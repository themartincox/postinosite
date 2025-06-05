import ServicePageTemplate from "@/components/ServicePageTemplate"
import { PenTool, Target, BarChart3, TrendingUp, Eye, Users, Calendar, FileText } from "lucide-react"

export default function ContentStrategyCreationPage() {
  return (
    <ServicePageTemplate
      serviceName="Content Strategy & Creation"
      serviceSlug="content-strategy-creation"
      categoryName="Inbound Marketing"
      categorySlug="inbound"
      parentService="growth-marketing"

      heroTitle="Strategic Content That Educates, Engages & Converts"
      heroDescription="Transform your content from random posts into a strategic growth engine. Our comprehensive content strategy and creation services build authority, attract ideal customers, and drive measurable business results through valuable, targeted content."
      heroColor="forest-green"

      serviceOverview="Our Content Strategy & Creation service goes beyond writing blog posts. We develop comprehensive content ecosystems that position you as the go-to authority in your industry whilst systematically nurturing prospects through their buyer's journey. Every piece of content is strategically crafted to serve dual purposes: providing genuine value to your audience and driving specific business outcomes."

      keyBenefits={[
        "Establish thought leadership and industry authority through expert content",
        "Generate 340% more qualified leads through strategic content funnels",
        "Reduce sales cycle length by educating prospects before they speak to sales",
        "Build a library of evergreen assets that continue working long-term",
        "Improve SEO rankings through consistent, high-quality content creation",
        "Create multiple touchpoints that nurture prospects across all channels"
      ]}

      serviceFeatures={[
        {
          title: "Content Strategy Development",
          description: "Comprehensive strategy aligned with business goals and audience needs",
          icon: Target
        },
        {
          title: "Content Calendar Planning",
          description: "Strategic content scheduling optimised for engagement and conversions",
          icon: Calendar
        },
        {
          title: "Blog & Article Writing",
          description: "Expert content creation that establishes authority and drives traffic",
          icon: PenTool
        },
        {
          title: "Lead Magnets & Resources",
          description: "Valuable downloadable content that captures and qualifies leads",
          icon: FileText
        },
        {
          title: "Content Performance Analysis",
          description: "Detailed analytics and optimisation based on content performance",
          icon: BarChart3
        },
        {
          title: "Multi-Channel Distribution",
          description: "Strategic content amplification across all relevant platforms",
          icon: TrendingUp
        }
      ]}

      processSteps={[
        {
          step: "01",
          title: "Content Audit & Strategy",
          description: "Analyse existing content, identify gaps, and develop comprehensive strategy"
        },
        {
          step: "02",
          title: "Editorial Calendar Creation",
          description: "Plan content themes, topics, and publishing schedule for maximum impact"
        },
        {
          step: "03",
          title: "Content Creation & Production",
          description: "Produce high-quality, engaging content optimised for target audience"
        },
        {
          step: "04",
          title: "Distribution & Optimisation",
          description: "Distribute content strategically and optimise based on performance data"
        }
      ]}

      resultMetrics={[
        {
          metric: "Content Engagement",
          value: "340%",
          description: "Increase in content-driven leads"
        },
        {
          metric: "Authority Building",
          value: "89%",
          description: "Improvement in brand recognition"
        },
        {
          metric: "SEO Impact",
          value: "156%",
          description: "Increase in organic search traffic"
        }
      ]}

      caseStudy={{
        company: "Professional Services Group",
        industry: "Business Consulting",
        challenge: "Struggling to differentiate from competitors and generate consistent leads through their website and content efforts.",
        result: "Developed comprehensive thought leadership content strategy resulting in 67% more qualified leads, 23 speaking opportunities, and recognition as industry experts.",
        metric: "67% Lead Increase"
      }}

      investmentInfo={{
        description: "Content strategy and creation investment varies based on content volume and complexity. Most clients see ROI within 3-6 months through improved lead generation and authority building.",
        startingFrom: "£1,800/month",
        consultationPrice: "£50 strategy session"
      }}

      faqs={[
        {
          question: "How often should we publish new content?",
          answer: "Content frequency depends on your audience and resources, but we typically recommend 2-4 high-quality pieces per month for blogs, plus additional content for other channels. Quality and consistency are more important than frequency."
        },
        {
          question: "What types of content do you create?",
          answer: "We create blog posts, whitepapers, case studies, guides, infographics, social media content, email newsletters, and lead magnets. Content types are selected based on your audience preferences and business objectives."
        },
        {
          question: "How do you ensure content aligns with our brand voice?",
          answer: "We begin with a comprehensive brand voice audit and style guide development. All content is created following these guidelines and reviewed to ensure consistency with your brand personality and messaging."
        },
        {
          question: "Can you help with content distribution and promotion?",
          answer: "Absolutely. We develop multi-channel distribution strategies including social media, email marketing, industry publications, and influencer outreach to maximise content reach and impact."
        }
      ]}

      relatedServices={[
        {
          name: "SEO Strategy & Implementation",
          slug: "seo-strategy-implementation",
          description: "Optimise content for search engines to maximise organic visibility"
        },
        {
          name: "Email Marketing Automation",
          slug: "email-marketing-automation",
          description: "Distribute and nurture prospects through email content sequences"
        },
        {
          name: "Social Media Management",
          slug: "social-media-management",
          description: "Amplify content reach through strategic social media distribution"
        }
      ]}
    />
  )
}
