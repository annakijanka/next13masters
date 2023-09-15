import { getProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Products() {
	const products = await getProducts();
	return <ProductList products={products} />;
}
