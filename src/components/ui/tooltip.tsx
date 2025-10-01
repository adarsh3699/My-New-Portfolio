"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

interface TooltipProps {
	children: React.ReactNode;
	content: string | React.ReactNode;
	side?: "top" | "bottom" | "left" | "right";
	delay?: number;
}

export default function Tooltip({ children, content, side = "bottom", delay = 500 }: TooltipProps) {
	const [isVisible, setIsVisible] = useState(false);
	const showTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	// Cleanup function
	const clearTimeouts = useCallback(() => {
		if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
		if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
	}, []);

	// Show tooltip with delay
	const showTooltip = useCallback(() => {
		clearTimeouts();
		showTimeoutRef.current = setTimeout(() => setIsVisible(true), delay);
	}, [delay, clearTimeouts]);

	// Hide tooltip immediately
	const hideTooltip = useCallback(() => {
		clearTimeouts();
		setIsVisible(false);
	}, [clearTimeouts]);

	// Cleanup on unmount
	useEffect(() => clearTimeouts, [clearTimeouts]);

	// Handle escape key and outside clicks
	useEffect(() => {
		if (!isVisible) return;

		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") hideTooltip();
		};

		const handleClickOutside = (e: MouseEvent) => {
			if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
				hideTooltip();
			}
		};

		document.addEventListener("keydown", handleEscape);
		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.removeEventListener("click", handleClickOutside);
		};
	}, [isVisible, hideTooltip]);

	// Optimized positioning classes
	const positionClasses = {
		top: "bottom-full left-1/2 -translate-x-1/2 mb-1",
		bottom: "top-full left-1/2 -translate-x-1/2 mt-1",
		left: "right-full top-1/2 -translate-y-1/2 mr-1",
		right: "left-full top-1/2 -translate-y-1/2 ml-1",
	};

	const tooltipClasses = `absolute z-50 px-3 py-2 text-xs font-medium text-white bg-gray-700 rounded shadow-lg pointer-events-none transition-opacity duration-200 w-64 sm:w-auto sm:whitespace-nowrap ${positionClasses[side]}`;

	return (
		<div
			ref={containerRef}
			className="relative inline-flex"
			onMouseEnter={showTooltip}
			onMouseLeave={hideTooltip}
			onFocus={showTooltip}
			onBlur={hideTooltip}
		>
			{children}
			{isVisible && (
				<div
					className={tooltipClasses}
					role="tooltip"
					aria-label={typeof content === "string" ? content : "Tooltip"}
				>
					{content}
				</div>
			)}
		</div>
	);
}
