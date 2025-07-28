import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { skillCategories } from "@/data/about";

export default function TechnicalExpertise() {
	return (
		<div className="border gh-border rounded-xl p-8 mb-12">
			<h2 className="text-2xl font-bold gh-text mb-8 flex items-center">
				<div className="p-2 rounded-lg bg-gradient-to-r from-blue-400/20 to-purple-400/20 mr-3">
					<WrenchScrewdriverIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
				</div>
				Technical Expertise
			</h2>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{skillCategories.map((category, index) => (
					<div key={index}>
						<div className="border gh-border rounded-lg p-6 h-full">
							<h3 className={`font-bold gh-text mb-5 ${category.color} text-lg flex items-center`}>
								<div
									className={`w-3 h-3 rounded-full ${category.color
										.replace("text-", "bg-")
										.replace("-600", "-500")} mr-3`}
								/>
								{category.title}
							</h3>

							<div className="space-y-3">
								{category.skills.map((skill) => (
									<div
										key={skill.name}
										className="group flex justify-between items-center p-3 rounded-lg gh-bg-canvas-subtle hover:gh-bg-accent-subtle transition-colors duration-200"
									>
										<span className="gh-text font-medium group-hover:gh-text-accent transition-colors duration-200">
											{skill.name}
										</span>
										<span className="text-xs px-3 py-1 gh-bg-accent-subtle gh-text-accent rounded-full font-semibold">
											{skill.level}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
