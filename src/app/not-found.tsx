import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | CAREDMVPrep',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center" style={{ backgroundColor: '#f0f4f8' }}>
      <div className="max-w-md">
        <div className="text-6xl font-extrabold mb-2" style={{ color: '#0f1e3c' }}>404</div>
        <h1 className="text-2xl font-bold mb-3" style={{ color: '#0f1e3c' }}>Page Not Found</h1>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Try heading back to the home page.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-lg text-sm font-bold text-white transition hover:opacity-90"
            style={{ backgroundColor: '#1a7f3c' }}
          >
            Back to Home
          </Link>
          <Link
            href="/states"
            className="inline-block px-6 py-3 rounded-lg text-sm font-bold border border-gray-300 text-gray-700 hover:bg-white transition"
          >
            Browse Practice Tests
          </Link>
        </div>
        <p className="text-xs text-gray-400 mt-8">
          Looking for a specific state?{' '}
          <Link href="/states" className="underline hover:text-gray-600">
            View all 50 states →
          </Link>
        </p>
      </div>
    </div>
  );
}
