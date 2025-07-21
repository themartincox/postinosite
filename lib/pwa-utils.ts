'use client';

/**
 * PWA Utility Functions for Postino
 */

export interface PWAInstallPrompt extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

// Check if the app is running as a PWA
export const isPWAInstalled = (): boolean => {
  if (typeof window === 'undefined') return false;

  // Check for iOS standalone mode
  if ((window.navigator as any).standalone === true) {
    return true;
  }

  // Check for desktop/Android standalone mode
  if (window.matchMedia('(display-mode: standalone)').matches) {
    return true;
  }

  return false;
};

// Check if PWA installation is supported
export const isPWASupported = (): boolean => {
  if (typeof window === 'undefined') return false;

  return 'serviceWorker' in navigator && 'PushManager' in window;
};

// Register service worker
export const registerServiceWorker = async (): Promise<ServiceWorkerRegistration | null> => {
  if (!('serviceWorker' in navigator)) {
    console.warn('Service Worker not supported');
    return null;
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
    });

    console.log('Service Worker registered successfully:', registration);

    // Handle updates
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // New content is available
            console.log('New content available, please refresh');
            // You could show a notification here
          }
        });
      }
    });

    return registration;
  } catch (error) {
    console.error('Service Worker registration failed:', error);
    return null;
  }
};

// Queue form submission for when back online
export const queueFormSubmission = (formData: FormData, endpoint: string): void => {
  if (!('indexedDB' in window)) {
    console.warn('IndexedDB not supported for offline storage');
    return;
  }

  // Store in IndexedDB for later submission
  const request = indexedDB.open('PostinoOfflineDB', 1);

  request.onupgradeneeded = (event) => {
    const db = (event.target as IDBOpenDBRequest).result;
    if (!db.objectStoreNames.contains('submissions')) {
      db.createObjectStore('submissions', { keyPath: 'id', autoIncrement: true });
    }
  };

  request.onsuccess = (event) => {
    const db = (event.target as IDBOpenDBRequest).result;
    const transaction = db.transaction(['submissions'], 'readwrite');
    const store = transaction.objectStore('submissions');

    const submission = {
      formData: Object.fromEntries(formData.entries()),
      endpoint,
      timestamp: new Date().toISOString(),
    };

    store.add(submission);
    console.log('Form submission queued for later');
  };
};

// Check online status
export const getOnlineStatus = (): boolean => {
  return typeof navigator !== 'undefined' ? navigator.onLine : true;
};

// Add online/offline event listeners
export const addOfflineEventListeners = (
  onOnline: () => void,
  onOffline: () => void
): (() => void) => {
  if (typeof window === 'undefined') return () => {};

  window.addEventListener('online', onOnline);
  window.addEventListener('offline', onOffline);

  // Return cleanup function
  return () => {
    window.removeEventListener('online', onOnline);
    window.removeEventListener('offline', onOffline);
  };
};

// Request notification permission
export const requestNotificationPermission = async (): Promise<NotificationPermission> => {
  if (!('Notification' in window)) {
    console.warn('Notifications not supported');
    return 'denied';
  }

  if (Notification.permission === 'default') {
    return await Notification.requestPermission();
  }

  return Notification.permission;
};

// Show local notification
export const showLocalNotification = (title: string, options?: NotificationOptions): void => {
  if (Notification.permission === 'granted') {
    new Notification(title, {
      icon: '/favicon-192.png',
      badge: '/favicon-192.png',
      ...options,
    });
  }
};

// Cache important pages
export const cacheImportantPages = async (): Promise<void> => {
  if (!('caches' in window)) return;

  const cache = await caches.open('postino-v1');
  const pagesToCache = [
    '/',
    '/about/',
    '/contact/',
    '/bingham/',
    '/rushcliffe/',
    '/ai-automation-hub/',
    '/offline/',
  ];

  try {
    await cache.addAll(pagesToCache);
    console.log('Important pages cached');
  } catch (error) {
    console.error('Failed to cache important pages:', error);
  }
};

// Analytics for PWA usage
export const trackPWAUsage = (event: string, data?: Record<string, any>): void => {
  // Track PWA-specific events
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event, {
      event_category: 'PWA',
      is_pwa: isPWAInstalled(),
      ...data,
    });
  }

  console.log(`PWA Event: ${event}`, data);
};

// Update check
export const checkForUpdates = async (): Promise<boolean> => {
  if (!('serviceWorker' in navigator)) return false;

  const registration = await navigator.serviceWorker.getRegistration();
  if (!registration) return false;

  await registration.update();
  return registration.waiting !== null;
};

// App version info
export const getAppVersion = (): string => {
  return 'v1.0.0'; // This could be dynamically set during build
};
