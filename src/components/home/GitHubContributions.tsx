"use client";
import React from "react";
import {
	fetchGitHubContributions,
	getCachedContributions,
	type ContributionDay,
	type ContributionWeek,
} from "@/lib/github-api";
import { useApi } from "@/lib/hooks";
import "@/styles/github-contributions.css";

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

export default function GitHubContributions() {
	const { data, loading, error } = useApi(fetchGitHubContributions, { getCachedData: getCachedContributions });

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

	return (
		<div className="border gh-border rounded-lg p-3 sm:p-6 gh-shadow mb-6 min-h-[180px] gh-contributions-container">
			{/* Header - fixed height to prevent shifts */}
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4 min-h-[24px] sm:min-h-[28px]">
				<h2 className="text-base sm:text-lg font-semibold gh-text">
					<span className="block sm:inline">{totalContributions} contributions</span>{" "}
					<span className="block sm:inline gh-text-muted text-sm sm:text-base">in the last year</span>
				</h2>
				<div className="flex items-center gap-2 text-xs gh-text-muted">
					<span className="hidden sm:inline">Learn how we count contributions</span>
				</div>
			</div>

			{/* Contributions Grid - fixed dimensions to prevent shifts */}
			<div className="overflow-x-auto">
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
						<div className="flex ml-[8px] flex-1 justify-between">
							{weeks.map((week: ContributionWeek, weekIndex: number) => (
								<div key={weekIndex} className="flex flex-col gap-1" style={{ minWidth: "10px" }}>
									{week.contributionDays.map((day: ContributionDay, dayIndex: number) => (
										<div
											key={dayIndex}
											className={`w-[10px] h-[10px] rounded-[2px] hover:outline-1 hover:outline-gray-400 transition-colors duration-150 ${getLevelClass(
												day.contributionLevel
											)}`}
											title={`${day.contributionCount} contributions on ${new Date(
												day.date
											).toLocaleDateString()}`}
										/>
									))}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Legend */}
			<div className="mt-3 flex items-center justify-end">
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
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4">
				<div className="animate-pulse">
					<div className="h-5 sm:h-6 bg-gray-200 dark:bg-gray-700 rounded w-64"></div>
				</div>
				<div className="flex items-center gap-2 text-xs gh-text-muted">
					<span className="hidden sm:inline opacity-0">Learn how we count contributions</span>
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

			{/* Legend skeleton */}
			<div className="mt-3 flex items-center justify-end">
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
				<p className="text-red-500 mb-2">Failed to load GitHub contributions</p>
				<p className="text-sm gh-text-muted">{error || "No data available"}</p>
			</div>
		</div>
	);
}
