import { type Metadata } from "next";
import { capitalizeFirstLetter } from "@/utils";

export const generateMetadata = async ({
	params,
}: {
	params: { category: string; pageNumber: string };
}): Promise<Metadata> => {
	const capitalizedCategory = capitalizeFirstLetter(params.category);
	return {
		title: `Category ${capitalizedCategory} - Page ${params.pageNumber} | Online Store`,
	};
};

export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	let result: { pageNumber: string }[] = [];

	if (params.category === "dresses") {
		result = [{ pageNumber: "1" }];
	} else if (params.category === "jackets") {
		result = [{ pageNumber: "2" }];
	} else if (params.category === "shoes") {
		result = [{ pageNumber: "3" }];
	}

	return result;
};

export default async function Category({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	return (
		<>
			<h1 className="mb-4 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
				{params.pageNumber} strona kategorii {params.category}
			</h1>
		</>
	);
}
