"use client";

import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { getChatbotAnalytics } from '@/lib/chatbot-analytics';

// Simple inline components to avoid import issues
const Button = ({ children, onClick, className = '', disabled = false, variant = 'default', size = 'default' }: any) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    calendar: "bg-emerald-600 text-white hover:bg-emerald-700",
    urgent: "bg-red-600 text-white hover:bg-red-700"
  };
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 text-sm",
    lg: "h-11 px-8",
    xs: "h-8 px-2 text-xs"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = '' }: any) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '' }: any) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = '' }: any) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

const Input = ({ value, onChange, onKeyPress, placeholder, className = '', disabled = false, type = 'text' }: any) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
    placeholder={placeholder}
    disabled={disabled}
    className={`flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
  />
);

// Enhanced icons
const MessageCircleIcon = ({ className = '' }: any) => (
  <svg className={`h-6 w-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const CalendarIcon = ({ className = '' }: any) => (
  <svg className={`h-4 w-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ClockIcon = ({ className = '' }: any) => (
  <svg className={`h-4 w-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const XIcon = ({ className = '' }: any) => (
  <svg className={`h-4 w-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const BotIcon = ({ className = '' }: any) => (
  <svg className={`h-5 w-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const UserIcon = ({ className = '' }: any) => (
  <svg className={`h-4 w-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const SendIcon = ({ className = '' }: any) => (
  <svg className={`h-4 w-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const PhoneIcon = ({ className = '' }: any) => (
  <svg className={`h-3 w-3 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MailIcon = ({ className = '' }: any) => (
  <svg className={`h-3 w-3 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// Enhanced Types
interface Message {
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
  sentiment?: 'positive' | 'neutral' | 'negative';
  urgency?: 'low' | 'medium' | 'high';
  interests?: string[];
}

interface WeatherData {
  temperature: number;
  description: string;
  location: string;
}

interface BookingData {
  name: string;
  contact: string;
  timeSlot1: string;
  timeSlot2: string;
  platform: string;
  appointmentTime?: string;
  confirmed?: boolean;
}

interface UserPersonality {
  style: 'formal' | 'casual' | 'technical' | 'friendly';
  responseLength: 'short' | 'medium' | 'long';
  interests: string[];
  urgencyLevel: 'low' | 'medium' | 'high';
  preferredCommunication: 'direct' | 'consultative' | 'supportive';
}

interface ConversationContext {
  mentionedServices: string[];
  painPoints: string[];
  budget: string | null;
  timeline: string | null;
  previousExperience: string | null;
  businessType: string | null;
  companySize: string | null;
}

interface CalendarSlot {
  time: string;
  available: boolean;
  date: string;
  duration: number;
  start?: string;
  end?: string;
}

// Enhanced Intelligent Chatbot
export default function IntelligentChatbot() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [currentLayer, setCurrentLayer] = useState(1);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [bookingData, setBookingData] = useState<Partial<BookingData>>({});
  const [bookingStep, setBookingStep] = useState(0);
  const [showBookingPrompt, setShowBookingPrompt] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Analytics tracking - only initialize when chatbot is actually used
  const [analytics, setAnalytics] = useState<any>(null);

  // Initialize analytics only when chatbot is opened
  useEffect(() => {
    if (isOpen && !analytics && typeof window !== 'undefined') {
      setAnalytics(getChatbotAnalytics());
    }
  }, [isOpen, analytics]);

  // Enhanced conversation intelligence
  const [userPersonality, setUserPersonality] = useState<UserPersonality>({
    style: 'casual',
    responseLength: 'medium',
    interests: [],
    urgencyLevel: 'low',
    preferredCommunication: 'consultative'
  });

  const [conversationContext, setConversationContext] = useState<ConversationContext>({
    mentionedServices: [],
    painPoints: [],
    budget: null,
    timeline: null,
    previousExperience: null,
    businessType: null,
    companySize: null
  });

  // Real Google Calendar integration
  const [availableSlots, setAvailableSlots] = useState<CalendarSlot[]>([]);
  const [isCalendarAuthenticated, setIsCalendarAuthenticated] = useState(false);
  const [calendarLoading, setCalendarLoading] = useState(false);
  const [showPersonalityTip, setShowPersonalityTip] = useState(false);

  // Personality Detection System
  const analyzePersonality = (userMessage: string) => {
    const message = userMessage.toLowerCase();

    // Formality detection
    const formalKeywords = ['please', 'thank you', 'would like', 'appreciate', 'kindly', 'regards'];
    const casualKeywords = ['yeah', 'ok', 'cool', 'awesome', 'sure thing', 'no worries'];
    const technicalKeywords = ['integration', 'api', 'system', 'analytics', 'optimization', 'automation'];

    const formalScore = formalKeywords.filter(word => message.includes(word)).length;
    const casualScore = casualKeywords.filter(word => message.includes(word)).length;
    const technicalScore = technicalKeywords.filter(word => message.includes(word)).length;

    let style: 'formal' | 'casual' | 'technical' | 'friendly' = 'casual';
    if (formalScore > casualScore && formalScore > 0) style = 'formal';
    else if (technicalScore > 1) style = 'technical';
    else if (casualScore > 0) style = 'friendly';

    // Response length preference
    const responseLength: 'short' | 'medium' | 'long' =
      message.length < 20 ? 'short' :
      message.length > 100 ? 'long' : 'medium';

    // Urgency detection
    const urgentKeywords = ['urgent', 'asap', 'quickly', 'immediately', 'soon', 'deadline'];
    const urgencyLevel: 'low' | 'medium' | 'high' =
      urgentKeywords.some(word => message.includes(word)) ? 'high' :
      message.includes('need') || message.includes('want') ? 'medium' : 'low';

    setUserPersonality(prev => {
      // Show tip if personality style changes
      if (prev.style !== style && messages.length > 1) {
        setShowPersonalityTip(true);
        setTimeout(() => setShowPersonalityTip(false), 3000);
      }

      return {
        ...prev,
        style,
        responseLength,
        urgencyLevel
      };
    });
  };

  // Sentiment Analysis
  const analyzeSentiment = (userMessage: string): 'positive' | 'neutral' | 'negative' => {
    const message = userMessage.toLowerCase();

    const positiveWords = ['great', 'excellent', 'love', 'amazing', 'perfect', 'wonderful', 'fantastic', 'good', 'yes', 'definitely'];
    const negativeWords = ['terrible', 'awful', 'hate', 'bad', 'horrible', 'disappointed', 'frustrated', 'no', 'never'];

    const positiveScore = positiveWords.filter(word => message.includes(word)).length;
    const negativeScore = negativeWords.filter(word => message.includes(word)).length;

    if (positiveScore > negativeScore && positiveScore > 0) return 'positive';
    if (negativeScore > positiveScore && negativeScore > 0) return 'negative';
    return 'neutral';
  };

  // Context Extraction
  const extractContext = (userMessage: string) => {
    const message = userMessage.toLowerCase();

    // Service mentions
    const services = ['website', 'seo', 'chatbot', 'automation', 'marketing', 'social media', 'email', 'analytics'];
    const mentionedServices = services.filter(service => message.includes(service));

    // Pain points
    const painPoints = [];
    if (message.includes('customers') || message.includes('clients')) painPoints.push('customer_acquisition');
    if (message.includes('conversion') || message.includes('sales')) painPoints.push('conversion_optimization');
    if (message.includes('time') || message.includes('manual')) painPoints.push('time_efficiency');
    if (message.includes('competitive') || message.includes('ahead')) painPoints.push('competitive_advantage');

    // Budget indicators
    let budget = null;
    if (message.includes('budget') || message.includes('cost') || message.includes('price')) {
      if (message.includes('small') || message.includes('limited')) budget = 'small';
      else if (message.includes('flexible') || message.includes('invest')) budget = 'flexible';
      else budget = 'mentioned';
    }

    // Timeline
    let timeline = null;
    if (message.includes('urgent') || message.includes('asap')) timeline = 'immediate';
    else if (message.includes('month') || message.includes('soon')) timeline = 'short_term';
    else if (message.includes('year') || message.includes('long')) timeline = 'long_term';

    setConversationContext(prev => ({
      ...prev,
      mentionedServices: [...new Set([...prev.mentionedServices, ...mentionedServices])],
      painPoints: [...new Set([...prev.painPoints, ...painPoints])],
      budget: budget || prev.budget,
      timeline: timeline || prev.timeline
    }));
  };

  // Industry detection
  const getIndustryFromPath = () => {
    if (pathname.includes('/industries/dental')) return 'dental';
    if (pathname.includes('/industries/medical')) return 'medical';
    if (pathname.includes('/industries/cosmetic')) return 'cosmetic';
    if (pathname.includes('/industries/wellness') || pathname.includes('/wellness-beauty')) return 'wellness';
    if (pathname.includes('/ecommerce')) return 'ecommerce';
    return 'general';
  };

  // Get location from pathname
  const getLocationFromPath = () => {
    if (pathname.includes('/bingham')) return 'Bingham';
    if (pathname.includes('/rushcliffe')) return 'Rushcliffe';
    if (pathname.includes('/nottingham')) return 'Nottingham';
    return 'Nottinghamshire';
  };

  // Weather API integration
  const fetchWeatherData = async () => {
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    if (!apiKey) return null;

    const location = getLocationFromPath();
    const cityMap: Record<string, string> = {
      'Bingham': 'Bingham,GB',
      'Rushcliffe': 'West Bridgford,GB',
      'Nottingham': 'Nottingham,GB',
      'Nottinghamshire': 'Nottingham,GB'
    };

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityMap[location]}&appid=${apiKey}&units=metric`
      );

      if (response.ok) {
        const data = await response.json();
        return {
          temperature: Math.round(data.main.temp),
          description: data.weather[0].description,
          location: location
        };
      }
    } catch (error) {
      console.error('Weather fetch failed:', error);
    }
    return null;
  };

  // Enhanced British greetings with weather awareness
  const getWeatherAwareGreeting = () => {
    const location = getLocationFromPath();
    const industry = getIndustryFromPath();

    // Base regional greetings
    let greeting = "Hello there!";
    if (location === 'Nottingham') {
      greeting = "Ey up me duck!";
    } else if (location === 'Bingham' || location === 'Rushcliffe') {
      greeting = "Good morning!";
    }

    // Weather-enhanced greetings
    if (weatherData) {
      const temp = weatherData.temperature;
      const desc = weatherData.description.toLowerCase();

      if (temp >= 25) {
        greeting = `${greeting} Scorchio! It's absolutely roasting at ${temp}°C in ${location} today!`;
      } else if (temp <= 5) {
        greeting = `${greeting} Blimey, it's a bit nippy at ${temp}°C in ${location} today, isn't it?`;
      } else if (desc.includes('rain')) {
        greeting = `${greeting} Bit of a soggy day in ${location} with ${desc}, but perfect for a chat about growing your business!`;
      } else if (desc.includes('sun')) {
        greeting = `${greeting} Lovely ${temp}°C and ${desc} in ${location} today - brilliant weather for business growth!`;
      } else {
        greeting = `${greeting} ${temp}°C in ${location} today.`;
      }
    }

    return greeting;
  };

  // Adaptive response generation based on personality
  const adaptResponseToPersonality = (baseResponse: string): string => {
    const { style, responseLength, urgencyLevel } = userPersonality;

    if (style === 'formal') {
      return baseResponse
        .replace(/I'd/g, 'I would')
        .replace(/that's/g, 'that is')
        .replace(/we're/g, 'we are')
        .replace(/can't/g, 'cannot');
    }

    if (style === 'technical') {
      return baseResponse + ' I can provide detailed technical specifications if that would be helpful.';
    }

    if (urgencyLevel === 'high') {
      return `I understand this is urgent for you. ${baseResponse} I can prioritise getting you a quick response.`;
    }

    if (responseLength === 'short') {
      // Truncate to key points
      return baseResponse.split('.')[0] + '.';
    }

    return baseResponse;
  };

  // Generate contextual quick replies based on conversation state
  const getContextualQuickReplies = () => {
    const layer = currentLayer;
    const industry = getIndustryFromPath();

    if (bookingStep > 0) {
      // Booking flow quick replies
      if (bookingStep === 1) return ['Martin', 'John', 'Sarah', 'David'];
      if (bookingStep === 2) return ['Phone: 01234 567890', 'Email: name@email.com'];
      if (bookingStep === 4) return ['Zoom', 'Microsoft Teams', 'Phone call'];
      return [];
    }

    switch (layer) {
      case 1:
        return [
          'Tell me more about your services',
          'What makes you different?',
          'I need help with my website',
          'I want more customers'
        ];

      case 2:
        const industryQuickReplies: Record<string, string[]> = {
          dental: [
            'I need more NHS patients',
            'Improve online presence',
            'Better appointment booking',
            'Patient communication'
          ],
          medical: [
            'Reach more patients',
            'Reduce admin time',
            'Online appointments',
            'Digital marketing'
          ],
          general: [
            'Generate more leads',
            'Save time on admin',
            'Improve website',
            'Social media help'
          ]
        };
        return industryQuickReplies[industry] || industryQuickReplies.general;

      case 3:
        return [
          'What are your prices?',
          'How quickly can you start?',
          'Do you offer training?',
          'Tell me about local discounts'
        ];

      case 4:
        return [
          'I\'m interested',
          'What\'s the next step?',
          'I need to think about it',
          'Can we schedule a call?'
        ];

      default:
        return [
          'Tell me more',
          'What are your prices?',
          'I\'m interested',
          'Book a call'
        ];
    }
  };

  // Enhanced Layer Response System
  const getEnhancedLayerResponse = (layer: number, userMessage: string) => {
    const industry = getIndustryFromPath();
    const location = getLocationFromPath();
    const { mentionedServices, painPoints, timeline, budget } = conversationContext;

    // Analyze user input
    analyzePersonality(userMessage);
    extractContext(userMessage);
    const sentiment = analyzeSentiment(userMessage);

    let baseResponse = '';

    switch (layer) {
      case 2: // Enhanced Discovery with context awareness
        baseResponse = getEnhancedLayer2Response(industry, userMessage, mentionedServices, painPoints);
        break;
      case 3: // Solution Presentation with personalization
        baseResponse = getEnhancedLayer3Response(industry, userMessage, timeline, budget);
        break;
      case 4: // Advanced Objection Handling
        baseResponse = getEnhancedLayer4Response(industry, userMessage, sentiment);
        break;
      case 5: // Smart Booking with calendar integration
        return handleEnhancedBookingFlow(userMessage);
      default:
        baseResponse = "I'd be happy to help you explore our services further. What specific challenges is your business facing?";
    }

    return adaptResponseToPersonality(baseResponse);
  };

  const getEnhancedLayer2Response = (industry: string, userMessage: string, services: string[], painPoints: string[]) => {
    const message = userMessage.toLowerCase();

    // Context-aware follow-up questions
    if (services.length > 0) {
      const serviceSpecific = {
        website: "Excellent choice! Are you looking to improve conversion rates, enhance user experience, or perhaps create a completely new online presence?",
        seo: "Perfect! Is your main goal to rank higher locally, attract more qualified traffic, or perhaps improve your overall online visibility?",
        chatbot: "Brilliant! Are you thinking of automating customer service, capturing more leads, or providing 24/7 support to your clients?",
        automation: "Wonderful! Which processes are taking up most of your time - customer communications, lead nurturing, or operational tasks?"
      };

      const mentionedService = services[0];
      if (serviceSpecific[mentionedService as keyof typeof serviceSpecific]) {
        return serviceSpecific[mentionedService as keyof typeof serviceSpecific];
      }
    }

    if (painPoints.includes('customer_acquisition')) {
      return "I can see customer acquisition is a key focus for you. Are you finding it challenging to reach the right audience, or is it more about converting the traffic you already have?";
    }

    if (painPoints.includes('time_efficiency')) {
      return "Time efficiency is crucial for business growth! What tasks are currently eating up most of your day - admin work, customer communications, or marketing activities?";
    }

    // Fallback to industry-specific responses
    const industryResponses: Record<string, string[]> = {
      dental: [
        "Excellent! What's your main priority right now - attracting more NHS patients, improving your online presence, or perhaps enhancing patient communication?",
        "That's a common challenge for dental practices. Are you finding it difficult to stand out locally, or is it more about converting inquiries into actual appointments?"
      ],
      medical: [
        "Absolutely understand that priority. Are you looking to improve patient access to services, enhance your digital presence, or streamline operations?",
        "That's quite common with medical practices today. Is your main challenge reaching new patients, or improving the experience for existing ones?"
      ],
      general: [
        "Excellent! What's keeping you up at night about your business growth - is it generating leads, converting prospects, or perhaps operational efficiency?",
        "That's a challenge many SMEs face. Are you looking to improve your online presence, automate processes, or reach more customers?"
      ]
    };

    const responses = industryResponses[industry] || industryResponses.general;
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const getEnhancedLayer3Response = (industry: string, userMessage: string, timeline: string | null, budget: string | null) => {
    let baseResponse = getLayer3Response(industry, userMessage);

    // Add timeline-specific urgency
    if (timeline === 'immediate') {
      baseResponse += " I understand you need this sorted quickly - we can have initial systems running within 48 hours for urgent requirements.";
    } else if (timeline === 'short_term') {
      baseResponse += " With your timeline in mind, we typically see results within 2-4 weeks of implementation.";
    }

    // Add budget-conscious messaging
    if (budget === 'small') {
      baseResponse += " I appreciate budget is a consideration - that's exactly why we start with small, refundable deposits and offer local discounts.";
    } else if (budget === 'flexible') {
      baseResponse += " With your investment mindset, we can create a comprehensive growth strategy that scales with your success.";
    }

    return baseResponse;
  };

  const getEnhancedLayer4Response = (industry: string, userMessage: string, sentiment: string) => {
    const message = userMessage.toLowerCase();

    // Sentiment-aware objection handling
    let responseModifier = '';
    if (sentiment === 'negative') {
      responseModifier = "I completely understand your concerns - many clients have felt exactly the same way initially. ";
    } else if (sentiment === 'positive') {
      responseModifier = "I'm delighted you're interested! ";
    }

    const baseResponse = getLayer4Response(industry, userMessage);
    return responseModifier + baseResponse;
  };

  // Original response functions (preserved)
  const getLayer3Response = (industry: string, userMessage: string) => {
    const responses: Record<string, string> = {
      dental: "Perfect! For dental practices, we typically see fantastic results with our Local SEO package (£60/month) combined with our AI chatbot system (from £112.50). The chatbot handles appointment enquiries 24/7, while our SEO gets you found by local patients. We're seeing practices increase new patient bookings by 40-60% within 3 months. Plus, being local here in Nottinghamshire, we understand the specific challenges practices face in our area.",
      medical: "Excellent! Medical practices benefit enormously from our patient communication automation and local SEO services. Our AI systems can handle appointment scheduling, send reminders, and even pre-screen patients - while our local SEO ensures you're found by patients in your catchment area. We typically see a 50% reduction in admin time and 35% increase in appointment bookings. The best part? We train your team so you own the systems completely.",
      cosmetic: "Brilliant! For cosmetic clinics, we focus on building trust and showcasing results. Our website design services (£150-£3,750) create stunning galleries of your work, while our AI chatbots provide instant consultation booking and answer common treatment questions. We also implement review systems that build credibility. Clinics typically see 45% more qualified consultations and significantly higher conversion rates from website visitors.",
      wellness: "Wonderful! Wellness businesses thrive with our local marketing approach. We combine beautiful website design with smart booking automation and local SEO. Our AI systems can handle class bookings, send wellness tips, and even offer personalised treatment recommendations. We're seeing wellness centres increase bookings by 50% while reducing admin time by 40%. Plus, with our local discount for Nottinghamshire businesses, it's incredibly cost-effective.",
      ecommerce: "Perfect! For eCommerce, we implement AI-powered personalisation, automated email sequences, and conversion optimisation. Our systems can predict customer behaviour, automate cart recovery, and provide personalised product recommendations. We typically see 25-40% increases in conversion rates and 60% improvements in customer lifetime value. The automation handles the heavy lifting while you focus on product development and strategy.",
      general: "Excellent! We take a comprehensive approach combining AI automation with strategic marketing. Whether it's our website design services (£150-£3,750), AI chatbots (from £112.50), or local SEO (£60/month), everything works together. We're not just another agency - we train you to own your systems completely. Local businesses typically see 40-60% growth in leads and save 30% on operational costs. Being based right here in Nottinghamshire, we truly understand local business challenges."
    };

    return responses[industry] || responses.general;
  };

  const getLayer4Response = (industry: string, userMessage: string) => {
    const objectionHandlers: Record<string, string> = {
      price: "I completely understand budget is important. That's exactly why our pricing starts with small, refundable deposits - £60 for local SEO, £112.50 for AI chatbots, £150 for websites. Plus, as a local Nottinghamshire business, you qualify for our 25% local discount. Most clients see ROI within the first month, and we offer payment plans to make it work for your cash flow.",
      time: "Absolutely, time is precious! That's precisely why we handle everything for you. The AI chatbot works 24/7 from day one, our SEO runs automatically in the background, and we manage all the technical setup. You'll actually save time - most clients report 30% less admin work within weeks. We do the heavy lifting so you can focus on what you do best.",
      complexity: "I hear that concern often! We've designed everything to be incredibly simple. You don't need to understand the tech - we train you on just what you need to know. Think of it like getting a new phone: you don't need to know how it works internally, just how to use the apps that matter to you. We provide complete support every step of the way.",
      trust: "That's completely reasonable - there are lots of agencies out there! What sets us apart is three things: we're genuinely local (you can pop round for a coffee!), we train you to own your systems rather than keeping you dependent, and we offer a 25% local discount because we believe in supporting our community. Plus, all our deposits are refundable if you're not delighted with the results.",
      results: "Great question! We're confident because we've seen it work repeatedly with local businesses just like yours. That's why we offer refundable deposits and transparent reporting - you'll see exactly what's working. Most clients see improvements within 2-4 weeks, and significant growth within 3 months. If you're not seeing results, we work together until you do - or you get your money back.",
      default: "I completely understand your concern. Many business owners feel exactly the same way initially. What if we started with a quick 10-15 minute chat to explore your specific situation? No pressure, no sales pitch - just a genuine conversation about what might work best for your business. Sometimes it helps to talk it through with someone who understands the local market."
    };

    // Simple keyword matching for objections
    const message = userMessage.toLowerCase();
    if (message.includes('cost') || message.includes('price') || message.includes('expensive') || message.includes('budget')) {
      return objectionHandlers.price;
    }
    if (message.includes('time') || message.includes('busy') || message.includes('quick')) {
      return objectionHandlers.time;
    }
    if (message.includes('complicated') || message.includes('complex') || message.includes('difficult')) {
      return objectionHandlers.complexity;
    }
    if (message.includes('trust') || message.includes('agency') || message.includes('before') || message.includes('burned')) {
      return objectionHandlers.trust;
    }
    if (message.includes('work') || message.includes('results') || message.includes('guarantee') || message.includes('proof')) {
      return objectionHandlers.results;
    }

    return objectionHandlers.default;
  };

  // Enhanced Booking Flow with Calendar Integration
  const handleEnhancedBookingFlow = (userMessage: string) => {
    if (bookingStep === 0) {
      return "Excellent! I'd love to schedule a quick 10-15 minute introductory chat. No pressure, just a friendly conversation about your business goals. Could I start by getting your name?";
    }

    if (bookingStep === 1 && !bookingData.name) {
      setBookingData(prev => ({ ...prev, name: userMessage }));
      setBookingStep(2);
      return `Lovely to meet you, ${userMessage}! What's the best way to reach you - phone number or email address?`;
    }

    if (bookingStep === 2 && !bookingData.contact) {
      setBookingData(prev => ({ ...prev, contact: userMessage }));
      setBookingStep(3);

      // Show calendar instead of manual time collection
      setTimeout(() => setShowCalendar(true), 500);
      return "Perfect! I've got live availability right now. Let me show you some convenient times that work for both of us...";
    }

    if (bookingStep === 3 && !bookingData.appointmentTime) {
      // This will be handled by calendar selection
      return "Brilliant choice! What platform would you prefer for our chat - Zoom, Microsoft Teams, or a simple phone call?";
    }

    if (bookingStep === 4 && !bookingData.platform) {
      setBookingData(prev => ({ ...prev, platform: userMessage, confirmed: true }));

      // Use real Google Calendar booking
      setTimeout(async () => {
        setIsLoading(true);
        const confirmationMessage = await bookRealAppointment();

        const botMessage: Message = {
          role: 'bot',
          content: confirmationMessage,
          timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);

        // Refresh calendar availability
        fetchCalendarAvailability();
      }, 500);

      return `Perfect! Let me book that for you right now...`;
    }

    return "Well, that doesn't usually happen—shall we try again? What works best for you?";
  };

  // Fetch real calendar availability using client utilities
  const fetchCalendarAvailability = async () => {
    setCalendarLoading(true);
    try {
      const { fetchAvailableSlots, transformApiSlot } = await import('@/lib/calendar-client');
      const data = await fetchAvailableSlots();

      if (data.slots) {
        const transformedSlots = data.slots.map(transformApiSlot);
        setAvailableSlots(transformedSlots);
        setIsCalendarAuthenticated(data.authenticated);
      }
    } catch (error) {
      console.error('Failed to fetch calendar availability:', error);
      // Fallback to mock data
      setAvailableSlots([
        { time: '09:00', available: true, date: 'Tomorrow', duration: 15 },
        { time: '10:30', available: true, date: 'Tomorrow', duration: 15 },
        { time: '14:00', available: true, date: 'Tomorrow', duration: 15 },
        { time: '15:30', available: false, date: 'Tomorrow', duration: 15 },
        { time: '09:00', available: true, date: 'Friday', duration: 15 },
        { time: '11:00', available: true, date: 'Friday', duration: 15 },
        { time: '13:30', available: true, date: 'Friday', duration: 15 },
        { time: '16:00', available: true, date: 'Friday', duration: 15 }
      ]);
      setIsCalendarAuthenticated(false);
    } finally {
      setCalendarLoading(false);
    }
  };

  // Enhanced calendar booking with real API
  const handleCalendarBooking = async (slot: CalendarSlot) => {
    setBookingData(prev => ({
      ...prev,
      appointmentTime: `${slot.date} at ${slot.time}`
    }));
    setShowCalendar(false);
    setBookingStep(4);

    const confirmationMessage: Message = {
      role: 'bot',
      content: `Excellent! I've reserved ${slot.date} at ${slot.time} for our 15-minute chat. What platform would you prefer - Zoom, Microsoft Teams, or a simple phone call?`,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, confirmationMessage]);
  };

  // Book real appointment
  const bookRealAppointment = async () => {
    try {
      const selectedSlot = availableSlots.find(slot =>
        `${slot.date} at ${slot.time}` === bookingData.appointmentTime
      );

      if (!selectedSlot) {
        throw new Error('Selected time slot not found');
      }

      const { bookAppointment } = await import('@/lib/calendar-client');

      const result = await bookAppointment({
        attendeeEmail: bookingData.contact!,
        attendeeName: bookingData.name!,
        timeSlot: selectedSlot,
        platform: bookingData.platform!,
      });

      if (result.success) {
        // Log successful booking
        analytics?.logBookingCompleted(bookingData);
        return result.message;
      } else {
        throw new Error(result.error || 'Booking failed');
      }
    } catch (error) {
      console.error('Real booking failed:', error);
      // Return fallback confirmation
      return `Perfect! I've got all the details:\n\n• Name: ${bookingData.name}\n• Contact: ${bookingData.contact}\n• Time: ${bookingData.appointmentTime}\n• Platform: ${bookingData.platform}\n\n✅ We'll send you a calendar invitation shortly with all the details and meeting link.\n\nLooking forward to our chat! If anything comes up, just give us a ring on 0800 772 3291.`;
    }
  };

  // Industry-specific Layer 1 responses
  const getIndustryGreeting = () => {
    const industry = getIndustryFromPath();
    const weatherGreeting = getWeatherAwareGreeting();

    const industryMessages: Record<string, string> = {
      dental: `${weatherGreeting} I'm here to help dental practices like yours attract more patients and grow your practice. Whether you're looking to improve your online presence, get more NHS patients, or enhance patient communication, I'd love to chat about how we can help.`,
      medical: `${weatherGreeting} I specialise in helping medical practices improve their patient outreach and digital presence. From better appointment booking systems to reaching more patients in your local area, I'm here to support your practice growth.`,
      cosmetic: `${weatherGreeting} I work with cosmetic clinics to enhance their digital marketing and patient acquisition. Whether it's showcasing your treatments online, improving client consultations, or building trust through reviews, I'm here to help your clinic thrive.`,
      wellness: `${weatherGreeting} I help wellness and beauty businesses connect with more clients and grow their practice. From online booking systems to local SEO for beauty treatments, I'd be delighted to explore how we can enhance your business.`,
      ecommerce: `${weatherGreeting} I specialise in helping eCommerce businesses increase sales and improve their online presence. Whether it's website optimisation, automated customer journeys, or AI-powered recommendations, I'm here to boost your online success.`,
      general: `${weatherGreeting} I'm Martin from Postino, your local AI marketing partner here in ${getLocationFromPath()}. We help SMEs grow smarter with strategic marketing and cutting-edge automation. I'd love to explore how we can help your business thrive.`
    };

    return industryMessages[industry];
  };

  // Initialize chatbot
  useEffect(() => {
    const initializeChatbot = async () => {
      const weather = await fetchWeatherData();
      setWeatherData(weather);
    };

    initializeChatbot();
  }, [pathname]);

  // No auto-popup - users click chat when ready

  // Chat button available for manual activation - no auto-popup

  // Load calendar availability when calendar is shown
  useEffect(() => {
    if (showCalendar && availableSlots.length === 0) {
      fetchCalendarAvailability();
    }
  }, [showCalendar]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const startConversation = () => {
    setHasStarted(true);
    setShowBookingPrompt(false);
    setIsOpen(true);
    setCurrentLayer(1);

    const initialMessage: Message = {
      role: 'bot',
      content: getIndustryGreeting(),
      timestamp: new Date()
    };

    setMessages([initialMessage]);
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
      sentiment: analyzeSentiment(input.trim()),
      urgency: userPersonality.urgencyLevel,
      interests: conversationContext.mentionedServices
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Log user message
    analytics?.logUserMessage(
      userMessage.content,
      userMessage.sentiment,
      userMessage.urgency,
      currentLayer
    );

    // Simulate thinking time
    const responseStartTime = Date.now();
    setTimeout(() => {
      let botResponse = '';

      if (currentLayer === 5 || bookingStep > 0) {
        botResponse = handleEnhancedBookingFlow(userMessage.content);
      } else {
        botResponse = getEnhancedLayerResponse(currentLayer, userMessage.content);

        // Smart layer progression based on user engagement
        const message = userMessage.content.toLowerCase();

        if (currentLayer === 1) {
          // Always move to layer 2 after initial response
          setCurrentLayer(2);
        } else if (currentLayer === 2) {
          // Move to layer 3 if user shows interest or asks about solutions
          if (message.includes('price') || message.includes('cost') || message.includes('how') || message.includes('what') || message.includes('tell') || message.includes('more')) {
            setCurrentLayer(3);
          }
        } else if (currentLayer === 3) {
          // Move to layer 4 if user asks follow-up questions or shows objections
          if (message.includes('but') || message.includes('however') || message.includes('concern') || message.includes('worry') || message.includes('think') || message.includes('interested')) {
            setCurrentLayer(4);
          }
        } else if (currentLayer === 4) {
          // Move to booking if user shows readiness
          if (message.includes('book') || message.includes('call') || message.includes('schedule') || message.includes('meeting') || message.includes('chat') || message.includes('speak') || message.includes('next') || message.includes('interested')) {
            setCurrentLayer(5);
            setBookingStep(0);
            // Log booking started
            analytics?.logBookingStarted({ industry: getIndustryFromPath(), userMessage: message });
          }
        }
      }

      const botMessage: Message = {
        role: 'bot',
        content: botResponse,
        timestamp: new Date()
      };

      // Log bot response with timing
      const responseTime = Date.now() - responseStartTime;
      analytics?.logBotResponse(botResponse, responseTime, currentLayer);

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Handle chatbot close - log session end
  const handleClose = () => {
    if (hasStarted && messages.length > 0) {
      analytics?.logConversationEnd(currentLayer, messages.length);
    }
    setIsOpen(false);
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (hasStarted && messages.length > 0) {
        analytics?.logConversationEnd(currentLayer, messages.length);
      }
    };
  }, [hasStarted, messages.length, currentLayer, analytics]);

  return (
    <>
      {/* Enhanced booking prompt overlay */}
      {showBookingPrompt && !isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-gray-200">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <MessageCircleIcon className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Found what you need?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Want to schedule a quick 10-15 min intro call? I'm Martin from Postino, your local AI marketing partner here in {getLocationFromPath()}.
              </p>
            </div>

            <div className="space-y-3">
              <Button
                onClick={startConversation}
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Yes, let's chat!
              </Button>
              <Button
                onClick={() => setShowBookingPrompt(false)}
                variant="ghost"
                className="w-full text-gray-600 hover:text-gray-800"
              >
                Not right now
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Calendar overlay */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <CalendarIcon className="mr-2" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Choose Your Time</h3>
                  <p className="text-xs text-gray-500">
                    {isCalendarAuthenticated ? '🟢 Live Google Calendar' : '🔵 Available Times'}
                  </p>
                </div>
              </div>
              <Button
                onClick={() => setShowCalendar(false)}
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
              >
                <XIcon />
              </Button>
            </div>

            {!isCalendarAuthenticated && (
              <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800">
                  📅 <strong>Connect Google Calendar</strong> for real-time availability or use our standard booking times below.
                </p>
                <Button
                  onClick={() => window.open('/api/auth/google', '_blank')}
                  variant="outline"
                  size="xs"
                  className="mt-2 text-xs border-amber-300 text-amber-700 hover:bg-amber-100"
                >
                  🔗 Connect Calendar
                </Button>
              </div>
            )}

            <p className="text-gray-600 mb-4">
              Select a convenient 15-minute slot for our introductory chat:
            </p>

            {calendarLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
                <span className="ml-3 text-gray-600">Loading availability...</span>
              </div>
            ) : (
              <div className="space-y-4">
                {availableSlots.length > 0 ? (
                  // Group slots by date
                  [...new Set(availableSlots.map(slot => slot.date))].map(date => (
                    <div key={date}>
                      <h4 className="font-semibold text-gray-900 mb-2">{date}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {availableSlots
                          .filter(slot => slot.date === date)
                          .map((slot, index) => (
                            <Button
                              key={index}
                              onClick={() => handleCalendarBooking(slot)}
                              disabled={!slot.available}
                              variant={slot.available ? "outline" : "ghost"}
                              size="sm"
                              className={`justify-start ${
                                !slot.available
                                  ? 'opacity-50 cursor-not-allowed'
                                  : 'hover:bg-emerald-50 hover:border-emerald-300'
                              }`}
                            >
                              <ClockIcon className="mr-2" />
                              {slot.time}
                              {!slot.available && ' (Booked)'}
                            </Button>
                          ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-6">
                    <p className="text-gray-500 mb-4">No available slots found.</p>
                    <Button
                      onClick={fetchCalendarAvailability}
                      variant="outline"
                      size="sm"
                    >
                      Refresh Availability
                    </Button>
                  </div>
                )}
              </div>
            )}

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>✅ What to expect:</strong> A friendly 15-minute chat about your business goals with no pressure or sales pitch. I'll share some quick wins you can implement straight away.
              </p>
              {isCalendarAuthenticated && (
                <p className="text-xs text-green-700 mt-2">
                  📅 Real-time availability • Automatic calendar invites • Instant confirmations
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Chatbot toggle button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => {
            if (!hasStarted) {
              startConversation();
            } else {
              setIsOpen(!isOpen);
            }
          }}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <MessageCircleIcon />
        </Button>

        {/* Urgency indicator */}
        {userPersonality.urgencyLevel === 'high' && (
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        )}
      </div>

      {/* Enhanced chatbot window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] z-40">
          <Card className="h-full flex flex-col shadow-2xl border-gray-200">
            <CardHeader className="border-b border-gray-200 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-t-lg p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <BotIcon />
                  <div>
                    <h3 className="font-semibold text-sm">Martin from Postino</h3>
                    <p className="text-xs text-blue-100">
                      {weatherData ? `${weatherData.temperature}°C in ${weatherData.location}` : 'AI Marketing Partner'} • {userPersonality.style} style
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {/* Engagement indicator */}
                  <div className="text-xs bg-white/20 px-2 py-1 rounded">
                    Layer {currentLayer}
                  </div>
                  <Button
                    onClick={handleClose}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20 h-8 w-8 p-0"
                  >
                    <XIcon />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-1 overflow-hidden p-0">
              <div className="h-full flex flex-col">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-3 space-y-3">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.role === 'user'
                            ? 'bg-blue-600 text-white ml-4'
                            : 'bg-gray-100 text-gray-900 mr-4'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.role === 'bot' && (
                            <BotIcon className="w-4 h-4 mt-0.5 text-gray-600" />
                          )}
                          {message.role === 'user' && (
                            <UserIcon className="w-4 h-4 mt-0.5 text-blue-100" />
                          )}
                          <div className="text-sm leading-relaxed whitespace-pre-wrap">
                            {message.content}
                          </div>
                        </div>

                        {/* Message metadata */}
                        {message.sentiment && message.role === 'user' && (
                          <div className="flex items-center mt-1 space-x-1">
                            {message.sentiment === 'positive' && <span className="text-xs">😊</span>}
                            {message.sentiment === 'negative' && <span className="text-xs">😔</span>}
                            {message.urgency === 'high' && <span className="text-xs">⚡</span>}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Personality detection tip */}
                  {showPersonalityTip && (
                    <div className="flex justify-center">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 text-xs text-blue-800 max-w-[90%]">
                        💡 I've detected you prefer a <strong>{userPersonality.style}</strong> communication style - I'll adapt my responses accordingly!
                      </div>
                    </div>
                  )}

                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-lg p-3 mr-4">
                        <div className="flex items-center space-x-2">
                          <BotIcon className="w-4 h-4 text-gray-600" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Enhanced input section */}
                <div className="border-t border-gray-200 p-3">
                  <div className="flex space-x-2">
                    <Input
                      value={input}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      disabled={isLoading}
                      className="flex-1"
                    />
                    <Button
                      onClick={sendMessage}
                      disabled={!input.trim() || isLoading}
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3"
                    >
                      <SendIcon />
                    </Button>
                  </div>

                  {/* Dynamic contextual quick replies */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {getContextualQuickReplies().map((reply, index) => (
                      <Button
                        key={index}
                        onClick={() => setInput(reply)}
                        variant="outline"
                        size="xs"
                        className="text-xs"
                      >
                        {reply}
                      </Button>
                    ))}

                    {/* Special action buttons */}
                    {currentLayer >= 4 && bookingStep === 0 && (
                      <Button
                        onClick={() => {
                          setCurrentLayer(5);
                          setBookingStep(0);
                          setInput("I'd like to book a call");
                          setTimeout(sendMessage, 100);
                        }}
                        variant="calendar"
                        size="xs"
                        className="bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100"
                      >
                        <CalendarIcon className="mr-1" />
                        Book a call
                      </Button>
                    )}

                    {userPersonality.urgencyLevel === 'high' && (
                      <Button
                        onClick={() => setInput("This is urgent, can we speak today?")}
                        variant="urgent"
                        size="xs"
                      >
                        ⚡ Urgent
                      </Button>
                    )}
                  </div>

                  {/* Conversation context display */}
                  <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                    <div>
                      {bookingStep > 0 ?
                        `Booking Step ${bookingStep}/4` :
                        `Conversation Layer ${currentLayer}`
                      }
                    </div>
                    {conversationContext.mentionedServices.length > 0 && (
                      <div>
                        {conversationContext.mentionedServices.slice(0, 2).join(', ')}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced contact info footer */}
          <div className="mt-2 text-center text-xs text-gray-500 bg-white rounded-lg p-2 shadow-sm border border-gray-200">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-1">
                <PhoneIcon />
                <span>0800 772 3291</span>
              </div>
              <div className="flex items-center space-x-1">
                <MailIcon />
                <span>hello@postino.cc</span>
              </div>
            </div>
            <p className="mt-1 text-gray-400">
              Bingham, Nottinghamshire • Live calendar booking available
            </p>
          </div>
        </div>
      )}
    </>
  );
}
