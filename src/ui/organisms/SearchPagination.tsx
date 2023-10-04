import { getProductsSearchTotalCount } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";

export const SearchPagination = async ({
	pageNumber,
	first,
	searchTerm,
}: {
	pageNumber: string;
	first: number;
	searchTerm: string;
}) => {
	const totalCount = await getProductsSearchTotalCount(searchTerm);
	return (
		<Pagination
			path={"search"}
			totalCount={totalCount}
			currentPage={pageNumber}
			perPage={first}
			query={`?query=${encodeURIComponent(searchTerm)}`}
		/>
	);
};
