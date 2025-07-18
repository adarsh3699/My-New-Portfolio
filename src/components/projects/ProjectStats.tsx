import { useMemo } from "react";
import { StarIcon, EyeIcon } from "@heroicons/react/24/outline";
import { ForkIcon } from "@/components/icons";

interface ProjectStatsProps {
	primaryLanguage: {
		name: string;
		color: string;
	};
	stats: {
		stars: number;
		forks: number;
		watchers?: number;
	};
	updatedAt: string;
}

export function ProjectStats({ primaryLanguage, stats, updatedAt }: ProjectStatsProps) {
	const formattedTime = useMemo(() => {
		const date = new Date(updatedAt);
		const now = new Date();
		const diffTime = Math.abs(now.getTime() - date.getTime());
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

		if (diffDays === 1) return "Updated 1 day ago";
		if (diffDays < 30) return `Updated ${diffDays} days ago`;
		if (diffDays < 365) {
			const months = Math.floor(diffDays / 30);
			return `Updated ${months} month${months > 1 ? "s" : ""} ago`;
		}
		const years = Math.floor(diffDays / 365);
		return `Updated ${years} year${years > 1 ? "s" : ""} ago`;
	}, [updatedAt]);

	return (
		<div className="flex items-center gap-4 text-xs gh-text-muted">
			<span className="flex items-center gap-1">
				<div className={`w-3 h-3 rounded-full ${primaryLanguage.color}`} />
				{primaryLanguage.name}
			</span>
			<span className="flex items-center gap-1">
				<StarIcon className="w-3 h-3" />
				{stats.stars}
			</span>
			<span className="flex items-center gap-1">
				<ForkIcon className="w-3 h-3" />
				{stats.forks}
			</span>
			{stats.watchers && (
				<span className="flex items-center gap-1">
					<EyeIcon className="w-3 h-3" />
					{stats.watchers}
				</span>
			)}
			<span>{formattedTime}</span>
		</div>
	);
}
