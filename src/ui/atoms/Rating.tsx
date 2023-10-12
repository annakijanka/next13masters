export const Rating = ({ rating }: { rating: number }) => {
	return (
		<>
			<span className="mr-1">{`${rating.toFixed(1)}/5`}</span>
			{Array.from({ length: 5 }).map((_, index) =>
				index < Math.round(rating) ? (
					<span className="text-brick-red" key={index}>
						★
					</span>
				) : (
					<span className="text-gun-powder opacity-25" key={index}>
						☆
					</span>
				),
			)}
		</>
	);
};
