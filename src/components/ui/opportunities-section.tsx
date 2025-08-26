import Link from "next/link";
import { BriefcaseIcon, SparklesIcon, DocumentTextIcon, FolderIcon } from "@heroicons/react/24/outline";
import { FlipWords, Button } from "@/components/ui";

type ButtonConfig = {
	href: string;
	text: string;
	variant: "default" | "outline" | "secondary";
	icon?: React.ReactNode;
	isExternalLink?: boolean;
};

const OPPORTUNITY_PHRASES = ["Looking for Opportunities", "Open to Work", "Ready for New Challenges"];

// Icon configurations with shared classes
const iconClass = {
	briefcase: "w-4 h-4 md:w-5 md:h-5 transition-transform group-hover/button:rotate-12",
	folder: "w-4 h-4 md:w-5 md:h-5 transition-transform group-hover/button:rotate-3",
	document: "w-4 h-4 md:w-5 md:h-5 transition-transform group-hover/button:rotate-12",
};

// All available buttons configuration
const AVAILABLE_BUTTONS: Record<string, ButtonConfig> = {
	contact: {
		href: "/contact",
		text: "Get In Touch",
		variant: "default",
		icon: <BriefcaseIcon className={iconClass.briefcase} />,
	},
	projects: {
		href: "/projects",
		text: "View My Work",
		variant: "outline",
		icon: <FolderIcon className={iconClass.folder} />,
	},
	resume: {
		href: "https://drive.google.com/file/d/1AZqdkIJKl_0_e9mTljYpi3LZcpy9e9jH/view?usp=drive_link",
		isExternalLink: true,
		text: "My Resume",
		variant: "secondary",
		icon: <DocumentTextIcon className={iconClass.document} />,
	},
	experience: {
		href: "/experience",
		text: "View My Experience",
		variant: "secondary",
		icon: <DocumentTextIcon className={iconClass.document} />,
	},
};

type OpportunitiesSectionProps = {
	buttons: string[];
};

export default function OpportunitiesSection({ buttons }: OpportunitiesSectionProps) {
	const BUTTONS: ButtonConfig[] = buttons.map((buttonName) => AVAILABLE_BUTTONS[buttonName]).filter(Boolean);

	return (
		<div className="mt-8 md:mt-12">
			<div className="gh-bg-canvas-overlay border gh-border rounded-lg p-4 sm:p-6 md:p-8 relative overflow-hidden group/opportunities">
				{/* Background gradient effect */}
				<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover/opportunities:opacity-100 transition-opacity duration-500" />

				<div className="relative z-10">
					{/* Header */}
					<div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
						<SparklesIcon className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
						<h3 className="text-lg sm:text-xl font-semibold gh-text">
							<FlipWords words={OPPORTUNITY_PHRASES} duration={3000} />
						</h3>
					</div>

					{/* Description */}
					<p className="max-w-2xl mx-auto text-center mb-6 gh-text-muted text-sm sm:text-base px-2">
						I&apos;m passionate about creating innovative solutions and always excited to explore new
						opportunities that challenge me to grow and make an impact.
					</p>

					{/* Action Buttons */}
					<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
						{BUTTONS.map(({ href, text, variant: buttonVariant, icon, isExternalLink }) => {
							return (
								<Link
									key={href}
									href={href}
									className="w-full sm:w-auto"
									{...(isExternalLink && { target: "_blank", rel: "noopener noreferrer" })}
								>
									<Button
										variant={buttonVariant}
										size="lg"
										className="w-full text-sm sm:text-base group/button"
									>
										{icon}
										<span>{text}</span>
									</Button>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
