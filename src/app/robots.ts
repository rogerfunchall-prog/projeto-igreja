import type { MetadataRoute } from "next";
import { igreja } from "@/data/igreja";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${igreja.site}/sitemap.xml`,
  };
}
