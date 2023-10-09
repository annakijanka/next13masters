import { setAverageRating } from "@/api/product";
import { getSimilarProducts } from "@/api/products";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const SimilarProductList = async ({ category }: { category: string }) => {
	const products = await getSimilarProducts(category);

	if (!products) {
		return <p className="font-sans text-base text-steel-gray">No similar products.</p>;
	}

	const productsWithAverageRating = setAverageRating(products);

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
