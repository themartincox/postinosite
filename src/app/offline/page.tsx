import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Offline - Postino',
  description: 'You are currently offline. Please check your internet connection.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-700 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Offline Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-12.728 12.728m0-12.728l12.728 12.728M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h1 className="text-3xl font-bold text-white mb-4">
            You're Offline
          </h1>

          <p className="text-white/80 mb-6 leading-relaxed">
            It looks like you've lost your internet connection. Don't worry - Postino will be here when you're back online!
          </p>

          <div className="space-y-4">
            {/* Retry Button */}
            <a
              href="/"
              className="block w-full bg-white text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-center"
            >
              Try Again
            </a>

            {/* Cached Content Links */}
            <div className="text-sm text-white/70">
              <p className="mb-3">While offline, you can still access:</p>
              <div className="grid grid-cols-1 gap-2">
                <Link
                  href="/"
                  className="block py-2 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200 border border-white/10"
                >
                  🏠 Homepage (cached)
                </Link>
                <Link
                  href="/about"
                  className="block py-2 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200 border border-white/10"
                >
                  👋 About Us (cached)
                </Link>
                <Link
                  href="/contact"
                  className="block py-2 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200 border border-white/10"
                >
                  📞 Contact (cached)
                </Link>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-6 pt-6 border-t border-white/20">
            <h3 className="text-white font-semibold mb-2">Quick Tips:</h3>
            <ul className="text-white/70 text-sm space-y-1 text-left">
              <li>• Check your WiFi or mobile data connection</li>
              <li>• Try moving to an area with better signal</li>
              <li>• Some content may still be available offline</li>
            </ul>
          </div>
        </div>

        {/* Postino Branding */}
        <div className="mt-8 text-white/60 text-sm">
          <p>Postino - Your Local AI Marketing Partner</p>
          <p className="text-xs mt-1">Bingham, Nottinghamshire • 0800 772 3291</p>
        </div>
      </div>
    </div>
  );
}
