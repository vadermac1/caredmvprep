import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f0f4f8" }}>
      {/* Dark header — logo clearly visible on navy */}
      <div
        className="w-full flex items-center justify-center py-5"
        style={{ backgroundColor: "#0f1e3c" }}
      >
        <Link href="/">
          <BrandLogo height={44} priority />
        </Link>
      </div>

      {/* Form area */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            {children}
          </div>
          <p className="mt-6 text-center text-xs text-gray-400">
            CAREDMVPrep.com is not affiliated with any government agency.
          </p>
        </div>
      </div>
    </div>
  );
}
