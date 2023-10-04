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
	const graphqlResponse = await executeGraphql(ProductsGetTotalCountByCategorySlugDocument, {
		slug: category,
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
