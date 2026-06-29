"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import AuthForm, { Field } from "@/components/auth/AuthForm";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
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
    const { error: updateError } = await supabase.auth.updateUser({ password });

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Set a new password</h1>
      <p className="text-sm text-gray-500 mb-6">Choose a strong password for your account.</p>

      <AuthForm onSubmit={handleSubmit} error={error} loading={loading} submitLabel="Update password">
        <Field id="password" label="New password" type="password" autoComplete="new-password" required placeholder="At least 8 characters" />
        <Field id="confirm_password" label="Confirm new password" type="password" autoComplete="new-password" required placeholder="Repeat your new password" />
      </AuthForm>
    </>
  );
}
