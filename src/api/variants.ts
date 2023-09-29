import { executeGraphql } from "./graphqlApi";
import { VariantsGetProductColorDocument } from "@/gql/graphql";

export const getProductColorVariants = async () => {
	const graphqlResponse = await executeGraphql(VariantsGetProductColorDocument, {});

	return graphqlResponse.productColorVariants;
};
