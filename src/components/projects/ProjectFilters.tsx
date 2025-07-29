"use client";
import { useState, useMemo, useEffect } from "react";
import { MagnifyingGlassIcon, Squares2X2Icon, ListBulletIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Project } from "@/data";
import { Select, SelectOption, Input } from "@/components/ui";
import { ViewMode } from "@/app/projects/page";

// Constants
const FILTER_DEFAULTS = {
	search: "",
	language: "All",
	category: "All",
	sort: "none",
} as const;

const SORT_OPTIONS: SelectOption[] = [
	{ value: "none", label: "No Sort" },
	{ value: "featured", label: "Featured First" },
	{ value: "name", label: "Name" },
	{ value: "created", label: "Created" },
];

// Filter chip configurations
const CHIP_STYLES = {
	search: {
		bg: "bg-blue-50",
		text: "text-blue-700",
		border: "border-blue-200",
		darkBg: "dark:bg-blue-900/20",
		darkText: "dark:text-blue-400",
		darkBorder: "dark:border-blue-800/30",
		hover: "hover:bg-blue-100",
		darkHover: "dark:hover:bg-blue-800/30",
	},
	category: {
		bg: "bg-green-50",
		text: "text-green-700",
		border: "border-green-200",
		darkBg: "dark:bg-green-900/20",
		darkText: "dark:text-green-400",
		darkBorder: "dark:border-green-800/30",
		hover: "hover:bg-green-100",
		darkHover: "dark:hover:bg-green-800/30",
	},
	language: {
		bg: "bg-purple-50",
		text: "text-purple-700",
		border: "border-purple-200",
		darkBg: "dark:bg-purple-900/20",
		darkText: "dark:text-purple-400",
		darkBorder: "dark:border-purple-800/30",
		hover: "hover:bg-purple-100",
		darkHover: "dark:hover:bg-purple-800/30",
	},
	sort: {
		bg: "bg-orange-50",
		text: "text-orange-700",
		border: "border-orange-200",
		darkBg: "dark:bg-orange-900/20",
		darkText: "dark:text-orange-400",
		darkBorder: "dark:border-orange-800/30",
		hover: "hover:bg-orange-100",
		darkHover: "dark:hover:bg-orange-800/30",
	},
} as const;

interface ActiveFilters {
	search: string;
	language: string;
	category: string;
	sort: string;
}

interface ProjectFiltersProps {
	projects: Project[];
	onFilterChange: (filteredProjects: Project[]) => void;
	viewMode: ViewMode;
	onViewModeChange: (mode: ViewMode) => void;
}

export function ProjectFilters({ projects, onFilterChange, viewMode, onViewModeChange }: ProjectFiltersProps) {
	const [activeFilters, setActiveFilters] = useState<ActiveFilters>(FILTER_DEFAULTS);

	// Derived state
	const hasActiveFilters = !!(
		activeFilters.search ||
		activeFilters.language !== "All" ||
		activeFilters.category !== "All" ||
		activeFilters.sort !== "none"
	);

	// Helper functions
	const updateFilter = (key: keyof ActiveFilters, value: string) => {
		setActiveFilters((prev) => ({ ...prev, [key]: value }));
	};

	const removeFilter = (key: keyof ActiveFilters) => {
		updateFilter(key, FILTER_DEFAULTS[key]);
	};

	const clearAllFilters = () => {
		setActiveFilters(FILTER_DEFAULTS);
	};

	// Filter chip component
	const FilterChip = ({
		type,
		label,
		onRemove,
		isMobile = false,
		maxWidth,
	}: {
		type: keyof typeof CHIP_STYLES;
		label: string;
		onRemove: () => void;
		isMobile?: boolean;
		maxWidth?: string;
	}) => {
		const styles = CHIP_STYLES[type];
		const sizeClasses = isMobile ? "text-xs" : "text-sm";
		const iconSize = isMobile ? "w-2.5 h-2.5" : "w-3 h-3";
		const marginClass = isMobile ? "" : "ml-1";

		return (
			<div
				className={`flex items-center gap-1 px-2 py-1 ${styles.bg} ${styles.text} rounded-full ${sizeClasses} border ${styles.border} ${styles.darkBg} ${styles.darkText} ${styles.darkBorder} ${styles.hover} ${styles.darkHover} transition-colors cursor-pointer`}
			>
				<span className={maxWidth ? `truncate ${maxWidth}` : ""}>{label}</span>
				<button
					onClick={onRemove}
					className={`${marginClass} hover:bg-black/10 dark:hover:bg-white/10 rounded-full p-0.5 flex-shrink-0 transition-colors`}
				>
					<XMarkIcon className={iconSize} />
				</button>
			</div>
		);
	};

	// Filter options
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

	// Filter and sort projects
	const filteredAndSortedProjects = useMemo(() => {
		// Filter projects
		const filtered = projects.filter((project) => {
			const searchLower = activeFilters.search.toLowerCase();
			const matchesSearch =
				!activeFilters.search ||
				project.name.toLowerCase().includes(searchLower) ||
				project.description.toLowerCase().includes(searchLower) ||
				project.technologies.some((tech) => tech.toLowerCase().includes(searchLower));

			const matchesLanguage =
				activeFilters.language === "All" || project.primaryLanguage.name === activeFilters.language;

			const matchesCategory = activeFilters.category === "All" || project.category === activeFilters.category;

			return matchesSearch && matchesLanguage && matchesCategory;
		});

		// Sort projects
		filtered.sort((a, b) => {
			switch (activeFilters.sort) {
				case "featured":
					if (a.featured && !b.featured) return -1;
					if (!a.featured && b.featured) return 1;
					return projects.indexOf(a) - projects.indexOf(b);
				case "name":
					return a.name.localeCompare(b.name);
				case "created":
					return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
				default:
					return projects.indexOf(a) - projects.indexOf(b);
			}
		});

		return filtered;
	}, [projects, activeFilters]);

	// Update parent when filters change
	useEffect(() => {
		onFilterChange(filteredAndSortedProjects);
	}, [filteredAndSortedProjects, onFilterChange]);

	return (
		<div className="mb-6">
			{/* Main Filter Row */}
			<div className="flex flex-col lg:flex-row gap-3 lg:gap-4 mb-4">
				{/* Search Input */}
				<div className="flex-1 relative">
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
						<MagnifyingGlassIcon className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
					</div>
					<Input
						type="text"
						placeholder="Search repos, tech..."
						value={activeFilters.search}
						onChange={(e) => updateFilter("search", e.target.value)}
						className="pl-10 text-sm sm:text-base"
					/>
				</div>

				{/* Filter Selects */}
				<div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
					<div className="flex gap-2">
						<div className="flex-1 min-w-0 sm:w-36 lg:w-40">
							<Select
								value={activeFilters.category}
								onValueChange={(value) => updateFilter("category", value)}
								options={categoryOptions}
								placeholder="Category"
							/>
						</div>
						<div className="flex-1 min-w-0 sm:w-36 lg:w-40">
							<Select
								value={activeFilters.language}
								onValueChange={(value) => updateFilter("language", value)}
								options={languageOptions}
								placeholder="Language"
							/>
						</div>
					</div>
					<div className="flex gap-2">
						<div className="flex-1 min-w-0 sm:w-32 lg:w-40">
							<Select
								value={activeFilters.sort}
								onValueChange={(value) => updateFilter("sort", value)}
								options={SORT_OPTIONS}
								placeholder="Sort"
							/>
						</div>

						{/* View Toggle */}
						<div className="hidden lg:flex items-center bg-white dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 rounded-lg p-1 flex-shrink-0">
							<button
								onClick={() => onViewModeChange("list")}
								className={`p-2 rounded-md transition-colors ${
									viewMode === "list"
										? "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"
										: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
								}`}
								title="List view"
							>
								<ListBulletIcon className="w-4 h-4" />
							</button>
							<button
								onClick={() => onViewModeChange("grid")}
								className={`p-2 rounded-md transition-colors ${
									viewMode === "grid"
										? "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"
										: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
								}`}
								title="Grid view"
							>
								<Squares2X2Icon className="w-4 h-4" />
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Active Filter Chips */}
			{hasActiveFilters && (
				<div className="mb-4">
					{/* Mobile Layout */}
					<div className="flex lg:hidden flex-wrap gap-1.5 items-center">
						<span className="text-xs text-gray-500 font-medium">Filters:</span>

						{activeFilters.search && (
							<FilterChip
								type="search"
								label={`"${activeFilters.search}"`}
								onRemove={() => removeFilter("search")}
								isMobile
								maxWidth="max-w-[80px]"
							/>
						)}

						{activeFilters.category !== "All" && (
							<FilterChip
								type="category"
								label={activeFilters.category}
								onRemove={() => removeFilter("category")}
								isMobile
								maxWidth="max-w-[60px]"
							/>
						)}

						{activeFilters.language !== "All" && (
							<FilterChip
								type="language"
								label={activeFilters.language}
								onRemove={() => removeFilter("language")}
								isMobile
								maxWidth="max-w-[60px]"
							/>
						)}

						{activeFilters.sort !== "none" && (
							<FilterChip
								type="sort"
								label={SORT_OPTIONS.find((opt) => opt.value === activeFilters.sort)?.label || ""}
								onRemove={() => removeFilter("sort")}
								isMobile
								maxWidth="max-w-[50px]"
							/>
						)}

						<button
							onClick={clearAllFilters}
							className="text-xs px-1.5 py-0.5 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 underline"
						>
							Clear
						</button>
					</div>

					{/* Desktop Layout */}
					<div className="hidden lg:flex flex-wrap gap-2 items-start lg:items-center">
						<span className="text-sm gh-text-muted font-medium mb-1 lg:mb-0 w-full lg:w-auto">
							Active filters:
						</span>

						{activeFilters.search && (
							<FilterChip
								type="search"
								label={`Search: "${activeFilters.search}"`}
								onRemove={() => removeFilter("search")}
								maxWidth="max-w-[120px] lg:max-w-none"
							/>
						)}

						{activeFilters.category !== "All" && (
							<FilterChip
								type="category"
								label={`Category: ${activeFilters.category}`}
								onRemove={() => removeFilter("category")}
							/>
						)}

						{activeFilters.language !== "All" && (
							<FilterChip
								type="language"
								label={`Language: ${activeFilters.language}`}
								onRemove={() => removeFilter("language")}
							/>
						)}

						{activeFilters.sort !== "none" && (
							<FilterChip
								type="sort"
								label={`Sort: ${SORT_OPTIONS.find((opt) => opt.value === activeFilters.sort)?.label}`}
								onRemove={() => removeFilter("sort")}
							/>
						)}

						<button
							onClick={clearAllFilters}
							className="text-xs px-2 py-1 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 underline"
						>
							Clear all
						</button>
					</div>
				</div>
			)}

			{/* Results Summary */}
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-6 mb-[-8px]">
				<div className="text-sm gh-text-muted">
					<span className="sm:hidden">
						{filteredAndSortedProjects.length === projects.length
							? `All ${projects.length} repos`
							: `${filteredAndSortedProjects.length}/${projects.length} repos`}
					</span>
					<span className="hidden sm:inline">
						{filteredAndSortedProjects.length === projects.length
							? `Showing all ${projects.length} repositories`
							: `Showing ${filteredAndSortedProjects.length} of ${projects.length} repositories`}
					</span>
				</div>

				{hasActiveFilters && (
					<button onClick={clearAllFilters} className="text-sm gh-text-accent hover:underline self-start">
						Clear all filters
					</button>
				)}
			</div>
		</div>
	);
}
