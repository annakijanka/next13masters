export const Loading = () => {
	return (
		<div className="flex gap-1 opacity-25" aria-busy="true">
			<div className="h-2 w-2 animate-pulse rounded-full bg-gun-powder"></div>
			<div className="h-2 w-2 animate-pulse rounded-full bg-gun-powder"></div>
			<div className="h-2 w-2 animate-pulse rounded-full bg-gun-powder"></div>
		</div>
	);
};
