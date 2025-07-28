import { UserIcon } from "@heroicons/react/24/outline";
import { story } from "@/data/about";

export default function MyStory() {
	return (
		<div className="border gh-border rounded-xl p-4 sm:p-6 lg:p-8 gh-bg-canvas-subtle hover:gh-bg-canvas-default transition-all duration-300 group relative">
			{/* Background decorations */}
			<div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
			<div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

			<div className="relative z-10">
				<h2 className="text-xl sm:text-2xl font-bold gh-text mb-4 sm:mb-5 lg:mb-6 flex items-center">
					<div className="p-1.5 sm:p-2 rounded-lg gh-bg-accent-subtle mr-2 sm:mr-3">
						<UserIcon className="w-5 h-5 sm:w-6 sm:h-6 gh-text-accent" />
					</div>
					My Story
				</h2>

				<div className="space-y-4 sm:space-y-5 lg:space-y-6 gh-text-muted leading-relaxed">
					{story.paragraphs.map((paragraph, index) => (
						<p
							key={index}
							className="text-sm sm:text-base hover:gh-text transition-colors duration-300 relative pl-3 sm:pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 sm:before:w-2 sm:before:h-2 before:bg-blue-500/30 before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
						>
							{paragraph}
						</p>
					))}
				</div>

				{/* Quote decoration */}
				<div className="mt-6 sm:mt-8 px-3 sm:px-4 gh-bg-accent-subtle/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
					<p className="gh-text-muted italic text-xs sm:text-sm">
						&quot;Any fool can write code that a computer can understand.
					</p>
					<p className="gh-text-muted italic text-xs sm:text-sm mt-1">
						Good programmers write code that humans can understand.&quot; - Martin Fowler
					</p>
				</div>
			</div>
		</div>
	);
}
