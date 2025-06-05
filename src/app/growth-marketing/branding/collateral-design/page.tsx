import ServicePageTemplate from "@/components/ServicePageTemplate"
import { Palette, Target, BarChart3, TrendingUp, Eye, Users, FileText, Award } from "lucide-react"

export default function CollateralDesignPage() {
  return (
    <ServicePageTemplate
      serviceName="Collateral & Design"
      serviceSlug="collateral-design"
      categoryName="Branding & Creative"
      categorySlug="branding"
      parentService="growth-marketing"

      heroTitle="Professional Marketing Collateral That Converts & Impresses"
      heroDescription="Create stunning marketing materials that reinforce your brand and drive business results. Our design expertise combines visual impact with strategic thinking to produce collateral that not only looks exceptional but actively supports your growth objectives."
      heroColor="coral-red"

      serviceOverview="Our Collateral & Design service creates comprehensive marketing materials that maintain brand consistency whilst maximising conversion potential. From business cards that make lasting impressions to brochures that sell your services, every piece is strategically designed to support your business objectives and enhance customer perception of your brand."

      keyBenefits={[
        "Achieve 45% increase in marketing material effectiveness through strategic design",
        "Maintain consistent brand presentation across all customer touchpoints",
        "Create professional credibility that supports premium positioning",
        "Develop versatile design assets that work across multiple channels",
        "Reduce design costs through efficient template and system creation",
        "Improve sales team effectiveness with high-quality sales materials"
      ]}

      serviceFeatures={[
        {
          title: "Business Stationery Design",
          description: "Professional business cards, letterheads, and corporate stationery",
          icon: FileText
        },
        {
          title: "Marketing Brochures & Flyers",
          description: "Compelling print materials that communicate value and drive action",
          icon: Eye
        },
        {
          title: "Digital Graphics & Assets",
          description: "Social media graphics, email templates, and digital marketing assets",
          icon: Palette
        },
        {
          title: "Presentation Templates",
          description: "Professional presentation designs for sales and marketing teams",
          icon: Target
        },
        {
          title: "Trade Show Materials",
          description: "Exhibition stands, banners, and promotional materials for events",
          icon: Award
        },
        {
          title: "Packaging & Product Design",
          description: "Product packaging and promotional material design",
          icon: Users
        }
      ]}

      processSteps={[
        {
          step: "01",
          title: "Design Brief & Research",
          description: "Understand requirements, audience, and brand guidelines for each project"
        },
        {
          step: "02",
          title: "Concept Development",
          description: "Create initial design concepts and layouts for client review"
        },
        {
          step: "03",
          title: "Design Refinement",
          description: "Refine designs based on feedback and finalise all materials"
        },
        {
          step: "04",
          title: "Production & Delivery",
          description: "Prepare print-ready files and coordinate production if required"
        }
      ]}

      resultMetrics={[
        {
          metric: "Marketing Effectiveness",
          value: "45%",
          description: "Increase in material conversion rates"
        },
        {
          metric: "Brand Consistency",
          value: "95%",
          description: "Improvement in brand recognition"
        },
        {
          metric: "Professional Perception",
          value: "78%",
          description: "Enhancement in credibility scores"
        }
      ]}

      caseStudy={{
        company: "Strategic Consulting Partners",
        industry: "Professional Services",
        challenge: "Inconsistent marketing materials were undermining their premium positioning and making it difficult to compete for high-value contracts.",
        result: "Complete collateral redesign resulted in 34% increase in proposal success rate, 67% more meeting requests, and unanimous feedback about improved professional perception.",
        metric: "34% Proposal Success Increase"
      }}

      investmentInfo={{
        description: "Collateral design investment varies based on quantity and complexity of materials required. Most projects deliver immediate impact on professional perception and marketing effectiveness.",
        startingFrom: "£2,500",
        consultationPrice: "£50 design consultation"
      }}

      faqs={[
        {
          question: "What types of marketing collateral do you design?",
          answer: "We design all types of marketing materials including business cards, brochures, flyers, presentations, trade show materials, digital assets, packaging, and any other branded collateral your business requires."
        },
        {
          question: "Do you handle printing and production?",
          answer: "We can coordinate printing and production through our trusted supplier network, ensuring quality control and competitive pricing. Alternatively, we provide print-ready files for your preferred suppliers."
        },
        {
          question: "How do you ensure brand consistency across all materials?",
          answer: "We work from your existing brand guidelines or help develop them if needed. All designs are created within a systematic approach that ensures consistent use of colours, fonts, imagery, and messaging."
        },
        {
          question: "Can you create templates for our internal team to use?",
          answer: "Yes, we specialise in creating template systems that allow your team to produce on-brand materials efficiently whilst maintaining design quality and brand consistency."
        }
      ]}

      relatedServices={[
        {
          name: "Brand Identity Development",
          slug: "brand-identity-development",
          description: "Develop comprehensive brand guidelines that inform all collateral design"
        },
        {
          name: "Website Design & Development",
          slug: "website-design-development",
          description: "Extend brand consistency to your digital presence"
        },
        {
          name: "Content Strategy & Creation",
          slug: "../../inbound/content-strategy-creation",
          description: "Create compelling content to populate your marketing materials"
        }
      ]}
    />
  )
}
