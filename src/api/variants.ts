import { executeGraphql } from "./graphqlApi";
import {
	VariantsGetProductColorDocument,
	VariantsGetProductDocument,
	VariantsGetProductSizeDocument,
} from "@/gql/graphql";

export const getProductColorVariants = async () => {
	const graphqlResponse = await executeGraphql(VariantsGetProductColorDocument, {});

	return graphqlResponse.productColorVariants;
};

export const getProductSizeVariants = async () => {
	const graphqlResponse = await executeGraphql(VariantsGetProductSizeDocument, {});

	return graphqlResponse.productSizeVariants;
};

export const getProductVariants = async () => {
	const graphqlResponse = await executeGraphql(VariantsGetProductDocument, {});

	return graphqlResponse.productSizeColorVariants;
};
