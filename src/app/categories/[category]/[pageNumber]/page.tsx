import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductsGetTotalCountByCategorySlugDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";
import { getCategories, getCategoryBySlug } from "@/api/categories";
import { CategoryProductList } from "@/ui/organisms/CategoryProductList";
import { Loading } from "@/ui/atoms/Loading";

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

// 'Too Many Requests. Please upgrade or contact sales regarding your read limit.'
// export const generateStaticParams = async () => {
// 	const categories = await getCategories();

// 	const pages = categories.flatMap(async (category) => {
// 		const graphqlResponse = await executeGraphql(ProductsGetTotalCountByCategorySlugDocument, {
// 			slug: category.slug,
// 		});
// 		const totalCount = graphqlResponse.productsConnection.aggregate.count;
// 		const totalPages = Math.ceil(totalCount / first);

// 		return Array.from({ length: totalPages }, (_, index) => ({
// 			category: category.slug,
// 			pageNumber: (index + 1).toString(),
// 		}));
// 	});

// 	return Promise.all(pages);
// };

export const generateStaticParams = async () => {
	const categories = await getCategories();

	const pages = categories.map((category) => ({
		category: category.slug,
		pageNumber: "1",
	}));

	return pages;
};

export default async function CategoryPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const category = await getCategoryBySlug(params.category);
	const graphqlResponse = await executeGraphql(ProductsGetTotalCountByCategorySlugDocument, {
		slug: params.category,
	});
	const totalCount = graphqlResponse.productsConnection.aggregate.count;
	const first = 4;

	return (
		<>
			<h1 className="mb-4 text-2xl font-extrabold tracking-tight text-steel-gray md:text-3xl">
				{category?.name}
			</h1>
			<Suspense fallback={<Loading />}>
				<CategoryProductList
					pageNumber={params.pageNumber}
					first={first}
					category={params.category}
				/>
			</Suspense>
			<Pagination
				path={`categories/${params.category}`}
				totalCount={totalCount}
				currentPage={params.pageNumber}
				perPage={first}
			/>
		</>
	);
}
