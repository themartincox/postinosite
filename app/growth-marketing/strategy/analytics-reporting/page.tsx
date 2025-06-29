import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  BarChart3,
  Database,
  Eye,
  PieChart,
  Target,
  TrendingUp,
} from "lucide-react";

export default function AnalyticsReportingPage() {
  return (
    <ServicePageTemplate
      serviceName="Analytics & Reporting"
      serviceSlug="analytics-reporting"
      categoryName="Strategy & Consulting"
      categorySlug="strategy"
      parentService="growth-marketing"
      heroTitle="Transform Data Into Actionable Growth Insights"
      heroDescription="Unlock the power of your marketing data with comprehensive analytics and reporting that reveals hidden opportunities, validates strategies, and drives data-driven decisions for accelerated business growth."
      heroColor="forest-green"
      serviceOverview="Our analytics and reporting service transforms complex marketing data into clear, actionable insights that drive strategic decisions and measurable growth. We implement advanced tracking systems, create custom dashboards, and provide regular performance analysis that helps you understand what's working, what isn't, and where the biggest opportunities lie for optimisation and expansion."
      keyBenefits={[
        "Increase marketing efficiency by 180% through data-driven optimisation",
        "Identify hidden revenue opportunities worth £500K+ annually",
        "Reduce decision-making time by 65% with real-time insights",
        "Improve campaign performance through advanced attribution modelling",
        "Eliminate guesswork with comprehensive performance visibility",
        "Scale successful strategies with predictive analytics insights",
      ]}
      serviceFeatures={[
        {
          title: "Advanced Analytics Setup",
          description:
            "Comprehensive tracking implementation across all marketing channels and touchpoints",
          icon: BarChart3,
        },
        {
          title: "Custom Dashboard Development",
          description:
            "Tailored reporting dashboards with real-time performance metrics and KPIs",
          icon: PieChart,
        },
        {
          title: "Performance Analysis & Insights",
          description:
            "Deep-dive analysis revealing trends, patterns, and optimisation opportunities",
          icon: TrendingUp,
        },
        {
          title: "Attribution Modelling",
          description:
            "Multi-touch attribution analysis showing true campaign impact and ROI",
          icon: Eye,
        },
        {
          title: "Data Integration & Automation",
          description:
            "Centralised data collection from multiple sources with automated reporting",
          icon: Database,
        },
        {
          title: "Strategic Recommendations",
          description:
            "Actionable insights and optimisation strategies based on data analysis",
          icon: Target,
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Analytics Audit & Setup",
          description:
            "Comprehensive review of current tracking, implementation of advanced analytics tools, and establishment of proper data collection frameworks for accurate measurement.",
        },
        {
          step: "02",
          title: "Dashboard & Reporting Creation",
          description:
            "Custom dashboard development with relevant KPIs, automated reporting systems, and real-time performance visibility tailored to your business needs.",
        },
        {
          step: "03",
          title: "Data Analysis & Insight Generation",
          description:
            "Regular analysis of marketing performance, trend identification, pattern recognition, and development of actionable insights for strategic optimisation.",
        },
        {
          step: "04",
          title: "Strategic Optimisation & Growth",
          description:
            "Implementation of data-driven improvements, A/B testing protocols, and continuous optimisation strategies that compound growth over time.",
        },
      ]}
      resultMetrics={[
        {
          metric: "Data Accuracy",
          value: "99.7%",
          description: "Precision in marketing performance measurement",
        },
        {
          metric: "Decision Speed",
          value: "+165%",
          description: "Faster strategic decision-making with clear insights",
        },
        {
          metric: "ROI Improvement",
          value: "+180%",
          description: "Average marketing efficiency gains",
        },
      ]}
      caseStudy={{
        company: "RetailMax Distribution",
        industry: "E-commerce & Retail",
        challenge:
          "Limited visibility into marketing performance across 12 channels, with fragmented data sources making it impossible to understand true ROI and customer journey attribution, leading to budget misallocation.",
        result:
          "Unified analytics platform revealed £450K in previously hidden revenue opportunities, optimised budget allocation increased overall ROI by 220%, and real-time insights reduced decision-making time from weeks to hours.",
        metric: "£450K hidden revenue identified",
      }}
      investmentInfo={{
        description:
          "Comprehensive analytics and reporting setup that transforms your marketing data into actionable growth insights. Investment includes advanced tracking implementation, custom dashboard development, and ongoing analysis support.",
        startingFrom: "£2,200",
        consultationPrice: "£345",
      }}
      faqs={[
        {
          question: "What analytics platforms and tools do you work with?",
          answer:
            "We work with all major analytics platforms including Google Analytics 4, Adobe Analytics, HubSpot, Salesforce, and custom solutions. We recommend the best tools based on your specific needs, budget, and technical requirements.",
        },
        {
          question:
            "How quickly can you set up comprehensive analytics tracking?",
          answer:
            "Basic analytics setup typically takes 1-2 weeks, whilst comprehensive multi-channel tracking with custom dashboards requires 3-4 weeks. We provide immediate insights once basic tracking is operational.",
        },
        {
          question:
            "Do you provide training on how to use the analytics systems?",
          answer:
            "Absolutely. We include comprehensive training sessions, documentation, and ongoing support to ensure your team can effectively use the analytics systems and interpret the data for strategic decision-making.",
        },
        {
          question: "Can you integrate data from multiple marketing platforms?",
          answer:
            "Yes, we specialise in data integration across multiple platforms including social media, email marketing, CRM systems, and advertising platforms. This provides a unified view of your marketing performance and customer journey.",
        },
      ]}
      relatedServices={[
        {
          name: "Marketing Planning",
          slug: "marketing-planning",
          description: "Strategic planning informed by analytics insights",
        },
        {
          name: "Conversion Rate Optimisation",
          slug: "conversion-rate-optimization",
          description: "Data-driven optimisation using analytics insights",
        },
        {
          name: "Predictive Analytics",
          slug: "/ai-automation/intelligence/predictive-analytics",
          description: "AI-powered forecasting and trend analysis",
        },
      ]}
    />
  );
}
