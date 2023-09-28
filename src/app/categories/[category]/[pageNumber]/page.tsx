import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductsByCategorySlug } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductsGetTotalCountByCategorySlugDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";
import { getCategories, getCategoryBySlug } from "@/api/categories";
import { setAverageRating } from "@/utils";

const first = 4;

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
		title: `Category ${category.name} - Page ${params.pageNumber} | Online Store`,
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
	const skip = (parseInt(params.pageNumber, 10) - 1) * first;
	const products = await getProductsByCategorySlug(first, skip, params.category);
	const graphqlResponse = await executeGraphql(ProductsGetTotalCountByCategorySlugDocument, {
		slug: params.category,
	});
	const totalCount = graphqlResponse.productsConnection.aggregate.count;

	if (!products) {
		return notFound();
	}

	const productsWithAverageRating = setAverageRating(products);

	return (
		<>
			<ProductList products={productsWithAverageRating} />
			<Pagination
				path={`categories/${params.category}`}
				totalCount={totalCount}
				currentPage={params.pageNumber}
				perPage={first}
			/>
		</>
	);
}
