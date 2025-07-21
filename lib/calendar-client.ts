// Client-side calendar utilities - no googleapis dependencies

export interface CalendarSlot {
  time: string;
  available: boolean;
  date: string;
  duration: number;
  start?: string;
  end?: string;
}

export interface BookingData {
  attendeeEmail: string;
  attendeeName: string;
  timeSlot: CalendarSlot;
  platform: string;
  attendeePhone?: string;
}

// Fetch available time slots
export async function fetchAvailableSlots(): Promise<{
  slots: CalendarSlot[];
  authenticated: boolean;
  message?: string;
}> {
  try {
    const response = await fetch('/api/calendar/availability');
    if (!response.ok) {
      throw new Error('Failed to fetch availability');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching calendar availability:', error);
    // Return mock data as fallback
    return {
      slots: getMockSlots(),
      authenticated: false,
      message: 'Using mock calendar data due to connection error'
    };
  }
}

// Book an appointment
export async function bookAppointment(bookingData: BookingData): Promise<{
  success: boolean;
  message: string;
  isRealBooking: boolean;
  error?: string;
}> {
  try {
    const response = await fetch('/api/calendar/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Booking failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Error booking appointment:', error);
    return {
      success: false,
      message: "Well, that doesn't usually happen—shall we try again? You can also call us directly on 0800 772 3291.",
      isRealBooking: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Mock data for fallback
function getMockSlots(): CalendarSlot[] {
  const slots: CalendarSlot[] = [];
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
        time,
        available: availability[index],
        date: dateLabel,
        duration: 15,
        start: slotStart.toISOString(),
        end: slotEnd.toISOString(),
      });
    });
  }

  return slots;
}

// Format time slot for display
export function formatTimeSlot(timeSlot: CalendarSlot): string {
  return `${timeSlot.date} at ${timeSlot.time}`;
}

// Transform API slot data to CalendarSlot interface
export function transformApiSlot(apiSlot: any): CalendarSlot {
  return {
    time: new Date(apiSlot.start).toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }),
    available: apiSlot.available,
    date: apiSlot.date,
    duration: apiSlot.duration,
    start: apiSlot.start,
    end: apiSlot.end
  };
}
