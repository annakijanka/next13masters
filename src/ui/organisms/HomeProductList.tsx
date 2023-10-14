import { getProducts } from "@/api/products";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const HomeProductList = async () => {
	const products = await getProducts(4, 0, "price_DESC");

	if (!products) {
		return;
	}

	return (
		<ul
			className="mb-14 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
