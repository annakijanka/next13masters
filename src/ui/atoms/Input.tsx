export const Input = ({ value }: { value: number }) => {
	return (
		<input
			className="w-8 appearance-none text-center focus:outline-none"
			type="text"
			value={value}
			readOnly
		/>
	);
};
