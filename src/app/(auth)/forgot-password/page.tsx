"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import AuthForm, { Field } from "@/components/auth/AuthForm";

export default function ForgotPasswordPage() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const email = form.get("email") as string;

    const supabase = createClient();
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/reset-password`,
    });

    // Always show success to avoid email enumeration
    if (resetError) {
      console.error(resetError);
    }

    setSuccess("If that email exists, you'll receive a reset link shortly. Check your inbox.");
    setLoading(false);
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Reset your password</h1>
      <p className="text-sm text-gray-500 mb-6">Enter your email and we&apos;ll send you a reset link.</p>

      <AuthForm onSubmit={handleSubmit} error={error} success={success} loading={loading} submitLabel="Send reset link">
        <Field id="email" label="Email address" type="email" autoComplete="email" required placeholder="you@example.com" />
      </AuthForm>

      <p className="mt-6 text-center text-sm text-gray-500">
        Remember your password?{" "}
        <Link href="/login" className="font-semibold hover:underline" style={{ color: '#1a7f3c' }}>
          Back to sign in
        </Link>
      </p>
    </>
  );
}
