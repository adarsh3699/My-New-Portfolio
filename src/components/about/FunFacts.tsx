import { SparklesIcon } from "@heroicons/react/24/outline";
import { funFacts } from "@/data/about";

export default function FunFacts() {
	return (
		<div className="border gh-border rounded-xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10 lg:mb-12">
			<h2 className="text-xl sm:text-2xl font-bold gh-text mb-4 sm:mb-6 lg:mb-8 flex items-center">
				<div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-400/20 mr-2 sm:mr-3">
					<SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-400" />
				</div>
				<span className="hidden sm:inline">Fun Facts About Me</span>
				<span className="sm:hidden">Fun Facts</span>
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
				{funFacts.map((fact, index) => (
					<div
						key={index}
						className="group relative p-3 sm:p-4 lg:p-5 rounded-lg gh-bg-canvas-subtle hover:gh-bg-accent-subtle transition-all duration-300 border gh-border hover:border-cyan-500/20 overflow-hidden"
						style={{ animationDelay: `${index * 0.1}s` }}
					>
						{/* Background decoration */}
						<div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-bl from-cyan-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

						<div className="relative z-10 flex items-center h-full">
							<p className="gh-text text-xs sm:text-sm leading-relaxed">{fact}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
