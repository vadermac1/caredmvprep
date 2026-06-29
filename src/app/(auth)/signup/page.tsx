"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import AuthForm, { Field } from "@/components/auth/AuthForm";

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const displayName = form.get("display_name") as string;
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    const confirm = form.get("confirm_password") as string;

    if (password !== confirm) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      setLoading(false);
      return;
    }

    const supabase = createClient();
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { display_name: displayName } },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    setSuccess("Account created! Check your email to confirm your address, then sign in.");
    setLoading(false);
    timerRef.current = setTimeout(() => router.push("/login"), 3000);
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Create your account</h1>
      <p className="text-sm text-gray-500 mb-6">Start practicing for free — no credit card required.</p>

      <AuthForm onSubmit={handleSubmit} error={error} success={success} loading={loading} submitLabel="Create account">
        <Field id="display_name" label="Your name" autoComplete="name" required placeholder="Jane Smith" />
        <Field id="email" label="Email address" type="email" autoComplete="email" required placeholder="you@example.com" />
        <Field id="password" label="Password" type="password" autoComplete="new-password" required placeholder="At least 8 characters" />
        <Field id="confirm_password" label="Confirm password" type="password" autoComplete="new-password" required placeholder="Repeat your password" />
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" required className="mt-0.5 shrink-0 accent-green-700" />
          <span className="text-sm text-gray-600">
            I agree to the{" "}
            <Link href="/terms" className="underline hover:text-gray-900">Terms of Service</Link>
            {" "}and{" "}
            <Link href="/privacy" className="underline hover:text-gray-900">Privacy Policy</Link>.
          </span>
        </label>
      </AuthForm>

      <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold hover:underline" style={{ color: '#1a7f3c' }}>
          Sign in
        </Link>
      </p>
    </>
  );
}
