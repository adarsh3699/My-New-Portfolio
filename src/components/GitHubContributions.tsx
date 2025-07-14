import React from "react";

export default function GitHubContributions() {
	// Generate realistic contribution data for the last year
	const generateContributionData = () => {
		const weeks = [];
		const today = new Date();

		// Create 53 weeks of data (52 weeks + partial week at start)
		for (let week = 0; week < 53; week++) {
			const weekData = [];
			for (let day = 0; day < 7; day++) {
				// Generate random contribution levels with realistic patterns
				let level = 0;
				const random = Math.random();

				// Weekend pattern - less likely to have contributions
				const isWeekend = day === 0 || day === 6;

				if (isWeekend) {
					if (random > 0.85) level = 1;
					if (random > 0.93) level = 2;
					if (random > 0.97) level = 3;
					if (random > 0.99) level = 4;
				} else {
					if (random > 0.4) level = 1;
					if (random > 0.7) level = 2;
					if (random > 0.85) level = 3;
					if (random > 0.94) level = 4;
				}

				weekData.push(level);
			}
			weeks.push(weekData);
		}

		return weeks;
	};

	const contributionData = generateContributionData();

	// Calculate total contributions
	const totalContributions = contributionData.flat().reduce((sum, level) => {
		return sum + (level > 0 ? Math.floor(Math.random() * 5) + level : 0);
	}, 0);

	// Get the contribution level class
	const getLevelClass = (level: number): string => {
		switch (level) {
			case 0:
				return "gh-contribution-level-0";
			case 1:
				return "gh-contribution-level-1";
			case 2:
				return "gh-contribution-level-2";
			case 3:
				return "gh-contribution-level-3";
			case 4:
				return "gh-contribution-level-4";
			default:
				return "gh-contribution-level-0";
		}
	};

	// Month labels - showing last 12 months with proper spacing
	const months = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

	// Day labels
	const dayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];

	return (
		<div className="border gh-border rounded-lg p-3 sm:p-6 gh-shadow mb-6">
			{/* Header - Responsive */}
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4">
				<h2 className="text-base sm:text-lg font-semibold gh-text">
					<span className="block sm:inline">{totalContributions} contributions</span>{" "}
					<span className="block sm:inline gh-text-muted text-sm sm:text-base">in the last year</span>
				</h2>
				<div className="flex items-center gap-2 text-xs gh-text-muted">
					<span className="hidden sm:inline">Learn how we count contributions</span>
				</div>
			</div>

			{/* GitHub Contributions Grid - Responsive */}
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
									style={{
										minWidth: "44px", // Minimum width for each month section
									}}
								>
									{month}
								</div>
							))}
						</div>
					</div>

					{/* Days grid with day labels */}
					<div className="flex">
						{/* Day labels column */}
						<div className="flex flex-col">
							{dayLabels.map((label, index) => (
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
							{contributionData.map((week, weekIndex) => (
								<div key={weekIndex} className="flex flex-col gap-1" style={{ minWidth: "10px" }}>
									{week.map((level, dayIndex) => (
										<div
											key={dayIndex}
											className={`w-[10px] h-[10px] rounded-[2px] cursor-pointer transition-colors hover:outline-1 hover:outline-gray-400 ${getLevelClass(
												level
											)}`}
											title={`${
												level > 0 ? Math.floor(Math.random() * 5) + level : 0
											} contributions`}
										/>
									))}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Legend - Fixed at bottom right */}
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
