"use client";
import { useState, useMemo, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Project } from "@/data";

interface ProjectFiltersProps {
	projects: Project[];
	onFilterChange: (filteredProjects: Project[]) => void;
}

export function ProjectFilters({ projects, onFilterChange }: ProjectFiltersProps) {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedLanguage, setSelectedLanguage] = useState("All");
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [sortBy, setSortBy] = useState("updated");

	// Get unique languages and categories for filters
	const languages = useMemo(() => {
		const langs = new Set(projects.map((p) => p.primaryLanguage.name));
		return ["All", ...Array.from(langs)];
	}, [projects]);

	const categories = useMemo(() => {
		const cats = new Set(projects.map((p) => p.category));
		return ["All", ...Array.from(cats)];
	}, [projects]);

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
					return new Date(b.updatedAt).getTime() - new Date(a.createdAt).getTime();
			}
		});

		return filtered;
	}, [projects, searchTerm, selectedLanguage, selectedCategory, sortBy]);

	// Update parent component when filters change
	useEffect(() => {
		onFilterChange(filteredAndSortedProjects);
	}, [filteredAndSortedProjects, onFilterChange]);

	return (
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
	);
}
