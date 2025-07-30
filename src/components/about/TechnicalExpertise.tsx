import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { skillCategories } from "@/data/about";

export default function TechnicalExpertise() {
	return (
		<div className="border gh-border rounded-xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10 lg:mb-12">
			<h2 className="text-xl sm:text-2xl font-bold gh-text mb-4 sm:mb-6 lg:mb-8 flex items-center">
				<div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-r from-blue-400/20 to-purple-400/20 mr-2 sm:mr-3">
					<WrenchScrewdriverIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
				</div>
				<span className="hidden sm:inline">Technical Expertise</span>
				<span className="sm:hidden">Skills</span>
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
				{skillCategories.map((category, index) => (
					<div key={index}>
						<div className="border gh-border rounded-lg p-4 sm:p-5 lg:p-6 h-full">
							<h3 className="font-bold gh-text mb-3 sm:mb-4 lg:mb-5 text-base sm:text-lg flex items-center">
								<div
									className={`w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full ${category.color} mr-2 sm:mr-3`}
								/>
								{category.title}
							</h3>

							<div className="space-y-2 sm:space-y-3">
								{category.skills.map((skill, skillIndex) => (
									<div
										key={skill.name}
										className="group/skill flex justify-between items-center p-2 sm:p-2.5 lg:p-3 rounded-lg gh-bg-canvas-subtle hover:gh-bg-accent-subtle transition-all duration-300 hover:scale-[1.02] hover:shadow-md transform hover:translate-x-1"
										style={{
											animationDelay: `${skillIndex * 50}ms`,
										}}
									>
										<span className="gh-text font-medium text-sm sm:text-base group-hover/skill:gh-text-accent transition-all duration-300 group-hover/skill:translate-x-1">
											{skill.name}
										</span>
										<span className="text-xs px-2 sm:px-2.5 lg:px-3 py-0.5 sm:py-1 gh-bg-accent-subtle gh-text-accent rounded-full font-semibold transition-all duration-300 group-hover/skill:scale-105 group-hover/skill:shadow-md group-hover/skill:rotate-1">
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
