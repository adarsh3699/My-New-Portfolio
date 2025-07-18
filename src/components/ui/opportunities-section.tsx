import Link from "next/link";
import { BriefcaseIcon, SparklesIcon, DocumentTextIcon, FolderIcon } from "@heroicons/react/24/outline";
import { FlipWords, Button } from "@/components/ui";

type ButtonConfig = {
	href: string;
	text: string;
	variant: "default" | "outline" | "secondary";
	icon?: React.ReactNode;
};

const OPPORTUNITY_PHRASES = ["Looking for Opportunities", "Open to Work", "Ready for New Challenges"];

type OpportunitiesSectionProps = {
	variant?: "default" | "contact";
};

export default function OpportunitiesSection({ variant = "default" }: OpportunitiesSectionProps) {
	const BUTTONS: ButtonConfig[] =
		variant === "contact"
			? [
					{
						href: "/projects",
						text: "See My Work",
						variant: "outline",
						icon: (
							<FolderIcon className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover/button:rotate-3" />
						),
					},
					{
						href: "/experience",
						text: "View My Experience",
						variant: "secondary",
						icon: (
							<DocumentTextIcon className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover/button:rotate-12" />
						),
					},
			  ]
			: [
					{
						href: "/contact",
						text: "Get In Touch",
						variant: "default",
						icon: (
							<BriefcaseIcon className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover/button:rotate-12" />
						),
					},
					{
						href: "/projects",
						text: "View My Work",
						variant: "outline",
						icon: (
							<FolderIcon className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover/button:rotate-3" />
						),
					},
			  ];

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
						{BUTTONS.map(({ href, text, variant: buttonVariant, icon }) => (
							<Link key={href} href={href} className="w-full sm:w-auto">
								<Button
									variant={buttonVariant}
									size="lg"
									className="w-full text-sm sm:text-base group/button"
								>
									{icon}
									<span>{text}</span>
								</Button>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
