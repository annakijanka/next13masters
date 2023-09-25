import { executeGraphql } from "./graphqlApi";
import {
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetDocument,
	ProductsGetSimilarDocument,
} from "@/gql/graphql";

export const getProducts = async (first: number, skip: number) => {
	const graphqlResponse = await executeGraphql(ProductsGetDocument, { first: first, skip: skip });

	return graphqlResponse.products.map((product) => {
		return {
			id: product.id,
			name: product.name,
			description: product.description,
			category: product.categories[0]?.name || "",
			price: product.price,
			thumbnail: {
				src: product.images[0]?.url || "",
				alt: product.name,
			},
		};
	});
};

export const getProductsByCategorySlug = async (
	first: number,
	skip: number,
	categorySlug: string,
) => {
	const graphqlResponse = await executeGraphql(ProductsGetByCategorySlugDocument, {
		first: first,
		skip: skip,
		slug: categorySlug,
	});

	return graphqlResponse.categories[0]?.products.map((product) => {
		return {
			id: product.id,
			name: product.name,
			description: product.description,
			category: product.categories[0]?.name || "",
			price: product.price,
			thumbnail: {
				src: product.images[0]?.url || "",
				alt: product.name,
			},
		};
	});
};

export const getSimilarProducts = async (categorySlug: string) => {
	const graphqlResponse = await executeGraphql(ProductsGetSimilarDocument, { slug: categorySlug });

	return graphqlResponse.products.map((product) => {
		return {
			id: product.id,
			name: product.name,
			description: product.description,
			category: product.categories[0]?.name || "",
			price: product.price,
			thumbnail: {
				src: product.images[0]?.url || "",
				alt: product.name,
			},
		};
	});
};

export const getProductById = async (productId: string) => {
	const graphqlResponse = await executeGraphql(ProductGetByIdDocument, { id: productId });
	const product = graphqlResponse.product;

	if (!product) {
		return null;
	}

	return {
		id: product.id,
		name: product.name,
		description: product.description,
		category: product.categories[0]?.name || "",
		price: product.price,
		thumbnail: {
			src: product.images[0]?.url || "",
			alt: product.name,
		},
	};
};
