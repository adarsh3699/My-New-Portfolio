import { TrophyIcon } from "@heroicons/react/24/outline";
import { achievements } from "@/data/about";

export default function CertificatesAchievements() {
	return (
		<div className="border gh-border rounded-xl p-4 sm:p-6 lg:p-8">
			<h2 className="text-xl sm:text-2xl font-bold gh-text mb-4 sm:mb-5 flex items-center">
				<div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-r from-yellow-400/20 to-orange-400/20 mr-2 sm:mr-3">
					<TrophyIcon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 dark:text-yellow-400" />
				</div>
				<span className="hidden sm:inline">Certificates & Achievements</span>
				<span className="sm:hidden">Achievements</span>
			</h2>

			<div className="space-y-1 sm:space-y-2">
				{achievements.map((achievement, index) => (
					<div
						key={index}
						className="group p-2 sm:p-2.5 lg:p-3 hover:gh-bg-canvas-subtle rounded-lg flex items-start"
					>
						<div
							className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${achievement.color} mt-1.5 mr-2 sm:mr-3 flex-shrink-0`}
						/>
						<div className="flex-1 min-w-0">
							<h3 className="font-bold gh-text mb-1 text-sm sm:text-base group-hover:gh-text-accent transition-colors">
								{achievement.title}
							</h3>
							<div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm gh-text-muted mb-1">
								<span className="font-medium gh-text-accent">{achievement.organization}</span>
								<span className="hidden sm:inline">•</span>
								<span>{achievement.year}</span>
							</div>
							<p className="gh-text-muted text-xs sm:text-sm leading-relaxed">
								{achievement.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
