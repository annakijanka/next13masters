import { setAverageRating } from "@/api/product";
import { getSuggestedProducts } from "@/api/products";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const HomeProductList = async () => {
	const products = await getSuggestedProducts();

	if (!products) {
		return;
	}

	const productsWithAverageRating = setAverageRating(products).slice(0, 4);

	return (
		<ul
			className="mb-14 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
			data-testid="products-list"
		>
			{productsWithAverageRating.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
