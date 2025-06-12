import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import {
  Award,
  Eye,
  Globe,
  Palette,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function BrandingCategoryPage() {
  return (
    <CategoryPageTemplate
      categoryName="Branding & Creative"
      categorySlug="branding"
      categoryDescription="Build a compelling brand identity and conversion-focused creative assets that resonate with your audience and drive business growth."
      parentService="growth-marketing"
      heroTitle="Branding That Builds Trust & Drives Conversions"
      heroSubtitle="Branding & Creative Services"
      heroDescription="Your brand is more than a logo—it's the foundation of customer trust and business growth. Our strategic branding and creative services create cohesive, compelling brand experiences that differentiate you from competitors and drive measurable results."
      heroColor="coral-red"
      services={[
        {
          name: "Brand Identity Development",
          slug: "brand-identity-development",
          description:
            "Strategic brand positioning and visual identity that resonates with your audience",
          features: [
            "Brand strategy and positioning development",
            "Logo design and visual identity system",
            "Brand guidelines and style documentation",
            "Messaging framework and tone of voice",
            "Brand application across all touchpoints",
          ],
          icon: Award,
          resultMetric: "78% improvement in brand recognition and recall",
        },
        {
          name: "Collateral & Design",
          slug: "collateral-design",
          description:
            "Professional marketing materials and creative assets that convert",
          features: [
            "Marketing collateral and print design",
            "Digital graphics and social media assets",
            "Presentation design and templates",
            "Packaging and product design",
            "Brand photography art direction",
          ],
          icon: Palette,
          resultMetric: "45% increase in marketing material effectiveness",
        },
        {
          name: "Website Design & Development",
          slug: "website-design-development",
          description:
            "Conversion-optimised websites that combine beautiful design with performance",
          features: [
            "Custom website design and development",
            "Mobile-responsive and fast-loading sites",
            "SEO-optimised structure and content",
            "CMS integration and content management",
            "E-commerce and booking functionality",
          ],
          icon: Globe,
          resultMetric: "127% improvement in website conversion rates",
        },
        {
          name: "Conversion Funnels",
          slug: "conversion-funnels",
          description:
            "Strategic customer journey design that maximises conversions",
          features: [
            "Customer journey mapping and analysis",
            "Landing page design and optimisation",
            "A/B testing and conversion optimisation",
            "Sales funnel strategy and implementation",
            "Lead capture and nurture sequences",
          ],
          icon: TrendingUp,
          resultMetric: "213% increase in lead-to-customer conversion rates",
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Brand Discovery",
          description:
            "Understand your business, audience, and competitive landscape to inform strategy.",
          icon: Eye,
        },
        {
          step: "02",
          title: "Strategy & Positioning",
          description:
            "Develop brand positioning and messaging that differentiates and resonates.",
          icon: Target,
        },
        {
          step: "03",
          title: "Creative Development",
          description:
            "Design and create brand assets and marketing materials that convert.",
          icon: Palette,
        },
        {
          step: "04",
          title: "Implementation & Optimisation",
          description:
            "Launch brand assets and continuously optimise for better performance.",
          icon: Zap,
        },
      ]}
      categoryBenefits={[
        "Create strong brand differentiation in competitive markets",
        "Build customer trust and credibility through professional presentation",
        "Increase marketing effectiveness with cohesive brand messaging",
        "Improve conversion rates through strategic design and user experience",
        "Develop brand equity that supports premium pricing strategies",
        "Ensure consistent brand experience across all customer touchpoints",
      ]}
      categoryMetrics={[
        {
          metric: "Brand Recognition",
          value: "78%",
          description: "Improvement in unaided brand recall",
        },
        {
          metric: "Conversion Rate Increase",
          value: "127%",
          description: "Better-converting websites and funnels",
        },
        {
          metric: "Customer Trust Score",
          value: "89%",
          description: "Improved perception and credibility",
        },
      ]}
      ctaPrimary={{
        text: "Plan Your Brand Strategy",
        href: "/growth-consultation",
      }}
      ctaSecondary={{
        text: "View Brand Results",
        href: "/case-studies",
      }}
    />
  );
}
