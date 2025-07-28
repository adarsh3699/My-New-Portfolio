import { UserIcon } from "@heroicons/react/24/outline";
import { story } from "@/data/about";

export default function MyStory() {
	return (
		<div className="border gh-border rounded-xl p-8 gh-bg-canvas-subtle hover:gh-bg-canvas-default transition-all duration-300 group relative">
			{/* Background decorations */}
			<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
			<div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

			<div className="relative z-10">
				<h2 className="text-2xl font-bold gh-text mb-6 flex items-center">
					<div className="p-2 rounded-lg gh-bg-accent-subtle mr-3">
						<UserIcon className="w-6 h-6 gh-text-accent" />
					</div>
					My Story
				</h2>

				<div className="space-y-6 gh-text-muted leading-relaxed">
					{story.paragraphs.map((paragraph, index) => (
						<p
							key={index}
							className="hover:gh-text transition-colors duration-300 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-500/30 before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
						>
							{paragraph}
						</p>
					))}
				</div>

				{/* Quote decoration */}
				<div className="mt-8 px-4 gh-bg-accent-subtle/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
					<p className="gh-text-muted italic text-sm">
						&quot;Code is like humor. When you have to explain it, it&apos;s bad.&quot; - Cory House
					</p>
				</div>
			</div>
		</div>
	);
}
