"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { EnvelopeIcon, MapPinIcon, LinkIcon } from "@heroicons/react/24/outline";
import { GitHubIcon, TwitterIcon, LinkedInIcon } from "@/components/icons";
import { fetchGitHubProfile, getCachedProfile } from "@/lib/github-api";
import { useApi } from "@/lib/hooks";

const PROFILE_DATA = {
	name: "Adarsh Suman",
	username: "@adarsh3699",
	email: "adarsh3699@gmail.com",
	location: "Nalanda, Bihar, India",
	bio: "Full Stack Developer || React, Node.js, MongoDB, JavaScript, TailwindCSS",
	image: "/images/myPhoto.png",
	defaultWebsite: "https://www.bhemu.me",
	social: {
		github: "https://github.com/adarsh3699",
		twitter: "https://twitter.com/adarsh3699",
		linkedin: "https://linkedin.com/in/adarsh3699",
	},
} as const;

const formatCount = (count: number): string => {
	return count >= 1000 ? (count / 1000).toFixed(1).replace(/\.0$/, "") + "k" : count.toString();
};

export default function ProfileSection() {
	const { data: profileData, loading, error } = useApi(fetchGitHubProfile, { getCachedData: getCachedProfile });

	const getWebsiteDisplay = (url: string | undefined): string => {
		if (loading) return "Loading...";
		return url?.replace(/^https?:\/\//, "") || "www.bhemu.me";
	};

	return (
		<div className="border gh-border rounded-lg p-4 sm:px-12 gh-shadow sticky top-30">
			{/* Error Banner */}
			{error && (
				<div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
					<p className="text-sm text-red-800">⚠️ GitHub API unavailable: {error}</p>
				</div>
			)}

			{/* Profile Header */}
			<div className="mb-4 sm:mb-6">
				<div className="relative w-48 h-48 sm:w-64sm:h-64 xl:w-[298px] xl:h-[298px] mx-auto mb-3 sm:mb-4">
					<Image
						src={PROFILE_DATA.image}
						width={298}
						height={298}
						alt="Profile Picture"
						className="rounded-full border-2 gh-border object-cover w-full h-full"
						loading="lazy"
						priority={false}
						sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 298px"
					/>
					<div className="absolute bottom-[9.5%] right-[9.5%] w-5 h-5 sm:w-6 sm:h-6 gh-bg-success rounded-full gh-border-2" />
				</div>
				<h1 className="text-xl sm:text-2xl font-bold gh-text mb-1">{PROFILE_DATA.name}</h1>
				<p className="gh-text-muted mb-2 sm:mb-3 text-sm sm:text-base">{PROFILE_DATA.username}</p>
				<TextGenerateEffect words={PROFILE_DATA.bio} className="gh-text text-xs sm:text-sm" />
			</div>

			{/* Profile Stats */}
			<div className="border-t gh-border pt-3 sm:pt-4 mb-4 sm:mb-6">
				<div className="grid grid-cols-3 gap-2 sm:flex sm:justify-between text-xs sm:text-sm">
					<div className="text-center">
						<div className="font-semibold gh-text text-sm sm:text-base">
							{loading ? "..." : profileData?.repositories?.toString() || "N/A"}
						</div>
						<div className="gh-text-muted text-xs">Repositories</div>
					</div>
					<div className="text-center">
						<div className="font-semibold gh-text text-sm sm:text-base">
							{loading ? "..." : formatCount(profileData?.followers || 0)}
						</div>
						<div className="gh-text-muted text-xs">Followers</div>
					</div>
					<div className="text-center">
						<div className="font-semibold gh-text text-sm sm:text-base">
							{loading ? "..." : profileData?.following?.toString() || "N/A"}
						</div>
						<div className="gh-text-muted text-xs">Following</div>
					</div>
				</div>
			</div>

			{/* Contact Info */}
			<div className="space-y-2 sm:space-y-3">
				<div className="flex items-center text-xs sm:text-sm">
					<div className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 gh-text-muted flex-shrink-0">
						<EnvelopeIcon />
					</div>
					<span className="gh-text truncate">{PROFILE_DATA.email}</span>
				</div>
				<div className="flex items-center text-xs sm:text-sm">
					<div className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 gh-text-muted flex-shrink-0">
						<MapPinIcon />
					</div>
					<span className="gh-text truncate">{PROFILE_DATA.location}</span>
				</div>
				<div className="flex items-center text-xs sm:text-sm">
					<div className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 gh-text-muted flex-shrink-0">
						<LinkIcon />
					</div>
					<Link
						href={loading ? "#" : profileData?.websiteUrl || PROFILE_DATA.defaultWebsite}
						className="gh-text-accent hover:underline truncate"
						target="_blank"
						rel="noopener noreferrer"
					>
						{getWebsiteDisplay(profileData?.websiteUrl)}
					</Link>
				</div>
			</div>

			{/* Social Links */}
			<div className="border-t gh-border pt-3 sm:pt-4 mt-4 sm:mt-6">
				<div className="flex justify-center sm:justify-start space-x-4 sm:space-x-3">
					<Link
						href={PROFILE_DATA.social.github}
						target="_blank"
						rel="noopener noreferrer"
						className="gh-text-muted hover:gh-text-accent transition-colors"
						aria-label="GitHub Profile"
					>
						<div className="w-4 h-4 sm:w-5 sm:h-5">
							<GitHubIcon />
						</div>
					</Link>
					<Link
						href={PROFILE_DATA.social.twitter}
						target="_blank"
						rel="noopener noreferrer"
						className="gh-text-muted hover:gh-text-accent transition-colors"
						aria-label="Twitter Profile"
					>
						<div className="w-4 h-4 sm:w-5 sm:h-5">
							<TwitterIcon />
						</div>
					</Link>
					<Link
						href={PROFILE_DATA.social.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="gh-text-muted hover:gh-text-accent transition-colors"
						aria-label="LinkedIn Profile"
					>
						<div className="w-4 h-4 sm:w-5 sm:h-5">
							<LinkedInIcon />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
