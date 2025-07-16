import { Button } from "@/components/ui";
import Link from "next/link";

export default function HireCallToAction() {
	return (
		<div className="mt-12 text-center">
			<div className="gh-bg-canvas-overlay border gh-border rounded-lg p-6">
				<h3 className="text-lg font-semibold gh-text mb-2">Looking to Hire?</h3>
				<p className="gh-text-muted mb-4">
					I&apos;m currently open to new opportunities and would love to discuss how I can contribute to your
					team.
				</p>
				<div className="flex flex-col sm:flex-row gap-3 justify-center">
					<Link href="/experience">
						<Button variant="outline" className="w-full sm:w-auto">
							View My Experience
						</Button>
					</Link>
					<Link href="/projects">
						<Button variant="secondary" className="w-full sm:w-auto">
							See My Work
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
