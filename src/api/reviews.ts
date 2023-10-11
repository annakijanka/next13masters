"use server";

import { executeGraphql } from "./graphqlApi";
import { ReviewSubmitDocument } from "@/gql/graphql";

export const submitReview = async (
	headline: string,
	content: string,
	rating: number,
	name: string,
	email: string,
	productId: string,
) => {
	const graphqlResponse = await executeGraphql({
		query: ReviewSubmitDocument,
		variables: { headline, content, rating, name, email, productId },
		cache: "no-store",
	});

	return graphqlResponse.createReview;
};
