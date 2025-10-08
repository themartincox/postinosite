import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocalServicePayment from '@/components/LocalServicePayment';
import { RUSHCLIFFE_SERVICES, type ServiceKey } from '@/lib/stripe-config';

interface BookingPageProps {
  params: Promise<{
    service: string;
  }>;
}

// Valid service slugs mapped to service keys
const SERVICE_SLUGS: Record<string, ServiceKey> = {
  'website-design': 'website_design',
  'ai-chatbot': 'ai_chatbot',
  'local-marketing': 'local_marketing',
  'automation': 'automation',
};

export async function generateMetadata({ params }: BookingPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const serviceKey = SERVICE_SLUGS[resolvedParams.service];

  if (!serviceKey) {
    return {
      title: 'Service Not Found - Postino Rushcliffe',
    };
  }

  const service = RUSHCLIFFE_SERVICES[serviceKey];

  return {
    title: `Book ${service.name} Rushcliffe | Secure Online Booking | Postino`,
    description: `Secure online booking for ${service.description}. Professional ${service.name.toLowerCase()} services for Rushcliffe businesses. Refundable deposit, 24hr response, local expertise.`,
    keywords: `book ${service.name.toLowerCase()} Rushcliffe, ${service.name.toLowerCase()} booking Rushcliffe, digital marketing booking Nottinghamshire, local business services West Bridgford`,
    robots: 'noindex, nofollow', // Prevent indexing of booking pages
    other: {
      'geo.region': 'GB-NTT',
      'geo.placename': 'Rushcliffe, Nottinghamshire',
      'geo.position': '52.9333;-1.1333',
    }
  };
}

export default async function RushcliffeBookingPage({ params }: BookingPageProps) {
  const resolvedParams = await params;
  const serviceKey = SERVICE_SLUGS[resolvedParams.service];

  if (!serviceKey || !RUSHCLIFFE_SERVICES[serviceKey]) {
    notFound();
  }

  const service = RUSHCLIFFE_SERVICES[serviceKey];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header is global; Navigation removed */}

      <main className="flex-1 py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Secure Your {service.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reserve your project slot with a refundable deposit. Our Rushcliffe team will contact you within 24 hours for a detailed consultation and complete project quote.
            </p>
          </div>

          <LocalServicePayment
            service={serviceKey}
            area="rushcliffe"
          />
        </div>
      </main>
    </div>
  );
}

// Generate static params for all valid services
export async function generateStaticParams() {
  return Object.keys(SERVICE_SLUGS).map((service) => ({
    service,
  }));
}
