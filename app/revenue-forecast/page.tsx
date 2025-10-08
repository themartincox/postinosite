import WhatsAppWidget from "@/components/WhatsAppWidget";
import ContactForm from "@/components/ContactForm";
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
  Calculator,
  TrendingUp,
  Target,
  DollarSign,
  BarChart3,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function RevenueForecastPage() {
  const growthMetrics = [
    {
      metric: "Lead Generation Increase",
      typical: "150-300%",
      icon: Users,
      description: "More qualified leads through optimized conversion funnels"
    },
    {
      metric: "Conversion Rate Improvement",
      typical: "25-75%",
      icon: Target,
      description: "Better converting landing pages and user experience"
    },
    {
      metric: "Average Deal Value Growth",
      typical: "20-50%",
      icon: DollarSign,
      description: "Premium positioning and value-based pricing strategies"
    },
    {
      metric: "Sales Cycle Reduction",
      typical: "30-60%",
      icon: TrendingUp,
      description: "Automated nurturing and streamlined sales processes"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      {/* Header is global; Navigation removed */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest-green to-midnight-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-6">
              Free Revenue Forecast
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Discover Your{" "}
              <span className="text-coral-red">Revenue Growth Potential</span>
            </h1>
            <p className="text-xl font-body mb-8 leading-relaxed opacity-90">
              Get a personalized forecast showing exactly how much additional revenue
              you could generate with our proven growth marketing and AI automation strategies.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg font-heading">
                <div className="flex items-center">
                  <Calculator className="h-5 w-5 mr-2 text-coral-red" />
                  <span>Personalized Analysis</span>
                </div>
                <div className="hidden md:block text-white/50">•</div>
                <div className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-coral-red" />
                  <span>Conservative Projections</span>
                </div>
                <div className="hidden md:block text-white/50">•</div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-coral-red" />
                  <span>12-Month Forecast</span>
                </div>
              </div>
            </div>

            <p className="text-lg font-body opacity-90 mb-8">
              Based on <strong>real client data</strong> from similar businesses in your industry
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Receive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Your Personalized Revenue Forecast Includes
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              We'll analyze your current situation and provide detailed projections
              based on proven results from similar businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {growthMetrics.map((metric, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-coral-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-heading text-midnight-blue">
                    {metric.metric}
                  </CardTitle>
                  <div className="text-2xl font-heading font-bold text-coral-red">
                    {metric.typical}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-gray-600 text-sm">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Forecast */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Sample Revenue Forecast
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Here's an example forecast for a £500k annual revenue business
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-forest-green to-midnight-blue text-white text-center">
                <CardTitle className="text-2xl font-heading">
                  12-Month Revenue Growth Projection
                </CardTitle>
                <CardDescription className="text-white/90">
                  Conservative estimates based on typical client results
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-midnight-blue mb-2">
                      Current Revenue
                    </h3>
                    <div className="text-3xl font-heading font-bold text-gray-600">
                      £500,000
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Annual baseline</p>
                  </div>

                  <div className="border-l-2 border-r-2 border-gray-200">
                    <h3 className="text-lg font-heading font-semibold text-midnight-blue mb-2">
                      Projected Growth
                    </h3>
                    <div className="text-3xl font-heading font-bold text-coral-red">
                      £325,000
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Additional revenue (Year 1)</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-semibold text-midnight-blue mb-2">
                      New Total Revenue
                    </h3>
                    <div className="text-3xl font-heading font-bold text-forest-green">
                      £825,000
                    </div>
                    <p className="text-sm text-gray-500 mt-2">65% growth</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-coral-red/5 rounded-lg border border-coral-red/10">
                  <h4 className="font-heading font-semibold text-midnight-blue mb-3">
                    Growth Breakdown:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span>Lead volume increase (200%):</span>
                      <span className="font-bold">+£150,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Conversion rate improvement (45%):</span>
                      <span className="font-bold">+£100,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average deal value growth (30%):</span>
                      <span className="font-bold">+£75,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Operational efficiency gains:</span>
                      <span className="font-bold">Time savings</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Get Your Personalized Revenue Forecast
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Tell us about your business and we'll create a detailed revenue forecast
              specifically for your industry and growth goals.
            </p>
          </div>

          <ContactForm
            type="growth-consultation"
            title="Request Your Revenue Forecast"
            description="We'll analyze your business and provide a detailed 12-month revenue growth projection based on our proven strategies."
          />
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-midnight-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Why Our Forecasts Are Accurate
          </h2>
          <p className="text-xl font-body mb-8 opacity-90">
            Our projections are based on real data from 100+ successful client implementations,
            not theoretical estimates or industry averages.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-coral-red mb-2">100+</div>
              <p className="font-body">Client Success Stories</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-coral-red mb-2">18+</div>
              <p className="font-body">Industries Served</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-coral-red mb-2">£50M+</div>
              <p className="font-body">Additional Revenue Generated</p>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-coral-red hover:bg-coral-red/90 text-white"
          >
            <Link href="/growth-consultation">
              Book Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Postino.</h3>
              <p className="font-body text-gray-300 mb-4">
                Accurate revenue forecasting based on proven results and real client data.
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
                    Industry Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Tools</h4>
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
            <div>
              <h4 className="font-heading font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/growth-consultation"
                    className="hover:text-white transition-colors"
                  >
                    Growth Consultation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-automation-demo"
                    className="hover:text-white transition-colors"
                  >
                    AI Demo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="font-body text-gray-400">
              © 2025 Postino Ltd. Company No. 15378485. All rights reserved. |
              Data-driven revenue forecasting for ambitious businesses.
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
