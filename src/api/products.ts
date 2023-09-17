import { type Product } from "@/ui/types";

type ProductItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

export const getProducts = async () => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");
	const productData = (await res.json()) as ProductItem[];
	const products = productData.map((product) => productItemToProduct(product));
	return products;
};

export const getProductById = async (id: ProductItem["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productData = (await res.json()) as ProductItem;
	return productItemToProduct(productData);
};

const productItemToProduct = (product: ProductItem): Product => {
	return {
		id: product.id,
		name: product.title,
		description: product.description,
		category: product.category,
		price: product.price,
		thumbnail: {
			src: product.image,
			alt: product.title,
		},
		longDescription: product.longDescription,
	};
};
