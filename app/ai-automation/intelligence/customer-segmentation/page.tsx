import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  BarChart3,
  Brain,
  Eye,
  Heart,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function CustomerSegmentationPage() {
  return (
    <ServicePageTemplate
      serviceName="Customer Segmentation"
      serviceSlug="customer-segmentation"
      categoryName="Intelligence & Data"
      categorySlug="intelligence"
      parentService="ai-automation"
      heroTitle="AI-Powered Customer Segmentation That Drives Personalised Growth"
      heroDescription="Understand your customers like never before with intelligent segmentation that reveals hidden patterns, predicts behaviour, and enables hyper-personalised marketing that dramatically improves conversion rates and customer lifetime value."
      heroColor="forest-green"
      serviceOverview="Our Customer Segmentation service uses advanced machine learning algorithms to analyse customer behaviour, preferences, and patterns to create dynamic, actionable segments. Unlike traditional demographic segmentation, our AI discovers hidden customer groups based on actual behaviour, enabling personalised experiences that increase engagement, loyalty, and revenue."
      keyBenefits={[
        "Increase campaign effectiveness by 156% through behavioural segmentation",
        "Discover hidden customer segments that traditional analysis misses",
        "Enable personalised messaging that resonates with each customer group",
        "Predict customer lifetime value and churn risk for proactive retention",
        "Optimise product recommendations and cross-selling opportunities",
        "Create dynamic segments that evolve with changing customer behaviour",
      ]}
      serviceFeatures={[
        {
          title: "Behavioural Analysis",
          description:
            "Deep analysis of customer actions, preferences, and engagement patterns",
          icon: Users,
        },
        {
          title: "Dynamic Segmentation",
          description:
            "AI-powered segments that automatically update as behaviour changes",
          icon: Brain,
        },
        {
          title: "Predictive Insights",
          description:
            "Forecast customer behaviour, lifetime value, and churn probability",
          icon: TrendingUp,
        },
        {
          title: "Personalisation Engine",
          description:
            "Automated personalisation based on segment characteristics and preferences",
          icon: Target,
        },
        {
          title: "Performance Analytics",
          description:
            "Detailed analysis of segment performance and campaign effectiveness",
          icon: BarChart3,
        },
        {
          title: "Real-Time Updates",
          description:
            "Segments that update in real-time as new data becomes available",
          icon: Zap,
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Data Collection",
          description:
            "Gather comprehensive customer data from all touchpoints and interactions",
        },
        {
          step: "02",
          title: "AI Analysis",
          description:
            "Apply machine learning algorithms to identify patterns and segments",
        },
        {
          step: "03",
          title: "Segment Validation",
          description:
            "Test and validate segments for actionability and business relevance",
        },
        {
          step: "04",
          title: "Implementation & Optimisation",
          description:
            "Deploy segments across marketing systems and continuously optimise",
        },
      ]}
      resultMetrics={[
        {
          metric: "Campaign Effectiveness",
          value: "156%",
          description: "Improvement in marketing campaign performance",
        },
        {
          metric: "Customer Lifetime Value",
          value: "89%",
          description: "Increase through targeted engagement",
        },
        {
          metric: "Personalisation Accuracy",
          value: "94%",
          description: "Accuracy in predicting customer preferences",
        },
      ]}
      caseStudy={{
        company: "Artisan Home Goods",
        industry: "E-commerce",
        challenge:
          "Generic marketing campaigns were achieving low engagement rates and poor conversion, despite having a large customer database.",
        result:
          "AI segmentation revealed 8 distinct customer personas, enabling personalised campaigns that increased email engagement by 234% and conversion rates by 67%.",
        metric: "234% Engagement Increase",
      }}
      investmentInfo={{
        description:
          "Customer segmentation investment depends on data complexity and integration requirements. Most businesses see improved campaign performance within 4-6 weeks.",
        startingFrom: "£9,500",
        consultationPrice: "Free segmentation analysis",
      }}
      faqs={[
        {
          question:
            "What data do you need for effective customer segmentation?",
          answer:
            "We work with various data sources including purchase history, website behaviour, email engagement, social interactions, and demographic information. The more data available, the more precise the segmentation becomes.",
        },
        {
          question: "How often do customer segments need to be updated?",
          answer:
            "Our AI-powered segments update automatically as new data becomes available. We typically recommend monthly reviews of segment performance and quarterly strategic reviews of segment definitions.",
        },
        {
          question:
            "Can you integrate segmentation with our existing marketing tools?",
          answer:
            "Yes, we integrate with all major marketing platforms including email systems, CRM platforms, advertising tools, and analytics platforms to ensure segments are actionable across all channels.",
        },
        {
          question: "How do you ensure customer privacy and data compliance?",
          answer:
            "We follow strict data protection protocols including GDPR compliance, data anonymisation where appropriate, and secure data handling practices. All segmentation respects customer privacy preferences and consent.",
        },
      ]}
      relatedServices={[
        {
          name: "Predictive Analytics",
          slug: "predictive-analytics",
          description:
            "Forecast customer behaviour and business trends using segmentation insights",
        },
        {
          name: "Personalised Outreach",
          slug: "personalised-outreach",
          description:
            "Create personalised marketing campaigns based on customer segments",
        },
        {
          name: "Email Marketing Automation",
          slug: "../../growth-marketing/inbound/email-marketing-automation",
          description: "Implement segment-based email marketing campaigns",
        },
      ]}
    />
  );
}
