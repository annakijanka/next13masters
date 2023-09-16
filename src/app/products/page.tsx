import { type Metadata } from "next";
import { getProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export const metadata: Metadata = {
	title: "Products | Online Store",
	description:
		"Browse our wide range of quality products. Find the perfect items you've been looking for.",
};

export default async function Products() {
	const products = await getProducts();
	return <ProductList products={products} />;
}
