import { executeGraphql } from "./graphqlApi";
import { CategoriesGetDocument, CategoryGetBySlugDocument } from "@/gql/graphql";

export const getCategories = async () => {
	const graphqlResponse = await executeGraphql(CategoriesGetDocument, {});

	return graphqlResponse.categories;
};

export const getCategoryBySlug = async (categorySlug: string) => {
	const graphqlResponse = await executeGraphql(CategoryGetBySlugDocument, {
		slug: categorySlug,
	});

	return graphqlResponse.categories[0];
};
