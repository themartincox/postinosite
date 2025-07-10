"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Minimize2,
  Maximize2,
  Phone,
  Mail,
  Calendar,
  Sparkles
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import {
  detectPageContext,
  generateGreeting,
  getNextConversationStep,
  calculateLeadScore,
  type ConversationState,
  type ChatMessage,
  type ChatOption,
  type PageContext
} from '@/lib/chatbot-context';

interface ChatbotProps {
  className?: string;
}

export default function IntelligentChatbot({ className = '' }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [conversationState, setConversationState] = useState<ConversationState | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Initialize conversation when chatbot opens
  useEffect(() => {
    if (isOpen && !conversationState) {
      initializeConversation();
    }
  }, [isOpen]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [conversationState?.messages]);

  const initializeConversation = () => {
    const context = detectPageContext(pathname, document.title);
    const greeting = generateGreeting(context);

    const newState: ConversationState = {
      layer: 1,
      context,
      userInfo: {},
      leadScore: 0,
      conversationId: generateConversationId(),
      messages: [greeting],
      currentStep: 'greeting'
    };

    setConversationState(newState);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateConversationId = () => {
    return `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const handleOptionClick = async (option: ChatOption) => {
    if (!conversationState) return;

    // Add user selection as a message
    const userMessage: ChatMessage = {
      id: generateId(),
      type: 'user',
      content: option.text,
      timestamp: new Date(),
      metadata: { selectedOption: option }
    };

    // Update conversation state with user message
    const updatedState = {
      ...conversationState,
      messages: [...conversationState.messages, userMessage],
      currentStep: option.nextStep || conversationState.currentStep
    };

    setConversationState(updatedState);
    setIsTyping(true);

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    // Handle different actions
    if (option.action === 'redirect') {
      handleRedirect(option.value);
      setIsTyping(false);
      return;
    }

    if (option.action === 'book-call') {
      handleBookCall();
      setIsTyping(false);
      return;
    }

    if (option.action === 'collect-info') {
      handleCollectInfo();
      setIsTyping(false);
      return;
    }

    // Get bot response
    const botResponse = getNextConversationStep(updatedState, option.value);

    // Determine if layer should advance based on conversation flow
    let newLayer = updatedState.layer;
    const isQualificationStep = ['budget-qualification', 'timeline-qualification', 'business-details'].includes(option.nextStep || '');
    const isConversionStep = ['pricing-proposal', 'booking-assistance', 'consultation-scheduling'].includes(option.nextStep || '');

    if (updatedState.layer === 1 && isQualificationStep) {
      newLayer = 2;
    } else if (updatedState.layer <= 2 && isConversionStep) {
      newLayer = 3;
    }

    const finalState = {
      ...updatedState,
      layer: newLayer,
      messages: [...updatedState.messages, botResponse],
      leadScore: calculateLeadScore(updatedState)
    };

    setConversationState(finalState);
    setIsTyping(false);
  };

  const handleUserInput = async (message: string) => {
    if (!conversationState || !message.trim()) return;

    const userMessage: ChatMessage = {
      id: generateId(),
      type: 'user',
      content: message.trim(),
      timestamp: new Date()
    };

    const updatedState = {
      ...conversationState,
      messages: [...conversationState.messages, userMessage]
    };

    setConversationState(updatedState);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate contextual response based on input
    const botResponse = generateContextualResponse(message.trim(), updatedState);

    const finalState = {
      ...updatedState,
      messages: [...updatedState.messages, botResponse],
      leadScore: calculateLeadScore(updatedState)
    };

    setConversationState(finalState);
    setIsTyping(false);
  };

  const generateContextualResponse = (input: string, state: ConversationState): ChatMessage => {
    const lowerInput = input.toLowerCase();

    // Keyword-based responses
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('budget')) {
      return {
        id: generateId(),
        type: 'bot',
        content: "I'd love to give you accurate pricing! Our services start from £150 for website design deposits. Let me understand your needs better to provide exact costs.",
        timestamp: new Date(),
        options: [
          { id: '1', text: '🌐 Website Design', value: 'website-pricing', action: 'continue', nextStep: 'website-pricing' },
          { id: '2', text: '🤖 AI Chatbot', value: 'chatbot-pricing', action: 'continue', nextStep: 'chatbot-pricing' },
          { id: '3', text: '📈 Marketing', value: 'marketing-pricing', action: 'continue', nextStep: 'marketing-pricing' },
          { id: '4', text: '📞 Discuss budget', value: 'budget-call', action: 'book-call' }
        ]
      };
    }

    if (lowerInput.includes('time') || lowerInput.includes('long') || lowerInput.includes('quick')) {
      return {
        id: generateId(),
        type: 'bot',
        content: "Great question! Timelines vary by service. Websites typically take 2-4 weeks, chatbots 1-2 weeks, and marketing campaigns can start immediately. What's your ideal timeline?",
        timestamp: new Date(),
        options: [
          { id: '1', text: '⚡ ASAP (within 2 weeks)', value: 'urgent', action: 'continue', nextStep: 'urgent-timeline' },
          { id: '2', text: '📅 1-2 months', value: 'normal', action: 'continue', nextStep: 'normal-timeline' },
          { id: '3', text: '🤔 Flexible', value: 'flexible', action: 'continue', nextStep: 'flexible-timeline' },
          { id: '4', text: '📞 Discuss timeline', value: 'timeline-call', action: 'book-call' }
        ]
      };
    }

    if (lowerInput.includes('help') || lowerInput.includes('support') || lowerInput.includes('assistance')) {
      return {
        id: generateId(),
        type: 'bot',
        content: "I'm here to help! I can assist with information about our services, pricing, timelines, or connect you directly with our team. What would be most helpful?",
        timestamp: new Date(),
        options: [
          { id: '1', text: '💰 Pricing info', value: 'pricing-help', action: 'continue', nextStep: 'pricing-overview' },
          { id: '2', text: '🎯 Service recommendations', value: 'recommendations', action: 'continue', nextStep: 'service-recommendations' },
          { id: '3', text: '📞 Speak to expert', value: 'expert-help', action: 'book-call' },
          { id: '4', text: '🔄 Start over', value: 'restart', action: 'continue', nextStep: 'greeting' }
        ]
      };
    }

    // Default response for unrecognized input
    return {
      id: generateId(),
      type: 'bot',
      content: "That's a great question! I'd love to give you a detailed answer. Let me connect you with our team who can provide specific guidance for your situation.",
      timestamp: new Date(),
      options: [
        { id: '1', text: '📞 Quick call (15 min)', value: 'quick-call', action: 'book-call' },
        { id: '2', text: '📧 Email me info', value: 'email-info', action: 'collect-info' },
        { id: '3', text: '💬 Continue chatting', value: 'continue-chat', action: 'continue', nextStep: 'general-help' }
      ]
    };
  };

  const handleRedirect = (path: string) => {
    if (path === 'continue-booking') {
      // User is already on booking page, scroll to form
      const bookingForm = document.querySelector('[data-booking-form]');
      bookingForm?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleBookCall = () => {
    // Track lead action
    if (conversationState) {
      trackChatbotAction('book-call', {
        leadScore: conversationState.leadScore,
        context: conversationState.context,
        conversationId: conversationState.conversationId
      });
    }

    // Redirect to contact page or open calendar
    window.open('/contact?source=chatbot&action=book-call', '_blank');
  };

  const handleCollectInfo = () => {
    // Track lead action
    if (conversationState) {
      trackChatbotAction('collect-info', {
        leadScore: conversationState.leadScore,
        context: conversationState.context,
        conversationId: conversationState.conversationId
      });
    }

    // Open contact form
    window.open('/contact?source=chatbot&action=collect-info', '_blank');
  };

  const trackChatbotAction = (action: string, data: any) => {
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'chatbot_action', {
        action,
        lead_score: data.leadScore,
        page_context: data.context.type,
        conversation_id: data.conversationId
      });
    }
  };

  const generateId = () => Math.random().toString(36).substr(2, 9);

  if (!isOpen) {
    return (
      <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
        <div className="relative">
          {/* Pulse animation */}
          <div className="absolute inset-0 bg-coral-red rounded-full animate-ping opacity-75" />

          {/* Chat button */}
          <Button
            onClick={() => setIsOpen(true)}
            className="relative bg-coral-red hover:bg-coral-red/90 text-white rounded-full w-16 h-16 shadow-2xl group transition-all duration-300 hover:scale-110"
          >
            <MessageCircle className="h-6 w-6" />

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-midnight-blue text-white text-sm font-heading rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4" />
                <span>Hi! I'm Postino's AI assistant</span>
              </div>
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-midnight-blue" />
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
      <Card className={`bg-white shadow-2xl transition-all duration-300 ${
        isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
      }`}>
        {/* Header */}
        <CardHeader className="bg-gradient-to-r from-coral-red to-coral-red/90 text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 border border-white rounded-full" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm">Postino AI Assistant</h3>
                <p className="text-white/80 text-xs">
                  {conversationState && `Lead Score: ${conversationState.leadScore}%`}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 p-1"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {/* Messages */}
        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[520px]">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {conversationState?.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                    {/* Message bubble */}
                    <div
                      className={`px-4 py-2 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-coral-red text-white ml-2'
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
                            className="w-full text-left justify-start text-xs hover:bg-coral-red hover:text-white transition-colors"
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
                        ? 'bg-coral-red text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {message.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-gray-600" />
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
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleUserInput(inputValue)}
                  placeholder="Type your message..."
                  className="flex-1 text-sm"
                  disabled={isTyping}
                />
                <Button
                  onClick={() => handleUserInput(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-coral-red hover:bg-coral-red/90 text-white px-3"
                >
                  <Send className="h-4 w-4" />
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
                  <Phone className="h-3 w-3" />
                  <span>Book Call</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCollectInfo}
                  className="text-xs flex items-center space-x-1"
                >
                  <Mail className="h-3 w-3" />
                  <span>Get Info</span>
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
