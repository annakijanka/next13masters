import { ProductList } from "./ProductList";
import { setAverageRating } from "@/utils";
import { getSimilarProducts } from "@/api/products";

export const SimilarProducts = async ({ category }: { category?: string }) => {
	if (!category) {
		return <p className="font-sans text-base text-white">No similar products.</p>;
	}

	const products = await getSimilarProducts(category);
	const productsWithAverageRating = setAverageRating(products);

	return <ProductList products={productsWithAverageRating} />;
};
