"use server";

import { executeGraphql } from "./graphqlApi";
import {
	ProductGetByIdDocument,
	type ProductOrderByInput,
	ProductsGetByCategorySlugDocument,
	ProductsGetByCollectionSlugDocument,
	ProductsGetDocument,
	ProductsGetSearchDocument,
	ProductsGetSearchTotalCountDocument,
	ProductsGetSimilarDocument,
	ProductUpdateAverageRatingDocument,
} from "@/gql/graphql";

export const getProducts = async (first: number, skip: number, orderBy: ProductOrderByInput) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetDocument,
		variables: { first: first, skip: skip, orderBy: orderBy },
		next: {
			revalidate: 60 * 60 * 24,
		},
	});

	return graphqlResponse.products;
};

export const getProductsByCategorySlug = async (
	first: number,
	skip: number,
	categorySlug: string,
) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByCategorySlugDocument,
		variables: {
			first: first,
			skip: skip,
			slug: categorySlug,
		},
		next: {
			revalidate: 60 * 60 * 24,
		},
	});

	return graphqlResponse.categories[0]?.products;
};

export const getSimilarProducts = async (categorySlug: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetSimilarDocument,
		variables: { slug: categorySlug },
		next: {
			revalidate: 60 * 60 * 24,
		},
	});

	return graphqlResponse.products;
};

export const getProductsByCollectionSlug = async (collectionSlug: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByCollectionSlugDocument,
		variables: {
			slug: collectionSlug,
		},
		next: {
			revalidate: 60 * 60 * 24,
		},
	});

	return graphqlResponse.collections[0]?.products;
};

export const getProductById = async (productId: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id: productId },
		next: {
			revalidate: 300,
		},
	});

	return graphqlResponse.product;
};

export const getSearchProducts = async (first: number, skip: number, searchTerm: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetSearchDocument,
		variables: {
			first: first,
			skip: skip,
			searchTerm: searchTerm,
		},
		cache: "no-store",
	});

	return graphqlResponse.products;
};

export const getProductsSearchTotalCount = async (searchTerm: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetSearchTotalCountDocument,
		variables: {
			searchTerm: searchTerm,
		},
		cache: "no-store",
	});

	return graphqlResponse.productsConnection.aggregate.count;
};

export const updateProductAverageRating = async (productId: string, averageRating: number) => {
	const graphqlResponse = await executeGraphql({
		query: ProductUpdateAverageRatingDocument,
		variables: { productId, averageRating },
		next: {
			revalidate: 300,
		},
	});

	return graphqlResponse.updateProduct;
};
