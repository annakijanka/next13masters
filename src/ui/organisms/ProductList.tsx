import { getProducts } from "@/api/products";
import { type ProductOrderByInput } from "@/gql/graphql";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = async ({
	pageNumber,
	sort,
	first,
}: {
	pageNumber: string;
	sort: ProductOrderByInput;
	first: number;
}) => {
	const skip = (parseInt(pageNumber, 10) - 1) * first;
	sort = sort || "createdAt_DESC";
	const products = await getProducts(first, skip, sort);

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
