import { type Metadata } from "next";
import { capitalizeFirstLetter } from "@/utils";

export const generateMetadata = async ({
	params,
}: {
	params: { category: string };
}): Promise<Metadata> => {
	const capitalizedCategory = capitalizeFirstLetter(params.category);
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
