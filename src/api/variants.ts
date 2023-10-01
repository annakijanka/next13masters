import { executeGraphql } from "./graphqlApi";
import { VariantsGetProductColorDocument, VariantsGetProductSizeDocument } from "@/gql/graphql";

export const getProductColorVariants = async () => {
	const graphqlResponse = await executeGraphql(VariantsGetProductColorDocument, {});

	return graphqlResponse.productColorVariants;
};

export const getProductSizeVariants = async () => {
	const graphqlResponse = await executeGraphql(VariantsGetProductSizeDocument, {});

	return graphqlResponse.productSizeVariants;
};
