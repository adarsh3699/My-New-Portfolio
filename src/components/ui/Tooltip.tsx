"use client";
import React, { useState } from "react";

interface TooltipProps {
	children: React.ReactNode;
	content: string;
	side?: "top" | "bottom" | "left" | "right";
	delay?: number;
}

export default function Tooltip({ children, content, side = "bottom", delay = 600 }: TooltipProps) {
	const [isVisible, setIsVisible] = useState(false);
	const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

	const showTooltip = () => {
		const id = setTimeout(() => {
			setIsVisible(true);
		}, delay);
		setTimeoutId(id);
	};

	const hideTooltip = () => {
		if (timeoutId) {
			clearTimeout(timeoutId);
			setTimeoutId(null);
		}
		setIsVisible(false);
	};

	const getTooltipClasses = () => {
		const baseClasses =
			"absolute z-50 px-2 py-1.5 text-xs font-medium text-white bg-gray-700 rounded shadow-lg whitespace-nowrap pointer-events-none transition-opacity duration-200";

		switch (side) {
			case "top":
				return `${baseClasses} bottom-full left-1/2 transform -translate-x-1/2 mb-1`;
			case "bottom":
				return `${baseClasses} top-full left-1/2 transform -translate-x-1/2 mt-1`;
			case "left":
				return `${baseClasses} right-full top-1/2 transform -translate-y-1/2 mr-1`;
			case "right":
				return `${baseClasses} left-full top-1/2 transform -translate-y-1/2 ml-1`;
			default:
				return `${baseClasses} top-full left-1/2 transform -translate-x-1/2 mt-1`;
		}
	};

	return (
		<div className="relative inline-flex" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
			{children}
			{isVisible && (
				<div className={getTooltipClasses()} style={{ opacity: isVisible ? 1 : 0 }} role="tooltip">
					{content}
				</div>
			)}
		</div>
	);
}
