import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = SITE_CONFIG.url;

	// Static routes
	const staticRoutes = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 1,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/experience`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/projects`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.6,
		},
	];

	// Dynamic project routes
	const projectRoutes = projects.map((project) => ({
		url: `${baseUrl}/projects/${project.id}`,
		lastModified: new Date(project.createdAt),
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	return [...staticRoutes, ...projectRoutes];
}
