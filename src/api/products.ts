import { executeGraphql } from "./graphqlApi";
import {
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetByCollectionSlugDocument,
	ProductsGetDocument,
	ProductsGetSearchDocument,
	ProductsGetSearchTotalCountDocument,
	ProductsGetSimilarDocument,
	ProductsGetSuggestedDocument,
} from "@/gql/graphql";

export const getProducts = async (first: number, skip: number) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetDocument,
		variables: { first: first, skip: skip },
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
	});

	return graphqlResponse.categories[0]?.products;
};

export const getSimilarProducts = async (categorySlug: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetSimilarDocument,
		variables: { slug: categorySlug },
	});

	return graphqlResponse.products;
};

export const getSuggestedProducts = async () => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetSuggestedDocument,
		variables: undefined,
	});

	return graphqlResponse.products;
};

export const getProductsByCollectionSlug = async (collectionSlug: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByCollectionSlugDocument,
		variables: {
			slug: collectionSlug,
		},
	});

	return graphqlResponse.collections[0]?.products;
};

export const getProductById = async (productId: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id: productId },
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
	});

	return graphqlResponse.products;
};

export const getProductsSearchTotalCount = async (searchTerm: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetSearchTotalCountDocument,
		variables: {
			searchTerm: searchTerm,
		},
	});

	return graphqlResponse.productsConnection.aggregate.count;
};
