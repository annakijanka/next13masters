import { type Metadata } from "next";

export const metadata: Metadata = {
	title: "Not Found | Online Store",
	description: "Could not find requested resource.",
};

export default function NotFound() {
	return (
		<>
			<h1 className="mb-4 text-2xl font-extrabold tracking-tight text-steel-gray md:text-3xl">
				Not Found
			</h1>
			<p className="text-steel-gray">Could not find requested resource.</p>
		</>
	);
}
