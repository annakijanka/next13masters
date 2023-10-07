import { executeGraphql } from "./graphqlApi";
import {
	VariantsGetProductColorDocument,
	VariantsGetProductDocument,
	VariantsGetProductSizeDocument,
} from "@/gql/graphql";

export const getProductColorVariants = async () => {
	const graphqlResponse = await executeGraphql({
		query: VariantsGetProductColorDocument,
		variables: undefined,
	});

	return graphqlResponse.productColorVariants;
};

export const getProductSizeVariants = async () => {
	const graphqlResponse = await executeGraphql({
		query: VariantsGetProductSizeDocument,
		variables: undefined,
	});

	return graphqlResponse.productSizeVariants;
};

export const getProductVariants = async () => {
	const graphqlResponse = await executeGraphql({
		query: VariantsGetProductDocument,
		variables: undefined,
	});

	return graphqlResponse.productSizeColorVariants;
};
