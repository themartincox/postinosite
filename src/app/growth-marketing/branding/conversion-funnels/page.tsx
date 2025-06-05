import ServicePageTemplate from "@/components/ServicePageTemplate"
import { TrendingUp, Target, Zap, BarChart3, Users, CheckCircle } from "lucide-react"

export default function ConversionFunnelsPage() {
  return (
    <ServicePageTemplate
      serviceName="Conversion Funnel Optimisation"
      serviceSlug="conversion-funnels"
      categoryName="Branding"
      categorySlug="branding"
      parentService="growth-marketing"
      heroTitle="Strategic Sales Funnels That Maximise Revenue"
      heroDescription="Design and optimise high-converting sales funnels that systematically guide prospects from initial awareness to loyal customers, dramatically increasing your revenue per visitor."
      heroColor="coral-red"
      serviceOverview="Our conversion funnel optimisation service transforms your customer journey into a predictable revenue engine. We analyse every touchpoint, identify conversion barriers, and implement strategic improvements that compound results. Using data-driven insights and psychological triggers, we create seamless experiences that maximise lifetime customer value whilst reducing acquisition costs."
      keyBenefits={[
        "Increase overall conversion rates by up to 350%",
        "Reduce customer acquisition costs through efficient funnels",
        "Maximise lifetime value with strategic upselling sequences",
        "Improve lead quality and sales-readiness",
        "Create predictable revenue growth through systematic optimisation",
        "Enhance customer experience and satisfaction scores"
      ]}
      serviceFeatures={[
        {
          title: "Funnel Architecture Design",
          description: "Strategic mapping of customer journeys with optimised touchpoints and conversion paths",
          icon: TrendingUp
        },
        {
          title: "Landing Page Optimisation",
          description: "High-converting landing pages designed for specific audience segments and campaigns",
          icon: Target
        },
        {
          title: "Automated Email Sequences",
          description: "Behavioural email campaigns that nurture leads and drive conversions automatically",
          icon: Zap
        },
        {
          title: "Conversion Analytics",
          description: "Comprehensive tracking and analysis to identify optimisation opportunities and measure ROI",
          icon: BarChart3
        },
        {
          title: "Audience Segmentation",
          description: "Advanced segmentation strategies for personalised experiences and higher conversion rates",
          icon: Users
        },
        {
          title: "A/B Testing Framework",
          description: "Systematic testing protocols to continuously improve funnel performance and revenue",
          icon: CheckCircle
        }
      ]}
      processSteps={[
        {
          step: "01",
          title: "Funnel Audit & Analysis",
          description: "We conduct comprehensive analysis of your current customer journey, identifying bottlenecks, drop-off points, and missed opportunities for revenue optimisation."
        },
        {
          step: "02",
          title: "Strategic Funnel Design",
          description: "Based on your audience data and business objectives, we design optimised funnel architecture with strategic touchpoints and conversion mechanisms."
        },
        {
          step: "03",
          title: "Implementation & Integration",
          description: "We build and integrate all funnel components including landing pages, email sequences, tracking systems, and automation workflows for seamless operation."
        },
        {
          step: "04",
          title: "Testing & Optimisation",
          description: "Continuous A/B testing and performance monitoring enables ongoing improvements, ensuring your funnels deliver maximum ROI and customer value."
        }
      ]}
      resultMetrics={[
        {
          metric: "Conversion Rate",
          value: "+350%",
          description: "Average improvement in funnel conversion rates"
        },
        {
          metric: "Revenue Per Visitor",
          value: "+280%",
          description: "Increase in average revenue generated per visitor"
        },
        {
          metric: "Customer Lifetime Value",
          value: "+190%",
          description: "Improvement in long-term customer value"
        }
      ]}
      caseStudy={{
        company: "FinTech Innovations",
        industry: "Financial Technology",
        challenge: "Complex product offerings with lengthy sales cycles were resulting in low conversion rates and high customer acquisition costs, with prospects dropping off at multiple stages.",
        result: "Redesigned conversion funnels with strategic nurturing sequences increased qualified demo bookings by 320%, reduced acquisition costs by 45%, and improved customer lifetime value by 240%.",
        metric: "320% increase in qualified demos"
      }}
      investmentInfo={{
        description: "Comprehensive conversion funnel optimisation that transforms your customer acquisition into a predictable revenue system. Investment reflects the strategic value and revenue impact potential.",
        startingFrom: "£4,500",
        consultationPrice: "£400"
      }}
      faqs={[
        {
          question: "How do you identify where my current funnel is losing prospects?",
          answer: "We use advanced analytics, heatmap analysis, user session recordings, and conversion tracking to identify exactly where prospects drop off. This data-driven approach reveals specific bottlenecks and optimisation opportunities throughout your customer journey."
        },
        {
          question: "Can you work with my existing marketing tools and platforms?",
          answer: "Yes, we integrate with all major marketing platforms including HubSpot, Salesforce, Mailchimp, ActiveCampaign, and custom systems. Our funnels work seamlessly with your existing tech stack whilst providing enhanced capabilities and insights."
        },
        {
          question: "How long before I see results from funnel optimisation?",
          answer: "Initial improvements typically appear within 2-4 weeks of implementation. However, significant results develop over 2-3 months as we gather data, conduct A/B tests, and refine the funnels. The compound effect means results continue improving over time."
        },
        {
          question: "Do you provide training for our team to manage the funnels?",
          answer: "Absolutely. We provide comprehensive training documentation, video tutorials, and hands-on sessions to ensure your team can effectively manage and optimise the funnels. We also offer ongoing support and consultation as needed."
        }
      ]}
      relatedServices={[
        {
          name: "Website Design & Development",
          slug: "/growth-marketing/branding/website-design-development",
          description: "High-converting websites that support your funnels"
        },
        {
          name: "Email Marketing Automation",
          slug: "/growth-marketing/inbound/email-marketing-automation",
          description: "Automated email campaigns that nurture leads"
        },
        {
          name: "Research & Market Analysis",
          slug: "/growth-marketing/strategy/research-market-analysis",
          description: "Strategic insights to inform funnel optimisation"
        }
      ]}
    />
  )
}