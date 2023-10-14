import { getSearchProducts } from "@/api/products";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const SearchProductList = async ({
	pageNumber,
	first,
	searchTerm,
}: {
	pageNumber: string;
	first: number;
	searchTerm: string;
}) => {
	const skip = (parseInt(pageNumber, 10) - 1) * first;
	const products = await getSearchProducts(first, skip, searchTerm);

	return (
		<>
			{products.length > 0 && searchTerm !== "" ? (
				<ul
					className="mb-14 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
					data-testid="products-list"
				>
					{products.map((product) => {
						return <ProductListItem key={product.id} product={product} />;
					})}
				</ul>
			) : (
				<p>No products found for the search term.</p>
			)}
		</>
	);
};
