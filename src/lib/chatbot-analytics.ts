// Chatbot Analytics & Logging System
export interface ChatbotEvent {
  eventType: 'conversation_start' | 'message_sent' | 'message_received' | 'booking_started' | 'booking_completed' | 'conversation_end';
  timestamp: Date;
  sessionId: string;
  userId?: string;
  messageContent?: string;
  userSentiment?: 'positive' | 'neutral' | 'negative';
  urgencyLevel?: 'low' | 'medium' | 'high';
  conversationLayer?: number;
  industry?: string;
  location?: string;
  bookingData?: any;
  responseTime?: number;
  errorMessage?: string;
}

export interface ConversationSession {
  sessionId: string;
  startTime: Date;
  endTime?: Date;
  messageCount: number;
  industry: string;
  location: string;
  userPersonality: any;
  conversationContext: any;
  bookingAttempted: boolean;
  bookingCompleted: boolean;
  finalLayer: number;
  totalDuration?: number;
}

class ChatbotAnalytics {
  private sessionId: string;
  private sessionStartTime: Date;
  private events: ChatbotEvent[] = [];

  constructor() {
    this.sessionId = this.generateSessionId();
    this.sessionStartTime = new Date();
    this.logEvent('conversation_start');
  }

  private generateSessionId(): string {
    return `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Log chatbot events
  logEvent(eventType: ChatbotEvent['eventType'], data?: Partial<ChatbotEvent>) {
    const event: ChatbotEvent = {
      eventType,
      timestamp: new Date(),
      sessionId: this.sessionId,
      ...data
    };

    this.events.push(event);

    // Send to Google Analytics if available
    this.sendToGoogleAnalytics(event);

    // Send to server for storage (if endpoint exists)
    this.sendToServer(event);

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Chatbot Event:', event);
    }
  }

  // Google Analytics integration
  private sendToGoogleAnalytics(event: ChatbotEvent) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.eventType, {
        event_category: 'Chatbot',
        event_label: event.industry || 'general',
        custom_parameter_1: event.conversationLayer,
        custom_parameter_2: event.urgencyLevel,
        custom_parameter_3: event.userSentiment,
      });
    }
  }

  // Send to server endpoint for storage
  private async sendToServer(event: ChatbotEvent) {
    try {
      await fetch('/api/chatbot/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
      });
    } catch (error) {
      // Silently fail - analytics shouldn't break the app
      console.warn('Failed to send analytics:', error);
    }
  }

  // Log user message
  logUserMessage(content: string, sentiment?: string, urgency?: string, layer?: number) {
    this.logEvent('message_sent', {
      messageContent: content,
      userSentiment: sentiment as any,
      urgencyLevel: urgency as any,
      conversationLayer: layer
    });
  }

  // Log bot response
  logBotResponse(content: string, responseTime: number, layer?: number) {
    this.logEvent('message_received', {
      messageContent: content,
      responseTime,
      conversationLayer: layer
    });
  }

  // Log booking events
  logBookingStarted(bookingData: any) {
    this.logEvent('booking_started', { bookingData });
  }

  logBookingCompleted(bookingData: any) {
    this.logEvent('booking_completed', { bookingData });
  }

  // Log conversation end
  logConversationEnd(finalLayer: number, messageCount: number) {
    const duration = Date.now() - this.sessionStartTime.getTime();
    this.logEvent('conversation_end', {
      conversationLayer: finalLayer,
      responseTime: duration
    });

    // Generate session summary
    this.generateSessionSummary(messageCount, duration);
  }

  // Generate session summary for business intelligence
  private generateSessionSummary(messageCount: number, duration: number) {
    const summary = {
      sessionId: this.sessionId,
      totalDuration: duration,
      messageCount,
      events: this.events,
      conversionFunnel: this.analyzeConversionFunnel(),
      userJourney: this.mapUserJourney()
    };

    // Send summary to analytics endpoint
    this.sendSessionSummary(summary);
  }

  private analyzeConversionFunnel() {
    return {
      conversationStarted: this.events.some(e => e.eventType === 'conversation_start'),
      messagesExchanged: this.events.filter(e => e.eventType === 'message_sent').length > 0,
      bookingStarted: this.events.some(e => e.eventType === 'booking_started'),
      bookingCompleted: this.events.some(e => e.eventType === 'booking_completed')
    };
  }

  private mapUserJourney() {
    return this.events.map(event => ({
      step: event.eventType,
      timestamp: event.timestamp,
      layer: event.conversationLayer,
      sentiment: event.userSentiment
    }));
  }

  private async sendSessionSummary(summary: any) {
    try {
      await fetch('/api/chatbot/session-summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(summary)
      });
    } catch (error) {
      console.warn('Failed to send session summary:', error);
    }
  }

  // Get analytics data for admin dashboard
  static async getAnalyticsSummary(timeRange = '7d') {
    try {
      const response = await fetch(`/api/chatbot/analytics-summary?range=${timeRange}`);
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch analytics summary:', error);
      return null;
    }
  }
}

// Singleton instance
let analyticsInstance: ChatbotAnalytics | null = null;

export function getChatbotAnalytics(): ChatbotAnalytics {
  if (!analyticsInstance) {
    analyticsInstance = new ChatbotAnalytics();
  }
  return analyticsInstance;
}

// Reset analytics for new session
export function resetChatbotAnalytics(): void {
  analyticsInstance = new ChatbotAnalytics();
}

export default ChatbotAnalytics;
