// Barrel export — import all shared types from "@/types"
export type {
	// Project domain
	Project,
	GitHubRepo,
	ReadmeContent,
	ReadmeTechDetails,
	ReadmeInstallation,
	ReadmeEnvVariable,
	ReadmeCustomSection,
	ProjectScreenshot,
} from "./project";

export type {
	// GitHub domain
	GitHubProfile,
	ContributionDay,
	ContributionWeek,
	GitHubContributions,
} from "./github";

export type {
	// LeetCode domain
	LeetCodeSubmission,
	LeetCodeContributions,
	LeetCodeStats,
} from "./leetcode";

export type {
	// Experience domain
	Experience,
} from "./experience";

export type {
	// Search domain
	SearchResult,
} from "./search";
