import { GitHubIcon, LinkedInIcon, XIcon, YouTubeIcon } from "@/components/icons";

const socialPlatforms = [
	{
		name: "LinkedIn",
		icon: LinkedInIcon,
		url: "https://linkedin.com/in/adarsh3699",
		color: "blue",
		description: "Professional network",
	},
	{
		name: "X (Twitter)",
		icon: XIcon,
		url: "https://twitter.com/adarsh3699",
		color: "yellow",
		description: "Latest updates",
	},
	{
		name: "YouTube",
		icon: YouTubeIcon,
		url: "https://youtube.com/@CodingWithBhemu",
		color: "red",
		description: "Video content",
	},
	{
		name: "GitHub",
		icon: GitHubIcon,
		url: "https://github.com/adarsh3699",
		color: "sky",
		description: "Code repositories",
	},
];

export default function SocialLinks() {
	return (
		<div className="border gh-border rounded-lg p-6">
			<h2 className="text-xl font-semibold gh-text mb-4">Follow Me</h2>
			<div className="space-y-1">
				{socialPlatforms.map((platform) => (
					<a
						key={platform.name}
						href={platform.url}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-3 p-2 rounded-lg hover:gh-bg-canvas-subtle transition-colors group"
						aria-label={`Follow me on ${platform.name} - ${platform.description}`}
					>
						<div
							className={`p-2 bg-${platform.color}-100 dark:bg-${platform.color}-900 rounded-lg group-hover:bg-${platform.color}-200 dark:group-hover:bg-${platform.color}-800 transition-colors`}
						>
							<platform.icon
								className={`w-5 h-5 text-${platform.color}-600 dark:text-${platform.color}-400`}
							/>
						</div>
						<div className="flex flex-col">
							<span className="gh-text group-hover:gh-text-accent font-medium">{platform.name}</span>
							<span className="gh-text-muted text-xs">{platform.description}</span>
						</div>
					</a>
				))}
			</div>
		</div>
	);
}
