"use client";

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// Simple inline components to avoid import issues
const Button = ({ children, onClick, className = '', disabled = false, variant = 'default', size = 'default' }: any) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground"
  };
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 text-sm",
    lg: "h-11 px-8"
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

const Input = ({ value, onChange, onKeyPress, placeholder, className = '', disabled = false }: any) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
    placeholder={placeholder}
    disabled={disabled}
    className={`flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
  />
);

// Simple icons as inline SVGs
const MessageCircleIcon = ({ className = '' }: any) => (
  <svg className={`h-6 w-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
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

const SparklesIcon = ({ className = '' }: any) => (
  <svg className={`h-4 w-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l2 7h7l2-7M5 3l-2 7h7l2-7M5 3v18l7-7 7 7V3" />
  </svg>
);

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  options?: Array<{
    id: string;
    text: string;
    value: string;
    action?: string;
  }>;
}

interface ChatbotProps {
  className?: string;
}

export default function IntelligentChatbot({ className = '' }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leadScore, setLeadScore] = useState(0);
  const [awaitingContactDetails, setAwaitingContactDetails] = useState(false);
  const [contactType, setContactType] = useState<'call' | 'email' | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Initialize conversation when chatbot opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      initializeConversation();
    }
  }, [isOpen]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const initializeConversation = () => {
    const greeting = generateContextualGreeting(pathname);
    setMessages([greeting]);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const generateContextualGreeting = (path: string): ChatMessage => {
    let content = "👋 Hi! I'm Postino's AI assistant. How can I help you today?";
    let options = [
      { id: '1', text: '🌐 Website Design', value: 'website-design' },
      { id: '2', text: '🤖 AI Chatbots', value: 'ai-chatbot' },
      { id: '3', text: '📈 Local Marketing', value: 'local-marketing' },
      { id: '4', text: '⚡ Business Automation', value: 'automation' }
    ];

    // Context-aware greetings
    if (path.includes('/bingham')) {
      content = "👋 Welcome! I see you're interested in our Bingham services. We're actually based right here in Bingham and offer special local rates! How can I help you grow your business?";
      options = [
        { id: '1', text: '💰 Get Local Pricing (25% off)', value: 'bingham-pricing' },
        { id: '2', text: '📅 Book Free Consultation', value: 'consultation' },
        { id: '3', text: '🎯 Learn About Services', value: 'services' },
        { id: '4', text: '⚡ Quick Quote', value: 'quote' }
      ];
    } else if (path.includes('/rushcliffe')) {
      content = "👋 Hello! I can see you're exploring our Rushcliffe services. We work with many businesses across West Bridgford and the borough. What's your main business challenge right now?";
      options = [
        { id: '1', text: '🌐 Need a Website', value: 'website' },
        { id: '2', text: '📱 Want More Customers', value: 'customers' },
        { id: '3', text: '🤖 Automate Processes', value: 'automation' },
        { id: '4', text: '💬 Not Sure Yet', value: 'explore' }
      ];
    } else if (path.includes('/book/')) {
      content = "🎉 Great choice! I can see you're ready to book a service. Let me help you complete your booking or answer any questions first.";
      options = [
        { id: '1', text: '✅ Continue Booking', value: 'continue-booking', action: 'redirect' },
        { id: '2', text: '❓ I have questions', value: 'questions' },
        { id: '3', text: '💰 Confirm pricing', value: 'pricing' },
        { id: '4', text: '📞 Speak to someone first', value: 'call', action: 'book-call' }
      ];
    } else if (path.includes('/contact')) {
      content = "👋 Perfect timing! I can help you get in touch or even get you started right away. What's the best way to help you?";
      options = [
        { id: '1', text: '⚡ Quick quote', value: 'quote' },
        { id: '2', text: '📅 Book consultation', value: 'consultation', action: 'book-call' },
        { id: '3', text: '💬 Chat now', value: 'chat' },
        { id: '4', text: '📞 Prefer to call', value: 'call' }
      ];
    }

    return {
      id: generateId(),
      type: 'bot',
      content,
      timestamp: new Date(),
      options
    };
  };

  const handleOptionClick = async (option: any) => {
    // Add user selection as a message
    const userMessage: ChatMessage = {
      id: generateId(),
      type: 'user',
      content: option.text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Handle special actions
    if (option.action === 'book-call') {
      handleBookCall();
      setIsTyping(false);
      return;
    }

    if (option.action === 'redirect') {
      handleRedirect(option.value);
      setIsTyping(false);
      return;
    }

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Check if we're entering contact collection mode
    if (option.value === 'provide-call-details') {
      setAwaitingContactDetails(true);
      setContactType('call');
    } else if (option.value === 'provide-email-details') {
      setAwaitingContactDetails(true);
      setContactType('email');
    }

    // Generate bot response
    const botResponse = generateBotResponse(option.value);
    setMessages(prev => [...prev, botResponse]);
    setLeadScore(prev => Math.min(prev + 10, 100));
    setIsTyping(false);
  };

  const generateBotResponse = (choice: string): ChatMessage => {
    const responses: Record<string, { content: string; options: any[] }> = {
      'website-design': {
        content: "Excellent choice! Professional websites are crucial for local businesses. Our websites typically increase credibility by 75% and boost leads significantly. Tell me about your current situation:",
        options: [
          { id: '1', text: '🌐 Yes, I have a website', value: 'has-website' },
          { id: '2', text: '🚀 Starting from scratch', value: 'no-website' },
          { id: '3', text: '🔄 Need a complete rebuild', value: 'rebuild' },
          { id: '4', text: '🤔 Not sure what I need', value: 'unsure-website' }
        ]
      },
      'has-website': {
        content: "Great! I'd love to understand what's working and what isn't. What do you LIKE about your current website?",
        options: [
          { id: '1', text: '🎨 I like the design/look', value: 'like-design' },
          { id: '2', text: '📱 Works well on mobile', value: 'like-mobile' },
          { id: '3', text: '⚡ Loads quickly', value: 'like-speed' },
          { id: '4', text: '❌ Nothing really', value: 'like-nothing' }
        ]
      },
      'like-design': {
        content: "That's great! Good design is important. Now, what do you DISLIKE or want to improve about your current website?",
        options: [
          { id: '1', text: '😞 Looks outdated', value: 'dislike-design' },
          { id: '2', text: '🐌 Too slow to load', value: 'dislike-speed' },
          { id: '3', text: '👻 No one can find it (SEO)', value: 'dislike-seo' },
          { id: '4', text: '💸 Doesn\'t generate leads', value: 'dislike-conversion' }
        ]
      },
      'like-mobile': {
        content: "Excellent! Mobile-friendly is crucial these days. What would you like to improve about your website?",
        options: [
          { id: '1', text: '🎨 Better design/appearance', value: 'improve-design' },
          { id: '2', text: '🔍 Better search visibility', value: 'improve-seo' },
          { id: '3', text: '📈 More leads/conversions', value: 'improve-conversion' },
          { id: '4', text: '⚡ Faster loading speed', value: 'improve-speed' }
        ]
      },
      'dislike-seo': {
        content: "That's a common issue! SEO is crucial for getting found online. I can definitely help with that. Would you like me to connect you with our team for a free website audit and consultation?",
        options: [
          { id: '1', text: '📞 Yes, book me a call', value: 'book-call-seo' },
          { id: '2', text: '📧 Email me details first', value: 'email-seo-info' },
          { id: '3', text: '💰 Tell me about pricing', value: 'seo-pricing' },
          { id: '4', text: '🤔 I have more questions', value: 'more-seo-questions' }
        ]
      },
      'book-call-seo': {
        content: "Perfect! I'll arrange that call. To ensure we connect at the best time, please provide: Your name, mobile number, and two preferred call times (e.g., 'Tuesday 2-4pm' and 'Friday mornings')",
        options: [
          { id: '1', text: '📝 I\'ll type my details now', value: 'provide-call-details' },
          { id: '2', text: '📧 Email me a form instead', value: 'email-call-form' }
        ]
      },
      'email-seo-info': {
        content: "Great choice! I'll email you our SEO guide and website audit information. What's your name and email address?",
        options: [
          { id: '1', text: '📝 I\'ll provide my email details', value: 'provide-email-details' },
          { id: '2', text: '📞 Actually, I prefer a call', value: 'prefer-call-instead' }
        ]
      },
      'provide-call-details': {
        content: "Perfect! Please type your details in your next message. I need:\n\n✅ Your name\n✅ Mobile number\n✅ Two preferred call times\n\nExample: 'John Smith, 07123456789, Tuesday 2-4pm, Friday mornings'",
        options: []
      },
      'provide-email-details': {
        content: "Great! Please type your details in your next message. I need:\n\n✅ Your name\n✅ Email address\n\nExample: 'John Smith, john@email.com'",
        options: []
      },
      'pricing-info': {
        content: "Our website design packages start from £150 deposit (total £1,500-£3,750 depending on requirements). This includes professional design, mobile optimization, basic SEO, and 1 year hosting. Would you like a personalized quote?",
        options: [
          { id: '1', text: '📞 Yes, call me with quote', value: 'book-call-pricing' },
          { id: '2', text: '📧 Email me pricing details', value: 'email-pricing' },
          { id: '3', text: '🎯 Tell me what\'s included', value: 'pricing-breakdown' }
        ]
      },
      'other-services': {
        content: "We offer comprehensive digital solutions: 🌐 Website Design, 🤖 AI Chatbots (like me!), 📈 Local SEO & Marketing, ⚡ Business Automation. What interests you most?",
        options: [
          { id: '1', text: '🤖 AI Chatbots', value: 'ai-chatbot' },
          { id: '2', text: '📈 Local Marketing', value: 'local-marketing' },
          { id: '3', text: '⚡ Business Automation', value: 'automation' },
          { id: '4', text: '💰 See all pricing', value: 'all-pricing' }
        ]
      },
      'satisfied': {
        content: "You're very welcome! We're excited to help you grow your business. Feel free to continue browsing our website or start another chat if you have more questions. Have a great day! 🌟",
        options: []
      },
      'ai-chatbot': {
        content: "Smart thinking! AI chatbots can handle 80% of customer inquiries automatically, saving you hours daily while improving customer satisfaction. What appeals to you most?",
        options: [
          { id: '1', text: '⏰ Save time on inquiries', value: 'save-time' },
          { id: '2', text: '🌙 24/7 customer service', value: '24-7-service' },
          { id: '3', text: '📈 Capture more leads', value: 'capture-leads' },
          { id: '4', text: '💰 See chatbot pricing', value: 'chatbot-pricing' }
        ]
      },
      'bingham-pricing': {
        content: "Fantastic! As a Bingham business, you get our 25% local discount. Here's what our local clients typically invest:",
        options: [
          { id: '1', text: '🌐 Website: £150-£3,750 (deposit £150)', value: 'website-pricing' },
          { id: '2', text: '🤖 AI Chatbot: £112.50-£2,250 (deposit £112.50)', value: 'chatbot-pricing' },
          { id: '3', text: '📈 Marketing: £60-£1,500/month (deposit £60)', value: 'marketing-pricing' },
          { id: '4', text: '💬 What fits my budget?', value: 'budget-help' }
        ]
      },
      'consultation': {
        content: "Perfect! A free consultation is the best way to create a tailored strategy for your business. I'll connect you with our team right away.",
        options: [
          { id: '1', text: '📞 Book 15-min quick call', value: 'quick-call', action: 'book-call' },
          { id: '2', text: '🎯 Book 45-min strategy session', value: 'strategy-session', action: 'book-call' },
          { id: '3', text: '📧 Email me details first', value: 'email-details', action: 'collect-info' }
        ]
      }
    };

    const response = responses[choice] || {
      content: "That's a great choice! Let me connect you with our team who can provide specific guidance for your situation.",
      options: [
        { id: '1', text: '📞 Quick call (15 min)', value: 'quick-call', action: 'book-call' },
        { id: '2', text: '📧 Email me info', value: 'email-info', action: 'collect-info' },
        { id: '3', text: '💬 Continue chatting', value: 'continue-chat' }
      ]
    };

    return {
      id: generateId(),
      type: 'bot',
      content: response.content,
      timestamp: new Date(),
      options: response.options
    };
  };

  const handleUserInput = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      id: generateId(),
      type: 'user',
      content: message.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Handle contact details submission
    if (awaitingContactDetails) {
      await handleContactSubmission(message.trim());
      setAwaitingContactDetails(false);
      setContactType(null);
      setIsTyping(false);
      return;
    }

    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate contextual response
    const botResponse = generateContextualResponse(message.trim());
    setMessages(prev => [...prev, botResponse]);
    setLeadScore(prev => Math.min(prev + 5, 100));
    setIsTyping(false);
  };

  const generateContextualResponse = (input: string): ChatMessage => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('budget')) {
      return {
        id: generateId(),
        type: 'bot',
        content: "I'd love to give you accurate pricing! Our services start from £150 for website design deposits. Let me understand your needs better to provide exact costs.",
        timestamp: new Date(),
        options: [
          { id: '1', text: '🌐 Website Design', value: 'website-pricing' },
          { id: '2', text: '🤖 AI Chatbot', value: 'chatbot-pricing' },
          { id: '3', text: '📈 Marketing', value: 'marketing-pricing' },
          { id: '4', text: '📞 Discuss budget', value: 'budget-call', action: 'book-call' }
        ]
      };
    }

    return {
      id: generateId(),
      type: 'bot',
      content: "That's a great question! I'd love to give you a detailed answer. Let me connect you with our team who can provide specific guidance for your situation.",
      timestamp: new Date(),
      options: [
        { id: '1', text: '📞 Quick call (15 min)', value: 'quick-call', action: 'book-call' },
        { id: '2', text: '📧 Email me info', value: 'email-info', action: 'collect-info' },
        { id: '3', text: '💬 Continue chatting', value: 'continue-chat' }
      ]
    };
  };

  const handleRedirect = (path: string) => {
    if (path === 'continue-booking') {
      const bookingForm = document.querySelector('[data-booking-form]');
      bookingForm?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleBookCall = () => {
    window.open('/contact?source=chatbot&action=book-call', '_blank');
  };

  const handleCollectInfo = () => {
    window.open('/contact?source=chatbot&action=collect-info', '_blank');
  };

  const handleContactSubmission = async (details: string) => {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Submit contact details (you can integrate with your form system here)
    try {
      // For now, we'll create a confirmation message
      // In production, you'd submit to your contact form endpoint

      const confirmationMessage: ChatMessage = {
        id: generateId(),
        type: 'bot',
        content: contactType === 'call'
          ? `Perfect! I've received your call details: "${details}". Our team will contact you within 24 hours at one of your preferred times. Thanks for choosing Postino!`
          : `Excellent! I've received your details: "${details}". We'll email you our information pack within the next hour. Keep an eye on your inbox!`,
        timestamp: new Date(),
        options: [
          { id: '1', text: '🎯 Tell me about pricing', value: 'pricing-info' },
          { id: '2', text: '📚 What else can you do?', value: 'other-services' },
          { id: '3', text: '✅ Perfect, thanks!', value: 'satisfied' }
        ]
      };

      setMessages(prev => [...prev, confirmationMessage]);
      setLeadScore(prev => Math.min(prev + 25, 100)); // Boost score for providing contact details

      // Here you would typically submit to your backend
      console.log('Contact submission:', {
        type: contactType,
        details: details,
        timestamp: new Date(),
        leadScore: leadScore + 25,
        source: 'chatbot'
      });

    } catch (error) {
      console.error('Error submitting contact details:', error);

      const errorMessage: ChatMessage = {
        id: generateId(),
        type: 'bot',
        content: "I apologize, there was a technical issue. Please try using our contact form instead, or start a new chat.",
        timestamp: new Date(),
        options: [
          { id: '1', text: '📞 Try contact form', value: 'contact-form', action: 'redirect' },
          { id: '2', text: '🔄 Start new chat', value: 'restart' }
        ]
      };

      setMessages(prev => [...prev, errorMessage]);
    }
  };

  if (!isOpen) {
    return (
      <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
        <div className="relative">
          {/* Pulse animation */}
          <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75" />

          {/* Chat button */}
          <Button
            onClick={() => setIsOpen(true)}
            className="relative bg-red-500 hover:bg-red-600 text-white rounded-full w-16 h-16 shadow-2xl group transition-all duration-300 hover:scale-110"
          >
            <MessageCircleIcon />

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              <div className="flex items-center space-x-2">
                <SparklesIcon />
                <span>Hi! I'm Postino's AI assistant</span>
              </div>
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
            </div>
          </Button>

          {/* Online indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full" />
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      <Card className="bg-white shadow-2xl w-96 h-[600px]">
        {/* Header */}
        <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <BotIcon />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 border border-white rounded-full" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Postino AI Assistant</h3>
                <p className="text-white/80 text-xs">Here to help you grow</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1"
            >
              <XIcon />
            </Button>
          </div>
        </CardHeader>

        {/* Messages */}
        <CardContent className="p-0 flex flex-col h-[520px]">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                  {/* Message bubble */}
                  <div
                    className={`px-4 py-2 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-red-500 text-white ml-2'
                        : 'bg-gray-100 text-gray-800 mr-2'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>

                  {/* Options */}
                  {message.options && message.options.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {message.options.map((option) => (
                        <Button
                          key={option.id}
                          variant="outline"
                          size="sm"
                          onClick={() => handleOptionClick(option)}
                          className="w-full text-left justify-start text-xs hover:bg-red-500 hover:text-white transition-colors"
                        >
                          {option.text}
                        </Button>
                      ))}
                    </div>
                  )}

                  {/* Timestamp */}
                  <p className={`text-xs text-gray-400 mt-1 ${
                    message.type === 'user' ? 'text-right' : 'text-left'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>

                {/* Avatar */}
                <div className={`${message.type === 'user' ? 'order-1' : 'order-2'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user'
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {message.type === 'user' ? <UserIcon /> : <BotIcon />}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <BotIcon />
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-2xl">
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

          {/* Input area */}
          <div className="border-t p-4">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e: any) => setInputValue(e.target.value)}
                onKeyPress={(e: any) => e.key === 'Enter' && handleUserInput(inputValue)}
                placeholder={awaitingContactDetails
                  ? (contactType === 'call' ? "Name, mobile, preferred times..." : "Name, email address...")
                  : "Type your message..."
                }
                className="flex-1 text-sm"
                disabled={isTyping}
              />
              <Button
                onClick={() => handleUserInput(inputValue)}
                disabled={!inputValue.trim() || isTyping}
                className="bg-red-500 hover:bg-red-600 text-white px-3"
              >
                <SendIcon />
              </Button>
            </div>

            {/* Quick actions */}
            <div className="mt-3 flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleBookCall}
                className="text-xs flex items-center space-x-1"
              >
                <PhoneIcon />
                <span>Book Call</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCollectInfo}
                className="text-xs flex items-center space-x-1"
              >
                <MailIcon />
                <span>Get Info</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
