"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion, AnimatePresence } from "motion/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/outline";

export interface SelectOption {
	value: string;
	label: string;
}

export interface SelectProps {
	value: string;
	onValueChange: (value: string) => void;
	options: SelectOption[];
	placeholder?: string;
	className?: string;
	disabled?: boolean;
}

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
	({ value, onValueChange, options, placeholder = "Select an option...", className, disabled = false }, ref) => {
		const [isOpen, setIsOpen] = React.useState(false);
		const [visible, setVisible] = React.useState(false);
		const internalRef = React.useRef<HTMLDivElement>(null);

		const radius = 100;
		const mouseX = useMotionValue(0);
		const mouseY = useMotionValue(0);

		function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
			const { left, top } = currentTarget.getBoundingClientRect();
			mouseX.set(clientX - left);
			mouseY.set(clientY - top);
		}

		// Close dropdown when clicking outside
		React.useEffect(() => {
			const handleClickOutside = (event: MouseEvent) => {
				if (internalRef.current && !internalRef.current.contains(event.target as Node)) {
					setIsOpen(false);
				}
			};

			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, []);

		const selectedOption = options.find((option) => option.value === value);

		const handleSelect = (optionValue: string) => {
			onValueChange(optionValue);
			setIsOpen(false);
		};

		return (
			<div
				className={cn("relative w-full min-w-[120px]", className)}
				ref={(node) => {
					internalRef.current = node;
					if (ref) {
						if (typeof ref === "function") {
							ref(node);
						} else {
							ref.current = node;
						}
					}
				}}
			>
				<motion.div
					style={{
						background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
              #3b82f6,
              transparent 80%
            )
          `,
					}}
					onMouseMove={handleMouseMove}
					onMouseEnter={() => setVisible(true)}
					onMouseLeave={() => setVisible(false)}
					className="group/select rounded-lg p-[2px] transition duration-300"
				>
					<button
						type="button"
						onClick={() => !disabled && setIsOpen(!isOpen)}
						disabled={disabled}
						className={cn(
							"shadow-input flex h-10 w-full items-center justify-between rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/select:shadow-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600",
							isOpen && "ring-[2px] ring-neutral-400 dark:ring-neutral-600"
						)}
					>
						<span
							className={cn(
								"truncate flex-1 text-left",
								!selectedOption && "text-neutral-400 dark:text-neutral-500"
							)}
						>
							{selectedOption ? selectedOption.label : placeholder}
						</span>
						<ChevronDownIcon
							className={cn(
								"h-4 w-4 ml-2 flex-shrink-0 transition-transform duration-200 text-neutral-500 dark:text-neutral-400",
								isOpen && "rotate-180"
							)}
						/>
					</button>
				</motion.div>

				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: -10 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: -10 }}
							transition={{ duration: 0.15 }}
							className="absolute z-50 mt-1 w-full rounded-md border border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-zinc-800"
						>
							<div className="max-h-60 overflow-auto rounded-md py-1">
								{options.map((option) => (
									<button
										key={option.value}
										type="button"
										onClick={() => handleSelect(option.value)}
										className={cn(
											"flex w-full items-center justify-between px-3 py-2 text-left text-sm transition-colors hover:bg-gray-100 dark:hover:bg-zinc-700",
											value === option.value &&
												"bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400"
										)}
									>
										<span className="truncate">{option.label}</span>
										{value === option.value && (
											<CheckIcon className="h-4 w-4 ml-2 flex-shrink-0 text-blue-600 dark:text-blue-400" />
										)}
									</button>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		);
	}
);

Select.displayName = "Select";

export { Select };
