import { GitHubIcon, LinkedInIcon, XIcon, YouTubeIcon } from "@/components/icons";

const socialPlatforms = [
	{
		name: "LinkedIn",
		icon: LinkedInIcon,
		url: "https://linkedin.com/in/adarsh3699",
		bg: "bg-blue-100 dark:bg-blue-900",
		hoverBg: "group-hover:bg-blue-200 dark:group-hover:bg-blue-800",
		text: "text-blue-600 dark:text-blue-400",
		description: "Professional network",
	},
	{
		name: "X (Twitter)",
		icon: XIcon,
		url: "https://twitter.com/adarsh3699",
		bg: "bg-slate-100 dark:bg-slate-800",
		hoverBg: "group-hover:bg-slate-200 dark:group-hover:bg-slate-700",
		text: "text-slate-600 dark:text-slate-400",
		description: "Latest updates",
	},
	{
		name: "YouTube",
		icon: YouTubeIcon,
		url: "https://youtube.com/@CodingWithBhemu",
		bg: "bg-red-100 dark:bg-red-900",
		hoverBg: "group-hover:bg-red-200 dark:group-hover:bg-red-800",
		text: "text-red-600 dark:text-red-400",
		description: "Video content",
	},
	{
		name: "GitHub",
		icon: GitHubIcon,
		url: "https://github.com/adarsh3699",
		bg: "bg-gray-100 dark:bg-gray-800",
		hoverBg: "group-hover:bg-gray-200 dark:group-hover:bg-gray-700",
		text: "text-gray-600 dark:text-gray-400",
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
						<div className={`p-2 ${platform.bg} rounded-lg ${platform.hoverBg} transition-colors`}>
							<platform.icon className={`w-5 h-5 ${platform.text}`} />
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
