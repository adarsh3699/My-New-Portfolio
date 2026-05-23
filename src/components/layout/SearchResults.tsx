"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
	FolderOpenIcon,
	BriefcaseIcon,
	InformationCircleIcon,
	EnvelopeIcon,
	CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { SearchResult } from "@/lib/search";

interface SearchResultsProps {
	results: SearchResult[];
	isVisible: boolean;
	isLoading?: boolean;
	onClose: () => void;
	onClearSearch: () => void;
	query: string;
}

const getResultIcon = (type: SearchResult["type"]) => {
	switch (type) {
		case "project":
			return <FolderOpenIcon className="w-4 h-4" />;
		case "experience":
			return <BriefcaseIcon className="w-4 h-4" />;
		case "tech":
			return <CodeBracketIcon className="w-4 h-4" />;
		case "about":
			return <InformationCircleIcon className="w-4 h-4" />;
		case "contact":
			return <EnvelopeIcon className="w-4 h-4" />;
		default:
			return <FolderOpenIcon className="w-4 h-4" />;
	}
};

const getResultTypeLabel = (type: SearchResult["type"]) => {
	switch (type) {
		case "project":
			return "Project";
		case "experience":
			return "Experience";
		case "tech":
			return "Technology";
		case "about":
			return "About";
		case "contact":
			return "Contact";
		default:
			return "Result";
	}
};

const getResultTypeColor = (type: SearchResult["type"]) => {
	switch (type) {
		case "project":
			return "text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400";
		case "experience":
			return "text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400";
		case "tech":
			return "text-purple-600 bg-purple-50 dark:bg-purple-900/20 dark:text-purple-400";
		case "about":
			return "text-orange-600 bg-orange-50 dark:bg-orange-900/20 dark:text-orange-400";
		case "contact":
			return "text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400";
		default:
			return "text-gray-600 bg-gray-50 dark:bg-gray-900/20 dark:text-gray-400";
	}
};

export function SearchResults({
	results,
	isVisible,
	isLoading = false,
	onClose,
	onClearSearch,
	query,
}: SearchResultsProps) {
	const router = useRouter();

	const handleResultClick = (result: SearchResult) => {
		router.push(result.url);
		onClearSearch(); // Clear the search bar
		onClose(); // Close the dropdown
	};

	if (!isVisible) {
		return null;
	}

	return (
		<div className="absolute top-full left-0 right-0 mt-2 gh-bg-canvas-inset border gh-border rounded-lg shadow-xl backdrop-blur-sm z-50 max-h-96 overflow-y-auto animate-in slide-in-from-top-2 duration-300">
			{/* Results Header */}
			<div className="px-4 py-2 border-b gh-border bg-gradient-to-r from-transparent via-orange-50/10 to-transparent dark:via-orange-900/5 hover:via-orange-50/20 dark:hover:via-orange-900/10 transition-all duration-300">
				{isLoading ? (
					<p className="text-sm gh-text-muted animate-pulse">Searching for &ldquo;{query}&rdquo;...</p>
				) : (
					<p className="text-sm gh-text-muted">
						Found <span className="font-medium text-orange-600 dark:text-orange-400">{results.length}</span>{" "}
						result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
					</p>
				)}
			</div>

			{/* Results List */}
			<div className="py-2">
				{isLoading ? (
					// Loading skeleton
					<div className="space-y-3">
						{[1, 2, 3].map((i) => (
							<div key={i} className="px-4 py-3">
								<div className="flex items-start space-x-3">
									<div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mt-0.5"></div>
									<div className="flex-1 space-y-2">
										<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-3/4"></div>
										<div className="h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-full"></div>
										<div className="flex space-x-2">
											<div className="h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-16"></div>
											<div className="h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-12"></div>
											<div className="h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-14"></div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				) : results.length === 0 ? (
					// No results found
					<div className="px-4 py-8 text-center group hover:bg-gradient-to-br hover:from-gray-50/50 hover:to-orange-50/30 dark:hover:from-gray-800/30 dark:hover:to-orange-900/20 transition-all duration-500 ease-out rounded-lg mx-2">
						<div className="w-12 h-12 mx-auto mb-3 gh-text-muted opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500 ease-out">
							<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1.5}
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</div>
						<p className="text-sm gh-text-muted mb-1">No results found for &ldquo;{query}&rdquo;</p>
						<p className="text-xs gh-text-muted">Try searching for projects, technologies, or experience</p>
					</div>
				) : (
					// Actual results
					results.map((result, index) => (
						<button
							key={`${result.type}-${result.url}-${index}`}
							onClick={() => handleResultClick(result)}
							className="w-full px-4 py-3 text-left group rounded-lg transition-colors duration-200 ease-out hover:bg-gray-50 dark:hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-orange-50/30 dark:focus:bg-orange-900/10"
						>
							<div className="flex items-start space-x-3">
								{/* Icon */}
								<div className="mt-0.5 gh-text-muted group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-200 ease-out">
									{getResultIcon(result.type)}
								</div>

								{/* Content */}
								<div className="flex-1 min-w-0">
									<div className="flex items-center space-x-2 mb-1">
										<h4 className="font-medium gh-text group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-200 ease-out truncate">
											{result.title}
										</h4>
										<span
											className={`px-2 py-0.5 text-xs font-medium rounded-full transition-colors duration-200 ease-out ${getResultTypeColor(
												result.type
											)}`}
										>
											{getResultTypeLabel(result.type)}
										</span>
									</div>

									<p className="text-sm gh-text-muted line-clamp-2 mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200 ease-out">
										{result.description}
									</p>

									{/* Technologies */}
									{result.technologies && result.technologies.length > 0 && (
										<div className="flex flex-wrap gap-1">
											{result.technologies.slice(0, 3).map((tech, techIndex) => (
												<span
													key={techIndex}
													className="px-2 py-0.5 text-xs gh-bg-neutral-muted gh-text-muted rounded transition-colors duration-200 ease-out group-hover:bg-orange-100 group-hover:text-orange-700 dark:group-hover:bg-orange-900/30 dark:group-hover:text-orange-300"
												>
													{tech}
												</span>
											))}
											{result.technologies.length > 3 && (
												<span className="px-2 py-0.5 text-xs gh-bg-neutral-muted gh-text-muted rounded transition-colors duration-200 ease-out group-hover:bg-orange-100 group-hover:text-orange-700 dark:group-hover:bg-orange-900/30 dark:group-hover:text-orange-300">
													+{result.technologies.length - 3} more
												</span>
											)}
										</div>
									)}

									{/* Matched term context */}
									{result.matchedTerm && result.matchedTerm !== query && (
										<p className="text-xs gh-text-muted mt-1 italic group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-200 ease-out">
											...{result.matchedTerm}...
										</p>
									)}
								</div>
							</div>
						</button>
					))
				)}
			</div>

			{/* Footer */}
			<div className="px-4 py-2 border-t gh-border bg-gradient-to-r from-transparent via-orange-50/20 to-transparent dark:via-orange-900/10">
				<p className="text-xs gh-text-muted">
					Press{" "}
					<kbd className="px-1 py-0.5 text-xs gh-bg-neutral-muted rounded shadow-sm border border-gray-300 dark:border-gray-600 font-mono">
						ESC
					</kbd>{" "}
					to close
				</p>
			</div>
		</div>
	);
}
