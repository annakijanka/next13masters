export const Button = ({
	onClick,
	children,
}: {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
}) => {
	return (
		<button className="h-6 w-6 border" onClick={onClick}>
			{children}
		</button>
	);
};
