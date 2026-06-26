import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12" style={{ backgroundColor: '#f0f4f8' }}>
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="CAREDMVPrep"
              width={200}
              height={80}
              style={{ height: '56px', width: 'auto' }}
            />
          </Link>
        </div>
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          {children}
        </div>
        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-400">
          CAREDMVPrep.com is not affiliated with any government agency.
        </p>
      </div>
    </div>
  );
}
