import { ProductList } from "./ProductList";
import { getSuggestedProducts } from "@/api/products";

export const SuggestedProducts = async () => {
	const products = await getSuggestedProducts();
	return <ProductList products={products.slice(-4)} />;
};
