export const Input = ({ value }: { value: number }) => {
	return (
		<input
			data-testid="quantity"
			className="w-8 appearance-none text-center focus:outline-none"
			type="text"
			value={value}
			readOnly
		/>
	);
};
