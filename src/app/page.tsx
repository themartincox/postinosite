import EnhancedServiceCards from "@/components/EnhancedServiceCards";
import Navigation from "@/components/Navigation";
import ParticleNetwork from "@/components/ParticleNetwork";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import FAQSection from "@/components/ui/faq";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Lightbulb,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Optimized dynamic imports with minimal loading states
// Enhanced version with original copy content - ACTIVE
const MorphingHeadlines = dynamic(() => import("@/components/EnhancedMorphingHeadlines"), {
  loading: () => (
    <div className="morphing-container">
      <h1 className="text-6xl lg:text-9xl font-heading font-bold mb-6 text-white text-center">
        <span className="block">We're Postino.</span>
        <span className="block">We Deliver:</span>
        <span className="block text-orange-200">Exceptional Growth</span>
      </h1>
    </div>
  ),
});

// Simplified AI Demo with lighter fallback
const AIDemo = dynamic(() => import("@/components/AIDemo"), {
  loading: () => (
    <div className="h-96 bg-gradient-to-br from-midnight-blue/10 to-blue-50 rounded-2xl flex items-center justify-center">
      <div className="text-center">
        <Brain className="h-8 w-8 text-blue-600 mx-auto mb-2" />
        <p className="text-gray-600 text-sm">Loading AI Demo...</p>
      </div>
    </div>
  ),
});

// ROI Calculator with loading state
const ROICalculator = dynamic(() => import("@/components/ROICalculator"), {
  loading: () => (
    <div className="bg-gradient-to-br from-soft-gray to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="h-8 w-8 bg-coral-red rounded-full mx-auto mb-4 animate-pulse" />
        <p className="text-gray-600">Loading ROI Calculator...</p>
      </div>
    </div>
  ),
});

export default function HomePage() {
  const homepageFAQs = [
    {
      question: "What services does Postino offer and how much do they cost?",
      answer:
        "Postino offers comprehensive digital marketing and AI automation services: <strong>Website Design</strong> (£150-£3,750), <strong>AI Chatbots</strong> (£112.50-£2,250/month), <strong>Local SEO & Marketing</strong> (£60-£1,500/month), <strong>Business Automation</strong> (£75-£3,000), and <strong>Growth Marketing Strategies</strong> (£997-£5,000/month). All pricing includes transparent, refundable deposits and 25% local discounts for Bingham and Rushcliffe businesses. Call 0800 772 3291 for a free consultation.",
    },
    {
      question: "Where is Postino located and what areas do you serve?",
      answer:
        "Postino is based at 1 Fisher Lane, Bingham, Nottingham, NG13 8BQ. We serve businesses across Nottinghamshire, the East Midlands, and throughout the UK. Local businesses in Bingham, Rushcliffe, Nottingham, and surrounding areas receive priority service, on-site support, and 25% local discounts. Being genuinely local means we understand the regional market and can provide hands-on support when needed.",
    },
    {
      question: "What makes Postino different from other marketing agencies?",
      answer:
        "Postino uniquely combines expert marketing with cutting-edge AI automation. Unlike traditional agencies, we're genuinely local (Bingham-based), provide comprehensive training so you own your marketing assets, offer transparent pricing with no hidden fees, and specialize exclusively in SME growth. Our AI-first approach delivers faster, smarter growth while our local expertise ensures we understand your market and competition.",
    },
    {
      question: "Do you offer AI automation services for small businesses?",
      answer:
        "Yes, we specialize in AI automation for SMEs including: 24/7 intelligent chatbots, automated customer follow-up sequences, business process automation, predictive analytics, CRM automation, and workflow optimization. Our AI solutions are designed for small business budgets starting from £75/month, integrate with existing systems, and typically save 40+ hours per week while reducing errors by 95%.",
    },
    {
      question: "How quickly can you start working on my business?",
      answer:
        "We can start immediately! Initial consultations are available within 24-48 hours, basic services like chatbots and SEO can begin within 1-2 weeks, and comprehensive marketing strategies typically launch within 2-4 weeks. Website projects start with refundable deposits (£150-£3,750) and most are completed within 4-8 weeks. Emergency support and urgent projects can be prioritized for local Nottinghamshire businesses.",
    },
    {
      question: "Do you provide training and ongoing support?",
      answer:
        "Absolutely! We believe in empowering you to own your marketing assets. All services include comprehensive training, documentation, video tutorials, and ongoing support. You'll have direct access to our team via phone (0800 772 3291), email (hello@postino.cc), and for local businesses, face-to-face meetings. Monthly reviews ensure your systems continue performing optimally.",
    },
    {
      question: "Can you help businesses compete with larger companies?",
      answer:
        "Yes! Our AI-enhanced marketing levels the playing field by giving SMEs capabilities typically available only to large corporations: professional automation, 24/7 customer service, data-driven optimization, and sophisticated marketing campaigns. Many of our clients now outrank and outperform much larger competitors through smart use of technology and strategic local positioning.",
    },
    {
      question: "What results can I expect and how do you measure success?",
      answer:
        "Results vary by business and goals, but typical outcomes include: 150-300% increase in website traffic, 40-60% more qualified leads, 25-50% improvement in conversion rates, 30-40 hours weekly time savings through automation, and 3-5x ROI within 6 months. We provide transparent monthly reporting with clear metrics including traffic, leads, conversions, rankings, and revenue attribution.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32 relative overflow-hidden">
        {/* Optimized Particle Network */}
        <ParticleNetwork />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <MorphingHeadlines />

            <p className="text-xl lg:text-2xl font-body mb-8 max-w-4xl mx-auto leading-relaxed">
              Postino seamlessly blends expert marketing strategies with
              cutting-edge AI automation to help SMEs grow smarter, faster, and
              more efficiently than ever before.
            </p>

            {/* Dual-path CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-coral-red hover:bg-coral-red/90 text-white px-8 py-4 text-lg shadow-2xl"
              >
                <Link href="/growth-consultation">
                  Looking for Growth Support?
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-midnight-blue px-8 py-4 text-lg backdrop-blur-sm bg-white/5"
              >
                <Link
                  href="/ai-automation-demo"
                  className="text-white hover:text-midnight-blue"
                >
                  <span className="text-coral-red font-heading font-semibold">
                    Exploring AI Automation?
                  </span>
                  <Brain className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Two Powerful Pillars, One Integrated Approach
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto mb-12">
              Most agencies focus on either marketing or technology. We excel at
              both, creating synergies that amplify your results exponentially.
            </p>
          </div>

          <EnhancedServiceCards />
        </div>
      </section>

      {/* Why Choose Postino */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Why SME Leaders Choose Postino
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of growing businesses. Our
              integrated approach delivers results that traditional agencies
              simply can't match.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-midnight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-midnight-blue mb-3">
                Human Expertise + AI Power
              </h3>
              <p className="font-body text-gray-600">
                Strategic thinking and creative insights enhanced by intelligent
                automation and data-driven optimisation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-midnight-blue mb-3">
                Measurable, Scalable Growth
              </h3>
              <p className="font-body text-gray-600">
                Every strategy is designed for sustainable growth with clear
                metrics, automated processes, and continuous optimisation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-coral-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-midnight-blue mb-3">
                True Partnership Approach
              </h3>
              <p className="font-body text-gray-600">
                We become an extension of your team, understanding your vision
                and working together to achieve extraordinary results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-6 text-sm px-4 py-2">
              🤖 AI Technology in Action
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              See Our AI Intelligence at Work
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Watch how our AI analyses websites in real-time, identifying opportunities
              and delivering actionable insights that drive measurable growth.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <AIDemo />
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <ROICalculator />

      {/* Social Proof Section */}
      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg font-heading text-gray-600">
              See what our clients say about transforming their businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-xl font-heading font-bold text-white">
                  S
                </span>
              </div>
              <blockquote className="font-heading text-gray-700 italic mb-4">
                "Postino didn't just automate our processes—they transformed how
                we think about growth. The combination of marketing expertise
                and AI implementation gave us capabilities we never thought
                possible."
              </blockquote>
              <div>
                <p className="font-heading font-semibold text-midnight-blue">
                  Simon
                </p>
                <p className="font-heading text-sm text-gray-500">
                  CEO, Manufacturing Company
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-coral-red rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-xl font-heading font-bold text-white">
                  J
                </span>
              </div>
              <blockquote className="font-heading text-gray-700 italic mb-4">
                "425% more qualified leads and £2.3M additional revenue. But
                what impressed me most was how they understood our industry and
                created solutions that actually fit how we work."
              </blockquote>
              <div>
                <p className="font-heading font-semibold text-midnight-blue">
                  Jessica
                </p>
                <p className="font-heading text-sm text-gray-500">
                  Managing Partner, Consulting Firm
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-midnight-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-xl font-heading font-bold text-white">
                  E
                </span>
              </div>
              <blockquote className="font-heading text-gray-700 italic mb-4">
                "We've gone from struggling to sell online to having customers
                discover us organically. The AI chatbot feels more helpful than
                most human support teams I've encountered."
              </blockquote>
              <div>
                <p className="font-heading font-semibold text-midnight-blue">
                  Emily
                </p>
                <p className="font-heading text-sm text-gray-500">
                  Founder, E-commerce Business
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-midnight-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl font-body mb-8 opacity-90">
            Join the growing number of SMEs who are achieving exceptional
            results with our integrated marketing and AI approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coral-red hover:bg-coral-red/90 text-white"
            >
              <Link href="/growth-consultation">
                Book a Growth Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white hover:bg-white hover:text-midnight-blue bg-white/5"
            >
              <Link
                href="/ai-automation-demo"
                className="text-coral-red hover:text-midnight-blue"
              >
                <span className="font-heading font-semibold">
                  Request an Automation Demo
                </span>
                <Brain className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section - NEW */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about working with Postino - your local AI-enhanced marketing partner"
        items={homepageFAQs}
        className="bg-white"
        schemaId="homepage-faq-schema"
      />

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-6">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Postino.</h3>
              <p className="font-body text-gray-300 mb-4">
                Where growth meets AI innovation. Helping SMEs achieve
                measurable success through expert marketing and intelligent
                automation.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Services</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/growth-marketing"
                    className="hover:text-white transition-colors"
                  >
                    Growth Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-automation"
                    className="hover:text-white transition-colors"
                  >
                    AI & Automation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/seo-services"
                    className="hover:text-white transition-colors"
                  >
                    SEO Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/content-strategy"
                    className="hover:text-white transition-colors"
                  >
                    Content Strategy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/industries/dental-practices"
                    className="hover:text-white transition-colors"
                  >
                    Dental Practices
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/medical-practices"
                    className="hover:text-white transition-colors"
                  >
                    Medical Practices
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/cosmetic-clinics"
                    className="hover:text-white transition-colors"
                  >
                    Cosmetic Clinics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries"
                    className="hover:text-white transition-colors"
                  >
                    View All Industries
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Company</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="hover:text-white transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/growth-consultation"
                    className="hover:text-white transition-colors"
                  >
                    Growth Strategy Session
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-automation-demo"
                    className="hover:text-white transition-colors"
                  >
                    Automation Demo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="hover:text-white transition-colors"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="font-body text-gray-400">
              © 2025 Postino Ltd. Company No. 15378485. All rights reserved. |
              Empowering SME growth through intelligent marketing.
            </p>
            <p className="font-body text-gray-500 text-sm mt-2">
              Registered Address: 1 Fisher Lane, Bingham, Nottingham, NG13 8BQ
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Widget */}
      <WhatsAppWidget />
    </div>
  );
}
