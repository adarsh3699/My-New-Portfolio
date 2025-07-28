import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { currentFocus } from "@/data/about";

export default function CurrentFocus() {
	return (
		<div className="border gh-border rounded-xl p-8 gh-bg-canvas-subtle hover:gh-bg-canvas-default transition-all duration-300 group relative">
			{/* Background decorations */}
			<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
			<div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

			<div className="relative z-10">
				<h2 className="text-2xl font-bold gh-text mb-6 flex items-center">
					<div className="p-2 rounded-lg bg-gradient-to-r from-orange-400/20 to-red-400/20 mr-3">
						<RocketLaunchIcon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
					</div>
					Current Focus & Goals
				</h2>

				<div>
					{currentFocus.map((focus, index) => (
						<div
							key={index}
							className="group/item p-4 rounded-lg gh-bg-canvas-subtle hover:gh-bg-accent-subtle transition-all duration-300"
						>
							<div className="flex items-start space-x-3">
								<div className={`w-2 h-2 rounded-full mt-2 ${focus.color}`} />
								<div className="flex-1">
									<h3 className="font-semibold gh-text mb-1 group-hover/item:gh-text-accent transition-colors duration-300">
										{focus.title}
									</h3>
									<p className="gh-text-muted text-sm leading-relaxed">{focus.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
