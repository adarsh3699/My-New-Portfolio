import { TrophyIcon } from "@heroicons/react/24/outline";
import { achievements } from "@/data/about";

export default function CertificatesAchievements() {
	return (
		<div className="border gh-border rounded-xl p-6">
			<h2 className="text-2xl font-bold gh-text mb-5 flex items-center">
				<div className="p-2 rounded-lg bg-gradient-to-r from-yellow-400/20 to-orange-400/20 mr-3">
					<TrophyIcon className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
				</div>
				Certificates & Achievements
			</h2>

			{achievements.map((achievement, index) => (
				<div key={index} className="group p-2 hover:gh-bg-canvas-subtle flex items-start">
					<div className={`w-2.5 h-2.5 rounded-full ${achievement.color} mt-1.5 mr-3`} />
					<div className="flex-1">
						<h3 className="font-bold gh-text mb-1 group-hover:gh-text-accent transition-colors">
							{achievement.title}
						</h3>
						<div className="flex flex-wrap items-center gap-2 text-sm gh-text-muted mb-1">
							<span className="font-medium gh-text-accent">{achievement.organization}</span>
							<span>•</span>
							<span>{achievement.year}</span>
						</div>
						<p className="gh-text-muted text-sm">{achievement.description}</p>
					</div>
				</div>
			))}
		</div>
	);
}
