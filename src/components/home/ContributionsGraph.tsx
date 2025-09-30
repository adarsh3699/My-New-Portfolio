"use client";
import React, { useState, useEffect, useRef } from "react";
import {
	fetchGitHubContributions,
	getCachedContributions,
	type ContributionDay,
	type ContributionWeek,
} from "@/lib/github-api";
import {
	fetchLeetCodeContributions,
	getCachedLeetCodeContributions,
	convertLeetCodeToGitHubFormat,
} from "@/lib/leetcode-api";
import { useApi } from "@/lib/hooks";
import "@/styles/github-contributions.css";
import { stringify } from "querystring";

// Constants
const CONTRIBUTION_LEVELS = {
	NONE: "gh-contribution-level-0",
	FIRST_QUARTILE: "gh-contribution-level-1",
	SECOND_QUARTILE: "gh-contribution-level-2",
	THIRD_QUARTILE: "gh-contribution-level-3",
	FOURTH_QUARTILE: "gh-contribution-level-4",
} as const;

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

function getLevelClass(level: ContributionDay["contributionLevel"]): string {
	return CONTRIBUTION_LEVELS[level];
}

function generateMonthLabels(weeks: ContributionWeek[]): string[] {
	const firstDate = weeks[0]?.contributionDays[0]?.date;
	if (!firstDate) return [];

	const startDate = new Date(firstDate);
	return Array.from({ length: 13 }, (_, i) => {
		const date = new Date(startDate);
		date.setMonth(startDate.getMonth() + i);
		return MONTH_NAMES[date.getMonth()];
	});
}

// Calculate total active days (days with contributions > 0)
function calculateActiveDays(weeks: ContributionWeek[]): number {
	return weeks.reduce((total, week) => {
		return total + week.contributionDays.filter((day) => day.contributionCount > 0).length;
	}, 0);
}

// Calculate maximum streak of consecutive days with contributions
function calculateMaxStreak(weeks: ContributionWeek[]): number {
	const allDays = weeks.flatMap((week) => week.contributionDays);
	let maxStreak = 0;
	let currentStreak = 0;

	for (const day of allDays) {
		if (day.contributionCount > 0) {
			currentStreak++;
			maxStreak = Math.max(maxStreak, currentStreak);
		} else {
			currentStreak = 0;
		}
	}

	return maxStreak;
}

type ViewMode = "DEV" | "DSA";

export default function ContributionsGraph() {
	const [viewMode, setViewMode] = useState<ViewMode>("DEV");
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	// Fetch GitHub contributions (DEV)
	const {
		data: githubData,
		loading: githubLoading,
		error: githubError,
	} = useApi(fetchGitHubContributions, { getCachedData: getCachedContributions });

	// Fetch LeetCode contributions (DSA)
	const {
		data: leetcodeData,
		loading: leetcodeLoading,
		error: leetcodeError,
	} = useApi(fetchLeetCodeContributions, { getCachedData: getCachedLeetCodeContributions });

	// Determine current data based on view mode
	const isDevMode = viewMode === "DEV";
	const data = isDevMode ? githubData : leetcodeData ? convertLeetCodeToGitHubFormat(leetcodeData) : null;
	const loading = isDevMode ? githubLoading : leetcodeLoading;
	const error = isDevMode ? githubError : leetcodeError;

	// Auto-scroll to end on mobile when data loads or view mode changes
	useEffect(() => {
		if (data && scrollContainerRef.current) {
			const container = scrollContainerRef.current;
			// Small delay to ensure DOM is updated
			setTimeout(() => {
				container.scrollLeft = container.scrollWidth - container.clientWidth;
			}, 100);
		}
	}, [data, viewMode]);

	// Loading state - maintain exact layout dimensions
	if (loading) {
		return loadingPlaceholder();
	}

	// Error state
	if (error || !data) {
		return errorPlaceholder(error || "No data available");
	}

	const { totalContributions, weeks } = data;
	const months = generateMonthLabels(weeks);
	const activeDays = calculateActiveDays(weeks);
	const maxStreak = calculateMaxStreak(weeks);

	return (
		<div className="border gh-border rounded-lg p-3 sm:p-6 gh-shadow mb-6 min-h-[180px] gh-contributions-container">
			{/* Header - fixed height to prevent shifts */}
			<div className="flex items-center justify-between gap-2 mb-4 min-h-[28px]">
				<h2 className="text-base sm:text-lg font-semibold gh-text flex-1">
					<span className="block sm:inline">
						{totalContributions} {isDevMode ? "contributions" : "problems solved"}
					</span>{" "}
					<span className="block sm:inline gh-text-muted text-sm sm:text-base">in the last year</span>
				</h2>
				<div className="flex items-center gap-1 text-xs flex-shrink-0">
					<button
						onClick={() => setViewMode("DEV")}
						className={`px-3 py-1 rounded-md transition-all duration-200 ${
							viewMode === "DEV"
								? "bg-blue-500 text-white shadow-sm"
								: "gh-text-muted hover:gh-text-accent hover:bg-gray-100 dark:hover:bg-gray-800"
						}`}
					>
						DEV
					</button>
					<button
						onClick={() => setViewMode("DSA")}
						className={`px-3 py-1 rounded-md transition-all duration-200 ${
							viewMode === "DSA"
								? "bg-orange-500 text-white shadow-sm"
								: "gh-text-muted hover:gh-text-accent hover:bg-gray-100 dark:hover:bg-gray-800"
						}`}
					>
						DSA
					</button>
				</div>
			</div>

			{/* Contributions Grid - fixed dimensions to prevent shifts */}
			<div className="overflow-x-auto" ref={scrollContainerRef}>
				<div className="font-mono text-xs min-w-[680px]">
					{/* Month labels */}
					<div className="flex items-center mb-1">
						<div className="w-[10px]"></div>
						<div className="flex flex-1 ml-[14px]">
							{months.map((month, index) => (
								<div
									key={index}
									className="text-[10px] gh-text text-left flex-1"
									style={{ minWidth: "44px" }}
								>
									{month}
								</div>
							))}
						</div>
					</div>

					{/* Days grid - fixed height to prevent layout shifts */}
					<div className="flex min-h-[91px]">
						{/* Day labels */}
						<div className="flex flex-col">
							{DAY_LABELS.map((label, index) => (
								<div
									key={index}
									className="h-[10px] text-[10px] gh-text text-right flex items-center justify-end flex-1"
								>
									{label}
								</div>
							))}
						</div>

						{/* Contribution squares */}
						<div className="flex ml-[8px] flex-1 justify-between pr-px pb-px">
							{weeks.map((week: ContributionWeek, weekIndex: number) => (
								<div key={weekIndex} className="flex flex-col gap-1" style={{ minWidth: "10px" }}>
									{week.contributionDays.map((day: ContributionDay, dayIndex: number) => (
										<div
											key={dayIndex}
											className={`w-[10px] h-[10px] rounded-[2px] hover:outline-1 hover:outline-gray-400 transition-colors duration-150 ${getLevelClass(
												day.contributionLevel
											)}`}
											title={`${day.contributionCount} ${
												isDevMode ? "contributions" : "problems solved"
											} on ${new Date(day.date).toLocaleDateString()}`}
										/>
									))}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Legend and Statistics */}
			<div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
				<div className="flex items-center gap-3 sm:gap-4 text-sm">
					<span className="gh-text-muted">
						Total active days: <span className="gh-text font-semibold">{activeDays}</span>
					</span>
					<span className="gh-text-muted">
						Max streak: <span className="gh-text font-semibold">{maxStreak}</span>
					</span>
				</div>
				<div className="flex items-center gap-1 text-[11px] gh-text-muted">
					<span>Less</span>
					<div className="flex gap-[2px] mx-2">
						<div className="w-[10px] h-[10px] rounded-[2px] gh-contribution-level-0"></div>
						<div className="w-[10px] h-[10px] rounded-[2px] gh-contribution-level-1"></div>
						<div className="w-[10px] h-[10px] rounded-[2px] gh-contribution-level-2"></div>
						<div className="w-[10px] h-[10px] rounded-[2px] gh-contribution-level-3"></div>
						<div className="w-[10px] h-[10px] rounded-[2px] gh-contribution-level-4"></div>
					</div>
					<span>More</span>
				</div>
			</div>
		</div>
	);
}

function loadingPlaceholder() {
	return (
		<div className="border gh-border rounded-lg p-3 sm:p-6 gh-shadow mb-6 min-h-[180px] gh-contributions-container">
			{/* Header skeleton - exact same structure as real content */}
			<div className="flex items-center justify-between gap-2 mb-4 min-h-[28px]">
				<div className="animate-pulse flex-1">
					<div className="h-5 sm:h-6 bg-gray-200 dark:bg-gray-700 rounded w-64"></div>
				</div>
				<div className="flex items-center gap-1 text-xs flex-shrink-0">
					<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-6 w-12 rounded-md"></div>
					<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-6 w-12 rounded-md"></div>
				</div>
			</div>

			{/* Contributions Grid skeleton - exact same dimensions */}
			<div className="overflow-x-auto">
				<div className="font-mono text-xs min-w-[680px]">
					{/* Month labels skeleton */}
					<div className="flex items-center mb-1">
						<div className="w-[10px]"></div>
						<div className="flex flex-1 ml-[14px]">
							{Array.from({ length: 13 }, (_, index) => (
								<div
									key={index}
									className="text-[10px] gh-text text-left flex-1"
									style={{ minWidth: "44px" }}
								>
									<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-3 w-6 rounded"></div>
								</div>
							))}
						</div>
					</div>

					{/* Days grid skeleton */}
					<div className="flex">
						{/* Day labels skeleton */}
						<div className="flex flex-col">
							{DAY_LABELS.map((_, index) => (
								<div
									key={index}
									className="h-[10px] text-[10px] gh-text text-right flex items-center justify-end flex-1"
								>
									{/* Empty space to maintain layout */}
								</div>
							))}
						</div>

						{/* Contribution squares skeleton */}
						<div className="flex ml-[8px] flex-1 justify-between">
							{Array.from({ length: 53 }, (_, weekIndex) => (
								<div key={weekIndex} className="flex flex-col gap-1" style={{ minWidth: "10px" }}>
									{Array.from({ length: 7 }, (_, dayIndex) => (
										<div
											key={dayIndex}
											className="w-[10px] h-[10px] rounded-[2px] animate-pulse bg-gray-200 dark:bg-gray-700"
										/>
									))}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Legend and Statistics skeleton */}
			<div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
				<div className="flex items-center gap-3 sm:gap-4 text-sm">
					<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-4 w-32 rounded"></div>
					<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-4 w-20 rounded"></div>
				</div>
				<div className="flex items-center gap-1 text-[11px] gh-text-muted">
					<span>Less</span>
					<div className="flex gap-[2px] mx-2">
						<div className="w-[10px] h-[10px] rounded-[2px] animate-pulse bg-gray-200 dark:bg-gray-700"></div>
						<div className="w-[10px] h-[10px] rounded-[2px] animate-pulse bg-gray-200 dark:bg-gray-700"></div>
						<div className="w-[10px] h-[10px] rounded-[2px] animate-pulse bg-gray-200 dark:bg-gray-700"></div>
						<div className="w-[10px] h-[10px] rounded-[2px] animate-pulse bg-gray-200 dark:bg-gray-700"></div>
						<div className="w-[10px] h-[10px] rounded-[2px] animate-pulse bg-gray-200 dark:bg-gray-700"></div>
					</div>
					<span>More</span>
				</div>
			</div>
		</div>
	);
}

function errorPlaceholder(error: string) {
	return (
		<div className="border gh-border rounded-lg p-3 sm:p-6 gh-shadow mb-6 min-h-[180px] gh-contributions-container">
			<div className="text-center py-8">
				<p className="text-red-500 mb-2">Failed to load contributions</p>
				<p className="text-sm gh-text-muted">{error || "No data available"}</p>
			</div>

			{/* Statistics placeholder */}
			<div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
				<div className="flex items-center gap-3 sm:gap-4 text-sm">
					<span className="gh-text-muted">
						Total active days: <span className="gh-text font-semibold">--</span>
					</span>
					<span className="gh-text-muted">
						Max streak: <span className="gh-text font-semibold">--</span>
					</span>
				</div>
				<div className="flex items-center gap-1 text-[11px] gh-text-muted">
					<span>Less</span>
					<div className="flex gap-[2px] mx-2">
						<div className="w-[10px] h-[10px] rounded-[2px] gh-contribution-level-0"></div>
						<div className="w-[10px] h-[10px] rounded-[2px] gh-contribution-level-1"></div>
						<div className="w-[10px] h-[10px] rounded-[2px] gh-contribution-level-2"></div>
						<div className="w-[10px] h-[10px] rounded-[2px] gh-contribution-level-3"></div>
						<div className="w-[10px] h-[10px] rounded-[2px] gh-contribution-level-4"></div>
					</div>
					<span>More</span>
				</div>
			</div>
		</div>
	);
}
