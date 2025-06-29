import ServicePageTemplate from "@/components/ServicePageTemplate"
import { Zap, Globe, BarChart3, TrendingUp, Users, Shield, Code, Smartphone } from "lucide-react"

export default function HeadlessCommercePage() {
  return (
    <ServicePageTemplate
      serviceName="Headless Commerce Solutions"
      serviceSlug="headless-commerce"
      categoryName="Website Design & Development"
      categorySlug="website-design-development"
      parentService="growth-marketing"

      heroTitle="Enterprise Headless Commerce That Scales Without Limits"
      heroDescription="Build lightning-fast, infinitely scalable e-commerce experiences with headless architecture. Separate your frontend and backend for ultimate flexibility, performance, and the ability to deliver commerce experiences anywhere your customers are."
      heroColor="coral-red"

      serviceOverview="Our Headless Commerce Solutions decouple your e-commerce frontend from the backend, creating unprecedented flexibility and performance. This architecture allows for lightning-fast storefronts, omnichannel experiences, and the ability to adapt quickly to changing market demands. Perfect for enterprise brands requiring custom experiences and unlimited scalability."

      keyBenefits={[
        "Achieve sub-second page load times with optimised frontend architecture",
        "Scale to handle millions of visitors without performance degradation",
        "Create omnichannel experiences across web, mobile, IoT, and emerging platforms",
        "Develop custom shopping experiences that differentiate your brand",
        "Integrate with any backend system or third-party service seamlessly",
        "Future-proof your commerce platform with adaptable architecture"
      ]}

      serviceFeatures={[
        {
          title: "Next.js Commerce Frontend",
          description: "Lightning-fast React-based storefronts optimised for performance and SEO",
          icon: Zap
        },
        {
          title: "Multi-Channel Architecture",
          description: "Deliver commerce experiences across web, mobile, social, and emerging channels",
          icon: Globe
        },
        {
          title: "Enterprise Backend Integration",
          description: "Connect to Shopify Plus, Magento, or custom e-commerce backends",
          icon: Code
        },
        {
          title: "Advanced Personalisation",
          description: "AI-powered personalisation engines for unique customer experiences",
          icon: Users
        },
        {
          title: "Infinite Scalability",
          description: "Architecture that scales from startup to enterprise traffic levels",
          icon: TrendingUp
        },
        {
          title: "Security & Compliance",
          description: "Enterprise-grade security with PCI compliance and data protection",
          icon: Shield
        }
      ]}

      processSteps={[
        {
          step: "01",
          title: "Architecture Planning",
          description: "Design headless architecture based on business requirements and scalability needs"
        },
        {
          step: "02",
          title: "Frontend Development",
          description: "Build high-performance frontend with optimised user experiences"
        },
        {
          step: "03",
          title: "Backend Integration",
          description: "Connect to e-commerce backends and integrate all required services"
        },
        {
          step: "04",
          title: "Testing & Deployment",
          description: "Comprehensive testing and deployment with monitoring and scaling capabilities"
        }
      ]}

      resultMetrics={[
        {
          metric: "Performance Score",
          value: "99+",
          description: "Google PageSpeed and Core Web Vitals scores"
        },
        {
          metric: "Scalability Factor",
          value: "1000x",
          description: "Traffic handling vs traditional platforms"
        },
        {
          metric: "Development Speed",
          value: "60%",
          description: "Faster frontend changes and updates"
        }
      ]}

      caseStudy={{
        company: "Enterprise Fashion Retailer",
        industry: "E-commerce Fashion",
        challenge: "Traditional e-commerce platform couldn't handle Black Friday traffic spikes and lacked flexibility for custom shopping experiences across multiple channels.",
        result: "Headless commerce solution handled 500% traffic increase without slowdown, improved conversion rates by 89%, and enabled launch across 3 new channels within 6 months.",
        metric: "500% Traffic Handling"
      }}

      investmentInfo={{
        description: "Headless commerce is our premium e-commerce offering for enterprise brands requiring unlimited scalability and flexibility. Investment reflects the sophisticated architecture and long-term value.",
        startingFrom: "£25,000",
        consultationPrice: "Free headless commerce consultation"
      }}

      faqs={[
        {
          question: "What is headless commerce and why should we consider it?",
          answer: "Headless commerce separates your storefront (frontend) from your e-commerce engine (backend), providing unlimited design flexibility, better performance, and the ability to sell across any channel or device."
        },
        {
          question: "How does headless commerce improve performance?",
          answer: "By separating frontend and backend, we can optimise each independently. The frontend becomes a lightweight, fast-loading application whilst the backend handles commerce logic efficiently."
        },
        {
          question: "Can we keep our existing e-commerce backend?",
          answer: "Yes, headless architecture works with most modern e-commerce platforms including Shopify Plus, Magento, and custom solutions. We build new frontends that connect to your existing systems."
        },
        {
          question: "Is headless commerce suitable for all businesses?",
          answer: "Headless commerce is ideal for businesses with unique requirements, high traffic volumes, or multi-channel strategies. For simpler needs, traditional platforms may be more cost-effective."
        },
        {
          question: "How long does headless commerce implementation take?",
          answer: "Implementation typically takes 16-24 weeks depending on complexity and integrations. We provide detailed project timelines based on your specific requirements and existing systems."
        }
      ]}

      relatedServices={[
        {
          name: "Next.js Custom Development",
          slug: "../nextjs-development",
          description: "Custom frontend development using Next.js for headless commerce"
        },
        {
          name: "API Development & Integration",
          slug: "../../../../ai-automation/custom-ai/api-development",
          description: "Custom API development to power headless commerce experiences"
        },
        {
          name: "Performance Optimisation",
          slug: "../../../strategy/conversion-rate-optimization",
          description: "Ongoing optimisation for maximum performance and conversions"
        }
      ]}
    />
  )
}
