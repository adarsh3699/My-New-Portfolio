import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { whyChooseMe } from "@/data/about";

export default function WhyChooseMe() {
	return (
		<div className="border gh-border rounded-xl p-4 sm:p-6 lg:p-8">
			<h2 className="text-xl sm:text-2xl font-bold gh-text mb-4 sm:mb-5 lg:mb-6 flex items-center">
				<div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-r from-emerald-400/20 to-teal-400/20 mr-2 sm:mr-3">
					<CheckBadgeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" />
				</div>
				Why Choose Me
			</h2>

			<div className="space-y-2 sm:space-y-3">
				{whyChooseMe.map((item, index) => (
					<div
						key={item.title}
						className="group p-3 sm:p-4 lg:p-5 rounded-lg gh-bg-canvas-subtle hover:gh-bg-accent-subtle transition-all duration-300 border gh-border hover:border-emerald-500/20 relative overflow-hidden"
						style={{ animationDelay: `${index * 0.1}s` }}
					>
						{/* Subtle background decoration */}
						<div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-bl from-emerald-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

						<div className="relative z-10 flex items-start">
							<div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
							<div className="flex-1 min-w-0">
								<h3 className="font-bold gh-text mb-1 text-sm sm:text-base">{item.title}</h3>
								<p className="gh-text-muted text-xs sm:text-sm leading-relaxed">{item.desc}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}



