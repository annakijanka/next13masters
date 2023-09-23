import { type Product } from "@/ui/types";

type GraphqlResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

type TotalProductCountGraphqlResponse = {
	totalProductCount: number;
};

type RandomProductsByCategoryGraphqlResponse = {
	randomProductsByCategory: {
		id: string;
		name: string;
		description: string;
		price: number;
		image: string;
		categories: {
			name: string;
		};
	}[];
};

type ProductGraphqlResponse = {
	product: {
		name: string;
		description: string;
		price: number;
		image: string;
		categories: {
			name: string;
		};
	};
};

type ProductsGraphqlResponse = {
	products: {
		id: string;
		name: string;
		description: string;
		price: number;
		image: string;
		categories: {
			name: string;
		};
	}[];
};

const API_URL = process.env.API_URL;

if (!API_URL) {
	throw new Error("API_URL is not defined in environment variables.");
}

export const getTotalProductCount = async () => {
	const res = await fetch(API_URL, {
		method: "POST",
		body: JSON.stringify({
			query: `query{totalProductCount}`,
		}),
		headers: { "Content-Type": "application/json" },
	});

	const graphqlResponse = (await res.json()) as GraphqlResponse<TotalProductCountGraphqlResponse>;

	if (graphqlResponse.errors) {
		throw new TypeError(graphqlResponse.errors[0].message);
	}

	return graphqlResponse.data.totalProductCount;
};

export const getSuggestedProducts = async (category: string) => {
	const res = await fetch(API_URL, {
		method: "POST",
		body: JSON.stringify({
			query: `query RandomProductsByCategory($category:String!){randomProductsByCategory(categoryName:$category){id name description price image categories{name}}}`,
			variables: {
				category: category,
			},
		}),
		headers: { "Content-Type": "application/json" },
	});

	const graphqlResponse =
		(await res.json()) as GraphqlResponse<RandomProductsByCategoryGraphqlResponse>;

	if (graphqlResponse.errors) {
		throw new TypeError(graphqlResponse.errors[0].message);
	}

	const products = graphqlResponse.data.randomProductsByCategory.map((product) =>
		ProductsGraphqlResponseToProduct(product),
	);

	return products;
};

export const getProductById = async (id: string) => {
	const res = await fetch(API_URL, {
		method: "POST",
		body: JSON.stringify({
			query: `query Product($id:ID!){product(id:$id){name description price image categories{name}}}`,
			variables: {
				id: id,
			},
		}),
		headers: { "Content-Type": "application/json" },
	});

	const graphqlResponse = (await res.json()) as GraphqlResponse<ProductGraphqlResponse>;

	if (graphqlResponse.errors) {
		throw new TypeError(graphqlResponse.errors[0].message);
	}

	return ProductGraphqlResponseToProduct(graphqlResponse.data.product);
};

export const getProductsByPage = async (page: string, take: number): Promise<Product[]> => {
	const offset = (Number(page) - 1) * take;
	const res = await fetch(API_URL, {
		method: "POST",
		body: JSON.stringify({
			query: `query{products(first:${take},skip:${offset}){id name description price image categories{name}}}`,
		}),
		headers: { "Content-Type": "application/json" },
	});

	const graphqlResponse = (await res.json()) as GraphqlResponse<ProductsGraphqlResponse>;

	if (graphqlResponse.errors) {
		throw new TypeError(graphqlResponse.errors[0].message);
	}

	const products = graphqlResponse.data.products.map((product) =>
		ProductsGraphqlResponseToProduct(product),
	);

	return products;
};

const ProductGraphqlResponseToProduct = (product: ProductGraphqlResponse["product"]): Product => {
	const categories = Array.isArray(product.categories) ? product.categories : [product.categories];
	const categoryNames: string[] = categories.map((category: { name: string }) => category.name);
	return {
		id: "",
		name: product.name,
		description: product.description,
		category: categoryNames,
		price: product.price,
		thumbnail: {
			src: product.image,
			alt: product.name,
		},
		longDescription: "",
	};
};

const ProductsGraphqlResponseToProduct = (
	product: ProductsGraphqlResponse["products"][0],
): Product => {
	const categories = Array.isArray(product.categories) ? product.categories : [product.categories];
	const categoryNames: string[] = categories.map((category: { name: string }) => category.name);
	return {
		id: product.id,
		name: product.name,
		description: product.description,
		category: categoryNames,
		price: product.price,
		thumbnail: {
			src: product.image,
			alt: product.name,
		},
		longDescription: "",
	};
};
