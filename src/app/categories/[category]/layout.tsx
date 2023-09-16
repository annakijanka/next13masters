import { type Metadata } from "next";

export const generateMetadata = async ({
	params,
}: {
	params: { category: string };
}): Promise<Metadata> => {
	const capitalizedCategory = params.category.charAt(0).toUpperCase() + params.category.slice(1);
	return {
		title: `Category ${capitalizedCategory} | Online Store`,
		description: `Shop the finest ${capitalizedCategory} selection online. Unmatched variety, quality, and value await you.`,
	};
};

export const generateStaticParams = async () => {
	return [{ category: "dresses" }, { category: "jackets" }, { category: "shoes" }];
};

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
	return children;
}
