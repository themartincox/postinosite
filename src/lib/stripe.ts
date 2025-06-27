import { loadStripe, type Stripe } from '@stripe/stripe-js';

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

// For static builds, we'll use payment links or handle payment differently
export const createPaymentFlow = async (
  area: LocalArea,
  service: ServiceKey,
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    businessName: string;
    requirements: string;
  }
) => {
  // Since we can't create checkout sessions on the client,
  // we'll use pre-configured payment links or alternative flow
  const serviceConfig = getServiceConfig(area, service);

  // Store customer info in localStorage for post-payment processing
  const bookingData = {
    ...customerInfo,
    area,
    service,
    serviceConfig,
    timestamp: Date.now(),
  };

  localStorage.setItem('pending_booking', JSON.stringify(bookingData));

  return {
    success: true,
    bookingData,
  };
};

// Get payment link URL for a specific service (these would be created in Stripe Dashboard)
export const getPaymentLinkForService = (area: LocalArea, service: ServiceKey): string | null => {
  // In production, these would be actual Stripe Payment Links created in the dashboard
  // For now, return null to trigger the fallback flow
  const paymentLinks: Record<string, string> = {
    // Example format - these would be real Stripe payment links:
    // 'bingham_website_design': 'https://buy.stripe.com/test_...',
    // 'bingham_ai_chatbot': 'https://buy.stripe.com/test_...',
  };

  return paymentLinks[`${area}_${service}`] || null;
};

// Validate environment configuration
export const validateStripeConfig = (): { valid: boolean; message: string } => {
  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    return {
      valid: false,
      message: 'Stripe publishable key is not configured. Please add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY to your environment variables.',
    };
  }

  if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY.startsWith('pk_test_')) {
    return {
      valid: true,
      message: 'Stripe is configured in test mode.',
    };
  }

  if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY.startsWith('pk_live_')) {
    return {
      valid: true,
      message: 'Stripe is configured in live mode.',
    };
  }

  return {
    valid: false,
    message: 'Invalid Stripe publishable key format.',
  };
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
