import { cache, CACHE_TTL, createCacheKey, withCache } from "./cache";

export interface GitHubProfile {
	repositories: number;
	followers: number;
	following: number;
	bio: string;
	websiteUrl: string;
	avatarUrl: string;
}

export interface ContributionDay {
	contributionCount: number;
	date: string;
	contributionLevel: "NONE" | "FIRST_QUARTILE" | "SECOND_QUARTILE" | "THIRD_QUARTILE" | "FOURTH_QUARTILE";
}

export interface ContributionWeek {
	contributionDays: ContributionDay[];
}

export interface GitHubContributions {
	totalContributions: number;
	weeks: ContributionWeek[];
}

// Dynamic cache keys
const PROFILE_KEY = createCacheKey("github", "profile");
const CONTRIBUTIONS_KEY = createCacheKey("github", "contributions");

// Sync cache getters
export const getCachedProfile = () => cache.getSync<GitHubProfile>(PROFILE_KEY);
export const getCachedContributions = () => cache.getSync<GitHubContributions>(CONTRIBUTIONS_KEY);

// API fetchers with caching using the new withCache helper
export async function fetchGitHubProfile(): Promise<GitHubProfile> {
	return withCache(
		PROFILE_KEY,
		async () => {
			const response = await fetch("/api/github-profile");
			if (!response.ok) throw new Error("Failed to fetch GitHub profile");
			return response.json();
		},
		CACHE_TTL.LONG // cache for 1 hour
	);
}

export async function fetchGitHubContributions(): Promise<GitHubContributions> {
	return withCache(
		CONTRIBUTIONS_KEY,
		async () => {
			const response = await fetch("/api/github-contributions");
			if (!response.ok) throw new Error("Failed to fetch GitHub contributions");
			return response.json();
		},
		CACHE_TTL.MEDIUM // cache for 15 minutes
	);
}
