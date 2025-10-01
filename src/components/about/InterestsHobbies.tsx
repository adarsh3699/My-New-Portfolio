import { PaintBrushIcon } from "@heroicons/react/24/outline";
import { interests } from "@/data/about";

export default function InterestsHobbies() {
	return (
		<div className="border gh-border rounded-xl p-4 sm:p-6 lg:p-8">
			<h2 className="text-xl sm:text-2xl font-bold gh-text mb-4 sm:mb-5 lg:mb-6 flex items-center">
				<div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-r from-pink-400/20 to-purple-400/20 mr-2 sm:mr-3">
					<PaintBrushIcon className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600 dark:text-pink-400" />
				</div>
				<span className="hidden sm:inline">Interests & Hobbies</span>
				<span className="sm:hidden">Interests</span>
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
				{interests.map((interest, index) => (
					<div
						key={interest.name}
						className="group flex items-center p-2.5 sm:p-3 lg:p-4 rounded-lg gh-bg-canvas-subtle hover:gh-bg-accent-subtle transition-all duration-300 border gh-border hover:border-pink-500/20"
						style={{ animationDelay: `${index * 0.1}s` }}
					>
						<div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-pink-500/10 to-purple-500/10 mr-2 sm:mr-3 group-hover:from-pink-500/20 group-hover:to-purple-500/20 transition-all duration-300">
							<span className="text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">
								{interest.icon}
							</span>
						</div>
						<span className="gh-text text-sm sm:text-base font-medium">{interest.name}</span>
					</div>
				))}
			</div>
		</div>
	);
}
