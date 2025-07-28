import { TrophyIcon } from "@heroicons/react/24/outline";
import { achievements } from "@/data/about";

export default function CertificatesAchievements() {
	return (
		<div className="border gh-border rounded-lg p-6">
			<h2 className="text-2xl font-semibold gh-text mb-4 flex items-center">
				<TrophyIcon className="w-6 h-6 mr-2 gh-text-accent" />
				Certificates & Achievements
			</h2>
			<div className="space-y-4">
				{achievements.map((achievement, index) => (
					<div key={index} className={`border-l-4 ${achievement.color} pl-4`}>
						<h3 className="font-medium gh-text">{achievement.title}</h3>
						<p className="gh-text-muted text-sm">
							{achievement.organization} • {achievement.year}
						</p>
						<p className="gh-text-muted text-sm mt-1">{achievement.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}
