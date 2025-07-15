"use client";
import React, { useState, useEffect } from "react";

// Types
interface ContributionDay {
	contributionCount: number;
	date: string;
	contributionLevel: "NONE" | "FIRST_QUARTILE" | "SECOND_QUARTILE" | "THIRD_QUARTILE" | "FOURTH_QUARTILE";
}

interface ContributionWeek {
	contributionDays: ContributionDay[];
}

interface GitHubContributionsData {
	totalContributions: number;
	weeks: ContributionWeek[];
}

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

// Helper functions
function generateMockData(): GitHubContributionsData {
	const weeks: ContributionWeek[] = [];
	let totalContributions = 0;

	for (let week = 0; week < 53; week++) {
		const contributionDays: ContributionDay[] = [];
		for (let day = 0; day < 7; day++) {
			const random = Math.random();
			const isWeekend = day === 0 || day === 6;

			let contributionCount = 0;
			let contributionLevel: ContributionDay["contributionLevel"] = "NONE";

			if (isWeekend) {
				if (random > 0.85) contributionLevel = "FIRST_QUARTILE";
				if (random > 0.93) contributionLevel = "SECOND_QUARTILE";
				if (random > 0.97) contributionLevel = "THIRD_QUARTILE";
				if (random > 0.99) contributionLevel = "FOURTH_QUARTILE";
			} else {
				if (random > 0.4) contributionLevel = "FIRST_QUARTILE";
				if (random > 0.7) contributionLevel = "SECOND_QUARTILE";
				if (random > 0.85) contributionLevel = "THIRD_QUARTILE";
				if (random > 0.94) contributionLevel = "FOURTH_QUARTILE";
			}

			// Set contribution count based on level
			switch (contributionLevel) {
				case "FIRST_QUARTILE":
					contributionCount = Math.floor(Math.random() * 3) + 1;
					break;
				case "SECOND_QUARTILE":
					contributionCount = Math.floor(Math.random() * 5) + 4;
					break;
				case "THIRD_QUARTILE":
					contributionCount = Math.floor(Math.random() * 8) + 8;
					break;
				case "FOURTH_QUARTILE":
					contributionCount = Math.floor(Math.random() * 10) + 15;
					break;
				default:
					contributionCount = 0;
			}

			totalContributions += contributionCount;

			const date = new Date();
			date.setDate(date.getDate() - (52 - week) * 7 - (6 - day));

			contributionDays.push({
				contributionCount,
				date: date.toISOString().split("T")[0],
				contributionLevel,
			});
		}
		weeks.push({ contributionDays });
	}

	return { totalContributions, weeks };
}

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
	const [data, setData] = useState<GitHubContributionsData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetchContributions();
	}, []);

	const fetchContributions = async () => {
		try {
			const response = await fetch("/api/github-contributions");
			if (!response.ok) throw new Error("Failed to fetch contributions");

			const contributionsData = await response.json();
			setData(contributionsData);
		} catch (err) {
			setError(err instanceof Error ? err.message : "An error occurred");
			setData(generateMockData());
		} finally {
			setLoading(false);
		}
	};

	// Loading state
	if (loading) {
		return (
			<div className="border gh-border rounded-lg p-3 sm:p-6 gh-shadow mb-6">
				<div className="animate-pulse">
					<div className="h-6 bg-gray-200 rounded w-64 mb-4"></div>
					<div className="h-32 bg-gray-200 rounded"></div>
				</div>
			</div>
		);
	}

	// Error state with fallback
	if (error && !data) {
		return (
			<div className="border gh-border rounded-lg p-3 sm:p-6 gh-shadow mb-6">
				<div className="text-red-500 mb-4">
					<p>Failed to load GitHub contributions: {error}</p>
					<p className="text-sm text-gray-500">Showing mock data instead.</p>
				</div>
			</div>
		);
	}

	if (!data) return null;

	const { totalContributions, weeks } = data;
	const months = generateMonthLabels(weeks);

	return (
		<div className="border gh-border rounded-lg p-3 sm:p-6 gh-shadow mb-6">
			{/* Header */}
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4">
				<h2 className="text-base sm:text-lg font-semibold gh-text">
					<span className="block sm:inline">{totalContributions} contributions</span>{" "}
					<span className="block sm:inline gh-text-muted text-sm sm:text-base">in the last year</span>
				</h2>
				<div className="flex items-center gap-2 text-xs gh-text-muted">
					<span className="hidden sm:inline">Learn how we count contributions</span>
				</div>
			</div>

			{/* Contributions Grid */}
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

					{/* Days grid */}
					<div className="flex">
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
											className={`w-[10px] h-[10px] rounded-[2px] hover:outline-1 hover:outline-gray-400 ${getLevelClass(
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
