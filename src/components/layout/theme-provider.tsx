"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Types
type Theme = "dark" | "light";

interface ThemeProviderProps {
	children: React.ReactNode;
	defaultTheme?: Theme;
	storageKey?: string;
}

interface ThemeProviderState {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

// Context
const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

// Provider Component
export function ThemeProvider({ children, defaultTheme = "light", storageKey = "theme" }: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	useEffect(() => {
		const root = document.documentElement;
		const stored = localStorage.getItem(storageKey) as Theme;
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const initialTheme = stored || (prefersDark ? "dark" : "light");

		// Apply theme to DOM
		root.classList.remove("light", "dark");
		root.classList.add(initialTheme);
		setTheme(initialTheme);
	}, [storageKey]);

	const handleSetTheme = (newTheme: Theme) => {
		const root = document.documentElement;

		// Temporarily disable transitions during theme change
		root.classList.add("theme-transition");

		// Update localStorage
		localStorage.setItem(storageKey, newTheme);

		// Update DOM classes
		root.classList.remove("light", "dark");
		root.classList.add(newTheme);

		// Update state
		setTheme(newTheme);

		// Re-enable transitions after a short delay
		setTimeout(() => {
			root.classList.remove("theme-transition");
		}, 50);
	};

	const value: ThemeProviderState = {
		theme,
		setTheme: handleSetTheme,
	};

	return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
}

// Hook
export function useTheme(): ThemeProviderState {
	const context = useContext(ThemeProviderContext);

	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}

	return context;
}
