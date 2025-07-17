"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { MagnifyingGlassIcon, StarIcon, EyeIcon } from "@heroicons/react/24/outline";
import { ForkIcon } from "@/components/icons";
import { projects } from "@/data";

export default function ProjectsSection() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedLanguage, setSelectedLanguage] = useState("All");
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [sortBy, setSortBy] = useState("updated");

	// Get unique languages and categories for filters
	const languages = useMemo(() => {
		const langs = new Set(projects.map((p) => p.primaryLanguage.name));
		return ["All", ...Array.from(langs)];
	}, []);

	const categories = useMemo(() => {
		const cats = new Set(projects.map((p) => p.category));
		return ["All", ...Array.from(cats)];
	}, []);

	// Filter and sort projects
	const filteredAndSortedProjects = useMemo(() => {
		const filtered = projects.filter((project) => {
			const matchesSearch =
				project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
				project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()));

			const matchesLanguage = selectedLanguage === "All" || project.primaryLanguage.name === selectedLanguage;
			const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;

			return matchesSearch && matchesLanguage && matchesCategory;
		});

		// Sort projects
		filtered.sort((a, b) => {
			switch (sortBy) {
				case "name":
					return a.name.localeCompare(b.name);
				case "stars":
					return b.stats.stars - a.stats.stars;
				case "created":
					return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
				case "updated":
				default:
					return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
			}
		});

		return filtered;
	}, [searchTerm, selectedLanguage, selectedCategory, sortBy]);

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
		<section className="max-w-7xl mx-auto px-3 md:px-8 lg:px-6 py-8 sm:py-12">
			<div className="mb-8">
				<h2 className="text-2xl font-bold gh-text mb-2">All repositories</h2>
				<p className="gh-text-muted">
					A showcase of all my projects and repositories ({projects.length} total)
				</p>
			</div>

			{/* Repository Filter/Search Bar */}
			<div className="mb-6 flex flex-col sm:flex-row gap-4">
				<div className="flex-1">
					<div className="relative">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<MagnifyingGlassIcon className="h-4 w-4 gh-text-muted" />
						</div>
						<input
							type="text"
							placeholder="Find a repository..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="w-full pl-10 pr-4 py-2 text-sm gh-bg-canvas-inset border gh-border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent gh-text"
						/>
					</div>
				</div>
				<div className="flex gap-2 flex-wrap">
					<select
						value={selectedCategory}
						onChange={(e) => setSelectedCategory(e.target.value)}
						className="px-3 py-2 text-sm gh-bg-canvas-inset border gh-border rounded-md gh-text"
					>
						<option value="All">Category: All</option>
						{categories
							.filter((cat) => cat !== "All")
							.map((category) => (
								<option key={category} value={category}>
									{category}
								</option>
							))}
					</select>
					<select
						value={selectedLanguage}
						onChange={(e) => setSelectedLanguage(e.target.value)}
						className="px-3 py-2 text-sm gh-bg-canvas-inset border gh-border rounded-md gh-text"
					>
						<option value="All">Language: All</option>
						{languages
							.filter((lang) => lang !== "All")
							.map((language) => (
								<option key={language} value={language}>
									{language}
								</option>
							))}
					</select>
					<select
						value={sortBy}
						onChange={(e) => setSortBy(e.target.value)}
						className="px-3 py-2 text-sm gh-bg-canvas-inset border gh-border rounded-md gh-text"
					>
						<option value="updated">Sort: Updated</option>
						<option value="name">Name</option>
						<option value="stars">Stars</option>
						<option value="created">Created</option>
					</select>
				</div>
			</div>

			{/* Results count */}
			<div className="mb-4">
				<p className="text-sm gh-text-muted">
					{filteredAndSortedProjects.length}{" "}
					{filteredAndSortedProjects.length === 1 ? "repository" : "repositories"}
				</p>
			</div>

			{/* Repository List */}
			<div className="space-y-4">
				{filteredAndSortedProjects.length === 0 ? (
					<div className="text-center py-12">
						<p className="gh-text-muted">No repositories found matching your criteria.</p>
					</div>
				) : (
					filteredAndSortedProjects.map((project) => (
						<div
							key={project.id}
							className="gh-bg-canvas-overlay border gh-border rounded-lg p-6 hover:gh-bg-canvas-subtle transition-colors"
						>
							<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
								<div className="flex-1">
									{/* Repository Header */}
									<div className="flex items-center gap-3 mb-2">
										<h3 className="text-lg font-semibold">
											{project.githubUrl ? (
												<Link
													href={project.githubUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="gh-text-accent hover:underline"
												>
													{project.name}
												</Link>
											) : (
												<span className="gh-text-accent">{project.name}</span>
											)}
										</h3>
										<span className="text-xs px-2 py-1 border rounded-full gh-text-muted gh-border capitalize">
											{project.status}
										</span>
										{project.featured && (
											<span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full border border-yellow-200">
												Featured
											</span>
										)}
										{!project.isActive && (
											<span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full border border-gray-200">
												Archived
											</span>
										)}
									</div>

									{/* Description */}
									<p className="gh-text-muted text-sm mb-3 leading-relaxed">{project.description}</p>

									{/* Technologies/Topics */}
									{project.technologies.length > 0 && (
										<div className="flex flex-wrap gap-2 mb-3">
											{project.technologies.slice(0, 6).map((tech) => (
												<span
													key={tech}
													className="text-xs px-2 py-1 gh-bg-accent-subtle gh-text-accent rounded-full border gh-border-subtle hover:gh-bg-accent-muted transition-colors cursor-pointer"
												>
													{tech}
												</span>
											))}
											{project.technologies.length > 6 && (
												<span className="text-xs px-2 py-1 gh-text-muted">
													+{project.technologies.length - 6} more
												</span>
											)}
										</div>
									)}

									{/* Repository Stats */}
									<div className="flex items-center gap-4 text-xs gh-text-muted">
										<span className="flex items-center gap-1">
											<div className={`w-3 h-3 rounded-full ${project.primaryLanguage.color}`} />
											{project.primaryLanguage.name}
										</span>
										<span className="flex items-center gap-1">
											<StarIcon className="w-3 h-3" />
											{project.stats.stars}
										</span>
										<span className="flex items-center gap-1">
											<ForkIcon className="w-3 h-3" />
											{project.stats.forks}
										</span>
										{project.stats.watchers && (
											<span className="flex items-center gap-1">
												<EyeIcon className="w-3 h-3" />
												{project.stats.watchers}
											</span>
										)}
										<span>{formatUpdatedTime(project.updatedAt)}</span>
									</div>
								</div>

								{/* Repository Actions */}
								<div className="flex gap-2">
									{project.githubUrl && (
										<Link
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="btn-secondary text-xs px-3 py-1 flex items-center gap-1"
										>
											<StarIcon className="w-3 h-3" />
											Star
										</Link>
									)}
									{project.liveUrl && (
										<Link
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="btn-primary text-xs px-3 py-1"
										>
											Live Demo
										</Link>
									)}
								</div>
							</div>
						</div>
					))
				)}
			</div>

			{/* Summary Stats */}
			<div className="mt-8 p-4 gh-bg-canvas-inset border gh-border rounded-lg">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
					<div>
						<div className="text-lg font-semibold gh-text">{projects.length}</div>
						<div className="text-xs gh-text-muted">Total Repositories</div>
					</div>
					<div>
						<div className="text-lg font-semibold gh-text">
							{projects.reduce((sum, p) => sum + p.stats.stars, 0)}
						</div>
						<div className="text-xs gh-text-muted">Total Stars</div>
					</div>
					<div>
						<div className="text-lg font-semibold gh-text">
							{projects.reduce((sum, p) => sum + p.stats.forks, 0)}
						</div>
						<div className="text-xs gh-text-muted">Total Forks</div>
					</div>
					<div>
						<div className="text-lg font-semibold gh-text">
							{new Set(projects.map((p) => p.primaryLanguage.name)).size}
						</div>
						<div className="text-xs gh-text-muted">Languages Used</div>
					</div>
				</div>
			</div>
		</section>
	);
}
