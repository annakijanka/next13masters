import { setAverageRating } from "@/api/product";
import { getProducts } from "@/api/products";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = async ({ pageNumber, first }: { pageNumber: string; first: number }) => {
	const skip = (parseInt(pageNumber, 10) - 1) * first;
	const products = await getProducts(first, skip);

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
