// A single LeetCode submission day (activity heatmap)
export interface LeetCodeSubmission {
	date: string;
	count: number;
	level: 0 | 1 | 2 | 3;
}

// Full LeetCode contribution / activity data
export interface LeetCodeContributions {
	totalSubmissions: number;
	weeks: Array<{ contributionDays: LeetCodeSubmission[] }>;
}

// Solved-problem statistics from the LeetCode stats API
export interface LeetCodeStats {
	totalSolved: number;
	totalQuestions: number;
	easySolved: number;
	mediumSolved: number;
	hardSolved: number;
	totalEasy: number;
	totalMedium: number;
	totalHard: number;
}
