import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { aboutData } from "@/data/about";
import { contactData } from "@/data/contact";

// Search result interface
export interface SearchResult {
	type: "project" | "experience" | "tech" | "about" | "contact";
	title: string;
	description: string;
	url: string;
	category?: string;
	technologies?: string[];
	matchedTerm?: string;
	relevanceScore?: number;
}

// Memoized search terms for performance
let contactTermsCache: Set<string> | null = null;
let aboutTermsCache: Set<string> | null = null;

const getContactSearchTerms = (): Set<string> => {
	if (contactTermsCache) return contactTermsCache;

	const terms = new Set<string>();

	// Contact methods and social platforms
	[...contactData.contactMethods, ...contactData.socialPlatforms].forEach((item) => {
		if ("type" in item) {
			// Contact method
			terms.add(item.type).add(item.label.toLowerCase()).add(item.value);
			if (item.type === "email" && item.value.includes("@")) {
				const [username, domain] = item.value.split("@");
				terms.add(username).add(domain);
			}
		} else {
			// Social platform
			terms.add(item.name.toLowerCase()).add(item.description.toLowerCase());
			const username = item.url.split("/").pop();
			if (username) terms.add(username);
		}
	});

	// Common terms
	["contact", "reach", "get in touch", "hire", "connect", "message", "social", "profile"].forEach((term) =>
		terms.add(term)
	);

	contactTermsCache = terms;
	return terms;
};

const getAboutSearchTerms = (): Set<string> => {
	if (aboutTermsCache) return aboutTermsCache;

	const terms = new Set<string>();

	// Static personal terms
	["adarsh", "about me", "bio", "biography", "story", "background"].forEach((term) => terms.add(term));

	// Dynamic data terms
	[
		...aboutData.skillCategories.flatMap((cat) => [
			cat.title.toLowerCase(),
			...cat.skills.map((s) => `${s.name.toLowerCase()} ${s.level.toLowerCase()}`),
		]),
		...aboutData.education.map((edu) => `${edu.degree} ${edu.field} ${edu.institution}`.toLowerCase()),
		...aboutData.currentFocus.flatMap((focus) => [
			focus.title.toLowerCase(),
			...focus.description
				.toLowerCase()
				.split(" ")
				.filter((w) => w.length > 3),
		]),
		...aboutData.achievements.flatMap((ach) => [
			ach.title.toLowerCase(),
			ach.organization.toLowerCase(),
			...ach.description
				.toLowerCase()
				.split(" ")
				.filter((w) => w.length > 3),
		]),
		...aboutData.interests.map((int) => int.name.toLowerCase()),
	].forEach((term) => terms.add(term));

	aboutTermsCache = terms;
	return terms;
};

export function searchContent(query: string): SearchResult[] {
	const trimmedQuery = query.trim();
	if (!trimmedQuery) return [];

	const results: SearchResult[] = [];
	const lowerQuery = trimmedQuery.toLowerCase();
	const queryWords = lowerQuery.split(" ").filter(Boolean);

	// Pre-compile regex for better performance on repeated searches
	const queryRegex = new RegExp(queryWords.join("|"), "i");

	const matchesQuery = (text: string): boolean => queryRegex.test(text);

	// Optimized relevance scoring
	const typeScores = { project: 5, experience: 4, tech: 3, about: 2, contact: 1 };

	const calculateRelevanceScore = (
		title: string,
		description: string,
		technologies: string[] = [],
		type: SearchResult["type"]
	): number => {
		const lowerTitle = title.toLowerCase();
		const lowerDescription = description.toLowerCase();

		// Early return for exact match
		if (lowerTitle === lowerQuery) return 100 + typeScores[type];

		let score = typeScores[type];

		// Title scoring (most important)
		const titleWords = queryWords.filter((word) => lowerTitle.includes(word));
		score += titleWords.length === queryWords.length ? 50 : titleWords.length * 20;

		// Description and tech scoring
		score += queryWords.filter((word) => lowerDescription.includes(word)).length * 10;
		score +=
			queryWords.filter((word) => technologies.some((tech) => tech.toLowerCase().includes(word))).length * 15;

		return score;
	};

	// Search Projects
	projects.forEach((project) => {
		const searchText = [
			project.name,
			project.description,
			project.longDescription || "",
			project.category,
			...project.technologies,
		].join(" ");

		if (matchesQuery(searchText)) {
			results.push({
				type: "project",
				title: project.name,
				description: project.description,
				url: `/projects/${project.id}`,
				category: project.category,
				technologies: project.technologies,
				matchedTerm: findMatchedTerm(lowerQuery, searchText.toLowerCase()),
				relevanceScore: calculateRelevanceScore(
					project.name,
					project.description,
					project.technologies,
					"project"
				),
			});
		}
	});

	// Search Experience
	experiences.forEach((experience) => {
		const searchText = [
			experience.company,
			experience.position,
			experience.location,
			...experience.description,
			...experience.technologies,
		].join(" ");

		if (matchesQuery(searchText)) {
			const title = `${experience.position} at ${experience.company}`;
			results.push({
				type: "experience",
				title,
				description: experience.description[0] || "",
				url: "/experience",
				technologies: experience.technologies,
				matchedTerm: findMatchedTerm(lowerQuery, searchText.toLowerCase()),
				relevanceScore: calculateRelevanceScore(
					title,
					experience.description[0] || "",
					experience.technologies,
					"experience"
				),
			});
		}
	});

	// Search Tech Stack (only if needed)
	if (results.length < 8) {
		const allTechs = new Set([
			...projects.flatMap((p) => p.technologies),
			...experiences.flatMap((e) => e.technologies),
			...aboutData.skillCategories.flatMap((cat) => cat.skills.map((s) => s.name)),
		]);

		Array.from(allTechs).some((tech) => {
			if (
				matchesQuery(tech) &&
				!results.some((r) => r.type === "tech" && r.title.toLowerCase().includes(tech.toLowerCase()))
			) {
				const projectCount = projects.filter((p) => p.technologies.some((t) => matchesQuery(t))).length;
				const experienceCount = experiences.filter((e) => e.technologies.some((t) => matchesQuery(t))).length;

				if (projectCount > 0 || experienceCount > 0) {
					results.push({
						type: "tech",
						title: `${tech} Technology`,
						description: `Found in ${projectCount} projects and ${experienceCount} work experiences`,
						url: "/projects",
						matchedTerm: tech,
						relevanceScore: calculateRelevanceScore(`${tech} Technology`, "", [tech], "tech"),
					});
				}
			}
			return results.length >= 8;
		});
	}

	// Search About content (only if needed)
	if (results.length < 8) {
		const aboutContent = [
			...aboutData.story.paragraphs,
			...aboutData.currentFocus.map((f) => `${f.title} ${f.description}`),
			...aboutData.skillCategories.flatMap((cat) => [
				`${cat.title}`,
				...cat.skills.map((s) => `${s.name} ${s.level}`),
			]),
			...aboutData.education.map((edu) => `${edu.degree} ${edu.field} ${edu.institution}`),
			...aboutData.achievements.map((ach) => `${ach.title} ${ach.organization} ${ach.description}`),
			...aboutData.interests.map((int) => int.name),
			...aboutData.funFacts,
		];

		const aboutTerms = getAboutSearchTerms();
		const searchableContent = [...aboutContent, ...Array.from(aboutTerms)].join(" ");

		if (matchesQuery(searchableContent)) {
			// Determine context-specific title and description
			const contextChecks = [
				{
					check: () =>
						queryWords.some(
							(w) =>
								aboutData.skillCategories.some(
									(cat) =>
										cat.title.toLowerCase().includes(w) ||
										cat.skills.some((s) => s.name.toLowerCase().includes(w))
								) || ["skill", "skills", "expertise"].includes(w)
						),
					title: "Technical Skills",
					desc: () => `My expertise in ${aboutData.skillCategories.map((cat) => cat.title).join(", ")}`,
				},
				{
					check: () =>
						queryWords.some(
							(w) =>
								aboutData.education.some((edu) =>
									[edu.degree, edu.field, edu.institution].some((field) =>
										field.toLowerCase().includes(w)
									)
								) || ["education", "degree", "university"].includes(w)
						),
					title: "Education Background",
					desc: () => `Academic journey: ${aboutData.education.map((edu) => edu.degree).join(", ")}`,
				},
				{
					check: () =>
						queryWords.some(
							(w) =>
								aboutData.achievements.some((ach) =>
									[ach.title, ach.organization].some((field) => field.toLowerCase().includes(w))
								) || ["achievement", "hackathon", "certificate"].includes(w)
						),
					title: "Achievements & Certifications",
					desc: () => `${aboutData.achievements.length} achievements including hackathons and certifications`,
				},
				{
					check: () =>
						queryWords.some(
							(w) =>
								aboutData.interests.some((int) => int.name.toLowerCase().includes(w)) ||
								["hobby", "interest"].includes(w)
						),
					title: "Interests & Hobbies",
					desc: () => `Personal interests: ${aboutData.interests.map((int) => int.name).join(", ")}`,
				},
				{
					check: () =>
						queryWords.some(
							(w) =>
								aboutData.currentFocus.some((focus) =>
									[focus.title, focus.description].some((field) => field.toLowerCase().includes(w))
								) || ["goal", "focus", "learning"].includes(w)
						),
					title: "Current Focus & Goals",
					desc: () => `Currently focusing on: ${aboutData.currentFocus.map((f) => f.title).join(", ")}`,
				},
			];

			const context = contextChecks.find((ctx) => ctx.check()) || {
				title: "About Me",
				desc: () => "Personal information, skills, education, and achievements",
			};

			results.push({
				type: "about",
				title: context.title,
				description: context.desc(),
				url: "/about",
				matchedTerm: findMatchedTerm(lowerQuery, searchableContent.toLowerCase()),
				relevanceScore: calculateRelevanceScore(context.title, context.desc(), Array.from(aboutTerms), "about"),
			});
		}
	}

	// Search Contact data (only if needed)
	if (results.length < 8) {
		const contactTerms = getContactSearchTerms();
		const hasMatch = Array.from(contactTerms).some(
			(term) => matchesQuery(term) || term.includes(lowerQuery) || lowerQuery.includes(term)
		);

		if (hasMatch) {
			// Find specific matches for better context
			const matchedSocial = contactData.socialPlatforms.find((platform) =>
				queryWords.some((word) =>
					[platform.name, platform.url, platform.description].some((field) =>
						field.toLowerCase().includes(word)
					)
				)
			);

			const matchedMethod = contactData.contactMethods.find((method) =>
				queryWords.some((word) =>
					[method.type, method.label, method.value].some((field) => field.toLowerCase().includes(word))
				)
			);

			let title = "Contact Information";
			let description = "Get in touch for opportunities and collaborations";

			if (matchedSocial) {
				title = matchedSocial.name;
				description = `${matchedSocial.description} - Connect with me on ${matchedSocial.name}`;
			} else if (matchedMethod) {
				title = matchedMethod.label;
				const typeDescriptions = {
					email: `Reach out directly via email: ${matchedMethod.value}`,
					phone: `Call me at: ${matchedMethod.value}`,
					whatsapp: `Message me on WhatsApp: ${matchedMethod.value}`,
				};
				description = typeDescriptions[matchedMethod.type as keyof typeof typeDescriptions] || description;
			}

			results.push({
				type: "contact",
				title,
				description,
				url: "/contact",
				relevanceScore: calculateRelevanceScore(title, description, Array.from(contactTerms), "contact"),
			});
		}
	}

	// Sort and dedupe
	return results
		.filter(
			(result, index, self) => index === self.findIndex((r) => r.url === result.url && r.type === result.type)
		)
		.sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0))
		.slice(0, 8);
}

function findMatchedTerm(query: string, content: string): string {
	for (const word of query.split(" ")) {
		const index = content.indexOf(word);
		if (index !== -1) {
			const start = Math.max(0, index - 20);
			const end = Math.min(content.length, index + word.length + 20);
			return content.substring(start, end).trim();
		}
	}
	return query;
}

// Reset cache function for development/testing
export function resetSearchCache(): void {
	contactTermsCache = null;
	aboutTermsCache = null;
}
