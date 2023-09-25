import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { capitalizeFirstLetter } from "@/utils";
import { getProductsByCategorySlug } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductsGetTotalCountByCategorySlugDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";

const first = 4;

export const generateMetadata = async ({
	params,
}: {
	params: { category: string; pageNumber: string };
}): Promise<Metadata> => {
	const capitalizedCategory = capitalizeFirstLetter(params.category);
	return {
		title: `Category ${capitalizedCategory} - Page ${params.pageNumber} | Online Store`,
		description: `Shop the finest ${capitalizedCategory} selection online. Unmatched variety, quality, and value await you.`,
	};
};

// export const generateStaticParams = async ({
// 	params,
// }: {
// 	params: { category: string; pageNumber: string };
// }) => {
// 	const graphqlResponse = await executeGraphql(ProductsGetTotalCountByCategorySlugDocument, {
// 		slug: params.category,
// 	});
// 	const totalCount = graphqlResponse.productsConnection.aggregate.count;
// 	const totalPages = Math.ceil(totalCount / first);
// 	const pages = Array.from({ length: totalPages }, (_, index) => (index + 1).toString());
// 	return pages.map((page) => ({ pageNumber: page }));
// };

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

	return (
		<>
			<ProductList products={products} />
			<Pagination
				path={`categories/${params.category}`}
				totalCount={totalCount}
				currentPage={params.pageNumber}
				perPage={first}
			/>
		</>
	);
}
