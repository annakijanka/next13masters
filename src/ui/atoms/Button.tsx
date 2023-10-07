export const Button = ({
	formAction,
	disabled,
	children,
}: {
	formAction: () => Promise<void>;
	disabled?: boolean;
	children: React.ReactNode;
}) => {
	return (
		<button
			className="h-8 w-8 rounded-lg bg-gun-powder text-base font-bold leading-4 text-bridal-heath transition-transform duration-300 hover:scale-[1.04] disabled:cursor-not-allowed disabled:bg-gun-powder disabled:bg-opacity-25"
			type="submit"
			formAction={formAction}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
