import type {
  ConversationState,
  ChatMessage,
  PageContext,
  ChatOption
} from './chatbot-context';

// Enhanced conversation flow manager for 3-layer system
export class ConversationFlowManager {
  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  // Layer 1: Context-aware initial interactions
  handleLayer1Flow(step: string, choice: string, context: PageContext): ChatMessage {
    const flows: Record<string, (choice: string, context: PageContext) => ChatMessage> = {
      'service-intro': this.handleServiceIntro.bind(this),
      'local-pricing': this.handleLocalPricing.bind(this),
      'needs-assessment': this.handleNeedsAssessment.bind(this),
      'general-help': this.handleGeneralHelp.bind(this),
      'service-overview': this.handleServiceOverview.bind(this),
      'quick-quote': this.handleQuickQuote.bind(this),
      'discovery': this.handleDiscovery.bind(this),
      'business-application': this.handleBusinessApplication.bind(this)
    };

    const handler = flows[step];
    return handler ? handler(choice, context) : this.getDefaultResponse();
  }

  // Layer 2: Information gathering and qualification
  handleLayer2Flow(step: string, choice: string, userInfo: any): ChatMessage {
    const flows: Record<string, (choice: string, userInfo: any) => ChatMessage> = {
      'budget-qualification': this.handleBudgetQualification.bind(this),
      'timeline-qualification': this.handleTimelineQualification.bind(this),
      'business-details': this.handleBusinessDetails.bind(this),
      'requirements-gathering': this.handleRequirementsGathering.bind(this),
      'pain-points': this.handlePainPoints.bind(this),
      'current-situation': this.handleCurrentSituation.bind(this),
      'goals-definition': this.handleGoalsDefinition.bind(this),
      'decision-process': this.handleDecisionProcess.bind(this)
    };

    const handler = flows[step];
    return handler ? handler(choice, userInfo) : this.getQualificationDefault(userInfo);
  }

  // Layer 3: Action and conversion
  handleLayer3Flow(step: string, choice: string, state: ConversationState): ChatMessage {
    const flows: Record<string, (choice: string, state: ConversationState) => ChatMessage> = {
      'pricing-proposal': this.handlePricingProposal.bind(this),
      'booking-assistance': this.handleBookingAssistance.bind(this),
      'consultation-scheduling': this.handleConsultationScheduling.bind(this),
      'proposal-generation': this.handleProposalGeneration.bind(this),
      'next-steps': this.handleNextSteps.bind(this),
      'closing-conversion': this.handleClosingConversion.bind(this),
      'follow-up-setup': this.handleFollowUpSetup.bind(this)
    };

    const handler = flows[step];
    return handler ? handler(choice, state) : this.getConversionDefault(state);
  }

  // Layer 1 Handlers
  private handleServiceIntro(choice: string, context: PageContext): ChatMessage {
    const serviceResponses: Record<string, string> = {
      'website-design': `Perfect! Website design is crucial for ${context.area || 'local'} businesses. A professional website can increase your credibility by 75% and boost leads significantly.`,
      'ai-chatbot': `Excellent choice! AI chatbots can handle 80% of customer inquiries automatically, saving you hours daily while improving customer satisfaction.`,
      'local-marketing': `Smart thinking! Local marketing is essential for ${context.area || 'area'} businesses. We can help you dominate local search and attract nearby customers.`,
      'automation': `Automation is a game-changer! Our clients typically save 10-15 hours per week while improving accuracy and customer experience.`
    };

    const content = serviceResponses[choice] || `Great choice! Let me tell you more about ${choice}.`;

    return {
      id: this.generateId(),
      type: 'bot',
      content: `${content} What's your main business challenge right now?`,
      timestamp: new Date(),
      options: [
        { id: '1', text: '🎯 Not enough customers', value: 'customers', action: 'continue', nextStep: 'customer-acquisition' },
        { id: '2', text: '⏰ Too much manual work', value: 'efficiency', action: 'continue', nextStep: 'efficiency-improvement' },
        { id: '3', text: '💰 Competitors beating us', value: 'competition', action: 'continue', nextStep: 'competitive-analysis' },
        { id: '4', text: '🌐 Outdated online presence', value: 'online-presence', action: 'continue', nextStep: 'digital-transformation' }
      ]
    };
  }

  private handleLocalPricing(choice: string, context: PageContext): ChatMessage {
    const localDiscounts: Record<string, string> = {
      'bingham': '25% local discount',
      'rushcliffe': '20% borough discount',
      'nottingham': '15% regional discount'
    };

    const discount = localDiscounts[context.area || 'nottingham'];

    return {
      id: this.generateId(),
      type: 'bot',
      content: `Fantastic! As a ${context.area} business, you qualify for our ${discount}. Here's what our local clients typically invest:`,
      timestamp: new Date(),
      options: [
        { id: '1', text: '🌐 Website: £150-£3,750 (deposit £150)', value: 'website-pricing', action: 'continue', nextStep: 'budget-qualification' },
        { id: '2', text: '🤖 AI Chatbot: £112.50-£2,250 (deposit £112.50)', value: 'chatbot-pricing', action: 'continue', nextStep: 'budget-qualification' },
        { id: '3', text: '📈 Marketing: £60-£1,500/month (deposit £60)', value: 'marketing-pricing', action: 'continue', nextStep: 'budget-qualification' },
        { id: '4', text: '💬 What fits my budget?', value: 'budget-help', action: 'continue', nextStep: 'budget-consultation' }
      ]
    };
  }

  private handleNeedsAssessment(choice: string, context: PageContext): ChatMessage {
    return {
      id: this.generateId(),
      type: 'bot',
      content: "Perfect! Let me understand your specific situation better. What type of business do you run?",
      timestamp: new Date(),
      options: [
        { id: '1', text: '🏪 Retail/Shop', value: 'retail', action: 'continue', nextStep: 'retail-needs' },
        { id: '2', text: '🏥 Healthcare/Medical', value: 'healthcare', action: 'continue', nextStep: 'healthcare-needs' },
        { id: '3', text: '🏠 Home Services', value: 'home-services', action: 'continue', nextStep: 'service-business-needs' },
        { id: '4', text: '💼 Professional Services', value: 'professional', action: 'continue', nextStep: 'professional-needs' },
        { id: '5', text: '🍽️ Restaurant/Food', value: 'food', action: 'continue', nextStep: 'food-business-needs' },
        { id: '6', text: '🔧 Other/Not sure', value: 'other', action: 'continue', nextStep: 'general-business-needs' }
      ]
    };
  }

  private handleGeneralHelp(choice: string, context: PageContext): ChatMessage {
    return {
      id: this.generateId(),
      type: 'bot',
      content: "I'm here to help! I can assist you with understanding our services, getting pricing, or connecting you with our team. What would be most helpful?",
      timestamp: new Date(),
      options: [
        { id: '1', text: '💰 Get pricing info', value: 'pricing', action: 'continue', nextStep: 'pricing-overview' },
        { id: '2', text: '🎯 Find right service', value: 'recommendations', action: 'continue', nextStep: 'service-recommendations' },
        { id: '3', text: '📞 Speak to expert', value: 'expert', action: 'book-call' },
        { id: '4', text: '📧 Email me details', value: 'email', action: 'collect-info' }
      ]
    };
  }

  private handleServiceOverview(choice: string, context: PageContext): ChatMessage {
    return {
      id: this.generateId(),
      type: 'bot',
      content: "Excellent! We specialize in helping local businesses grow with digital marketing and AI automation. Here's what we offer:",
      timestamp: new Date(),
      options: [
        { id: '1', text: '🌐 Website Design & Development', value: 'website-detail', action: 'continue', nextStep: 'website-details' },
        { id: '2', text: '🤖 AI Chatbots & Automation', value: 'ai-detail', action: 'continue', nextStep: 'ai-details' },
        { id: '3', text: '📈 Local SEO & Marketing', value: 'marketing-detail', action: 'continue', nextStep: 'marketing-details' },
        { id: '4', text: '⚡ Business Process Automation', value: 'automation-detail', action: 'continue', nextStep: 'automation-details' }
      ]
    };
  }

  private handleQuickQuote(choice: string, context: PageContext): ChatMessage {
    return {
      id: this.generateId(),
      type: 'bot',
      content: "Perfect! I can give you a quick estimate. To provide accurate pricing, I need to understand your requirements better. What's your main need?",
      timestamp: new Date(),
      options: [
        { id: '1', text: '🌐 New website', value: 'website-quote', action: 'continue', nextStep: 'website-requirements' },
        { id: '2', text: '🤖 AI chatbot', value: 'chatbot-quote', action: 'continue', nextStep: 'chatbot-requirements' },
        { id: '3', text: '📈 Marketing help', value: 'marketing-quote', action: 'continue', nextStep: 'marketing-requirements' },
        { id: '4', text: '🔧 Business automation', value: 'automation-quote', action: 'continue', nextStep: 'automation-requirements' }
      ]
    };
  }

  private handleDiscovery(choice: string, context: PageContext): ChatMessage {
    return {
      id: this.generateId(),
      type: 'bot',
      content: "No worries! That's exactly why I'm here. Let me help you discover what might work best for your business. What's your biggest frustration right now?",
      timestamp: new Date(),
      options: [
        { id: '1', text: '😤 Not enough customers', value: 'low-customers', action: 'continue', nextStep: 'customer-acquisition-needs' },
        { id: '2', text: '⏰ Too much manual work', value: 'manual-work', action: 'continue', nextStep: 'automation-discovery' },
        { id: '3', text: '🌐 Website looks outdated', value: 'outdated-website', action: 'continue', nextStep: 'website-assessment' },
        { id: '4', text: '🤔 Don\'t know where to start', value: 'unsure', action: 'continue', nextStep: 'business-consultation' }
      ]
    };
  }

  private handleBusinessApplication(choice: string, context: PageContext): ChatMessage {
    return {
      id: this.generateId(),
      type: 'bot',
      content: "Excellent! I love helping businesses implement what they've learned. Based on our blog content, what aspect interests you most?",
      timestamp: new Date(),
      options: [
        { id: '1', text: '🎯 SEO strategy', value: 'seo-implementation', action: 'continue', nextStep: 'seo-consultation' },
        { id: '2', text: '🤖 AI automation', value: 'ai-implementation', action: 'continue', nextStep: 'ai-consultation' },
        { id: '3', text: '📝 Content strategy', value: 'content-implementation', action: 'continue', nextStep: 'content-consultation' },
        { id: '4', text: '📞 Discuss everything', value: 'full-consultation', action: 'book-call' }
      ]
    };
  }

  // Layer 2 Handlers
  private handleBudgetQualification(choice: string, userInfo: any): ChatMessage {
    return {
      id: this.generateId(),
      type: 'bot',
      content: "Great! Understanding your budget helps me recommend the best approach. What's your comfortable investment range for this project?",
      timestamp: new Date(),
      options: [
        { id: '1', text: '💰 £500-£1,500', value: 'budget-low', action: 'continue', nextStep: 'budget-optimization' },
        { id: '2', text: '💰 £1,500-£3,000', value: 'budget-mid', action: 'continue', nextStep: 'mid-tier-options' },
        { id: '3', text: '💰 £3,000-£5,000', value: 'budget-high', action: 'continue', nextStep: 'premium-options' },
        { id: '4', text: '💰 £5,000+', value: 'budget-premium', action: 'continue', nextStep: 'enterprise-options' },
        { id: '5', text: '🤔 Need guidance', value: 'budget-help', action: 'continue', nextStep: 'budget-consultation' }
      ]
    };
  }

  private handleTimelineQualification(choice: string, userInfo: any): ChatMessage {
    return {
      id: this.generateId(),
      type: 'bot',
      content: "Perfect! Timeline is important for planning. When would you ideally like to see results?",
      timestamp: new Date(),
      options: [
        { id: '1', text: '⚡ Within 2 weeks', value: 'urgent', action: 'continue', nextStep: 'urgent-solutions' },
        { id: '2', text: '📅 1-2 months', value: 'normal', action: 'continue', nextStep: 'standard-timeline' },
        { id: '3', text: '🗓️ 3-6 months', value: 'extended', action: 'continue', nextStep: 'comprehensive-approach' },
        { id: '4', text: '🤷 Flexible', value: 'flexible', action: 'continue', nextStep: 'optimal-planning' }
      ]
    };
  }

  private handleBusinessDetails(choice: string, userInfo: any): ChatMessage {
    return {
      id: this.generateId(),
      type: 'bot',
      content: "Excellent! Now I'm getting a clear picture. To give you the most accurate recommendations, can you tell me about your current online presence?",
      timestamp: new Date(),
      options: [
        { id: '1', text: '🌐 Have a website', value: 'has-website', action: 'continue', nextStep: 'website-assessment' },
        { id: '2', text: '📱 Just social media', value: 'social-only', action: 'continue', nextStep: 'digital-foundation' },
        { id: '3', text: '📞 Mostly word-of-mouth', value: 'traditional', action: 'continue', nextStep: 'digital-transformation' },
        { id: '4', text: '🚀 Starting from scratch', value: 'new-business', action: 'continue', nextStep: 'startup-package' }
      ]
    };
  }

  // Layer 3 Handlers
  private handlePricingProposal(choice: string, state: ConversationState): ChatMessage {
    const leadScore = state.leadScore;
    const isHighQuality = leadScore >= 70;

    return {
      id: this.generateId(),
      type: 'bot',
      content: `Based on our conversation, I can see you're serious about growing your business! ${isHighQuality ? 'As a qualified lead, I can offer you a special package.' : 'Let me create a custom proposal for you.'}`,
      timestamp: new Date(),
      options: [
        { id: '1', text: '💰 See pricing options', value: 'view-pricing', action: 'continue', nextStep: 'pricing-breakdown' },
        { id: '2', text: '📅 Book strategy call', value: 'strategy-call', action: 'book-call' },
        { id: '3', text: '🎯 Custom proposal', value: 'custom-proposal', action: 'continue', nextStep: 'proposal-form' },
        { id: '4', text: '⚡ Start immediately', value: 'start-now', action: 'continue', nextStep: 'immediate-booking' }
      ]
    };
  }

  private handleBookingAssistance(choice: string, state: ConversationState): ChatMessage {
    return {
      id: this.generateId(),
      type: 'bot',
      content: "Perfect! I'll help you secure your project slot. Our booking process is simple and you only pay a small refundable deposit to get started.",
      timestamp: new Date(),
      options: [
        { id: '1', text: '🌐 Book Website Design', value: 'book-website', action: 'redirect' },
        { id: '2', text: '🤖 Book AI Chatbot', value: 'book-chatbot', action: 'redirect' },
        { id: '3', text: '📈 Book Marketing', value: 'book-marketing', action: 'redirect' },
        { id: '4', text: '📞 Discuss first', value: 'discuss-first', action: 'book-call' }
      ]
    };
  }

  private handleConsultationScheduling(choice: string, state: ConversationState): ChatMessage {
    return {
      id: this.generateId(),
      type: 'bot',
      content: "Excellent choice! A consultation is the best way to create a tailored strategy for your business. What type of consultation would work best for you?",
      timestamp: new Date(),
      options: [
        { id: '1', text: '📞 Quick call (15 min)', value: 'quick-call', action: 'book-call' },
        { id: '2', text: '🎯 Strategy session (45 min)', value: 'strategy-session', action: 'book-call' },
        { id: '3', text: '🏢 In-person meeting', value: 'in-person', action: 'book-call' },
        { id: '4', text: '💻 Video consultation', value: 'video-call', action: 'book-call' }
      ]
    };
  }

  // Default responses
  private getDefaultResponse(): ChatMessage {
    return {
      id: this.generateId(),
      type: 'bot',
      content: "I'd love to help you with that! Let me connect you with our team for personalized assistance.",
      timestamp: new Date(),
      options: [
        { id: '1', text: '📞 Book a call', value: 'call', action: 'book-call' },
        { id: '2', text: '📧 Get more info', value: 'info', action: 'collect-info' },
        { id: '3', text: '🔄 Start over', value: 'restart', action: 'continue', nextStep: 'greeting' }
      ]
    };
  }

  private getQualificationDefault(userInfo: any): ChatMessage {
    return {
      id: this.generateId(),
      type: 'bot',
      content: "Based on what you've told me, I think we can definitely help! Let me get you connected with our team for a detailed consultation.",
      timestamp: new Date(),
      options: [
        { id: '1', text: '📞 Schedule consultation', value: 'consultation', action: 'book-call' },
        { id: '2', text: '📧 Email me details', value: 'email-details', action: 'collect-info' },
        { id: '3', text: '💰 Get pricing first', value: 'pricing-first', action: 'continue', nextStep: 'pricing-overview' }
      ]
    };
  }

  private getConversionDefault(state: ConversationState): ChatMessage {
    const { leadScore } = state;
    const isHighQuality = leadScore >= 70;

    return {
      id: this.generateId(),
      type: 'bot',
      content: `${isHighQuality ? 'You\'re clearly ready to move forward!' : 'I can see you\'re interested!'} Let's get you connected with our team to finalize everything.`,
      timestamp: new Date(),
      options: [
        { id: '1', text: '🚀 Let\'s do this!', value: 'proceed', action: 'book-call' },
        { id: '2', text: '📧 Send me proposal', value: 'proposal', action: 'collect-info' },
        { id: '3', text: '🤔 Need to think', value: 'consider', action: 'continue', nextStep: 'follow-up-setup' }
      ]
    };
  }
}

// Export singleton instance
export const conversationFlowManager = new ConversationFlowManager();
