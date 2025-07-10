export interface PageContext {
  type: 'homepage' | 'service' | 'local' | 'booking' | 'blog' | 'contact' | 'about' | 'other';
  area?: 'bingham' | 'rushcliffe' | 'nottingham';
  service?: string;
  title?: string;
  intent?: 'browse' | 'research' | 'ready-to-buy' | 'comparison';
}

export interface ConversationState {
  layer: 1 | 2 | 3;
  context: PageContext;
  userInfo: {
    name?: string;
    email?: string;
    phone?: string;
    business?: string;
    budget?: string;
    timeline?: string;
    requirements?: string;
  };
  leadScore: number;
  conversationId: string;
  messages: ChatMessage[];
  currentStep: string;
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  options?: ChatOption[];
  metadata?: any;
}

export interface ChatOption {
  id: string;
  text: string;
  value: string;
  action?: 'continue' | 'redirect' | 'collect-info' | 'book-call' | 'get-quote';
  nextStep?: string;
}

// Detect page context from URL and page data
export function detectPageContext(pathname: string, title?: string): PageContext {
  // Homepage
  if (pathname === '/' || pathname === '') {
    return {
      type: 'homepage',
      intent: 'browse'
    };
  }

  // Local area pages
  if (pathname.includes('/bingham')) {
    return {
      type: pathname.includes('/book/') ? 'booking' : 'local',
      area: 'bingham',
      service: pathname.includes('/book/') ? extractServiceFromPath(pathname) : undefined,
      intent: pathname.includes('/book/') ? 'ready-to-buy' : 'research'
    };
  }

  if (pathname.includes('/rushcliffe')) {
    return {
      type: pathname.includes('/book/') ? 'booking' : 'local',
      area: 'rushcliffe',
      service: pathname.includes('/book/') ? extractServiceFromPath(pathname) : undefined,
      intent: pathname.includes('/book/') ? 'ready-to-buy' : 'research'
    };
  }

  if (pathname.includes('/nottingham-marketing-agency')) {
    return {
      type: 'local',
      area: 'nottingham',
      intent: 'research'
    };
  }

  // Service pages
  if (pathname.includes('/growth-marketing') || pathname.includes('/ai-automation')) {
    return {
      type: 'service',
      service: extractServiceFromPath(pathname),
      intent: 'research'
    };
  }

  // Blog pages
  if (pathname.includes('/blog')) {
    return {
      type: 'blog',
      intent: 'browse'
    };
  }

  // Contact page
  if (pathname.includes('/contact')) {
    return {
      type: 'contact',
      intent: 'ready-to-buy'
    };
  }

  // About page
  if (pathname.includes('/about')) {
    return {
      type: 'about',
      intent: 'research'
    };
  }

  return {
    type: 'other',
    title,
    intent: 'browse'
  };
}

function extractServiceFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.includes('book')) {
    const serviceIndex = segments.indexOf('book') + 1;
    return segments[serviceIndex] || 'unknown';
  }
  return segments[segments.length - 1] || 'unknown';
}

// Generate context-aware greeting message
export function generateGreeting(context: PageContext): ChatMessage {
  const greetings = {
    homepage: {
      content: "👋 Hi! I'm Postino's AI assistant. I can help you discover our digital marketing and AI automation services. What brings you here today?",
      options: [
        { id: '1', text: '🌐 Website Design', value: 'website-design', action: 'continue', nextStep: 'service-intro' },
        { id: '2', text: '🤖 AI Chatbots', value: 'ai-chatbot', action: 'continue', nextStep: 'service-intro' },
        { id: '3', text: '📈 Local Marketing', value: 'local-marketing', action: 'continue', nextStep: 'service-intro' },
        { id: '4', text: '⚡ Business Automation', value: 'automation', action: 'continue', nextStep: 'service-intro' },
        { id: '5', text: '💬 Just browsing', value: 'browse', action: 'continue', nextStep: 'general-help' }
      ]
    },
    local: {
      bingham: {
        content: `👋 Welcome! I see you're interested in our ${context.area} services. We're actually based right here in Bingham and offer special local rates! How can I help you grow your business?`,
        options: [
          { id: '1', text: '💰 Get Local Pricing', value: 'pricing', action: 'continue', nextStep: 'local-pricing' },
          { id: '2', text: '📅 Book Consultation', value: 'consultation', action: 'continue', nextStep: 'book-call' },
          { id: '3', text: '🎯 Learn About Services', value: 'services', action: 'continue', nextStep: 'service-overview' },
          { id: '4', text: '⚡ Quick Quote', value: 'quote', action: 'continue', nextStep: 'quick-quote' }
        ]
      },
      rushcliffe: {
        content: `👋 Hello! I can see you're exploring our Rushcliffe services. We work with many businesses across West Bridgford and the borough. What's your main business challenge right now?`,
        options: [
          { id: '1', text: '🌐 Need a Website', value: 'website', action: 'continue', nextStep: 'website-needs' },
          { id: '2', text: '📱 Want More Customers', value: 'customers', action: 'continue', nextStep: 'marketing-needs' },
          { id: '3', text: '🤖 Automate Processes', value: 'automation', action: 'continue', nextStep: 'automation-needs' },
          { id: '4', text: '💬 Not Sure Yet', value: 'explore', action: 'continue', nextStep: 'discovery' }
        ]
      },
      nottingham: {
        content: `👋 Hi there! Looking for a marketing agency in Nottingham? We're a local agency based in Bingham, serving businesses across Nottinghamshire. What's your biggest marketing challenge?`,
        options: [
          { id: '1', text: '🎯 Local SEO & Visibility', value: 'local-seo', action: 'continue', nextStep: 'seo-needs' },
          { id: '2', text: '🌐 Website Development', value: 'website', action: 'continue', nextStep: 'website-needs' },
          { id: '3', text: '🤖 AI & Automation', value: 'ai', action: 'continue', nextStep: 'ai-needs' },
          { id: '4', text: '📞 Speak to Someone', value: 'call', action: 'book-call', nextStep: 'contact-info' }
        ]
      }
    },
    booking: {
      content: `🎉 Great choice! I can see you're ready to book ${formatServiceName(context.service)} in ${context.area}. Let me help you complete your booking or answer any questions first.`,
      options: [
        { id: '1', text: '✅ Continue Booking', value: 'continue-booking', action: 'redirect' },
        { id: '2', text: '❓ I have questions', value: 'questions', action: 'continue', nextStep: 'pre-booking-questions' },
        { id: '3', text: '💰 Confirm pricing', value: 'pricing', action: 'continue', nextStep: 'pricing-confirmation' },
        { id: '4', text: '📞 Speak to someone first', value: 'call', action: 'book-call' }
      ]
    },
    service: {
      content: `👋 Hi! I can see you're exploring our ${formatServiceName(context.service)} services. These are really popular with local businesses! What would you like to know?`,
      options: [
        { id: '1', text: '💰 Pricing & Packages', value: 'pricing', action: 'continue', nextStep: 'service-pricing' },
        { id: '2', text: '⏱️ How long it takes', value: 'timeline', action: 'continue', nextStep: 'service-timeline' },
        { id: '3', text: '🎯 Perfect for my business?', value: 'suitability', action: 'continue', nextStep: 'needs-assessment' },
        { id: '4', text: '📅 Book consultation', value: 'consultation', action: 'book-call' }
      ]
    },
    blog: {
      content: "👋 Hi! Enjoying our blog content? I can help you apply these insights to your business or answer questions about our services.",
      options: [
        { id: '1', text: '🎯 Apply this to my business', value: 'apply', action: 'continue', nextStep: 'business-application' },
        { id: '2', text: '📞 Discuss with expert', value: 'expert', action: 'book-call' },
        { id: '3', text: '📰 More resources', value: 'resources', action: 'continue', nextStep: 'resource-recommendations' },
        { id: '4', text: '🌐 Our services', value: 'services', action: 'continue', nextStep: 'service-overview' }
      ]
    },
    contact: {
      content: "👋 Perfect timing! I can help you get in touch or even get you started right away. What's the best way to help you?",
      options: [
        { id: '1', text: '⚡ Quick quote', value: 'quote', action: 'continue', nextStep: 'quick-quote' },
        { id: '2', text: '📅 Book consultation', value: 'consultation', action: 'book-call' },
        { id: '3', text: '💬 Chat now', value: 'chat', action: 'continue', nextStep: 'needs-assessment' },
        { id: '4', text: '📞 Prefer to call', value: 'call', action: 'continue', nextStep: 'call-info' }
      ]
    },
    about: {
      content: "👋 Hi! Learning about our team and approach? We love working with local businesses and helping them grow with AI and smart marketing. What interests you most?",
      options: [
        { id: '1', text: '🤝 Work with us', value: 'work-together', action: 'continue', nextStep: 'collaboration-options' },
        { id: '2', text: '🎯 Our process', value: 'process', action: 'continue', nextStep: 'process-explanation' },
        { id: '3', text: '📈 Success stories', value: 'success', action: 'continue', nextStep: 'case-studies' },
        { id: '4', text: '📞 Meet the team', value: 'meet', action: 'book-call' }
      ]
    },
    other: {
      content: "👋 Hi! I'm Postino's AI assistant. I can help you with our digital marketing and AI automation services. What brings you here today?",
      options: [
        { id: '1', text: '🌐 Website Design', value: 'website-design', action: 'continue', nextStep: 'service-intro' },
        { id: '2', text: '🤖 AI Solutions', value: 'ai-automation', action: 'continue', nextStep: 'service-intro' },
        { id: '3', text: '📈 Marketing Help', value: 'marketing', action: 'continue', nextStep: 'service-intro' },
        { id: '4', text: '💬 General questions', value: 'general', action: 'continue', nextStep: 'general-help' }
      ]
    }
  };

  let messageData;

  if (context.type === 'local' && context.area) {
    messageData = greetings.local[context.area];
  } else {
    messageData = greetings[context.type] || greetings.other;
  }

  return {
    id: generateId(),
    type: 'bot',
    content: messageData.content,
    timestamp: new Date(),
    options: messageData.options
  };
}

function formatServiceName(service?: string): string {
  if (!service) return 'our services';

  const serviceNames: Record<string, string> = {
    'website-design': 'Website Design',
    'ai-chatbot': 'AI Chatbot Development',
    'local-marketing': 'Local Marketing',
    'automation': 'Business Automation',
    'growth-marketing': 'Growth Marketing',
    'ai-automation': 'AI Automation'
  };

  return serviceNames[service] || service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

// Calculate lead score based on conversation data
export function calculateLeadScore(state: ConversationState): number {
  let score = 0;

  // Page context scoring
  if (state.context.type === 'booking') score += 40;
  else if (state.context.type === 'contact') score += 30;
  else if (state.context.type === 'local') score += 25;
  else if (state.context.type === 'service') score += 20;

  // Intent scoring
  if (state.context.intent === 'ready-to-buy') score += 30;
  else if (state.context.intent === 'research') score += 15;
  else if (state.context.intent === 'comparison') score += 20;

  // User info scoring
  if (state.userInfo.email) score += 15;
  if (state.userInfo.phone) score += 10;
  if (state.userInfo.business) score += 10;
  if (state.userInfo.budget) score += 15;
  if (state.userInfo.timeline) score += 10;

  // Conversation engagement scoring
  score += Math.min(state.messages.filter(m => m.type === 'user').length * 2, 10);

  return Math.min(score, 100);
}

// Get next conversation step based on current state
export function getNextConversationStep(state: ConversationState, userChoice: string): ChatMessage {
  const { currentStep, context, userInfo, layer } = state;

  // Determine next layer based on conversation progress
  let newLayer = layer;
  const isQualificationStep = ['budget-qualification', 'timeline-qualification', 'business-details'].includes(currentStep);
  const isConversionStep = ['pricing-proposal', 'booking-assistance', 'consultation-scheduling'].includes(currentStep);

  if (layer === 1 && isQualificationStep) {
    newLayer = 2;
  } else if (layer <= 2 && isConversionStep) {
    newLayer = 3;
  }

  // Import the flow manager dynamically to avoid circular dependencies
  try {
    const { conversationFlowManager } = require('./chatbot-flows');

    // Layer 1: Context-aware responses
    if (newLayer === 1) {
      return conversationFlowManager.handleLayer1Flow(currentStep, userChoice, context);
    }

    // Layer 2: Information gathering
    if (newLayer === 2) {
      return conversationFlowManager.handleLayer2Flow(currentStep, userChoice, userInfo);
    }

    // Layer 3: Action and conversion
    if (newLayer === 3) {
      return conversationFlowManager.handleLayer3Flow(currentStep, userChoice, state);
    }
  } catch (error) {
    console.warn('Flow manager not available, using fallback responses');
  }

  // Fallback implementation
  return getFallbackResponse(currentStep, userChoice, context);
}

function getFallbackResponse(step: string, choice: string, context: PageContext): ChatMessage {
  return {
    id: generateId(),
    type: 'bot',
    content: "I'm here to help! Let me connect you with our team for personalized assistance.",
    timestamp: new Date(),
    options: [
      { id: '1', text: '📞 Book a call', value: 'call', action: 'book-call' },
      { id: '2', text: '📧 Get more info', value: 'info', action: 'collect-info' },
      { id: '3', text: '🔄 Start over', value: 'restart', action: 'continue', nextStep: 'greeting' }
    ]
  };
}
