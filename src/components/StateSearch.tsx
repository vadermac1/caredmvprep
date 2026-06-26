"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const featuredCards = [
  {
    state: "California",
    slug: "california-dmv-practice-test",
    photo: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=600&q=80",
    alt: "Golden Gate Bridge, San Francisco, California",
  },
  {
    state: "Texas",
    slug: "texas-dmv-practice-test",
    photo: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=600&q=80",
    alt: "Dallas, Texas skyline",
  },
  {
    state: "Florida",
    slug: "florida-dmv-practice-test",
    photo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    alt: "Florida beach and palm trees",
  },
  {
    state: "New York",
    slug: "new-york-dmv-practice-test",
    photo: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&q=80",
    alt: "Statue of Liberty, New York",
  },
];

const allStates = [
  "Alabama","Alaska","Arizona","Arkansas","California",
  "Colorado","Connecticut","Delaware","Florida","Georgia",
  "Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland",
  "Massachusetts","Michigan","Minnesota","Mississippi","Missouri",
  "Montana","Nebraska","Nevada","New Hampshire","New Jersey",
  "New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
  "South Dakota","Tennessee","Texas","Utah","Vermont",
  "Virginia","Washington","West Virginia","Wisconsin","Wyoming",
];

function toSlug(state: string) {
  return state.toLowerCase().replace(/\s+/g, "-") + "-dmv-practice-test";
}

export default function StateSearch() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const filtered = q ? allStates.filter((s) => s.toLowerCase().includes(q)) : [];
  const isSearching = q.length > 0;

  return (
    <>
      {/* Search box */}
      <div className="mb-8 max-w-lg mx-auto">
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
            style={{ color: "#9ca3af" }}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search by state..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm focus:outline-none"
            style={{
              border: "2px solid #e5e7eb",
              fontSize: "15px",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#1a7f3c")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e7eb")}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Search results */}
      {isSearching && (
        <div className="mb-6">
          {filtered.length === 0 ? (
            <p className="text-center text-sm" style={{ color: "#6b7280" }}>
              No states found for &ldquo;{query}&rdquo;
            </p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {filtered.map((state) => (
                <Link
                  key={state}
                  href={`/${toSlug(state)}`}
                  className="flex items-center justify-center px-3 py-3 rounded-lg border text-sm font-medium text-center transition"
                  style={{ borderColor: "#e5e7eb", color: "#374151", backgroundColor: "#fff" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1a7f3c";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#1a7f3c";
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#f0fdf4";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#e5e7eb";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#374151";
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#fff";
                  }}
                >
                  {state}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Featured photo cards (shown when not searching) */}
      {!isSearching && (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {featuredCards.map((card) => (
              <Link
                key={card.slug}
                href={`/${card.slug}`}
                className="group rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition"
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={card.photo}
                    alt={card.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="font-semibold text-gray-900 text-sm">{card.state}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{card.state} Permit Test</p>
                  <span
                    className="inline-flex items-center gap-1 mt-2 text-xs font-semibold group-hover:underline"
                    style={{ color: "#1a7f3c" }}
                  >
                    Start Practice →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/states"
              className="inline-flex items-center px-6 py-2.5 rounded text-sm font-semibold hover:bg-green-50 transition"
              style={{ border: "1px solid #1a7f3c", color: "#1a7f3c" }}
            >
              VIEW ALL 50 STATES
            </Link>
          </div>
        </>
      )}
    </>
  );
}
