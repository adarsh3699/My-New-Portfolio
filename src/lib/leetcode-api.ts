import { cache } from "./cache";

// LeetCode data interfaces
export interface LeetCodeSubmission {
	date: string;
	count: number;
	level: 0 | 1 | 2 | 3;
}

export interface LeetCodeContributions {
	totalSubmissions: number;
	weeks: Array<{ contributionDays: LeetCodeSubmission[] }>;
}

// Cache configuration
const CACHE_KEY = "leetcode_contributions";
const CACHE_TTL = 1000 * 60 * 60 * 1; // 1 hour

// Cache getter
export const getCachedLeetCodeContributions = () => cache.getSync<LeetCodeContributions>(CACHE_KEY);

// Fetch LeetCode contributions
export async function fetchLeetCodeContributions(): Promise<LeetCodeContributions> {
	const cached = cache.get<LeetCodeContributions>(CACHE_KEY);
	if (cached) return cached;

	try {
		const response = await fetch("/api/leetcode-contributions");
		if (!response.ok) throw new Error("Failed to fetch LeetCode data");

		const data = await response.json();
		cache.set(CACHE_KEY, data, CACHE_TTL);
		return data;
	} catch (error) {
		console.error("LeetCode API error:", error);
		throw error;
	}
}

// Convert LeetCode data to GitHub-compatible format
export const convertLeetCodeToGitHubFormat = (leetcodeData: LeetCodeContributions) => {
	const levels = ["NONE", "SECOND_QUARTILE", "THIRD_QUARTILE", "FOURTH_QUARTILE"] as const;

	return {
		totalContributions: leetcodeData.totalSubmissions,
		weeks: leetcodeData.weeks.map((week) => ({
			contributionDays: week.contributionDays.map((day) => ({
				date: day.date,
				contributionCount: day.count,
				contributionLevel: levels[day.level],
			})),
		})),
	};
};
