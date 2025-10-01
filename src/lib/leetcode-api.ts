import { cache, CACHE_TTL, createCacheKey, withCache } from "./cache";

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

// Dynamic cache key
const LEETCODE_KEY = createCacheKey("leetcode", "contributions");

// Cache getter
export const getCachedLeetCodeContributions = () => cache.getSync<LeetCodeContributions>(LEETCODE_KEY);

// Fetch LeetCode contributions using the new withCache helper
export async function fetchLeetCodeContributions(): Promise<LeetCodeContributions> {
	return withCache(
		LEETCODE_KEY,
		async () => {
			const response = await fetch("/api/leetcode-contributions");
			if (!response.ok) throw new Error("Failed to fetch LeetCode data");
			return response.json();
		},
		CACHE_TTL.MEDIUM // cache for 15 minutes
	);
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
