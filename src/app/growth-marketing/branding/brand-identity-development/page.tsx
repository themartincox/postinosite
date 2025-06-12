import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  Award,
  BarChart3,
  Eye,
  Heart,
  Palette,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

export default function BrandIdentityDevelopmentPage() {
  return (
    <ServicePageTemplate
      serviceName="Brand Identity Development"
      serviceSlug="brand-identity-development"
      categoryName="Branding & Creative"
      categorySlug="branding"
      parentService="growth-marketing"
      heroTitle="Brand Identity That Commands Attention & Builds Trust"
      heroDescription="Create a powerful brand identity that differentiates you from competitors and resonates deeply with your target audience. Our strategic brand development process builds recognition, trust, and loyalty that translates directly into business growth."
      heroColor="coral-red"
      serviceOverview="Our Brand Identity Development service creates cohesive, compelling brand experiences that go far beyond logos and colours. We develop comprehensive brand strategies that encompass positioning, messaging, visual identity, and brand guidelines that ensure consistency across every customer touchpoint. The result is a distinctive brand that attracts ideal customers and commands premium positioning in your market."
      keyBenefits={[
        "Achieve 78% improvement in brand recognition and recall within 6 months",
        "Differentiate clearly from competitors with distinctive brand positioning",
        "Command premium pricing through strong brand perception and trust",
        "Create emotional connections that increase customer loyalty and advocacy",
        "Ensure consistent brand experience across all marketing channels",
        "Build long-term brand equity that becomes a valuable business asset",
      ]}
      serviceFeatures={[
        {
          title: "Brand Strategy & Positioning",
          description:
            "Comprehensive brand strategy that defines your unique market position",
          icon: Target,
        },
        {
          title: "Visual Identity System",
          description:
            "Logo design, colour palette, typography, and visual brand guidelines",
          icon: Palette,
        },
        {
          title: "Brand Messaging Framework",
          description:
            "Core messaging, value propositions, and tone of voice development",
          icon: Users,
        },
        {
          title: "Brand Guidelines Creation",
          description:
            "Comprehensive style guides for consistent brand application",
          icon: Eye,
        },
        {
          title: "Brand Application Design",
          description:
            "Business cards, letterheads, and marketing collateral design",
          icon: Award,
        },
        {
          title: "Brand Performance Monitoring",
          description:
            "Track brand awareness, perception, and recognition metrics",
          icon: BarChart3,
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Brand Discovery & Research",
          description:
            "Deep dive into your business, audience, and competitive landscape",
        },
        {
          step: "02",
          title: "Strategy Development",
          description:
            "Develop brand positioning, personality, and messaging framework",
        },
        {
          step: "03",
          title: "Visual Identity Creation",
          description:
            "Design logo, visual elements, and comprehensive brand guidelines",
        },
        {
          step: "04",
          title: "Implementation & Launch",
          description:
            "Apply brand across all touchpoints and monitor performance",
        },
      ]}
      resultMetrics={[
        {
          metric: "Brand Recognition",
          value: "78%",
          description: "Improvement in unaided brand recall",
        },
        {
          metric: "Premium Positioning",
          value: "45%",
          description: "Increase in pricing power and perception",
        },
        {
          metric: "Customer Trust",
          value: "89%",
          description: "Improvement in brand credibility scores",
        },
      ]}
      caseStudy={{
        company: "Precision Engineering Ltd",
        industry: "Manufacturing",
        challenge:
          "Struggling to differentiate from competitors and command premium pricing despite superior quality and service in the engineering sector.",
        result:
          "Developed compelling brand identity and positioning strategy that resulted in 34% increase in average project value, 67% more premium enquiries, and recognition as industry leaders.",
        metric: "34% Pricing Increase",
      }}
      investmentInfo={{
        description:
          "Brand identity development is a one-time investment that creates long-term value. Investment varies based on scope and complexity of brand requirements.",
        startingFrom: "£8,500",
        consultationPrice: "£50 brand strategy session",
      }}
      faqs={[
        {
          question: "How long does brand identity development take?",
          answer:
            "Typically 6-12 weeks depending on scope and complexity. This includes research, strategy development, design creation, revisions, and final brand guidelines delivery.",
        },
        {
          question: "What's included in the brand guidelines?",
          answer:
            "Comprehensive brand guidelines include logo usage, colour specifications, typography, imagery style, tone of voice, messaging framework, and application examples across various media.",
        },
        {
          question:
            "Can you refresh our existing brand rather than start from scratch?",
          answer:
            "Absolutely. We offer brand evolution services that modernise and strengthen existing brands whilst maintaining equity and recognition you've already built.",
        },
        {
          question: "How do you ensure our brand stands out from competitors?",
          answer:
            "We conduct thorough competitive analysis and market research to identify differentiation opportunities, then develop unique positioning and visual identity that clearly sets you apart.",
        },
      ]}
      relatedServices={[
        {
          name: "Website Design & Development",
          slug: "website-design-development",
          description:
            "Apply your new brand identity to a conversion-optimised website",
        },
        {
          name: "Collateral & Design",
          slug: "collateral-design",
          description:
            "Create marketing materials that reinforce your brand identity",
        },
        {
          name: "Marketing Planning",
          slug: "../../strategy/marketing-planning",
          description:
            "Develop marketing strategies that leverage your brand positioning",
        },
      ]}
    />
  );
}
