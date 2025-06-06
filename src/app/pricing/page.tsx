import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Star, Zap } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/Navigation"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-blue to-forest-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-coral-red text-white mb-6">Transparent Pricing</Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Investment Plans That Drive <span className="text-coral-red">Real Results</span>
            </h1>
            <p className="text-xl font-body mb-8 leading-relaxed opacity-90">
              Choose the right combination of growth marketing and AI automation services
              to transform your business. All plans include dedicated support and measurable ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Growth Marketing Starter */}
            <Card className="border-2 border-forest-green shadow-lg">
              <CardHeader className="text-center">
                <Badge className="bg-forest-green text-white mx-auto mb-4">Most Popular</Badge>
                <CardTitle className="text-2xl font-heading text-midnight-blue">Growth Marketing</CardTitle>
                <CardDescription className="text-gray-600">
                  Comprehensive marketing strategy and execution
                </CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-heading font-bold text-forest-green">£2,500</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green flex-shrink-0" />
                    <span className="font-body text-gray-700">SEO strategy & implementation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green flex-shrink-0" />
                    <span className="font-body text-gray-700">Content strategy & creation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green flex-shrink-0" />
                    <span className="font-body text-gray-700">Email marketing automation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green flex-shrink-0" />
                    <span className="font-body text-gray-700">Social media management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green flex-shrink-0" />
                    <span className="font-body text-gray-700">Analytics & reporting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green flex-shrink-0" />
                    <span className="font-body text-gray-700">Monthly strategy sessions</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-forest-green hover:bg-forest-green/90 text-white">
                  <Link href="/growth-consultation">
                    Start Growing Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* AI Automation */}
            <Card className="border-2 border-coral-red shadow-lg">
              <CardHeader className="text-center">
                <Badge className="bg-coral-red text-white mx-auto mb-4">High ROI</Badge>
                <CardTitle className="text-2xl font-heading text-midnight-blue">AI Automation</CardTitle>
                <CardDescription className="text-gray-600">
                  Intelligent automation and process optimisation
                </CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-heading font-bold text-coral-red">£15,000</span>
                  <span className="text-gray-600">/project</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-coral-red flex-shrink-0" />
                    <span className="font-body text-gray-700">Business process automation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-coral-red flex-shrink-0" />
                    <span className="font-body text-gray-700">Custom AI chatbot development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-coral-red flex-shrink-0" />
                    <span className="font-body text-gray-700">Predictive analytics setup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-coral-red flex-shrink-0" />
                    <span className="font-body text-gray-700">System integration & training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-coral-red flex-shrink-0" />
                    <span className="font-body text-gray-700">6 months support included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-coral-red flex-shrink-0" />
                    <span className="font-body text-gray-700">ROI guarantee or money back</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-coral-red hover:bg-coral-red/90 text-white">
                  <Link href="/ai-automation-demo">
                    Schedule Demo
                    <Zap className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Complete Transformation */}
            <Card className="border-2 border-midnight-blue shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-midnight-blue text-white px-4 py-2">
                  <Star className="h-4 w-4 mr-1" />
                  Best Value
                </Badge>
              </div>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl font-heading text-midnight-blue">Complete Transformation</CardTitle>
                <CardDescription className="text-gray-600">
                  Full-service growth marketing + AI automation
                </CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-heading font-bold text-midnight-blue">£35,000</span>
                  <span className="text-gray-600">/project</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-midnight-blue flex-shrink-0" />
                    <span className="font-body text-gray-700">Everything in Growth Marketing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-midnight-blue flex-shrink-0" />
                    <span className="font-body text-gray-700">Everything in AI Automation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-midnight-blue flex-shrink-0" />
                    <span className="font-body text-gray-700">Brand identity development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-midnight-blue flex-shrink-0" />
                    <span className="font-body text-gray-700">Website design & development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-midnight-blue flex-shrink-0" />
                    <span className="font-body text-gray-700">Priority support & consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-midnight-blue flex-shrink-0" />
                    <span className="font-body text-gray-700">12 months ongoing optimisation</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-midnight-blue hover:bg-midnight-blue/90 text-white">
                  <Link href="/contact">
                    Transform My Business
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Pricing Questions & Answers
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Do you offer custom pricing for larger projects?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600">
                  Yes, we create bespoke pricing for enterprise clients and large-scale transformations.
                  Contact us to discuss your specific requirements and receive a custom proposal.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  What's included in the ongoing support?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600">
                  All plans include email support, monthly performance reviews, strategy adjustments,
                  and access to our client portal with real-time analytics and reporting.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  How do you guarantee ROI on AI automation projects?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600">
                  We track measurable efficiency gains and cost savings. If you don't see positive ROI
                  within 12 months, we'll refund the difference or continue working until you do.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-midnight-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl font-body mb-8 opacity-90">
            Book a consultation to discuss your specific needs and receive a custom proposal
            tailored to your business objectives and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white">
              <Link href="/growth-consultation">
                Book Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white hover:bg-white hover:text-midnight-blue bg-white/5">
              <Link href="/contact" className="text-white hover:text-midnight-blue">
                <span className="font-heading font-semibold">Get Custom Quote</span>
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
                Where growth meets AI innovation. Helping SMEs achieve measurable success
                through expert marketing and intelligent automation.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Services</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li><Link href="/growth-marketing" className="hover:text-white transition-colors">Growth Marketing</Link></li>
                <li><Link href="/ai-automation" className="hover:text-white transition-colors">AI & Automation</Link></li>
                <li><Link href="/seo-services" className="hover:text-white transition-colors">SEO Services</Link></li>
                <li><Link href="/content-strategy" className="hover:text-white transition-colors">Content Strategy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Company</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li><Link href="/growth-consultation" className="hover:text-white transition-colors">Growth Strategy Session</Link></li>
                <li><Link href="/ai-automation-demo" className="hover:text-white transition-colors">Automation Demo</Link></li>
                <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="font-body text-gray-400">
              © 2025 Postino Ltd. Company No. 15378485. All rights reserved. | Empowering SME growth through intelligent marketing.
            </p>
            <p className="font-body text-gray-500 text-sm mt-2">
              Registered Address: 1 Fisher Lane, Bingham, Nottingham, NG13 8BQ
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
