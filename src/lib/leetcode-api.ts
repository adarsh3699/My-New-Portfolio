import { cache, CACHE_TTL, withCache } from "./cache";
import type { LeetCodeSubmission, LeetCodeContributions, LeetCodeStats } from "@/types";

export type { LeetCodeSubmission, LeetCodeContributions, LeetCodeStats };

const LEETCODE_KEY = "leetcode_contributions";
const LEETCODE_STATS_KEY = "leetcode_stats";

export const getCachedLeetCodeContributions = () => cache.getSync<LeetCodeContributions>(LEETCODE_KEY);
export const getCachedLeetCodeStats = () => cache.getSync<LeetCodeStats>(LEETCODE_STATS_KEY);

export async function fetchLeetCodeContributions(): Promise<LeetCodeContributions> {
	return withCache(LEETCODE_KEY, async () => {
		const res = await fetch("/api/leetcode-contributions");
		if (!res.ok) throw new Error("Failed to fetch LeetCode data");
		return res.json();
	}, CACHE_TTL.MEDIUM);
}

export async function fetchLeetCodeStats(): Promise<LeetCodeStats> {
	return withCache(LEETCODE_STATS_KEY, async () => {
		const res = await fetch("/api/leetcode-stats");
		if (!res.ok) throw new Error("Failed to fetch LeetCode stats");
		return res.json();
	}, CACHE_TTL.MEDIUM);
}

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
