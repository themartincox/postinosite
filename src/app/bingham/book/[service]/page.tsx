import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import LocalServicePayment from '@/components/LocalServicePayment';
import { BINGHAM_SERVICES, type ServiceKey } from '@/lib/stripe';

interface BookingPageProps {
  params: {
    service: string;
  };
}

// Valid service slugs mapped to service keys
const SERVICE_SLUGS: Record<string, ServiceKey> = {
  'website-design': 'website_design',
  'ai-chatbot': 'ai_chatbot',
  'local-marketing': 'local_marketing',
  'automation': 'automation',
};

export async function generateMetadata({ params }: BookingPageProps): Promise<Metadata> {
  const serviceKey = SERVICE_SLUGS[params.service];

  if (!serviceKey) {
    return {
      title: 'Service Not Found - Postino Bingham',
    };
  }

  const service = BINGHAM_SERVICES[serviceKey];

  return {
    title: `Book ${service.name} - Postino Bingham`,
    description: `Secure online booking for ${service.description}. Exclusive 25% discount for Bingham businesses.`,
    robots: 'noindex, nofollow', // Prevent indexing of booking pages
  };
}

export default function BinghamBookingPage({ params }: BookingPageProps) {
  const serviceKey = SERVICE_SLUGS[params.service];

  if (!serviceKey || !BINGHAM_SERVICES[serviceKey]) {
    notFound();
  }

  const service = BINGHAM_SERVICES[serviceKey];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Book Your {service.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure online booking for Bingham businesses. Complete your order and our team will contact you within 24 hours.
            </p>
          </div>

          <LocalServicePayment
            service={serviceKey}
            area="bingham"
            onSuccess={(paymentIntent) => {
              // Track successful payment
              console.log('Payment successful:', paymentIntent.id);

              // You could add analytics tracking here
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'purchase', {
                  transaction_id: paymentIntent.id,
                  value: paymentIntent.amount / 100,
                  currency: 'GBP',
                  items: [{
                    item_id: serviceKey,
                    item_name: service.name,
                    category: 'Digital Marketing Service',
                    quantity: 1,
                    price: paymentIntent.amount / 100,
                  }]
                });
              }
            }}
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
