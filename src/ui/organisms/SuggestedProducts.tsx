import { getProducts } from "@/api/products";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const SuggestedProducts = async () => {
	const products = await getProducts(4, 0, "averageRating_DESC");

	if (!products) {
		return;
	}

	return (
		<ul
			className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
			data-testid="related-products"
		>
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
