import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { getSuggestedProducts } from "@/api/products";
import { setAverageRating } from "@/api/product";

export const SuggestedProducts = async () => {
	const products = await getSuggestedProducts();

	if (!products) {
		return;
	}

	const productsWithAverageRating = setAverageRating(products);

	const topRated = productsWithAverageRating
		.sort((a, b) => b.averageRating - a.averageRating)
		.slice(0, 4);

	return (
		<ul
			className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
			data-testid="related-products"
		>
			{topRated.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
