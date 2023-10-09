"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Loading } from "./Loading";

export const CheckoutButton = () => {
	const status = useFormStatus();
	return (
		<button
			className="inline-flex h-14 w-full items-center justify-center rounded-lg from-gun-powder from-10% via-brick-red via-50% to-java to-90% px-6 text-base font-bold leading-6 text-bridal-heath transition-transform duration-300 hover:scale-[1.04] enabled:bg-gradient-to-r disabled:cursor-wait disabled:bg-gun-powder disabled:bg-opacity-25"
			type="submit"
			disabled={status.pending}
		>
			{status.pending ? (
				<>
					<Loading />
					<span className="ml-1">Processing...</span>
				</>
			) : (
				"Go to checkout"
			)}
		</button>
	);
};
