// GitHub profile summary returned by the API
export interface GitHubProfile {
	repositories: number;
	followers: number;
	following: number;
	bio: string;
	websiteUrl: string;
	avatarUrl: string;
}

// Individual contribution day in the contribution graph
export interface ContributionDay {
	contributionCount: number;
	date: string;
	contributionLevel:
		| "NONE"
		| "FIRST_QUARTILE"
		| "SECOND_QUARTILE"
		| "THIRD_QUARTILE"
		| "FOURTH_QUARTILE";
}

// A week column in the contribution graph
export interface ContributionWeek {
	contributionDays: ContributionDay[];
}

// Full contribution graph data
export interface GitHubContributions {
	totalContributions: number;
	weeks: ContributionWeek[];
}
