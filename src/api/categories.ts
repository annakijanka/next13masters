import { executeGraphql } from "./graphqlApi";
import { CategoriesGetDocument, CategoryGetBySlugDocument } from "@/gql/graphql";

export const getCategories = async () => {
	const graphqlResponse = await executeGraphql({
		query: CategoriesGetDocument,
		variables: undefined,
	});

	return graphqlResponse.categories;
};

export const getCategoryBySlug = async (categorySlug: string) => {
	const graphqlResponse = await executeGraphql({
		query: CategoryGetBySlugDocument,
		variables: {
			slug: categorySlug,
		},
	});

	return graphqlResponse.categories[0];
};
