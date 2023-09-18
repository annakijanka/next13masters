import { ProductList } from "./ProductList";
import { getProducts } from "@/api/products";

export const SuggestedProducts = async () => {
	const products = await getProducts();
	return <ProductList products={products.slice(-4)} />;
};
