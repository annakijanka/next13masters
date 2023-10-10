import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getCategoryBySlug } from "@/api/categories";
import { CategoryProductList } from "@/ui/organisms/CategoryProductList";
import { Loading } from "@/ui/atoms/Loading";
import { CategoryPagination } from "@/ui/organisms/CategoryPagination";

export const generateMetadata = async ({
	params,
}: {
	params: { category: string; pageNumber: string };
}): Promise<Metadata> => {
	const category = await getCategoryBySlug(params.category);

	if (!category) {
		return notFound();
	}

	return {
		title: `${category.name} Category - Page ${params.pageNumber} | Online Store`,
		description: `Shop the finest ${category.name} selection online. Unmatched variety, quality, and value await you.`,
	};
};

export default async function CategoryPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const first = 4;
	const category = await getCategoryBySlug(params.category);
	return (
		<>
			<h1 className="mb-4 text-2xl font-extrabold tracking-tight text-steel-gray md:text-3xl">
				{category?.name}
			</h1>
			<CategoryProductList
				pageNumber={params.pageNumber}
				first={first}
				category={params.category}
			/>
			<Suspense fallback={<Loading />}>
				<CategoryPagination
					pageNumber={params.pageNumber}
					first={first}
					category={params.category}
				/>
			</Suspense>
		</>
	);
}
