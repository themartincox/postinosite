import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import ContactForm from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-midnight-blue via-forest-green to-coral-red py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                Let's Build Something Amazing Together
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Ready to transform your business? Get in touch and let's discuss how we can drive your growth.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Growth Marketing Card */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-forest-green text-white text-center rounded-t-lg">
                  <CardTitle className="text-2xl font-heading">Growth Strategy Session</CardTitle>
                  <CardDescription className="text-gray-100">
                    £50 strategic consultation
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-forest-green rounded-full" />
                      <p className="font-body text-gray-600">Comprehensive business and marketing audit</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-forest-green rounded-full" />
                      <p className="font-body text-gray-600">Custom growth strategy recommendations</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-forest-green rounded-full" />
                      <p className="font-body text-gray-600">Competitor analysis and market insights</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-forest-green rounded-full" />
                      <p className="font-body text-gray-600">Clear roadmap for next 6-12 months</p>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-6 bg-forest-green hover:bg-forest-green/90">
                    <Link href="/growth-consultation">
                      Book Your Strategy Session
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* AI Automation Card */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-coral-red text-white text-center rounded-t-lg">
                  <CardTitle className="text-2xl font-heading">AI Automation Demo</CardTitle>
                  <CardDescription className="text-gray-100">
                    See the future of your business
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-coral-red rounded-full" />
                      <p className="font-body text-gray-600">Live demonstration of relevant AI tools</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-coral-red rounded-full" />
                      <p className="font-body text-gray-600">Custom automation workflow design</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-coral-red rounded-full" />
                      <p className="font-body text-gray-600">ROI projection and efficiency analysis</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-coral-red rounded-full" />
                      <p className="font-body text-gray-600">Implementation timeline and next steps</p>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-coral-red hover:bg-coral-red/90 text-white">
                    <span className="font-heading font-semibold">Schedule Demo</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-midnight-blue mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Whether you're looking for growth marketing, AI automation, or just have questions
                about how we can help your business, we'd love to hear from you.
              </p>
            </div>
            <ContactForm
              type="general"
              title="Get In Touch"
              description="Send us a message and we'll get back to you within 24 hours."
            />
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-soft-gray">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold text-midnight-blue mb-8">
              Other Ways to Reach Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-coral-red mb-4" />
                <h3 className="text-lg font-semibold text-midnight-blue mb-2">Email</h3>
                <p className="text-gray-600">hello@postino.cc</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-coral-red mb-4" />
                <h3 className="text-lg font-semibold text-midnight-blue mb-2">Phone</h3>
                <p className="text-gray-600">+44 20 1234 5678</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-coral-red mb-4" />
                <h3 className="text-lg font-semibold text-midnight-blue mb-2">Location</h3>
                <p className="text-gray-600">Remote & Global</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-midnight-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-heading font-bold mb-4">Postino.</h3>
              <p className="text-gray-300 max-w-md mx-auto">
                Transforming businesses through strategic growth marketing and intelligent automation.
              </p>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <nav className="flex justify-center space-x-8">
                <ul className="flex space-x-8">
                  <li><Link href="/growth-marketing" className="hover:text-white transition-colors">Growth Marketing</Link></li>
                  <li><Link href="/ai-automation" className="hover:text-white transition-colors">AI Automation</Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </nav>
              <p className="text-gray-400 text-sm mt-8">
                © 2025 Postino Ltd. Company No. 15378485. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Registered Address: 1 Fisher Lane, Bingham, Nottingham, NG13 8BQ
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
