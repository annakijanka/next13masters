"use server";

import { executeGraphql } from "./graphqlApi";
import { ReviewSubmitDocument, ReviewsGetByProductIdDocument } from "@/gql/graphql";

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

export const getReviewsByProductId = async (productId: string) => {
	const graphqlResponse = await executeGraphql({
		query: ReviewsGetByProductIdDocument,
		variables: {
			productId: productId,
		},
		next: {
			revalidate: 1,
		},
	});

	return graphqlResponse.products[0]?.reviews;
};
