import { getProductsByCategorySlug } from "@/api/products";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const CategoryProductList = async ({
	pageNumber,
	first,
	category,
}: {
	pageNumber: string;
	first: number;
	category: string;
}) => {
	const skip = (parseInt(pageNumber, 10) - 1) * first;
	const products = await getProductsByCategorySlug(first, skip, category);

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
