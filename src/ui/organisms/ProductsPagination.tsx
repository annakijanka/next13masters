import { executeGraphql } from "@/api/graphqlApi";
import { ProductsGetTotalCountDocument } from "@/gql/graphql";
import { Pagination } from "@/ui/molecules/Pagination";

export const ProductsPagination = async ({
	pageNumber,
	first,
}: {
	pageNumber: string;
	first: number;
}) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetTotalCountDocument,
		variables: undefined,
	});
	const totalCount = graphqlResponse.productsConnection.aggregate.count;
	return (
		<Pagination
			path={"products"}
			totalCount={totalCount}
			currentPage={pageNumber}
			perPage={first}
		/>
	);
};
