// Server-side only - Google Calendar API integration

import { google } from 'googleapis';

// Google Calendar Configuration
const SCOPES = ['https://www.googleapis.com/auth/calendar'];

export interface CalendarEvent {
  id?: string;
  summary: string;
  description?: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  attendees?: Array<{
    email: string;
    displayName?: string;
  }>;
  location?: string;
  conferenceData?: {
    createRequest: {
      requestId: string;
      conferenceSolutionKey: {
        type: 'hangoutsMeet' | 'zoom' | 'teams';
      };
    };
  };
}

export interface TimeSlot {
  start: string;
  end: string;
  available: boolean;
  date: string;
  duration: number;
}

export interface AvailabilityRequest {
  timeMin: string;
  timeMax: string;
  timeZone: string;
  items: Array<{ id: string }>;
}

class GoogleCalendarService {
  private oauth2Client: any;
  private calendar: any;
  private isInitialized = false;

  constructor() {
    this.initializeAuth();
  }

  private initializeAuth() {
    try {
      this.oauth2Client = new google.auth.OAuth2(
        process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI
      );

      this.calendar = google.calendar({ version: 'v3', auth: this.oauth2Client });
      this.isInitialized = true;
    } catch (error) {
      console.error('Failed to initialize Google Calendar auth:', error);
      this.isInitialized = false;
    }
  }

  public async setCredentials(accessToken: string, refreshToken?: string) {
    if (!this.isInitialized) {
      throw new Error('Google Calendar service not initialized');
    }

    this.oauth2Client.setCredentials({
      access_token: accessToken,
      refresh_token: refreshToken,
    });
  }

  public getAuthUrl(): string {
    if (!this.isInitialized) {
      throw new Error('Google Calendar service not initialized');
    }

    return this.oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
      prompt: 'consent',
    });
  }

  public async getAccessToken(code: string) {
    if (!this.isInitialized) {
      throw new Error('Google Calendar service not initialized');
    }

    const { tokens } = await this.oauth2Client.getToken(code);
    return tokens;
  }

  // Get available time slots for booking
  public async getAvailableSlots(
    calendarId: string = 'primary',
    days: number = 7
  ): Promise<TimeSlot[]> {
    if (!this.isInitialized) {
      console.warn('Google Calendar not initialized, returning mock data');
      return this.getMockSlots();
    }

    try {
      const now = new Date();
      const endDate = new Date();
      endDate.setDate(now.getDate() + days);

      // Get busy times
      const freebusy = await this.calendar.freebusy.query({
        requestBody: {
          timeMin: now.toISOString(),
          timeMax: endDate.toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          items: [{ id: calendarId }],
        },
      });

      const busyTimes = freebusy.data.calendars[calendarId]?.busy || [];

      // Generate available slots
      return this.generateAvailableSlots(now, endDate, busyTimes);
    } catch (error) {
      console.error('Error fetching calendar availability:', error);
      return this.getMockSlots();
    }
  }

  private generateAvailableSlots(startDate: Date, endDate: Date, busyTimes: any[]): TimeSlot[] {
    const slots: TimeSlot[] = [];
    const current = new Date(startDate);

    // Business hours: 9 AM to 5 PM, Monday to Friday
    const businessStart = 9; // 9 AM
    const businessEnd = 17; // 5 PM
    const slotDuration = 15; // 15 minutes

    while (current < endDate) {
      // Skip weekends
      if (current.getDay() === 0 || current.getDay() === 6) {
        current.setDate(current.getDate() + 1);
        continue;
      }

      // Generate slots for business hours
      for (let hour = businessStart; hour < businessEnd; hour++) {
        for (let minute = 0; minute < 60; minute += slotDuration) {
          const slotStart = new Date(current);
          slotStart.setHours(hour, minute, 0, 0);

          const slotEnd = new Date(slotStart);
          slotEnd.setMinutes(slotEnd.getMinutes() + slotDuration);

          // Skip past slots
          if (slotStart <= new Date()) continue;

          // Check if slot conflicts with busy times
          const isAvailable = !busyTimes.some(busy => {
            const busyStart = new Date(busy.start);
            const busyEnd = new Date(busy.end);
            return slotStart < busyEnd && slotEnd > busyStart;
          });

          const dateLabel = this.formatDateLabel(slotStart);

          slots.push({
            start: slotStart.toISOString(),
            end: slotEnd.toISOString(),
            available: isAvailable,
            date: dateLabel,
            duration: slotDuration,
          });
        }
      }

      current.setDate(current.getDate() + 1);
    }

    return slots.slice(0, 20); // Return first 20 slots
  }

  private formatDateLabel(date: Date): string {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      return date.toLocaleDateString('en-GB', {
        weekday: 'long',
        month: 'short',
        day: 'numeric'
      });
    }
  }

  // Create a calendar event
  public async createEvent(
    eventDetails: CalendarEvent,
    calendarId: string = 'primary'
  ): Promise<any> {
    if (!this.isInitialized) {
      console.warn('Google Calendar not initialized, simulating event creation');
      return this.simulateEventCreation(eventDetails);
    }

    try {
      const event = await this.calendar.events.insert({
        calendarId,
        requestBody: eventDetails,
        sendUpdates: 'all', // Send invitations to attendees
      });

      return event.data;
    } catch (error) {
      console.error('Error creating calendar event:', error);
      throw error;
    }
  }

  // Update an existing event
  public async updateEvent(
    eventId: string,
    eventDetails: Partial<CalendarEvent>,
    calendarId: string = 'primary'
  ): Promise<any> {
    if (!this.isInitialized) {
      throw new Error('Google Calendar service not initialized');
    }

    try {
      const event = await this.calendar.events.patch({
        calendarId,
        eventId,
        requestBody: eventDetails,
        sendUpdates: 'all',
      });

      return event.data;
    } catch (error) {
      console.error('Error updating calendar event:', error);
      throw error;
    }
  }

  // Delete an event
  public async deleteEvent(
    eventId: string,
    calendarId: string = 'primary'
  ): Promise<void> {
    if (!this.isInitialized) {
      throw new Error('Google Calendar service not initialized');
    }

    try {
      await this.calendar.events.delete({
        calendarId,
        eventId,
        sendUpdates: 'all',
      });
    } catch (error) {
      console.error('Error deleting calendar event:', error);
      throw error;
    }
  }

  // Create meeting link based on platform
  public generateMeetingDetails(platform: string, eventDetails: CalendarEvent): Partial<CalendarEvent> {
    switch (platform.toLowerCase()) {
      case 'zoom':
        return {
          ...eventDetails,
          description: `${eventDetails.description || ''}\n\nZoom meeting details will be provided via email.`,
          location: 'Zoom Meeting',
        };

      case 'teams':
      case 'microsoft teams':
        return {
          ...eventDetails,
          description: `${eventDetails.description || ''}\n\nMicrosoft Teams meeting details will be provided via email.`,
          location: 'Microsoft Teams',
        };

      case 'google meet':
      case 'meet':
        return {
          ...eventDetails,
          conferenceData: {
            createRequest: {
              requestId: `meet-${Date.now()}`,
              conferenceSolutionKey: {
                type: 'hangoutsMeet',
              },
            },
          },
          location: 'Google Meet',
        };

      case 'phone':
      case 'phone call':
        return {
          ...eventDetails,
          description: `${eventDetails.description || ''}\n\nPhone call details: We'll contact you on the number provided.`,
          location: 'Phone Call',
        };

      default:
        return {
          ...eventDetails,
          description: `${eventDetails.description || ''}\n\nMeeting platform: ${platform}`,
        };
    }
  }

  // Mock data for when Google Calendar is not available
  private getMockSlots(): TimeSlot[] {
    const slots: TimeSlot[] = [];
    const now = new Date();

    // Generate mock slots for tomorrow and day after
    for (let dayOffset = 1; dayOffset <= 2; dayOffset++) {
      const date = new Date(now);
      date.setDate(date.getDate() + dayOffset);

      const dateLabel = dayOffset === 1 ? 'Tomorrow' :
        date.toLocaleDateString('en-GB', { weekday: 'long' });

      const times = ['09:00', '10:30', '14:00', '15:30'];
      const availability = [true, true, dayOffset === 1 ? false : true, true];

      times.forEach((time, index) => {
        const [hours, minutes] = time.split(':').map(Number);
        const slotStart = new Date(date);
        slotStart.setHours(hours, minutes, 0, 0);

        const slotEnd = new Date(slotStart);
        slotEnd.setMinutes(slotEnd.getMinutes() + 15);

        slots.push({
          start: slotStart.toISOString(),
          end: slotEnd.toISOString(),
          available: availability[index],
          date: dateLabel,
          duration: 15,
        });
      });
    }

    return slots;
  }

  private simulateEventCreation(eventDetails: CalendarEvent): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: `mock-event-${Date.now()}`,
          htmlLink: 'https://calendar.google.com/calendar/event?mock=true',
          ...eventDetails,
        });
      }, 1000);
    });
  }

  // Helper method to format time for display
  public formatTime(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  }

  // Helper method to format date for display
  public formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  // Check if the service is properly configured
  public isConfigured(): boolean {
    return this.isInitialized &&
           !!process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID &&
           !!process.env.GOOGLE_CLIENT_SECRET;
  }
}

// Export singleton instance
export const googleCalendarService = new GoogleCalendarService();

// Export utility functions
export const formatTimeSlot = (timeSlot: TimeSlot): string => {
  const startTime = googleCalendarService.formatTime(timeSlot.start);
  return `${timeSlot.date} at ${startTime}`;
};

export const createPostinoEvent = (
  attendeeEmail: string,
  attendeeName: string,
  timeSlot: TimeSlot,
  platform: string
): CalendarEvent => {
  const eventDetails: CalendarEvent = {
    summary: `Postino Growth Strategy Consultation - ${attendeeName}`,
    description: `Marketing consultation with Postino

Attendee: ${attendeeName}
Duration: 15 minutes
Platform: ${platform}

We'll discuss your business goals and explore how our AI-powered marketing solutions can help you grow. This is a no-pressure, friendly chat about your growth opportunities.

Contact Details:
📞 0800 772 3291
📧 hello@postino.cc
🌐 https://postino.cc

Looking forward to our chat!

Martin & the Postino Team
Bingham, Nottinghamshire`,
    start: {
      dateTime: timeSlot.start,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    end: {
      dateTime: timeSlot.end,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    attendees: [
      {
        email: 'hello@postino.cc',
        displayName: 'Martin - Postino',
      },
      {
        email: attendeeEmail,
        displayName: attendeeName,
      },
    ],
    location: 'Online Meeting',
  };

  return googleCalendarService.generateMeetingDetails(platform, eventDetails);
};
