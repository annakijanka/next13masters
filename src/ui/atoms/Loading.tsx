import { Loader } from "lucide-react";

export const Loading = () => {
	return (
		<div aria-busy="true">
			<Loader className="animate-spin" strokeWidth={2.5} />
		</div>
	);
};
