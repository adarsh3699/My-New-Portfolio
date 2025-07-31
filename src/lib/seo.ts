import type { Metadata } from "next";

// Base site configuration
export const SITE_CONFIG = {
	name: "Adarsh Suman - Full Stack Developer",
	description:
		"Full-stack developer portfolio featuring comprehensive project showcase, professional experience, technical expertise, and GitHub-inspired portfolio built with Next.jsFull-stack developer portfolio featuring a comprehensive project showcase, professional experience, technical expertise, and a GitHub-inspired portfolio built with Next.js",
	url: "https://www.bhemu.me",
	creator: "Adarsh Suman",
	keywords: [
		"Full Stack Developer",
		"Next.js",
		"React",
		"TypeScript",
		"Portfolio",
		"Web Development",
		"JavaScript",
		"Node.js",
		"Adarsh Suman",
		"Software Engineer",
		"Frontend Developer",
		"Backend Developer",
		"GitHub Portfolio",
	],
	authors: [
		{
			name: "Adarsh Suman",
			url: "https://www.bhemu.me",
		},
	],
	openGraph: {
		type: "website",
		locale: "en_US",
		title: "Adarsh Suman - Full Stack Developer Portfolio",
		description:
			"Full-stack developer portfolio featuring comprehensive project showcase, professional experience, technical expertise, and GitHub integration",
		siteName: "Adarsh Suman Portfolio",
		url: "https://www.bhemu.me",
		images: [
			{
				url: "https://www.bhemu.me/images/og-image.jpg", // We'll create this
				width: 1200,
				height: 630,
				alt: "Adarsh Suman - Full Stack Developer Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		creator: "@adarsh3699", // X (formerly Twitter) handle
		title: "Adarsh Suman - Full Stack Developer",
		description: "Full-stack developer portfolio with comprehensive project showcase and technical expertise",
		images: ["https://www.bhemu.me/images/og-image.jpg"],
	},
};

// Generate metadata for specific pages
export function generateMetadata({
	title,
	description,
	path = "",
	keywords = [],
	image,
	noIndex = false,
}: {
	title?: string;
	description?: string;
	path?: string;
	keywords?: string[];
	image?: string;
	noIndex?: boolean;
} = {}): Metadata {
	const pageTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name;

	const pageDescription = description || SITE_CONFIG.description;
	const pageUrl = `${SITE_CONFIG.url}${path}`;
	const pageImage = image || SITE_CONFIG.openGraph.images[0].url;

	const allKeywords = [...SITE_CONFIG.keywords, ...keywords];

	return {
		title: pageTitle,
		description: pageDescription,
		keywords: allKeywords,
		authors: SITE_CONFIG.authors,
		creator: SITE_CONFIG.creator,
		metadataBase: new URL(SITE_CONFIG.url),
		alternates: {
			canonical: pageUrl,
		},
		robots: {
			index: !noIndex,
			follow: !noIndex,
			googleBot: {
				index: !noIndex,
				follow: !noIndex,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		openGraph: {
			type: "website",
			locale: SITE_CONFIG.openGraph.locale,
			title: pageTitle,
			description: pageDescription,
			siteName: SITE_CONFIG.openGraph.siteName,
			url: pageUrl,
			images: [
				{
					url: pageImage,
					width: 1200,
					height: 630,
					alt: pageTitle,
				},
			],
		},
		twitter: {
			card: SITE_CONFIG.twitter.card as "summary_large_image",
			creator: SITE_CONFIG.twitter.creator,
			title: pageTitle,
			description: pageDescription,
			images: [pageImage],
		},
		verification: {
			google: process.env.GOOGLE_SITE_VERIFICATION, // Add to your .env
			// yandex: process.env.YANDEX_VERIFICATION, // If needed
			// bing: process.env.BING_VERIFICATION, // If needed
		},
	};
}

// Generate structured data (JSON-LD)
export function generatePersonJsonLd() {
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Adarsh Suman",
		url: "https://www.bhemu.me",
		jobTitle: "Full Stack Developer",
		description: "Experienced full-stack developer specializing in modern web technologies",
		image: "https://www.bhemu.me/images/profile-avatar.jpg",
		sameAs: [
			"https://github.com/adarsh3699",
			"https://linkedin.com/in/adarsh3699", // Update with your LinkedIn
			"https://x.com/adarsh3699", // Update with your Twitter
			"https://www.instagram.com/_adarsh.s", // Update with your Instagram
			"https://www.youtube.com/@CodingWithBhemu", // Update with your YouTube
			// Add other social profiles
		],
		knowsAbout: [
			"JavaScript",
			"TypeScript",
			"React",
			"Next.js",
			"Node.js",
			"Full Stack Development",
			"Web Development",
			"Software Engineering",
		],
		alumniOf: {
			"@type": "EducationalOrganization",
			name: "Lovely Professional University", // Update with your education
		},
		address: {
			"@type": "PostalAddress",
			addressCountry: "IN",
		},
	};
}

// Generate WebSite structured data
export function generateWebsiteJsonLd() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Adarsh Suman Portfolio",
		url: "https://www.bhemu.me",
		description: SITE_CONFIG.description,
		author: {
			"@type": "Person",
			name: "Adarsh Suman",
		},
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: "https://www.bhemu.me/projects?search={search_term_string}",
			},
			"query-input": "required name=search_term_string",
		},
	};
}

// Generate project-specific structured data
export function generateProjectJsonLd(project: {
	name: string;
	description: string;
	url?: string;
	githubUrl?: string;
	technologies: string[];
	createdAt: string;
}) {
	return {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: project.name,
		description: project.description,
		url: project.url,
		codeRepository: project.githubUrl,
		programmingLanguage: project.technologies,
		dateCreated: project.createdAt,
		creator: {
			"@type": "Person",
			name: "Adarsh Suman",
			url: "https://www.bhemu.me",
		},
		author: {
			"@type": "Person",
			name: "Adarsh Suman",
		},
	};
}
