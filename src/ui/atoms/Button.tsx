export const Button = ({
	formAction,
	children,
}: {
	formAction: () => Promise<void>;
	children: React.ReactNode;
}) => {
	return (
		<button
			className="h-8 w-8 rounded-lg bg-brick-red text-base font-bold leading-4 text-bridal-heath transition-transform duration-300 hover:scale-[1.04]"
			type="submit"
			formAction={formAction}
		>
			{children}
		</button>
	);
};
