import React from "react";
import Link from "next/link";
import Image from "next/image";
import GitHubContributions from "./GitHubContributions";

export default function ProfileSection() {
	return (
		<section className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-12">
			<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
				{/* Profile Sidebar */}
				<div className="xl:col-span-1">
					<div className="border gh-border rounded-lg p-4 sm:p-6 gh-shadow sticky top-30">
						{/* Profile Picture */}
						<div className="text-center mb-4 sm:mb-6">
							<div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4">
								<Image
									src="/images/myPhoto.png"
									width={128}
									height={128}
									alt="Profile Picture"
									className="rounded-full border-2 gh-border object-cover w-full h-full"
								/>
								<div className="absolute bottom-0 right-0 w-5 h-5 sm:w-6 sm:h-6 gh-bg-success rounded-full gh-border-2"></div>
							</div>
							<h1 className="text-xl sm:text-2xl font-bold gh-text mb-1">Adarsh Suman</h1>
							<p className="gh-text-muted mb-2 sm:mb-3 text-sm sm:text-base">@adarsh3699</p>
							<p className="gh-text text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
								Full-stack developer passionate about creating amazing user experiences with modern
								technologies.
							</p>
						</div>

						{/* Profile Stats */}
						<div className="border-t gh-border pt-3 sm:pt-4 mb-4 sm:mb-6">
							<div className="grid grid-cols-3 gap-2 sm:flex sm:justify-between text-xs sm:text-sm">
								<div className="text-center">
									<div className="font-semibold gh-text text-sm sm:text-base">42</div>
									<div className="gh-text-muted text-xs">Repositories</div>
								</div>
								<div className="text-center">
									<div className="font-semibold gh-text text-sm sm:text-base">1.2k</div>
									<div className="gh-text-muted text-xs">Followers</div>
								</div>
								<div className="text-center">
									<div className="font-semibold gh-text text-sm sm:text-base">234</div>
									<div className="gh-text-muted text-xs">Following</div>
								</div>
							</div>
						</div>

						{/* Contact Info */}
						<div className="space-y-2 sm:space-y-3">
							<div className="flex items-center text-xs sm:text-sm">
								<svg
									className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 gh-text-muted flex-shrink-0"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
								</svg>
								<span className="gh-text truncate">adarsh3699@gmail.com</span>
							</div>
							<div className="flex items-center text-xs sm:text-sm">
								<svg
									className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 gh-text-muted flex-shrink-0"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fillRule="evenodd"
										d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
										clipRule="evenodd"
									/>
								</svg>
								<span className="gh-text truncate">Nalanda, Bihar, India</span>
							</div>
							<div className="flex items-center text-xs sm:text-sm">
								<svg
									className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 gh-text-muted flex-shrink-0"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fillRule="evenodd"
										d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
										clipRule="evenodd"
									/>
								</svg>
								<Link
									href="https://www.bhemu.me"
									className="gh-text-accent hover:underline truncate"
									target="_blank"
									rel="noopener noreferrer"
								>
									www.bhemu.me
								</Link>
							</div>
						</div>

						{/* Social Links */}
						<div className="border-t gh-border pt-3 sm:pt-4 mt-4 sm:mt-6">
							<div className="flex justify-center sm:justify-start space-x-4 sm:space-x-3">
								<Link
									href="https://github.com/adarsh3699"
									target="_blank"
									rel="noopener noreferrer"
									className="gh-text-muted hover:gh-text-accent transition-colors"
									aria-label="GitHub Profile"
								>
									<svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
											clipRule="evenodd"
										/>
									</svg>
								</Link>
								<Link
									href="https://twitter.com/adarsh3699"
									target="_blank"
									rel="noopener noreferrer"
									className="gh-text-muted hover:gh-text-accent transition-colors"
									aria-label="Twitter Profile"
								>
									<svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
										<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
									</svg>
								</Link>
								<Link
									href="https://linkedin.com/in/adarsh3699"
									target="_blank"
									rel="noopener noreferrer"
									className="gh-text-muted hover:gh-text-accent transition-colors"
									aria-label="LinkedIn Profile"
								>
									<svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
											clipRule="evenodd"
										/>
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/* Main Content */}
				<div className="xl:col-span-2">
					{/* GitHub Contributions Calendar */}
					<GitHubContributions />

					{/* Pinned Repositories */}
					<div className="border gh-border rounded-lg p-4 sm:p-6 gh-shadow">
						<h2 className="text-base sm:text-lg font-semibold gh-text mb-3 sm:mb-4">Pinned Repositories</h2>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
							{[1, 2, 3, 4].map((i) => (
								<div
									key={i}
									className="border gh-border rounded-lg p-3 sm:p-4 hover:gh-bg-canvas-subtle transition-colors"
								>
									<div className="flex items-start justify-between mb-2">
										<h3 className="font-medium gh-text-accent hover:underline cursor-pointer text-sm sm:text-base truncate mr-2">
											awesome-project-{i}
										</h3>
										<span className="text-xs gh-text-muted px-2 py-1 border gh-border rounded-full flex-shrink-0">
											Public
										</span>
									</div>
									<p className="text-xs sm:text-sm gh-text-muted mb-2 sm:mb-3 line-clamp-2">
										A brief description of this amazing project that showcases various technologies
										and solutions.
									</p>
									<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs gh-text-muted">
										<div className="flex items-center space-x-3 sm:space-x-4 overflow-x-auto">
											<span className="flex items-center flex-shrink-0">
												<div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-500 rounded-full mr-1"></div>
												<span className="text-xs">TypeScript</span>
											</span>
											<span className="flex items-center flex-shrink-0">
												<svg
													className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
												<span className="text-xs">24</span>
											</span>
											<span className="flex items-center flex-shrink-0">
												<svg
													className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path
														fillRule="evenodd"
														d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
														clipRule="evenodd"
													/>
												</svg>
												<span className="text-xs">5</span>
											</span>
										</div>
										<span className="text-xs flex-shrink-0">Updated 2 days ago</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
