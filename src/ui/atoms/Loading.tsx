import { Loader } from "lucide-react";

export const Loading = () => {
	return (
		<div className="animate-spin" aria-busy="true">
			<Loader strokeWidth={2.5} />
		</div>
	);
};
