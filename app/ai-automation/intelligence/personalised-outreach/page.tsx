import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  BarChart3,
  Brain,
  Eye,
  Heart,
  MessageSquare,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

export default function PersonalisedOutreachPage() {
  return (
    <ServicePageTemplate
      serviceName="Personalised Outreach"
      serviceSlug="personalised-outreach"
      categoryName="Intelligence & Data"
      categorySlug="intelligence"
      parentService="ai-automation"
      heroTitle="AI-Powered Personalisation That Transforms Customer Engagement"
      heroDescription="Create deeply personalised experiences that speak directly to each customer's needs, preferences, and journey stage. Our AI personalisation engines deliver the right message, at the right time, through the right channel for maximum impact."
      heroColor="forest-green"
      serviceOverview="Our Personalised Outreach service leverages advanced AI to create individualised customer experiences across all touchpoints. By analysing behaviour patterns, preferences, and engagement history, we deliver personalised content, offers, and communications that significantly increase engagement rates, conversion rates, and customer satisfaction."
      keyBenefits={[
        "Achieve 89% improvement in engagement rates through personalised messaging",
        "Increase conversion rates by delivering relevant offers at optimal times",
        "Reduce unsubscribe rates and improve customer satisfaction",
        "Automate personalisation across email, web, social, and mobile channels",
        "Create dynamic content that adapts to individual customer preferences",
        "Scale personalised communication to thousands of customers simultaneously",
      ]}
      serviceFeatures={[
        {
          title: "Dynamic Content Creation",
          description:
            "AI-generated personalised content tailored to individual customer profiles",
          icon: Eye,
        },
        {
          title: "Optimal Timing Intelligence",
          description:
            "Machine learning algorithms that determine the best time to reach each customer",
          icon: Target,
        },
        {
          title: "Cross-Channel Personalisation",
          description:
            "Consistent personalised experience across email, web, social, and mobile",
          icon: Users,
        },
        {
          title: "Behavioural Triggers",
          description:
            "Automated personalised responses based on customer actions and behaviour",
          icon: Brain,
        },
        {
          title: "A/B Testing & Optimisation",
          description:
            "Continuous testing and improvement of personalisation strategies",
          icon: BarChart3,
        },
        {
          title: "Real-Time Adaptation",
          description:
            "Personalisation that evolves in real-time based on customer interactions",
          icon: TrendingUp,
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Customer Profile Analysis",
          description:
            "Analyse customer data to build comprehensive personalisation profiles",
        },
        {
          step: "02",
          title: "AI Model Development",
          description:
            "Build machine learning models for content and timing optimisation",
        },
        {
          step: "03",
          title: "Campaign Deployment",
          description:
            "Launch personalised campaigns across all customer touchpoints",
        },
        {
          step: "04",
          title: "Performance Optimisation",
          description:
            "Continuously improve personalisation based on engagement data",
        },
      ]}
      resultMetrics={[
        {
          metric: "Engagement Improvement",
          value: "89%",
          description: "Increase in customer engagement rates",
        },
        {
          metric: "Conversion Rate Boost",
          value: "67%",
          description: "Improvement in personalised campaign conversions",
        },
        {
          metric: "Customer Satisfaction",
          value: "94%",
          description: "Increase in customer satisfaction scores",
        },
      ]}
      caseStudy={{
        company: "Professional Services Group",
        industry: "Business Consulting",
        challenge:
          "Generic outreach campaigns were resulting in low engagement and poor lead quality, despite having detailed customer data available.",
        result:
          "AI-powered personalisation engine increased email engagement by 156%, doubled meeting booking rates, and improved lead quality scores by 78% within 2 months.",
        metric: "156% Engagement Increase",
      }}
      investmentInfo={{
        description:
          "Personalised outreach investment varies based on channel complexity and integration requirements. Most clients see immediate improvements in engagement metrics.",
        startingFrom: "£7,500",
        consultationPrice: "Free personalisation audit",
      }}
      faqs={[
        {
          question:
            "How does AI personalisation differ from traditional email marketing?",
          answer:
            "AI personalisation goes beyond name insertion to deliver dynamic content, optimal timing, channel selection, and messaging that adapts based on individual behaviour, preferences, and engagement patterns in real-time.",
        },
        {
          question: "What channels can be personalised with your system?",
          answer:
            "We personalise across email, website content, social media, mobile apps, SMS, and even offline touchpoints. The system ensures consistent personalised experience across all customer interactions.",
        },
        {
          question:
            "How do you avoid over-personalisation or privacy concerns?",
          answer:
            "We implement privacy-first personalisation that respects customer preferences and consent. Our systems include frequency controls, preference centres, and transparent data usage to maintain trust whilst delivering value.",
        },
        {
          question: "How quickly can personalisation be implemented?",
          answer:
            "Basic personalisation can be implemented within 2-4 weeks. More sophisticated AI-driven personalisation typically takes 6-8 weeks to fully deploy and optimise across all channels.",
        },
      ]}
      relatedServices={[
        {
          name: "Customer Segmentation",
          slug: "customer-segmentation",
          description:
            "Create detailed customer segments to power personalisation engines",
        },
        {
          name: "Predictive Analytics",
          slug: "predictive-analytics",
          description:
            "Predict customer behaviour to optimise personalisation timing",
        },
        {
          name: "Email Marketing Automation",
          slug: "../../growth-marketing/inbound/email-marketing-automation",
          description:
            "Implement personalised email campaigns based on customer data",
        },
      ]}
    />
  );
}
