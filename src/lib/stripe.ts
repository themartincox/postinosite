import { loadStripe, Stripe } from '@stripe/stripe-js';

// Make sure to call loadStripe outside of a component's render to avoid
// recreating the Stripe object on every render.
let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
    );
  }
  return stripePromise;
};

// Service configurations for local areas
export const BINGHAM_SERVICES = {
  website_design: {
    name: 'Professional Website Design - Bingham',
    priceId: 'price_bingham_website', // Will be set in Stripe dashboard
    price: 1500, // Starting price in pence (£15.00)
    maxPrice: 3750,
    description: 'Modern, mobile-friendly website for your Bingham business',
    features: [
      'Custom responsive design',
      'Local SEO optimization',
      'Contact forms & booking systems',
      'Google Business integration',
      '1 year hosting included',
      'Basic analytics setup'
    ]
  },
  ai_chatbot: {
    name: 'AI Chatbot Development - Bingham',
    priceId: 'price_bingham_chatbot',
    price: 1125,
    maxPrice: 2250,
    description: '24/7 customer service chatbot for your Bingham business',
    features: [
      'Custom conversation flows',
      'WhatsApp & website integration',
      'Appointment booking capability',
      'Customer enquiry handling',
      'Lead capture & qualification',
      'Performance analytics'
    ]
  },
  local_marketing: {
    name: 'Local Marketing Support - Bingham',
    priceId: 'price_bingham_marketing',
    price: 600,
    maxPrice: 1500,
    description: 'Monthly marketing support for Bingham area businesses',
    recurring: true,
    features: [
      'Local SEO & Google My Business',
      'Social media management',
      'Community event promotion',
      'Local directory listings',
      'Review management',
      'Monthly performance reports'
    ]
  },
  automation: {
    name: 'Business Automation Solutions - Bingham',
    priceId: 'price_bingham_automation',
    price: 750,
    maxPrice: 3000,
    description: 'Automated workflows and processes for your Bingham business',
    features: [
      'Automated appointment reminders',
      'Customer follow-up sequences',
      'Invoice & payment automation',
      'Inventory management systems',
      'Staff scheduling automation',
      'Customer feedback collection'
    ]
  }
} as const;

export const RUSHCLIFFE_SERVICES = {
  website_design: {
    name: 'Professional Website Design - Rushcliffe',
    priceId: 'price_rushcliffe_website',
    price: 1500,
    maxPrice: 3750,
    description: 'Modern, mobile-friendly website for your Rushcliffe business',
    features: [
      'Custom responsive design',
      'Local SEO optimization',
      'Contact forms & booking systems',
      'Google Business integration',
      '1 year hosting included',
      'Basic analytics setup'
    ]
  },
  ai_chatbot: {
    name: 'AI Chatbot Development - Rushcliffe',
    priceId: 'price_rushcliffe_chatbot',
    price: 1125,
    maxPrice: 2250,
    description: '24/7 customer service chatbot for your Rushcliffe business',
    features: [
      'Custom conversation flows',
      'WhatsApp & website integration',
      'Appointment booking capability',
      'Customer enquiry handling',
      'Lead capture & qualification',
      'Performance analytics'
    ]
  },
  local_marketing: {
    name: 'Local Marketing Support - Rushcliffe',
    priceId: 'price_rushcliffe_marketing',
    price: 600,
    maxPrice: 1500,
    description: 'Monthly marketing support for Rushcliffe area businesses',
    recurring: true,
    features: [
      'Local SEO & Google My Business',
      'Social media management',
      'Community event promotion',
      'Local directory listings',
      'Review management',
      'Monthly performance reports'
    ]
  },
  automation: {
    name: 'Business Automation Solutions - Rushcliffe',
    priceId: 'price_rushcliffe_automation',
    price: 750,
    maxPrice: 3000,
    description: 'Automated workflows and processes for your Rushcliffe business',
    features: [
      'Automated appointment reminders',
      'Customer follow-up sequences',
      'Invoice & payment automation',
      'Inventory management systems',
      'Staff scheduling automation',
      'Customer feedback collection'
    ]
  }
} as const;

export type ServiceKey = keyof typeof BINGHAM_SERVICES;
export type LocalArea = 'bingham' | 'rushcliffe';

export const getServiceConfig = (area: LocalArea, service: ServiceKey) => {
  return area === 'bingham' ? BINGHAM_SERVICES[service] : RUSHCLIFFE_SERVICES[service];
};

// Format price for display
export const formatPrice = (priceInPence: number) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(priceInPence / 100);
};
