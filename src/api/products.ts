import { executeGraphql } from "./graphqlApi";
import {
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetDocument,
	ProductsGetSimilarDocument,
} from "@/gql/graphql";

export const getProducts = async (first: number, skip: number) => {
	const graphqlResponse = await executeGraphql(ProductsGetDocument, { first: first, skip: skip });

	return graphqlResponse.products;
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

	return graphqlResponse.categories[0]?.products;
};

export const getSimilarProducts = async (categorySlug: string) => {
	const graphqlResponse = await executeGraphql(ProductsGetSimilarDocument, { slug: categorySlug });

	return graphqlResponse.products;
};

export const getProductById = async (productId: string) => {
	const graphqlResponse = await executeGraphql(ProductGetByIdDocument, { id: productId });

	return graphqlResponse.product;
};
