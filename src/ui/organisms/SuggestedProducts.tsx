import { ProductList } from "./ProductList";
import { getSuggestedProducts } from "@/api/products";

export const SuggestedProducts = async ({ category }: { category: string[] }) => {
	if (category.length === 0) {
		return <p className="font-sans text-base text-white">No similar products.</p>;
	}

	const randomCategory = category[Math.floor(Math.random() * category.length)];
	const products = await getSuggestedProducts(randomCategory);
	return <ProductList products={products} />;
};
