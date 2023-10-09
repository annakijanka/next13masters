import { Loader } from "lucide-react";

export default function Loading() {
	return (
		<div className="flex h-full w-full items-center justify-center" aria-busy="true">
			<Loader className="animate-spin" strokeWidth={2.5} />
		</div>
	);
}
