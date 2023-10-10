"use client";

export const FullViewButton = () => {
	return (
		<button
			className="rounded bg-gun-powder px-2 py-1 text-xs font-semibold uppercase text-bridal-heath transition duration-300 hover:bg-bridal-heath hover:text-steel-gray"
			onClick={() => {
				window.location.reload();
			}}
		>
			Full view
		</button>
	);
};
