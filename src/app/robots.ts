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
          "/dashboard",
          "/quiz/",
          "/history",
          "/account",
        ],
      },
    ],
    sitemap: "https://caredmvprep.com/sitemap.xml",
  };
}
