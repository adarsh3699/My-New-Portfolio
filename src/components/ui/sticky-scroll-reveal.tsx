"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const backgroundColors = [
	"#0f172a", // slate-900
	"#000000", // black
	"#171717", // neutral-900
];

export const StickyScroll = ({
	content,
	contentClassName,
}: {
	content: {
		title: string;
		description: string;
		content?: React.ReactNode;
	}[];
	contentClassName?: string;
}) => {
	const [activeCard, setActiveCard] = React.useState(0);
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		// uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
		target: ref,
		// container: ref,
		offset: ["start start", "end start"],
	});
	const cardLength = content.length;

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		const cardsBreakpoints = content.map((_, index) => index / (cardLength + 2.5));
		const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
			const distance = Math.abs(latest - breakpoint);
			if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
				return index;
			}
			return acc;
		}, 0);
		setActiveCard(closestBreakpointIndex);
	});

	return (
		<motion.div
			animate={{
				backgroundColor: backgroundColors[activeCard % backgroundColors.length],
			}}
			transition={{
				duration: 0.8,
				ease: "easeInOut",
			}}
			className="relative flex flex-col lg:flex-row justify-center lg:space-x-10 space-y-6 lg:space-y-0 rounded-md p-4 sm:p-6 lg:p-10 min-h-[80vh]"
			ref={ref}
		>
			{/* Mobile sticky content - shows at top on mobile */}
			<div className="lg:hidden sticky top-20 md:top-30 z-10 mb-6 bg-black/10 rounded-lg shadow-xl shadow-black/100">
				<div className={cn("h-48 sm:h-56 w-full overflow-hidden rounded-md bg-white", contentClassName)}>
					<motion.div key={activeCard} className="h-full w-full">
						{content[activeCard].content ?? null}
					</motion.div>
				</div>

				{/* Progress indicator for mobile */}
				<div className="mb-2 flex justify-center backdrop-blur-sm bg-black/30 rounded-full mx-auto w-fit px-4 py-2 space-x-2">
					{content.map((_, index) => (
						<div
							key={index}
							className={cn(
								"h-2 rounded-full transition-all duration-300",
								activeCard === index ? "bg-slate-100 w-8" : "bg-slate-500 w-2"
							)}
						/>
					))}
				</div>
			</div>

			<div className="relative flex items-start px-2 sm:px-4 lg:flex-1">
				<div className="max-w-2xl w-full">
					{content.map((item, index) => (
						<div
							key={item.title + index}
							className="my-12 sm:my-16 lg:my-20 mb-24 sm:mb-32 lg:mb-40 first:mt-6 sm:first:mt-8 lg:first:mt-10 last:mb-12 sm:last:mb-16 lg:last:mb-20"
						>
							<motion.h2
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: activeCard === index ? 1 : 0.3,
								}}
								transition={{
									duration: 0.3,
									ease: "easeInOut",
								}}
								className="text-xl sm:text-2xl lg:text-2xl font-bold text-slate-100"
							>
								{item.title}
							</motion.h2>
							<motion.p
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: activeCard === index ? 1 : 0.3,
								}}
								transition={{
									duration: 0.3,
									ease: "easeInOut",
								}}
								className="text-sm sm:text-base lg:text-lg mt-4 sm:mt-8 lg:mt-10 max-w-full sm:max-w-lg text-slate-300"
							>
								{item.description}
							</motion.p>
						</div>
					))}
				</div>
			</div>

			{/* Desktop sticky content - hidden on mobile */}
			<div className="hidden lg:block lg:flex-shrink-0">
				<div className={cn("sticky top-40 h-60 w-80 overflow-hidden rounded-lg", contentClassName)}>
					<motion.div key={activeCard} className="h-full w-full">
						{content[activeCard].content ?? null}
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};
