'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[GlobalError]', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center" style={{ backgroundColor: '#f0f4f8' }}>
      <div className="max-w-md">
        <div className="text-5xl mb-4">⚠️</div>
        <h1 className="text-2xl font-bold mb-3" style={{ color: '#0f1e3c' }}>Something went wrong</h1>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          An unexpected error occurred. This has been logged and we&apos;ll look into it.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-lg text-sm font-bold text-white transition hover:opacity-90"
            style={{ backgroundColor: '#1a7f3c' }}
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-lg text-sm font-bold border border-gray-300 text-gray-700 hover:bg-white transition"
          >
            Back to Home
          </Link>
        </div>
        {error.digest && (
          <p className="text-xs text-gray-400 mt-6">Error ID: {error.digest}</p>
        )}
      </div>
    </div>
  );
}
