import React from "react";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { GitHubIcon } from "@/components/icons";

export default function Footer() {
	return (
		<footer className="border-t gh-border gh-bg-canvas-inset mt-16">
			<div className="max-w-6xl mx-auto px-4 py-8">
				{/* Simple Footer Content */}
				<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
					{/* Brand and Copyright */}
					<div className="flex flex-col items-center md:items-start">
						<div className="flex items-center space-x-2 mb-2">
							<svg className="w-5 h-5 gh-text" fill="currentColor" viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
							</svg>
							<span className="font-semibold gh-text">adarsh3699</span>
						</div>
						<p className="text-sm gh-text-muted">© 2025 Adarsh Kumar. All rights reserved.</p>
					</div>

					{/* Quick Links */}
					<div className="flex items-center space-x-6 text-sm">
						<Link href="#about" className="gh-text-muted hover:gh-text-accent transition-colors">
							About
						</Link>
						<Link href="#projects" className="gh-text-muted hover:gh-text-accent transition-colors">
							Projects
						</Link>
						<Link href="#experience" className="gh-text-muted hover:gh-text-accent transition-colors">
							Experience
						</Link>
						<Link href="#contact" className="gh-text-muted hover:gh-text-accent transition-colors">
							Contact
						</Link>
					</div>

					{/* Social Links */}
					<div className="flex items-center space-x-3">
						<Link
							href="https://github.com/adarsh3699"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 gh-text-muted hover:gh-text-accent transition-colors"
							aria-label="GitHub Profile"
						>
							<GitHubIcon className="w-4 h-4" />
						</Link>
						<Link
							href="https://linkedin.com/in/adarsh3699"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 gh-text-muted hover:gh-text-accent transition-colors"
							aria-label="LinkedIn Profile"
						>
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
						</Link>
						<Link
							href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=adarsh3699@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 gh-text-muted hover:gh-text-accent transition-colors"
							aria-label="Send Email"
						>
							<EnvelopeIcon className="w-4 h-4" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
