import ServicePageTemplate from "@/components/ServicePageTemplate"
import { ShoppingCart, Palette, Globe, BarChart3, TrendingUp, Users, Zap, CreditCard } from "lucide-react"

export default function ShopifyDevelopmentPage() {
  return (
    <ServicePageTemplate
      serviceName="Shopify Development"
      serviceSlug="shopify-development"
      categoryName="Website Design & Development"
      categorySlug="website-design-development"
      parentService="growth-marketing"

      heroTitle="Custom Shopify Development That Drives E-commerce Success"
      heroDescription="Build high-converting Shopify stores with custom themes, advanced functionality, and strategic design. Our Shopify expertise helps e-commerce brands create unique shopping experiences that increase sales and customer loyalty."
      heroColor="coral-red"

      serviceOverview="Our Shopify Development service combines the power of Shopify's robust e-commerce platform with custom design and functionality tailored to your brand. From custom theme development to advanced app integrations, we create Shopify stores that not only look exceptional but drive measurable sales growth and provide superior customer experiences."

      keyBenefits={[
        "Increase conversion rates by 156% with custom checkout optimisation",
        "Create unique brand experiences that differentiate from competitors",
        "Integrate advanced functionality beyond standard Shopify capabilities",
        "Optimise for mobile commerce and multi-channel selling",
        "Build scalable stores that handle high-volume traffic and sales",
        "Benefit from Shopify's world-class hosting, security, and reliability"
      ]}

      serviceFeatures={[
        {
          title: "Custom Theme Development",
          description: "Bespoke Shopify themes designed for your brand and optimised for conversions",
          icon: Palette
        },
        {
          title: "Advanced App Integration",
          description: "Custom functionality through strategic app integration and development",
          icon: Zap
        },
        {
          title: "Mobile Commerce Optimisation",
          description: "Mobile-first design ensuring optimal performance on all devices",
          icon: Users
        },
        {
          title: "Checkout Optimisation",
          description: "Streamlined checkout processes that reduce abandonment rates",
          icon: CreditCard
        },
        {
          title: "Performance Enhancement",
          description: "Speed optimisation for faster loading and improved user experience",
          icon: TrendingUp
        },
        {
          title: "Multi-Channel Integration",
          description: "Connect social media, marketplaces, and other sales channels",
          icon: Globe
        }
      ]}

      processSteps={[
        {
          step: "01",
          title: "E-commerce Strategy & Planning",
          description: "Analyse requirements, competitors, and develop strategic approach"
        },
        {
          step: "02",
          title: "Custom Design & Development",
          description: "Create bespoke themes and implement custom functionality"
        },
        {
          step: "03",
          title: "Integration & Testing",
          description: "Integrate payment systems, apps, and conduct comprehensive testing"
        },
        {
          step: "04",
          title: "Launch & Optimisation",
          description: "Deploy store and provide ongoing optimisation and support"
        }
      ]}

      resultMetrics={[
        {
          metric: "Conversion Rate Increase",
          value: "156%",
          description: "Average improvement in store conversions"
        },
        {
          metric: "Mobile Performance",
          value: "3.2x",
          description: "Faster mobile loading times"
        },
        {
          metric: "Revenue Growth",
          value: "234%",
          description: "Average increase within 6 months"
        }
      ]}

      caseStudy={{
        company: "Artisan Home & Garden",
        industry: "E-commerce Retail",
        challenge: "Generic Shopify theme was failing to showcase their premium products effectively, resulting in low conversion rates and high cart abandonment.",
        result: "Custom Shopify development with product visualisation features resulted in 278% increase in conversions, 45% reduction in cart abandonment, and 89% increase in average order value.",
        metric: "278% Conversion Increase"
      }}

      investmentInfo={{
        description: "Shopify development offers the perfect balance of platform reliability and custom functionality. Investment varies based on design complexity and feature requirements.",
        startingFrom: "£5,500",
        consultationPrice: "Free e-commerce consultation"
      }}

      faqs={[
        {
          question: "Why choose custom Shopify development over pre-built themes?",
          answer: "Custom development ensures your store perfectly reflects your brand, includes functionality specific to your business needs, and provides competitive advantages that generic themes cannot offer."
        },
        {
          question: "Can you migrate our existing e-commerce store to Shopify?",
          answer: "Yes, we specialise in e-commerce migrations to Shopify, preserving your product data, customer information, and SEO rankings whilst improving functionality and performance."
        },
        {
          question: "How do you optimise Shopify stores for conversions?",
          answer: "We focus on user experience optimisation, checkout streamlining, mobile performance, product presentation, and strategic placement of trust signals and social proof elements."
        },
        {
          question: "What ongoing support do you provide for Shopify stores?",
          answer: "We offer comprehensive support including theme updates, security monitoring, performance optimisation, new feature development, and strategic consultation for growth."
        },
        {
          question: "Can you integrate Shopify with our existing business systems?",
          answer: "Absolutely. We integrate Shopify with CRM systems, inventory management, accounting software, marketing tools, and any other business systems you rely on."
        }
      ]}

      relatedServices={[
        {
          name: "E-commerce Marketing Strategy",
          slug: "../../../strategy/marketing-planning",
          description: "Comprehensive marketing strategies for e-commerce growth"
        },
        {
          name: "Conversion Rate Optimisation",
          slug: "../../../strategy/conversion-rate-optimization",
          description: "Ongoing optimisation to maximise store performance"
        },
        {
          name: "Content Strategy for E-commerce",
          slug: "../../../inbound/content-strategy-creation",
          description: "Product descriptions and content that convert browsers into buyers"
        }
      ]}
    />
  )
}
