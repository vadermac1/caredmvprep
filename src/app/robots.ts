import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/login",
          "/signup",
          "/forgot-password",
          "/reset-password",
          "/onboarding",
          "/dashboard",
          "/quiz/",
          "/mock-exam",
          "/review",
          "/history",
          "/account",
          "/flashcards",
          "/admin/",
          "/myadmin2026/",
        ],
      },
    ],
    sitemap: "https://caredmvprep.com/sitemap.xml",
  };
}
