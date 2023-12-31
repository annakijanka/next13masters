import { executeGraphql } from "@/api/graphqlApi";
import { ProductsGetTotalCountByCategorySlugDocument } from "@/gql/graphql";
import { Pagination } from "@/ui/molecules/Pagination";

export const CategoryPagination = async ({
	pageNumber,
	first,
	category,
}: {
	pageNumber: string;
	first: number;
	category: string;
}) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetTotalCountByCategorySlugDocument,
		variables: {
			slug: category,
		},
		next: {
			revalidate: 60 * 60 * 24,
		},
	});
	const totalCount = graphqlResponse.productsConnection.aggregate.count;
	return (
		<Pagination
			path={`categories/${category}`}
			totalCount={totalCount}
			currentPage={pageNumber}
			perPage={first}
		/>
	);
};
