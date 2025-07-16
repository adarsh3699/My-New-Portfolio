import { cache, CACHE_TTL } from './cache';

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

const KEYS = {
  PROFILE: 'github_profile',
  CONTRIBUTIONS: 'github_contributions',
} as const;

// Sync cache getters
export const getCachedProfile = () => cache.getSync<GitHubProfile>(KEYS.PROFILE);
export const getCachedContributions = () => cache.getSync<GitHubContributions>(KEYS.CONTRIBUTIONS);

// API fetchers with caching
export async function fetchGitHubProfile(): Promise<GitHubProfile> {
  const cached = cache.get<GitHubProfile>(KEYS.PROFILE);
  if (cached) return cached;

  const response = await fetch('/api/github-profile');
  if (!response.ok) throw new Error('Failed to fetch GitHub profile');

  const data = await response.json();
  cache.set(KEYS.PROFILE, data, CACHE_TTL.PROFILE);
  return data;
}

export async function fetchGitHubContributions(): Promise<GitHubContributions> {
  const cached = cache.get<GitHubContributions>(KEYS.CONTRIBUTIONS);
  if (cached) return cached;

  const response = await fetch('/api/github-contributions');
  if (!response.ok) throw new Error('Failed to fetch GitHub contributions');

  const data = await response.json();
  cache.set(KEYS.CONTRIBUTIONS, data, CACHE_TTL.CONTRIBUTIONS);
  return data;
}
