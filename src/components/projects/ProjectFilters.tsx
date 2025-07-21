"use client";
import { useState, useMemo, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Project } from "@/data";
import { Select, SelectOption, Input } from "@/components/ui";

interface ProjectFiltersProps {
	projects: Project[];
	onFilterChange: (filteredProjects: Project[]) => void;
}

export function ProjectFilters({ projects, onFilterChange }: ProjectFiltersProps) {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedLanguage, setSelectedLanguage] = useState("All");
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [sortBy, setSortBy] = useState("none");

	// Get unique languages and categories for filters
	const languageOptions = useMemo((): SelectOption[] => {
		const langs = new Set(projects.map((p) => p.primaryLanguage.name));
		return [
			{ value: "All", label: "Language: All" },
			...Array.from(langs).map((lang) => ({ value: lang, label: lang })),
		];
	}, [projects]);

	const categoryOptions = useMemo((): SelectOption[] => {
		const cats = new Set(projects.map((p) => p.category));
		return [
			{ value: "All", label: "Category: All" },
			...Array.from(cats).map((cat) => ({ value: cat, label: cat })),
		];
	}, [projects]);

	const sortOptions: SelectOption[] = [
		{ value: "none", label: "No Sort" },
		{ value: "featured", label: "Featured First" },
		{ value: "name", label: "Name" },
		{ value: "created", label: "Created" },
	];

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
				case "featured":
					// Featured projects first, then by index
					if (a.featured && !b.featured) return -1;
					if (!a.featured && b.featured) return 1;
					return a.index - b.index;
				case "name":
					return a.name.localeCompare(b.name);
				case "created":
					return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
				case "none":
				default:
					// Sort by custom index (lower index = higher priority)
					return a.index - b.index;
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
			<div className="flex-1 relative">
				<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
					<MagnifyingGlassIcon className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
				</div>
				<Input
					type="text"
					placeholder="Find a repository..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="pl-10"
				/>
			</div>
			<div className="flex gap-2 flex-wrap">
				<div className="w-36">
					<Select
						value={selectedCategory}
						onValueChange={setSelectedCategory}
						options={categoryOptions}
						placeholder="Category: All"
					/>
				</div>
				<div className="w-36">
					<Select
						value={selectedLanguage}
						onValueChange={setSelectedLanguage}
						options={languageOptions}
						placeholder="Language: All"
					/>
				</div>
				<div className="w-36">
					<Select
						value={sortBy}
						onValueChange={setSortBy}
						options={sortOptions}
						placeholder="Sort: Updated"
					/>
				</div>
			</div>
		</div>
	);
}
