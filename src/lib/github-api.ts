import { cache, CACHE_TTL, withCache } from "./cache";
import type { GitHubProfile, ContributionDay, ContributionWeek, GitHubContributions } from "@/types";

export type { GitHubProfile, ContributionDay, ContributionWeek, GitHubContributions };

const PROFILE_KEY = "github_profile";
const CONTRIBUTIONS_KEY = "github_contributions";

export const getCachedProfile = () => cache.getSync<GitHubProfile>(PROFILE_KEY);
export const getCachedContributions = () => cache.getSync<GitHubContributions>(CONTRIBUTIONS_KEY);

export async function fetchGitHubProfile(): Promise<GitHubProfile> {
	return withCache(PROFILE_KEY, async () => {
		const res = await fetch("/api/github-profile");
		if (!res.ok) throw new Error("Failed to fetch GitHub profile");
		return res.json();
	}, CACHE_TTL.LONG);
}

export async function fetchGitHubContributions(): Promise<GitHubContributions> {
	return withCache(CONTRIBUTIONS_KEY, async () => {
		const res = await fetch("/api/github-contributions");
		if (!res.ok) throw new Error("Failed to fetch GitHub contributions");
		return res.json();
	}, CACHE_TTL.MEDIUM);
}
