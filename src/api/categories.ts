import { executeGraphql } from "./graphqlApi";
import { CategoriesGetDocument } from "@/gql/graphql";

export const getCategories = async () => {
	const graphqlResponse = await executeGraphql(CategoriesGetDocument, {});

	return graphqlResponse.categories.map((category) => {
		return {
			name: category.name,
		};
	});
};
