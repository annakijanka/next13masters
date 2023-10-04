import { type Metadata } from "next";
import { Suspense } from "react";
import { getProductsSearchTotalCount } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { SearchProductList } from "@/ui/organisms/SearchProductList";
import { Loading } from "@/ui/atoms/Loading";

export const generateMetadata = async ({
	params,
	searchParams,
}: {
	params: { pageNumber: string };
	searchParams: { query: string };
}): Promise<Metadata> => {
	return {
		title: `Search "${searchParams.query}" - Page ${params.pageNumber} | Online Store`,
		description:
			"Browse our wide range of quality products. Find the perfect items you've been looking for.",
	};
};

export default async function SearchPage({
	params,
	searchParams,
}: {
	params: { pageNumber: string };
	searchParams: { query: string };
}) {
	const first = 4;
	const searchTerm = searchParams.query || "";
	const totalCount = await getProductsSearchTotalCount(searchTerm);

	return (
		<>
			<h1 className="mb-4 text-2xl font-extrabold tracking-tight text-steel-gray md:text-3xl">
				{`Search "${searchParams.query}"`}
			</h1>
			<Suspense fallback={<Loading />}>
				<SearchProductList pageNumber={params.pageNumber} first={first} searchTerm={searchTerm} />
				{searchTerm !== undefined && searchTerm !== "" ? (
					<Pagination
						path={"search"}
						totalCount={totalCount}
						currentPage={params.pageNumber}
						perPage={first}
						query={`?query=${encodeURIComponent(searchTerm)}`}
					/>
				) : null}
			</Suspense>
		</>
	);
}
