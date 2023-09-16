import { ProductList } from "./ProductList";
import { getProducts } from "@/api/products";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProducts = async () => {
	const products = await getProducts();
	await sleep(2000);
	return <ProductList products={products.slice(-4)} />;
};
