import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  BarChart3,
  Target,
  TestTube,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function ConversionRateOptimizationPage() {
  return (
    <ServicePageTemplate
      serviceName="Conversion Rate Optimisation"
      serviceSlug="conversion-rate-optimization"
      categoryName="Strategy & Consulting"
      categorySlug="strategy"
      parentService="growth-marketing"
      heroTitle="Transform Visitors Into Customers With Scientific Precision"
      heroDescription="Maximise revenue from existing traffic through systematic conversion optimisation that increases sales, reduces acquisition costs, and delivers measurable growth without increasing marketing spend."
      heroColor="coral-red"
      serviceOverview="Our conversion rate optimisation service uses data-driven methodologies, advanced testing frameworks, and behavioural psychology to systematically improve your website's ability to convert visitors into customers. We identify conversion barriers, design strategic improvements, and implement rigorous testing protocols that deliver compound growth and sustainable competitive advantages."
      keyBenefits={[
        "Increase conversion rates by 145% through systematic optimisation",
        "Generate £2.50+ additional revenue for every £1 of existing traffic",
        "Reduce customer acquisition costs by 40% through improved efficiency",
        "Improve user experience and customer satisfaction scores",
        "Create scalable optimisation processes for long-term growth",
        "Maximise ROI from existing marketing investments",
      ]}
      serviceFeatures={[
        {
          title: "Conversion Audit & Analysis",
          description:
            "Comprehensive assessment of current conversion performance and barrier identification",
          icon: Target,
        },
        {
          title: "A/B Testing & Experimentation",
          description:
            "Rigorous testing protocols to validate improvements and optimise performance",
          icon: TestTube,
        },
        {
          title: "User Experience Optimisation",
          description:
            "Behavioural analysis and UX improvements that remove friction and increase conversions",
          icon: Users,
        },
        {
          title: "Performance Monitoring",
          description:
            "Real-time tracking and analysis of conversion metrics and optimisation impact",
          icon: BarChart3,
        },
        {
          title: "Landing Page Optimisation",
          description:
            "Strategic improvement of landing pages for maximum conversion impact",
          icon: Zap,
        },
        {
          title: "Funnel Optimisation",
          description:
            "End-to-end customer journey analysis and optimisation for improved flow",
          icon: TrendingUp,
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Conversion Analysis & Research",
          description:
            "Comprehensive audit of current conversion performance, user behaviour analysis, and identification of optimisation opportunities through data and user research.",
        },
        {
          step: "02",
          title: "Strategy Development & Prioritisation",
          description:
            "Development of optimisation strategy based on impact potential, implementation effort, and business objectives, with clear testing roadmap and success metrics.",
        },
        {
          step: "03",
          title: "Testing Implementation & Validation",
          description:
            "Systematic A/B testing of improvements using statistical significance protocols, user feedback collection, and performance measurement for validated results.",
        },
        {
          step: "04",
          title: "Optimisation & Scaling",
          description:
            "Implementation of successful tests, continuous optimisation cycles, and establishment of long-term testing culture for sustained conversion improvements.",
        },
      ]}
      resultMetrics={[
        {
          metric: "Conversion Increase",
          value: "+145%",
          description: "Average conversion rate improvement",
        },
        {
          metric: "Revenue Per Visitor",
          value: "+250%",
          description: "Increase in value from existing traffic",
        },
        {
          metric: "Test Success Rate",
          value: "73%",
          description: "Percentage of tests showing positive results",
        },
      ]}
      caseStudy={{
        company: "DesignCraft Studios",
        industry: "Creative Services",
        challenge:
          "High-quality website traffic but conversion rate of only 1.2%, with most visitors leaving without engaging. Monthly traffic of 25,000 visitors generating only 300 leads, far below industry benchmarks.",
        result:
          "Systematic CRO programme increased conversion rate to 4.8%, generating 1,200 monthly leads from the same traffic. Revenue increased by 180% without additional marketing spend, with improved user experience reducing bounce rate by 45%.",
        metric: "4x conversion rate increase",
      }}
      investmentInfo={{
        description:
          "Comprehensive conversion rate optimisation programme that systematically improves your website's performance. Investment reflects the advanced testing methodologies, ongoing optimisation, and significant revenue impact potential.",
        startingFrom: "£3,200",
        consultationPrice: "£425",
      }}
      faqs={[
        {
          question:
            "How long does it take to see results from conversion optimisation?",
          answer:
            "Initial improvements often appear within 2-4 weeks of implementing quick wins. Comprehensive optimisation typically shows significant results within 6-8 weeks, with compound improvements continuing over months as testing cycles complete.",
        },
        {
          question:
            "What types of businesses benefit most from conversion optimisation?",
          answer:
            "Any business with existing website traffic can benefit, but it's particularly valuable for e-commerce, SaaS, service businesses, and lead generation sites. Businesses with higher traffic volumes typically see faster statistical significance in testing.",
        },
        {
          question: "Do you guarantee specific conversion rate improvements?",
          answer:
            "Whilst we can't guarantee specific percentages due to variables unique to each business, our systematic approach consistently delivers improvements. We provide conservative projections based on industry benchmarks and your specific situation.",
        },
        {
          question:
            "How do you ensure test results are statistically significant?",
          answer:
            "We use rigorous statistical testing protocols, minimum sample sizes, confidence intervals, and testing duration requirements. All tests run until statistical significance is achieved, ensuring reliable and actionable results.",
        },
      ]}
      relatedServices={[
        {
          name: "Analytics & Reporting",
          slug: "analytics-reporting",
          description: "Data insights to inform optimisation strategies",
        },
        {
          name: "Website Design & Development",
          slug: "/growth-marketing/branding/website-design-development",
          description: "Design improvements for better conversions",
        },
        {
          name: "AI Keyword Research",
          slug: "/growth-marketing/ai-search/ai-keyword-research",
          description: "Optimise for high-converting search terms",
        },
      ]}
    />
  );
}
