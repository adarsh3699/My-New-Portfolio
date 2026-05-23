// A single search result returned by the site-wide search
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
