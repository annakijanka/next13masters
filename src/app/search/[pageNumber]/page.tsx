import { type Metadata } from "next";
import { getProductsSearchTotalCount, getSearchProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";
import { setAverageRating } from "@/helpers";

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
	const skip = (parseInt(params.pageNumber, 10) - 1) * first;
	const searchTerm = searchParams.query || "";
	const products = await getSearchProducts(first, skip, searchTerm);
	const totalCount = await getProductsSearchTotalCount(searchTerm);
	const productsWithAverageRating = setAverageRating(products);

	return (
		<>
			<h1 className="mb-4 text-2xl font-extrabold tracking-tight text-steel-gray md:text-3xl">
				{`Search "${searchParams.query}"`}
			</h1>
			{productsWithAverageRating.length > 0 && searchTerm !== "" ? (
				<>
					<ProductList products={productsWithAverageRating} />
					<Pagination
						path={"search"}
						totalCount={totalCount}
						currentPage={params.pageNumber}
						perPage={first}
						query={`?query=${searchTerm}`}
					/>
				</>
			) : (
				<p>No products found for the search term.</p>
			)}
		</>
	);
}
