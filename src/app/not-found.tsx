import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowLeft, Home, Search, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page Not Found | Postino',
  description: 'The page you are looking for could not be found. Explore our growth marketing and AI automation services.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-teal-800 relative overflow-hidden">
      {/* Video Background with Fallback */}
      <div className="absolute inset-0 w-full h-full">
        {/* Animated Background Fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-teal-800/90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]" />

          {/* Animated particles for visual interest */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white opacity-10 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${Math.random() * 2 + 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Optional Video Background (commented out for now) */}
        {/*
        <video
          className="w-full h-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{ filter: 'blur(1px)' }}
        >
          <source src="/videos/404-background.mp4" type="video/mp4" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-teal-800" />
        </video>
        */}
      </div>

      {/* Navigation */}
      <div className="relative z-10">
        {/* Header is global; Navigation removed */}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Error Code */}
          <div className="mb-8">
            <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold text-white/20 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Page Not Found
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12 space-y-6">
            <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed">
              Oops! The page you're looking for seems to have disappeared into the digital ether.
            </p>
            <p className="text-lg text-gray-300 max-w-lg mx-auto">
              Don't worry though – our growth marketing and AI automation services are still here to help your business thrive.
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Home className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Go Home</h3>
                <p className="text-gray-300 text-sm mb-4">Return to our homepage</p>
                <Button asChild variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Link href="/">
                    Home
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Search className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Our Services</h3>
                <p className="text-gray-300 text-sm mb-4">Explore what we offer</p>
                <Button asChild variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Link href="/growth-marketing">
                    Services
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Get Help</h3>
                <p className="text-gray-300 text-sm mb-4">Contact our team</p>
                <Button asChild variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Link href="/contact">
                    Contact
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get Support
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-gray-400 mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/growth-marketing" className="text-blue-300 hover:text-blue-200 transition-colors">
                Growth Marketing
              </Link>
              <Link href="/ai-automation" className="text-purple-300 hover:text-purple-200 transition-colors">
                AI Automation
              </Link>
              <Link href="/industries" className="text-teal-300 hover:text-teal-200 transition-colors">
                Industries
              </Link>
              <Link href="/case-studies" className="text-green-300 hover:text-green-200 transition-colors">
                Case Studies
              </Link>
              <Link href="/blog" className="text-yellow-300 hover:text-yellow-200 transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-orange-300 hover:text-orange-200 transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Structured Data for 404 Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Page Not Found",
            "description": "The requested page could not be found on Postino's website.",
            "url": "https://postino.cc/404",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Postino",
              "url": "https://postino.cc"
            },
            "potentialAction": {
              "@type": "ReadAction",
              "object": {
                "@type": "WebPage",
                "name": "Homepage",
                "url": "https://postino.cc"
              }
            }
          })
        }}
      />
    </div>
  )
}
