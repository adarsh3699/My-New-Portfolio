export default function ProjectDetailLoading() {
	return (
		<main className="min-h-screen gh-bg-canvas-default">
			<div className="max-w-7xl mx-auto px-3 md:px-8 lg:px-6 py-8">
				<div className="animate-pulse space-y-8">
					<div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
					<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
						<div className="lg:col-span-3 space-y-6">
							<div className="h-64 bg-gray-200 dark:bg-gray-700 rounded" />
							<div className="h-96 bg-gray-200 dark:bg-gray-700 rounded" />
						</div>
						<div className="space-y-4">
							<div className="h-32 bg-gray-200 dark:bg-gray-700 rounded" />
							<div className="h-24 bg-gray-200 dark:bg-gray-700 rounded" />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
