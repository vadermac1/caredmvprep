"use client";

interface AuthFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string | null;
  success?: string | null;
  loading?: boolean;
  children: React.ReactNode;
  submitLabel: string;
}

export default function AuthForm({
  onSubmit,
  error,
  success,
  loading,
  children,
  submitLabel,
}: AuthFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {error && (
        <div className="rounded-lg px-4 py-3 text-sm bg-red-50 border border-red-200 text-red-700">
          {error}
        </div>
      )}
      {success && (
        <div className="rounded-lg px-4 py-3 text-sm bg-green-50 border border-green-200 text-green-700">
          {success}
        </div>
      )}
      {children}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-4 rounded-lg font-bold text-white text-sm transition disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ backgroundColor: '#1a7f3c' }}
      >
        {loading ? 'Please wait…' : submitLabel}
      </button>
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
}

export function Field({ id, label, type = 'text', autoComplete, required, placeholder }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition"
        style={{ '--tw-ring-color': '#1a7f3c' } as React.CSSProperties}
      />
    </div>
  );
}
