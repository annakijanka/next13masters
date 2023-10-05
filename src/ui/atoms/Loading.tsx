export const Loading = () => {
	return (
		<div className="flex gap-1 opacity-25" aria-busy="true">
			<div className="bg-brick-red h-2 w-2 animate-pulse rounded-full"></div>
			<div className="bg-brick-red h-2 w-2 animate-pulse rounded-full"></div>
			<div className="bg-brick-red h-2 w-2 animate-pulse rounded-full"></div>
		</div>
	);
};
