import { executeGraphql } from "@/api/graphqlApi";
import { type ProductOrderByInput, ProductsGetTotalCountDocument } from "@/gql/graphql";
import { Pagination } from "@/ui/molecules/Pagination";

export const ProductsPagination = async ({
	pageNumber,
	sort,
	first,
}: {
	pageNumber: string;
	sort: ProductOrderByInput;
	first: number;
}) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetTotalCountDocument,
		variables: undefined,
		next: {
			revalidate: 60 * 60 * 24,
		},
	});
	const totalCount = graphqlResponse.productsConnection.aggregate.count;
	return (
		<Pagination
			path={"products"}
			totalCount={totalCount}
			currentPage={pageNumber}
			perPage={first}
			query={sort ? `?sort=${encodeURIComponent(sort)}` : ""}
		/>
	);
};
