export const Loading = () => {
	return (
		<div className="flex gap-1.5 opacity-25" aria-busy="true">
			<div className="h-3 w-3 animate-pulse rounded-full bg-gun-powder"></div>
			<div className="h-3 w-3 animate-pulse rounded-full bg-gun-powder"></div>
			<div className="h-3 w-3 animate-pulse rounded-full bg-gun-powder"></div>
		</div>
	);
};
