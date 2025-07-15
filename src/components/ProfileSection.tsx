"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import GitHubContributions from "./GitHubContributions";
import { EnvelopeIcon, MapPinIcon, LinkIcon, StarIcon } from "@heroicons/react/24/outline";
import { GitHubIcon, TwitterIcon, LinkedInIcon, ForkIcon } from "@/components/icons";
import { getPinnedProjects, type Project } from "@/data";

interface GitHubProfileData {
	repositories: number;
	followers: number;
	following: number;
	bio: string;
	websiteUrl: string;
	avatarUrl: string;
}

const STATIC_PROFILE_DATA = {
	name: "Adarsh Suman",
	username: "@adarsh3699",
	email: "adarsh3699@gmail.com",
	location: "Nalanda, Bihar, India",
	defaultBio: "Full-stack developer passionate about creating amazing user experiences with modern technologies.",
	defaultWebsite: "https://www.bhemu.me",
	profileImage: "/images/myPhoto.png",
	socialLinks: {
		github: "https://github.com/adarsh3699",
		twitter: "https://twitter.com/adarsh3699",
		linkedin: "https://linkedin.com/in/adarsh3699",
	},
} as const;

const FALLBACK_DATA: GitHubProfileData = {
	repositories: 37,
	followers: 17,
	following: 14,
	bio: STATIC_PROFILE_DATA.defaultBio,
	websiteUrl: STATIC_PROFILE_DATA.defaultWebsite,
	avatarUrl: STATIC_PROFILE_DATA.profileImage,
};

export default function ProfileSection() {
	const [profileData, setProfileData] = useState<GitHubProfileData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetchProfileData();
	}, []);

	const fetchProfileData = async () => {
		try {
			const response = await fetch("/api/github-profile");
			if (!response.ok) {
				throw new Error("Failed to fetch profile data");
			}
			const data = await response.json();
			setProfileData(data);
		} catch (err) {
			setError(err instanceof Error ? err.message : "An error occurred");
			setProfileData(FALLBACK_DATA);
		} finally {
			setLoading(false);
		}
	};

	const formatCount = (count: number): string => {
		return count >= 1000 ? (count / 1000).toFixed(1).replace(/\.0$/, "") + "k" : count.toString();
	};

	const getDisplayValue = (value: string | undefined, fallback: string): string => {
		return loading ? "Loading..." : value || fallback;
	};

	const getWebsiteDisplay = (url: string | undefined): string => {
		if (loading) return "Loading...";
		return url?.replace(/^https?:\/\//, "") || "www.bhemu.me";
	};

	return (
		<section className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-12">
			{error && <ErrorBanner error={error} />}
			<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
				<ProfileSidebar
					profileData={profileData}
					loading={loading}
					formatCount={formatCount}
					getDisplayValue={getDisplayValue}
					getWebsiteDisplay={getWebsiteDisplay}
				/>
				<MainContent />
			</div>
		</section>
	);
}

// Error Banner Component
const ErrorBanner: React.FC<{ error: string }> = ({ error }) => (
	<div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
		<p className="text-sm text-yellow-800">⚠️ Using fallback data - GitHub API unavailable: {error}</p>
	</div>
);

// Profile Sidebar Component
interface ProfileSidebarProps {
	profileData: GitHubProfileData | null;
	loading: boolean;
	formatCount: (count: number) => string;
	getDisplayValue: (value: string | undefined, fallback: string) => string;
	getWebsiteDisplay: (url: string | undefined) => string;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
	profileData,
	loading,
	formatCount,
	getDisplayValue,
	getWebsiteDisplay,
}) => (
	<div className="xl:col-span-1">
		<div className="border gh-border rounded-lg p-4 sm:px-12 gh-shadow sticky top-30">
			<ProfileHeader profileData={profileData} getDisplayValue={getDisplayValue} />
			<ProfileStats profileData={profileData} loading={loading} formatCount={formatCount} />
			<ContactInfo profileData={profileData} loading={loading} getWebsiteDisplay={getWebsiteDisplay} />
			<SocialLinks />
		</div>
	</div>
);

// Profile Header Component
interface ProfileHeaderProps {
	profileData: GitHubProfileData | null;
	getDisplayValue: (value: string | undefined, fallback: string) => string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profileData, getDisplayValue }) => (
	<div className="mb-4 sm:mb-6">
		<div className="relative w-48 h-48 sm:w-64sm:h-64 xl:w-[298px] xl:h-[298px] mx-auto mb-3 sm:mb-4">
			<Image
				src={STATIC_PROFILE_DATA.profileImage}
				width={298}
				height={298}
				alt="Profile Picture"
				className="rounded-full border-2 gh-border object-cover w-full h-full"
			/>
			<div className="absolute bottom-[9.5%] right-[9.5%] w-5 h-5 sm:w-6 sm:h-6 gh-bg-success rounded-full gh-border-2" />
		</div>
		<h1 className="text-xl sm:text-2xl font-bold gh-text mb-1">{STATIC_PROFILE_DATA.name}</h1>
		<p className="gh-text-muted mb-2 sm:mb-3 text-sm sm:text-base">{STATIC_PROFILE_DATA.username}</p>
		<p className="gh-text text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
			{getDisplayValue(profileData?.bio, STATIC_PROFILE_DATA.defaultBio)}
		</p>
	</div>
);

// Profile Stats Component
interface ProfileStatsProps {
	profileData: GitHubProfileData | null;
	loading: boolean;
	formatCount: (count: number) => string;
}

const ProfileStats: React.FC<ProfileStatsProps> = ({ profileData, loading, formatCount }) => (
	<div className="border-t gh-border pt-3 sm:pt-4 mb-4 sm:mb-6">
		<div className="grid grid-cols-3 gap-2 sm:flex sm:justify-between text-xs sm:text-sm">
			<StatItem value={loading ? "..." : profileData?.repositories?.toString() || "37"} label="Repositories" />
			<StatItem value={loading ? "..." : formatCount(profileData?.followers || 17)} label="Followers" />
			<StatItem value={loading ? "..." : profileData?.following?.toString() || "14"} label="Following" />
		</div>
	</div>
);

// Stat Item Component
const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
	<div className="text-center">
		<div className="font-semibold gh-text text-sm sm:text-base">{value}</div>
		<div className="gh-text-muted text-xs">{label}</div>
	</div>
);

// Contact Info Component
interface ContactInfoProps {
	profileData: GitHubProfileData | null;
	loading: boolean;
	getWebsiteDisplay: (url: string | undefined) => string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ profileData, loading, getWebsiteDisplay }) => (
	<div className="space-y-2 sm:space-y-3">
		<ContactItem icon={<EnvelopeIcon />} text={STATIC_PROFILE_DATA.email} />
		<ContactItem icon={<MapPinIcon />} text={STATIC_PROFILE_DATA.location} />
		<ContactItem
			icon={<LinkIcon />}
			text={
				<Link
					href={loading ? "#" : profileData?.websiteUrl || STATIC_PROFILE_DATA.defaultWebsite}
					className="gh-text-accent hover:underline truncate"
					target="_blank"
					rel="noopener noreferrer"
				>
					{getWebsiteDisplay(profileData?.websiteUrl)}
				</Link>
			}
		/>
	</div>
);

// Contact Item Component
const ContactItem: React.FC<{ icon: React.ReactNode; text: React.ReactNode }> = ({ icon, text }) => (
	<div className="flex items-center text-xs sm:text-sm">
		<div className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 gh-text-muted flex-shrink-0">{icon}</div>
		<span className="gh-text truncate">{text}</span>
	</div>
);

// Social Links Component
const SocialLinks: React.FC = () => (
	<div className="border-t gh-border pt-3 sm:pt-4 mt-4 sm:mt-6">
		<div className="flex justify-center sm:justify-start space-x-4 sm:space-x-3">
			<SocialLink href={STATIC_PROFILE_DATA.socialLinks.github} label="GitHub Profile" icon={<GitHubIcon />} />
			<SocialLink href={STATIC_PROFILE_DATA.socialLinks.twitter} label="Twitter Profile" icon={<TwitterIcon />} />
			<SocialLink
				href={STATIC_PROFILE_DATA.socialLinks.linkedin}
				label="LinkedIn Profile"
				icon={<LinkedInIcon />}
			/>
		</div>
	</div>
);

// Social Link Component
const SocialLink: React.FC<{ href: string; label: string; icon: React.ReactNode }> = ({ href, label, icon }) => (
	<Link
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className="gh-text-muted hover:gh-text-accent transition-colors"
		aria-label={label}
	>
		<div className="w-4 h-4 sm:w-5 sm:h-5">{icon}</div>
	</Link>
);

// Main Content Component
const MainContent: React.FC = () => (
	<div className="xl:col-span-2">
		<GitHubContributions />
		<PinnedRepositories />
	</div>
);

// Pinned Repositories Component
const PinnedRepositories: React.FC = () => {
	const pinnedProjects = getPinnedProjects();

	return (
		<div className="border gh-border rounded-lg p-4 sm:p-6 gh-shadow">
			<h2 className="text-base sm:text-lg font-semibold gh-text mb-3 sm:mb-4">Pinned Repositories</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
				{pinnedProjects.map((project) => (
					<RepositoryCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
};

// Repository Card Component
const RepositoryCard: React.FC<{ project: Project }> = ({ project }) => {
	const formatUpdatedTime = (dateString: string) => {
		const date = new Date(dateString);
		const now = new Date();
		const diffTime = Math.abs(now.getTime() - date.getTime());
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

		if (diffDays === 1) return "Updated 1 day ago";
		if (diffDays < 30) return `Updated ${diffDays} days ago`;
		if (diffDays < 365) {
			const months = Math.floor(diffDays / 30);
			return `Updated ${months} month${months > 1 ? "s" : ""} ago`;
		}
		const years = Math.floor(diffDays / 365);
		return `Updated ${years} year${years > 1 ? "s" : ""} ago`;
	};

	return (
		<div className="border gh-border rounded-lg p-3 sm:p-4 hover:gh-bg-canvas-subtle transition-colors">
			<div className="flex items-start justify-between mb-2">
				<h3 className="font-medium gh-text-accent hover:underline cursor-pointer text-sm sm:text-base truncate mr-2">
					{project.githubUrl ? (
						<Link
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline"
						>
							{project.name}
						</Link>
					) : (
						project.name
					)}
				</h3>
				<span className="text-xs gh-text-muted px-2 py-1 border gh-border rounded-full flex-shrink-0 capitalize">
					{project.status}
				</span>
			</div>
			<p className="text-xs sm:text-sm gh-text-muted mb-2 sm:mb-3 line-clamp-2">{project.description}</p>
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs gh-text-muted">
				<div className="flex items-center space-x-3 sm:space-x-4 overflow-x-auto">
					<LanguageTag color={project.primaryLanguage.color} name={project.primaryLanguage.name} />
					<StatTag icon={<StarIcon />} count={project.stats.stars.toString()} />
					<StatTag icon={<ForkIcon />} count={project.stats.forks.toString()} />
				</div>
				<span className="text-xs flex-shrink-0">{formatUpdatedTime(project.updatedAt)}</span>
			</div>
		</div>
	);
};

// Language Tag Component
const LanguageTag: React.FC<{ color: string; name: string }> = ({ color, name }) => (
	<span className="flex items-center flex-shrink-0">
		<div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${color} rounded-full mr-1`} />
		<span className="text-xs">{name}</span>
	</span>
);

// Stat Tag Component
const StatTag: React.FC<{ icon: React.ReactNode; count: string }> = ({ icon, count }) => (
	<span className="flex items-center flex-shrink-0">
		<div className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1">{icon}</div>
		<span className="text-xs">{count}</span>
	</span>
);
