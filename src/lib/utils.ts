import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// Re-export search functionality from dedicated search module
export { searchContent, type SearchResult, resetSearchCache } from "./search";
