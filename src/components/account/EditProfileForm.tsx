"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Profile } from "@/types/database";

interface Props {
  profile: Profile;
  userEmail: string;
}

export default function EditProfileForm({ profile, userEmail }: Props) {
  const [open, setOpen]       = useState(false);
  const [saving, setSaving]   = useState(false);
  const [error, setError]     = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    display_name:  profile.display_name  ?? "",
    phone:         profile.phone         ?? "",
    address_line1: profile.address_line1 ?? "",
    address_line2: profile.address_line2 ?? "",
    city:          profile.city          ?? "",
    address_state: profile.address_state ?? "",
    postal_code:   profile.postal_code   ?? "",
  });

  function field(key: keyof typeof form) {
    return {
      value: form[key],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setForm((f) => ({ ...f, [key]: e.target.value })),
    };
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!form.phone.trim()) { setError("Phone number is required."); return; }
    setSaving(true);
    setError(null);
    setSuccess(false);

    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setError("Not logged in."); setSaving(false); return; }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error: dbErr } = await (supabase as any).from("profiles").update({
      display_name:  form.display_name.trim()  || null,
      phone:         form.phone.trim()          || null,
      address_line1: form.address_line1.trim()  || null,
      address_line2: form.address_line2.trim()  || null,
      city:          form.city.trim()           || null,
      address_state: form.address_state.trim()  || null,
      postal_code:   form.postal_code.trim()    || null,
      updated_at:    new Date().toISOString(),
    }).eq("id", user.id);

    setSaving(false);
    if (dbErr) { setError(dbErr.message); return; }
    setSuccess(true);
    setTimeout(() => { setSuccess(false); setOpen(false); window.location.reload(); }, 1000);
  }

  const inputCls = "w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent";
  const focusRing = { "--tw-ring-color": "#1a7f3c" } as React.CSSProperties;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-xs font-bold px-3 py-1.5 rounded-lg border transition hover:opacity-80"
        style={{ borderColor: "#1a7f3c", color: "#1a7f3c" }}
      >
        Edit Profile
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="font-bold text-gray-900">Edit Profile</h2>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600 text-xl leading-none">&times;</button>
            </div>

            <form onSubmit={handleSave} className="px-6 py-5 space-y-4">
              {/* Name + email */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Full Name</label>
                <input {...field("display_name")} className={inputCls} style={focusRing} placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Email</label>
                <input value={userEmail} disabled className={`${inputCls} bg-gray-50 text-gray-400 cursor-not-allowed`} />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input {...field("phone")} type="tel" className={inputCls} style={focusRing} placeholder="(555) 555-5555" />
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs font-semibold text-gray-500 mb-3">Mailing Address</p>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Street Address</label>
                    <input {...field("address_line1")} className={inputCls} style={focusRing} placeholder="123 Main St" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Apt / Suite (optional)</label>
                    <input {...field("address_line2")} className={inputCls} style={focusRing} placeholder="Apt 4B" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">City</label>
                      <input {...field("city")} className={inputCls} style={focusRing} placeholder="Los Angeles" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">State</label>
                      <input {...field("address_state")} className={inputCls} style={focusRing} placeholder="CA" maxLength={2} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">ZIP Code</label>
                    <input {...field("postal_code")} className={inputCls} style={focusRing} placeholder="90210" />
                  </div>
                </div>
              </div>

              {error   && <p className="text-xs text-red-600">{error}</p>}
              {success && <p className="text-xs text-green-700 font-medium">Saved!</p>}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold border border-gray-300 text-gray-600 hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 py-2.5 rounded-xl text-sm font-bold text-white transition hover:opacity-90 disabled:opacity-60"
                  style={{ backgroundColor: "#1a7f3c" }}
                >
                  {saving ? "Saving…" : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
