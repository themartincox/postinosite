import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Check,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Case Studies | Proven Results in Growth Marketing & AI Automation",
  description: "Real results from our growth marketing and AI automation campaigns. See how we've helped SMEs achieve 300%+ growth in bookings, leads, and revenue. Nottingham success stories.",
  path: "/case-studies",
  keywords: "marketing case studies, AI automation results, growth marketing success, SME growth examples, Nottingham business results, digital marketing ROI, client success stories",
  changeFreq: "monthly",
});

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      company: "Bright Dental Practice",
      industry: "Dental",
      challenge: "Low online visibility and booking rates",
      result: "300% increase in online bookings within 6 months",
      metric: "+300% bookings",
      description: "Complete website redesign with integrated booking system and local SEO optimization",
      color: "bg-coral-red"
    },
    {
      company: "MedCare Clinic",
      industry: "Medical",
      challenge: "Outdated website and poor patient communication",
      result: "250% increase in patient inquiries and improved patient satisfaction",
      metric: "+250% inquiries",
      description: "Modern, GDPR-compliant website with patient portal and automated communications",
      color: "bg-forest-green"
    },
    {
      company: "Wellness Spa Group",
      industry: "Beauty & Wellness",
      challenge: "Multiple locations with inconsistent branding",
      result: "180% increase in treatment bookings across all locations",
      metric: "+180% bookings",
      description: "Multi-location website with unified branding and advanced booking system",
      color: "bg-midnight-blue"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-blue to-forest-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl font-body mb-8 leading-relaxed opacity-90">
              See how we've helped businesses transform their digital presence and achieve
              exceptional growth through our revenue-focused approach.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-coral-red hover:bg-coral-red/90 text-white"
            >
              <Link href="/contact">
                Start Your Success Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Real Results for Real Businesses
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Our revenue-sharing model means we only succeed when you do. Here's the proof.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-white shadow-lg border-0 overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className={`${study.color} text-white p-8 flex flex-col justify-center`}>
                    <Badge className="bg-white/20 text-white mb-4 w-fit">
                      {study.industry}
                    </Badge>
                    <h3 className="text-2xl font-heading font-bold mb-4">
                      {study.company}
                    </h3>
                    <div className="text-3xl font-heading font-bold mb-2">
                      {study.metric}
                    </div>
                  </div>

                  <div className="lg:col-span-2 p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-heading font-semibold text-coral-red mb-3">
                          Challenge
                        </h4>
                        <p className="font-body text-gray-600 mb-6">
                          {study.challenge}
                        </p>
                        <h4 className="font-heading font-semibold text-forest-green mb-3">
                          Solution
                        </h4>
                        <p className="font-body text-gray-600">
                          {study.description}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-midnight-blue mb-3">
                          Result
                        </h4>
                        <p className="font-body text-gray-600 mb-6">
                          {study.result}
                        </p>
                        <Button asChild variant="outline" className="border-midnight-blue text-midnight-blue hover:bg-midnight-blue hover:text-white">
                          <Link href="/contact">
                            Get Similar Results
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Average Results Across All Clients
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                metric: "250%",
                description: "Average increase in online leads",
                icon: TrendingUp,
                color: "text-coral-red"
              },
              {
                metric: "180%",
                description: "Improvement in conversion rates",
                icon: Target,
                color: "text-forest-green"
              },
              {
                metric: "£100k+",
                description: "Additional revenue generated",
                icon: DollarSign,
                color: "text-midnight-blue"
              },
              {
                metric: "95%",
                description: "Client satisfaction rate",
                icon: Users,
                color: "text-coral-red"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className={`text-4xl font-heading font-bold ${stat.color} mb-2`}>
                  {stat.metric}
                </div>
                <p className="font-body text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-midnight-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl font-body mb-8 opacity-90">
            Let's discuss how we can achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coral-red hover:bg-coral-red/90 text-white"
            >
              <Link href="/revenue-forecast">
                Get Your Revenue Forecast
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white hover:bg-white hover:text-midnight-blue bg-white/5"
            >
              <Link href="/contact" className="text-white hover:text-midnight-blue">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
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
                    href="/industries"
                    className="hover:text-white transition-colors"
                  >
                    Industries
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
                    href="/revenue-forecast"
                    className="hover:text-white transition-colors"
                  >
                    Revenue Forecast
                  </Link>
                </li>
                <li>
                  <Link
                    href="/website-audit"
                    className="hover:text-white transition-colors"
                  >
                    Website Audit
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
          </div>
        </div>
      </footer>
    </div>
  );
}
