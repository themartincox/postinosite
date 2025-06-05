import ServicePageTemplate from "@/components/ServicePageTemplate"
import { MessageSquare, Brain, Zap, Users, Settings, Bot } from "lucide-react"

export default function IntelligentChatbotsPage() {
  return (
    <ServicePageTemplate
      serviceName="Intelligent Chatbot Development"
      serviceSlug="intelligent-chatbots"
      categoryName="Custom AI"
      categorySlug="custom-ai"
      parentService="ai-automation"
      heroTitle="AI-Powered Chatbots That Transform Customer Experience"
      heroDescription="Deploy sophisticated AI chatbots that provide instant, personalised customer support whilst reducing operational costs and increasing satisfaction scores across all touchpoints."
      heroColor="coral-red"
      serviceOverview="Our intelligent chatbot solutions leverage advanced natural language processing and machine learning to create conversational experiences that feel genuinely human. These AI assistants handle complex enquiries, provide personalised recommendations, and seamlessly integrate with your business systems to deliver exceptional customer service 24/7 whilst dramatically reducing support costs."
      keyBenefits={[
        "Reduce customer support costs by up to 70% annually",
        "Provide instant 24/7 customer service across all channels",
        "Increase customer satisfaction scores through consistent service",
        "Handle unlimited concurrent conversations without wait times",
        "Capture and qualify leads automatically outside business hours",
        "Free human agents to focus on complex, high-value interactions"
      ]}
      serviceFeatures={[
        {
          title: "Natural Language Understanding",
          description: "Advanced NLP capabilities that understand context, intent, and nuanced customer enquiries",
          icon: MessageSquare
        },
        {
          title: "Machine Learning Intelligence",
          description: "Self-improving AI that learns from interactions to provide increasingly accurate responses",
          icon: Brain
        },
        {
          title: "Instant Response Automation",
          description: "Lightning-fast responses to customer queries with personalised, contextual information",
          icon: Zap
        },
        {
          title: "Multi-Channel Integration",
          description: "Seamless deployment across website, social media, messaging apps, and mobile platforms",
          icon: Users
        },
        {
          title: "Business System Integration",
          description: "Direct connectivity to CRM, helpdesk, inventory, and booking systems for real-time data access",
          icon: Settings
        },
        {
          title: "Conversation Analytics",
          description: "Detailed insights into customer interactions, satisfaction metrics, and optimisation opportunities",
          icon: Bot
        }
      ]}
      processSteps={[
        {
          step: "01",
          title: "Requirements & Strategy",
          description: "We analyse your customer service needs, common enquiry patterns, and business objectives to design an optimal chatbot strategy and conversation flows."
        },
        {
          step: "02",
          title: "AI Training & Development",
          description: "Our team develops and trains custom AI models using your business data, FAQs, and customer interaction history to ensure accurate, brand-consistent responses."
        },
        {
          step: "03",
          title: "Integration & Testing",
          description: "Comprehensive integration with your existing systems, thorough testing across scenarios, and refinement of conversation flows for optimal user experience."
        },
        {
          step: "04",
          title: "Deployment & Optimisation",
          description: "Live deployment with continuous monitoring, performance analysis, and regular AI model updates to improve accuracy and customer satisfaction."
        }
      ]}
      resultMetrics={[
        {
          metric: "Cost Reduction",
          value: "-70%",
          description: "Average decrease in customer support costs"
        },
        {
          metric: "Response Time",
          value: "-95%",
          description: "Reduction in average customer response time"
        },
        {
          metric: "Satisfaction Score",
          value: "+180%",
          description: "Improvement in customer satisfaction ratings"
        }
      ]}
      caseStudy={{
        company: "PropertyFirst Estate Agents",
        industry: "Real Estate",
        challenge: "High volume of repetitive enquiries about property availability, viewings, and pricing was overwhelming their small customer service team, leading to delayed responses and missed opportunities.",
        result: "AI chatbot now handles 85% of initial enquiries, automatically schedules 300+ property viewings monthly, and reduced response time from 4 hours to under 30 seconds, resulting in 240% increase in qualified leads.",
        metric: "240% increase in qualified leads"
      }}
      investmentInfo={{
        description: "Enterprise-grade intelligent chatbot solutions that transform customer experience whilst reducing operational costs. Investment varies based on complexity, integrations, and AI sophistication required.",
        startingFrom: "£8,500",
        consultationPrice: "£550"
      }}
      faqs={[
        {
          question: "How do AI chatbots differ from basic chatbots?",
          answer: "Intelligent AI chatbots use natural language processing and machine learning to understand context, learn from conversations, and provide personalised responses. Unlike basic rule-based bots, they can handle complex queries, maintain conversation context, and improve over time."
        },
        {
          question: "Can the chatbot integrate with our existing customer service tools?",
          answer: "Yes, our chatbots integrate seamlessly with popular platforms including Zendesk, Salesforce Service Cloud, HubSpot, Intercom, and custom CRM systems. This ensures conversation history, customer data, and escalations flow smoothly between channels."
        },
        {
          question: "What happens when the chatbot can't answer a customer's question?",
          answer: "Our intelligent escalation system identifies when queries require human intervention and seamlessly transfers conversations to appropriate team members, providing full context and conversation history. We also continuously train the AI on new scenarios to expand its capabilities."
        },
        {
          question: "How do you ensure the chatbot maintains our brand voice and tone?",
          answer: "We train the AI using your brand guidelines, existing customer communications, and preferred language style. The chatbot learns to respond in your brand voice whilst maintaining consistency across all interactions. Regular reviews ensure alignment with brand standards."
        }
      ]}
      relatedServices={[
        {
          name: "Business Process Automation",
          slug: "/ai-automation/process/business-process-automation",
          description: "Automate workflows triggered by chatbot interactions"
        },
        {
          name: "Predictive Analytics",
          slug: "/ai-automation/intelligence/predictive-analytics",
          description: "Enhance chatbots with predictive customer insights"
        },
        {
          name: "Conversion Funnel Optimisation",
          slug: "/growth-marketing/branding/conversion-funnels",
          description: "Optimise chatbot conversations for higher conversions"
        }
      ]}
    />
  )
}