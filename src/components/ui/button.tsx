// Button component with modern styling
"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "default" | "secondary" | "success" | "warning" | "danger" | "outline" | "ghost";
	size?: "sm" | "md" | "lg";
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant = "default", size = "md", children, ...props }, ref) => {
		// Dynamic gradient colors based on variant
		const getGradientColors = () => {
			switch (variant) {
				case "success":
					return { primary: "via-white", secondary: "via-green-200" };
				case "warning":
					return { primary: "via-white", secondary: "via-yellow-200" };
				case "danger":
					return { primary: "via-white", secondary: "via-red-200" };
				case "secondary":
					return { primary: "via-white", secondary: "via-gray-200" };
				case "outline":
				case "ghost":
					return { primary: "via-blue-500", secondary: "via-blue-300" };
				default:
					return { primary: "via-white", secondary: "via-blue-200" };
			}
		};

		const gradientColors = getGradientColors();
		const variants = {
			default:
				"bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:from-blue-700 hover:to-blue-800 dark:from-blue-600 dark:to-blue-700 dark:shadow-[0px_1px_0px_0px_#ffffff20_inset,0px_-1px_0px_0px_#ffffff20_inset] dark:hover:from-blue-700 dark:hover:to-blue-800",
			secondary:
				"bg-gradient-to-br from-gray-600 to-gray-700 text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:from-gray-700 hover:to-gray-800 dark:from-gray-600 dark:to-gray-700 dark:shadow-[0px_1px_0px_0px_#ffffff20_inset,0px_-1px_0px_0px_#ffffff20_inset] dark:hover:from-gray-700 dark:hover:to-gray-800",
			success:
				"bg-gradient-to-br from-green-600 to-green-700 text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:from-green-700 hover:to-green-800 dark:from-green-600 dark:to-green-700 dark:shadow-[0px_1px_0px_0px_#ffffff20_inset,0px_-1px_0px_0px_#ffffff20_inset] dark:hover:from-green-700 dark:hover:to-green-800",
			warning:
				"bg-gradient-to-br from-yellow-500 to-orange-600 text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:from-yellow-600 hover:to-orange-700 dark:from-yellow-500 dark:to-orange-600 dark:shadow-[0px_1px_0px_0px_#ffffff20_inset,0px_-1px_0px_0px_#ffffff20_inset] dark:hover:from-yellow-600 dark:hover:to-orange-700",
			danger: "bg-gradient-to-br from-red-600 to-red-700 text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:from-red-700 hover:to-red-800 dark:from-red-600 dark:to-red-700 dark:shadow-[0px_1px_0px_0px_#ffffff20_inset,0px_-1px_0px_0px_#ffffff20_inset] dark:hover:from-red-700 dark:hover:to-red-800",
			outline:
				"border-2 border-neutral-200 bg-transparent text-black hover:bg-neutral-50 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-900",
			ghost: "bg-transparent text-black hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800",
		};

		const sizes = {
			sm: "h-8 px-3 text-xs",
			md: "h-10 px-4 text-sm",
			lg: "h-12 px-6 text-base",
		};

		return (
			<div className="group/btn relative rounded-lg transition duration-300">
				<button
					className={cn(
						"relative w-full rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50",
						"transform-gpu hover:scale-[1.02] active:scale-[0.98]",
						"focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none",
						variants[variant],
						sizes[size],
						className
					)}
					ref={ref}
					{...props}
				>
					{children}

					{/* Bottom gradient effect */}
					<span
						className={`absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent ${gradientColors.primary} to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-70`}
					/>
					<span
						className={`absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent ${gradientColors.secondary} to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-80`}
					/>

					{/* Shimmer effect */}
					<span className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover/btn:opacity-100 -skew-x-12 transform" />
				</button>
			</div>
		);
	}
);

Button.displayName = "Button";

export { Button };
