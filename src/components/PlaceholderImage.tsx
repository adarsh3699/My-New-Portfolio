import React from "react";
import { ImageIcon } from "lucide-react";

interface PlaceholderImageProps {
	width: number;
	height: number;
	alt: string;
	className?: string;
}

export default function PlaceholderImage({ width, height, alt, className = "" }: PlaceholderImageProps) {
	return (
		<div className={`gh-bg-canvas-subtle flex items-center justify-center ${className}`} style={{ width, height }}>
			<div className="text-center">
				<ImageIcon className="mx-auto h-8 w-8 gh-text-muted" />
				<p className="text-xs gh-text-muted mt-1">{alt}</p>
			</div>
		</div>
	);
}
