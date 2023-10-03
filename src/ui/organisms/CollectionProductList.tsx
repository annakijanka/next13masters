import { getProductsByCollectionSlug } from "@/api/products";
import { setAverageRating } from "@/helpers";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const CollectionProductList = async ({ collection }: { collection: string }) => {
	const products = await getProductsByCollectionSlug(collection);

	if (!products) {
		return;
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
