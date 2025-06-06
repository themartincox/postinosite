import ServicePageTemplate from "@/components/ServicePageTemplate"
import { Brain, TrendingUp, Target, Zap, BarChart3, Settings, Clock, Users } from "lucide-react"

export default function PredictiveAIModelsPage() {
  return (
    <ServicePageTemplate
      serviceName="Predictive AI Models"
      serviceSlug="predictive-ai-models"
      categoryName="Custom AI Solutions"
      categorySlug="custom-ai"
      parentService="ai-automation"
      heroTitle="Custom Predictive AI Models That Forecast Success"
      heroDescription="Develop bespoke AI models that predict customer behaviour, market trends, and business outcomes with 95% accuracy, enabling data-driven decisions that drive growth and competitive advantage."
      heroColor="coral-red"
      serviceOverview="Our Predictive AI Models service creates custom machine learning solutions tailored to your specific business challenges. From customer churn prediction to demand forecasting, we build and deploy AI models that turn your data into accurate predictions and actionable insights."
      keyBenefits={[
        "Achieve 95% accuracy in predicting customer behaviour and outcomes",
        "Reduce forecasting errors by up to 80% compared to traditional methods",
        "Identify opportunities and risks 3-6 months in advance",
        "Optimise resource allocation based on predictive insights",
        "Automate complex decision-making processes with AI",
        "Create competitive advantages through advanced analytics capabilities"
      ]}
      serviceFeatures={[
        {
          title: "Custom Model Development",
          description: "Bespoke AI models designed specifically for your business challenges",
          icon: Brain
        },
        {
          title: "Advanced Machine Learning",
          description: "State-of-the-art algorithms optimised for your specific use cases",
          icon: Settings
        },
        {
          title: "Predictive Analytics Engine",
          description: "Real-time prediction systems that process data continuously",
          icon: TrendingUp
        },
        {
          title: "Model Training & Optimisation",
          description: "Continuous learning systems that improve accuracy over time",
          icon: Target
        },
        {
          title: "Integration & Deployment",
          description: "Seamless integration with existing systems and workflows",
          icon: Zap
        },
        {
          title: "Performance Monitoring",
          description: "Ongoing monitoring and maintenance to ensure optimal performance",
          icon: BarChart3
        }
      ]}
      processSteps={[
        {
          step: "01",
          title: "Data Analysis",
          description: "Comprehensive analysis of your data to identify prediction opportunities"
        },
        {
          step: "02",
          title: "Model Design",
          description: "Custom AI model architecture designed for your specific requirements"
        },
        {
          step: "03",
          title: "Training & Testing",
          description: "Rigorous training and validation to achieve optimal accuracy"
        },
        {
          step: "04",
          title: "Deployment & Monitoring",
          description: "Live deployment with continuous monitoring and improvement"
        }
      ]}
      resultMetrics={[
        {
          metric: "Prediction Accuracy",
          value: "95%",
          description: "Average accuracy achieved across custom predictive models"
        },
        {
          metric: "Decision Speed",
          value: "10x",
          description: "Faster decision-making through automated AI predictions"
        },
        {
          metric: "ROI Improvement",
          value: "340%",
          description: "Average return on investment from predictive AI implementation"
        }
      ]}
      caseStudy={{
        company: "Retail Dynamics Group",
        industry: "E-commerce Retail",
        challenge: "Struggling with inventory management and customer churn, leading to £2M annual losses from stockouts and customer acquisition costs.",
        result: "Deployed custom predictive AI models for demand forecasting and churn prediction. Reduced inventory waste by 65% and improved customer retention by 45%.",
        metric: "£2.8M annual savings from improved predictions within 8 months"
      }}
      investmentInfo={{
        description: "Predictive AI Models investment depends on data complexity and model sophistication. Most projects deliver measurable ROI within 6-12 months through improved decision-making accuracy.",
        startingFrom: "£25,000",
        consultationPrice: "Free AI readiness assessment"
      }}
      faqs={[
        {
          question: "How long does it take to develop a custom predictive AI model?",
          answer: "Development typically takes 8-16 weeks depending on complexity and data availability. We provide interim insights during development to show early value."
        },
        {
          question: "What data do you need to build effective predictive models?",
          answer: "We work with various data types including customer data, transaction history, operational metrics, and external data sources. We'll assess your data quality and recommend improvements if needed."
        },
        {
          question: "How accurate are the predictions compared to traditional forecasting?",
          answer: "Our AI models typically achieve 80-95% accuracy, significantly outperforming traditional statistical methods whilst providing real-time insights."
        },
        {
          question: "Can the models be updated as business conditions change?",
          answer: "Yes, our models include continuous learning capabilities and can be retrained with new data to maintain accuracy as your business evolves."
        }
      ]}
      relatedServices={[
        {
          name: "Intelligent Chatbot Development",
          slug: "intelligent-chatbots",
          description: "AI-powered conversational systems for customer engagement"
        },
        {
          name: "Automated Lead Routing",
          slug: "automated-lead-routing",
          description: "Intelligent lead qualification and routing systems"
        },
        {
          name: "Customer Segmentation",
          slug: "customer-segmentation",
          description: "AI-driven customer analysis and segmentation"
        }
      ]}
    />
  )
}