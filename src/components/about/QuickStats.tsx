"use client";
import { stats } from "@/data/about";
import { fetchLeetCodeStats, getCachedLeetCodeStats } from "@/lib/leetcode-api";
import { useApi } from "@/lib/hooks";

export default function QuickStats() {
	const { data: leetcodeStats, loading: leetcodeLoading } = useApi(fetchLeetCodeStats, {
		getCachedData: getCachedLeetCodeStats,
	});

	const getStatValue = (stat: { label: string; value: string }) => {
		if (stat.label === "LeetCode Ques") {
			return leetcodeLoading ? "..." : leetcodeStats?.totalSolved?.toString() || stat.value;
		}
		return stat.value;
	};

	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
			{stats.map((stat, index) => (
				<div
					key={index}
					className="group text-center p-6 border gh-border rounded-xl gh-bg-canvas-subtle hover:gh-bg-canvas-default transition-all duration-300 cursor-pointer relative overflow-hidden"
				>
					{/* Background gradient on hover */}
					<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

					<div className="relative z-10">
						<div className="text-3xl font-bold gh-text-accent mb-2">{getStatValue(stat)}</div>
						<div className="text-sm gh-text-muted group-hover:gh-text transition-colors duration-300">
							{stat.label}
						</div>
					</div>

					{/* Decorative corner accent */}
					<div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				</div>
			))}
		</div>
	);
}
