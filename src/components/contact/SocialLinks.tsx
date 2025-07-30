import { GitHubIcon, LinkedInIcon, XIcon, YouTubeIcon } from "@/components/icons";
import { socialPlatforms } from "@/data/contact";

// Icon mapping for social platforms
const iconMap = {
	LinkedIn: LinkedInIcon,
	"X (Twitter)": XIcon,
	YouTube: YouTubeIcon,
	GitHub: GitHubIcon,
};

export default function SocialLinks() {
	return (
		<div className="border gh-border rounded-lg p-6">
			<h2 className="text-xl font-semibold gh-text mb-4">Follow Me</h2>
			<div className="space-y-1">
				{socialPlatforms.map((platform) => {
					const IconComponent = iconMap[platform.name as keyof typeof iconMap];
					return (
						<a
							key={platform.name}
							href={platform.url}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center w-fit gap-3 p-2 rounded-lg hover:gh-bg-canvas-subtle transition-colors group"
							aria-label={`Follow me on ${platform.name} - ${platform.description}`}
						>
							<div className={`p-2 ${platform.bg} rounded-lg ${platform.hoverBg} transition-colors`}>
								<IconComponent className={`w-5 h-5 ${platform.text}`} />
							</div>
							<div className="flex flex-col">
								<span className="gh-text group-hover:gh-text-accent font-medium">{platform.name}</span>
								<span className="gh-text-muted text-xs">{platform.description}</span>
							</div>
						</a>
					);
				})}
			</div>
		</div>
	);
}
