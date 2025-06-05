import ServicePageTemplate from "@/components/ServicePageTemplate"
import { Target, Calendar, BarChart3, Lightbulb, Users, TrendingUp } from "lucide-react"

export default function MarketingPlanningPage() {
  return (
    <ServicePageTemplate
      serviceName="Marketing Planning"
      serviceSlug="marketing-planning"
      categoryName="Strategy & Consulting"
      categorySlug="strategy"
      parentService="growth-marketing"
      heroTitle="Strategic Marketing Plans That Deliver Growth"
      heroDescription="Transform your marketing efforts with comprehensive strategic planning that aligns resources, maximises ROI, and creates sustainable competitive advantages through data-driven decision making."
      heroColor="midnight-blue"
      serviceOverview="Our marketing planning service creates comprehensive, actionable strategies tailored to your business objectives and market dynamics. We combine market intelligence, competitive analysis, and customer insights to develop integrated marketing plans that optimise resource allocation, maximise impact, and deliver measurable results across all channels and touchpoints."
      keyBenefits={[
        "Increase marketing ROI by 240% through strategic resource allocation",
        "Align marketing activities with business objectives for maximum impact",
        "Reduce marketing waste through data-driven channel optimisation",
        "Create cohesive brand messaging across all customer touchpoints",
        "Establish clear KPIs and measurement frameworks for accountability",
        "Develop scalable marketing systems that grow with your business"
      ]}
      serviceFeatures={[
        {
          title: "Strategic Roadmap Development",
          description: "Comprehensive marketing strategies aligned with business goals and market opportunities",
          icon: Target
        },
        {
          title: "Campaign Planning & Scheduling",
          description: "Detailed campaign calendars with optimal timing and resource allocation",
          icon: Calendar
        },
        {
          title: "Performance Framework Setup",
          description: "KPI definition, measurement systems, and reporting structures for accountability",
          icon: BarChart3
        },
        {
          title: "Creative Strategy Development",
          description: "Brand positioning, messaging frameworks, and creative direction guidelines",
          icon: Lightbulb
        },
        {
          title: "Audience Segmentation Strategy",
          description: "Customer journey mapping and personalised engagement strategies",
          icon: Users
        },
        {
          title: "Growth Opportunity Analysis",
          description: "Market gap identification and expansion strategies for sustainable growth",
          icon: TrendingUp
        }
      ]}
      processSteps={[
        {
          step: "01",
          title: "Business & Market Assessment",
          description: "Comprehensive analysis of your business objectives, market position, competitive landscape, and current marketing performance to establish strategic foundation."
        },
        {
          step: "02",
          title: "Strategy Development & Validation",
          description: "Create integrated marketing strategies based on insights, validate approaches through market testing, and develop detailed implementation roadmaps."
        },
        {
          step: "03",
          title: "Resource Planning & Allocation",
          description: "Optimise budget distribution across channels, define team roles and responsibilities, and establish timelines for maximum efficiency and impact."
        },
        {
          step: "04",
          title: "Implementation & Monitoring Framework",
          description: "Launch marketing initiatives with built-in monitoring systems, performance tracking, and continuous optimisation protocols for sustained success."
        }
      ]}
      resultMetrics={[
        {
          metric: "Marketing ROI",
          value: "+240%",
          description: "Average increase in marketing return on investment"
        },
        {
          metric: "Campaign Efficiency",
          value: "+185%",
          description: "Improvement in campaign performance metrics"
        },
        {
          metric: "Strategy Implementation",
          value: "98%",
          description: "Successfully executed strategic initiatives"
        }
      ]}
      caseStudy={{
        company: "TechFlow Systems",
        industry: "SaaS Technology",
        challenge: "Fragmented marketing efforts across multiple channels with no unified strategy, resulting in 40% marketing budget waste and declining customer acquisition rates despite increased spending.",
        result: "Comprehensive marketing plan unified all channels, reduced acquisition costs by 45%, increased lead quality by 180%, and achieved 65% revenue growth through strategic budget reallocation and optimised customer journeys.",
        metric: "65% revenue growth achieved"
      }}
      investmentInfo={{
        description: "Strategic marketing planning that aligns your entire marketing ecosystem for maximum impact. Investment reflects the comprehensive nature of strategic planning, market analysis, and implementation framework development.",
        startingFrom: "£2,800",
        consultationPrice: "£395"
      }}
      faqs={[
        {
          question: "How long does the marketing planning process typically take?",
          answer: "Comprehensive marketing planning usually takes 4-6 weeks, depending on business complexity and scope. This includes market research, strategy development, validation, and creation of detailed implementation guides. We provide milestone updates throughout the process."
        },
        {
          question: "Do you help with implementation or just provide the strategy?",
          answer: "We provide both strategic planning and implementation support. Our plans include detailed execution guides, timelines, and resource requirements. We also offer ongoing consultation during implementation to ensure successful strategy execution."
        },
        {
          question: "How do you measure the success of a marketing plan?",
          answer: "We establish clear KPIs aligned with your business objectives, including ROI metrics, lead quality indicators, conversion rates, and brand awareness measures. Our framework includes regular performance reviews and optimisation recommendations."
        },
        {
          question: "Can you adapt existing marketing plans or do you start from scratch?",
          answer: "We can work with existing plans, optimising and enhancing current strategies where appropriate. Our assessment process identifies what's working well and what needs improvement, allowing us to build upon successful elements whilst addressing gaps."
        }
      ]}
      relatedServices={[
        {
          name: "Analytics & Reporting",
          slug: "analytics-reporting",
          description: "Data-driven insights to optimise your marketing plan"
        },
        {
          name: "Research & Market Analysis",
          slug: "research-market-analysis",
          description: "Market intelligence to inform strategic planning"
        },
        {
          name: "Content Strategy & Creation",
          slug: "/growth-marketing/inbound/content-strategy-creation",
          description: "Content strategies aligned with your marketing plan"
        }
      ]}
    />
  )
}