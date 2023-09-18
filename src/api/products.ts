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

const API_BASE_URL = "https://naszsklep-api.vercel.app/api/products";

export const getTotalProductCount = async () => {
	const take = 20;
	let totalCount = 0;
	let currentPage = 1;

	while (true) {
		const res = await fetch(`${API_BASE_URL}?take=${take}&offset=${(currentPage - 1) * take}`);
		const productData = (await res.json()) as ProductItem[];

		if (productData.length === 0) {
			break;
		}

		totalCount += productData.length;
		currentPage += 1;
	}

	// return totalCount; limiting the amount of products
	totalCount = 80;
	return totalCount;
};

export const getProducts = async () => {
	const res = await fetch(`${API_BASE_URL}?take=20`);
	const productData = (await res.json()) as ProductItem[];
	const products = productData.map((product) => productItemToProduct(product));
	return products;
};

export const getProductById = async (id: ProductItem["id"]) => {
	const res = await fetch(`${API_BASE_URL}/${id}`);
	const productData = (await res.json()) as ProductItem;
	return productItemToProduct(productData);
};

export const getProductsByPage = async (page: string) => {
	const take = 20;
	const offset = (Number(page) - 1) * take;
	const res = await fetch(`${API_BASE_URL}?take=${take}&offset=${offset}`);
	const productData = (await res.json()) as ProductItem[];
	const products = productData.map((product) => productItemToProduct(product));
	return products;
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
