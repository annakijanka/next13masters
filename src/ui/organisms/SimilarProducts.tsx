import { ProductList } from "./ProductList";
import { getSimilarProducts } from "@/api/products";

export const SimilarProducts = async ({ category }: { category?: string }) => {
	if (!category) {
		return <p className="font-sans text-base text-white">No similar products.</p>;
	}

	const products = await getSimilarProducts(category.toLowerCase());
	return <ProductList products={products} />;
};
