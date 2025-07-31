import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/", "/_next/", "/admin/", "*.json$"],
			},
			{
				userAgent: "Googlebot",
				allow: "/",
				disallow: ["/api/", "/_next/", "/admin/"],
			},
		],
		sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
		host: SITE_CONFIG.url,
	};
}
