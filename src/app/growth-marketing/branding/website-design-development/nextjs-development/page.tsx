import ServicePageTemplate from "@/components/ServicePageTemplate"
import { Zap, Code, Globe, BarChart3, TrendingUp, Users, Search, Smartphone } from "lucide-react"

export default function NextJSCustomDevelopmentPage() {
  return (
    <ServicePageTemplate
      serviceName="Next.js Custom Development"
      serviceSlug="nextjs-development"
      categoryName="Website Design & Development"
      categorySlug="website-design-development"
      parentService="growth-marketing"

      heroTitle="Premium Next.js Development for Unlimited Possibilities"
      heroDescription="Build truly bespoke web applications with Next.js - the React framework trusted by Netflix, TikTok, and Airbnb. Our custom development approach delivers unmatched performance, functionality, and user experiences that set your business apart from the competition."
      heroColor="coral-red"

      serviceOverview="Our Next.js Custom Development service creates enterprise-grade web applications tailored precisely to your business requirements. Unlike template-based solutions, custom development means no limitations - we can build any functionality you can imagine, from complex user portals to AI-powered interfaces. Every line of code is optimised for performance, SEO, and scalability."

      keyBenefits={[
        "Build any functionality you can imagine - no platform limitations",
        "Achieve lightning-fast performance with server-side rendering and optimisation",
        "Get unmatched SEO capabilities with built-in performance optimisation",
        "Scale seamlessly from startup to enterprise traffic levels",
        "Integrate with any third-party system or custom backend",
        "Own your codebase completely with no ongoing platform fees"
      ]}

      serviceFeatures={[
        {
          title: "Custom Application Development",
          description: "Bespoke web applications built to your exact specifications and requirements",
          icon: Code
        },
        {
          title: "Server-Side Rendering (SSR)",
          description: "Lightning-fast page loads and superior SEO performance",
          icon: Zap
        },
        {
          title: "API Development & Integration",
          description: "Custom APIs and seamless third-party service integrations",
          icon: Globe
        },
        {
          title: "Advanced User Interfaces",
          description: "Interactive, responsive designs with cutting-edge user experiences",
          icon: Users
        },
        {
          title: "Performance Optimisation",
          description: "Sub-second load times and Google Core Web Vitals optimisation",
          icon: TrendingUp
        },
        {
          title: "SEO & Analytics Integration",
          description: "Built-in SEO optimisation and advanced analytics tracking",
          icon: Search
        }
      ]}

      processSteps={[
        {
          step: "01",
          title: "Requirements & Architecture",
          description: "Define functionality requirements and design technical architecture"
        },
        {
          step: "02",
          title: "Design & Prototyping",
          description: "Create detailed designs and interactive prototypes for approval"
        },
        {
          step: "03",
          title: "Custom Development",
          description: "Build application with testing and performance optimisation"
        },
        {
          step: "04",
          title: "Deployment & Scaling",
          description: "Deploy to production with monitoring and scaling capabilities"
        }
      ]}

      resultMetrics={[
        {
          metric: "Performance Score",
          value: "98+",
          description: "Google PageSpeed and Core Web Vitals scores"
        },
        {
          metric: "Development Speed",
          value: "40%",
          description: "Faster than traditional custom development"
        },
        {
          metric: "Scalability Factor",
          value: "100x",
          description: "Traffic handling capability vs basic websites"
        }
      ]}

      caseStudy={{
        company: "TechFlow Analytics Platform",
        industry: "SaaS Technology",
        challenge: "Needed a complex data visualisation platform with real-time updates, user authentication, and custom API integrations that no existing platform could handle.",
        result: "Built custom Next.js application with real-time dashboards, resulting in 340% user engagement increase, 89% faster load times, and successful Series A funding.",
        metric: "340% Engagement Increase"
      }}

      investmentInfo={{
        description: "Next.js custom development is our premium offering for businesses requiring unique functionality and unlimited scalability. Investment reflects the bespoke nature and long-term value.",
        startingFrom: "£15,000",
        consultationPrice: "Free technical consultation"
      }}

      faqs={[
        {
          question: "Why choose Next.js over other frameworks?",
          answer: "Next.js offers the best of both worlds: React's flexibility with built-in performance optimisation, SEO capabilities, and server-side rendering. It's used by industry leaders for enterprise applications."
        },
        {
          question: "How long does custom Next.js development take?",
          answer: "Timeline depends on complexity, typically 12-20 weeks for full custom applications. We provide detailed project timelines during our discovery phase based on your specific requirements."
        },
        {
          question: "Can you integrate with our existing systems?",
          answer: "Absolutely. Next.js excels at integrations - we can connect to any API, database, or third-party service. Custom development means no integration limitations."
        },
        {
          question: "What ongoing support do you provide?",
          answer: "We offer comprehensive support including hosting, security updates, performance monitoring, feature additions, and technical consultation to ensure your application continues performing optimally."
        },
        {
          question: "Do we own the code you develop?",
          answer: "Yes, you own 100% of the codebase. Unlike platform-based solutions, there are no ongoing licensing fees or platform dependencies - it's completely yours."
        }
      ]}

      relatedServices={[
        {
          name: "Headless Commerce Solutions",
          slug: "../headless-commerce",
          description: "Combine Next.js frontend with headless e-commerce backends"
        },
        {
          name: "API Development",
          slug: "../../../ai-automation/custom-ai/api-development",
          description: "Custom API development to power your Next.js applications"
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
