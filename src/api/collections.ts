import { executeGraphql } from "./graphqlApi";
import { CollectionGetBySlugDocument, CollectionsGetDocument } from "@/gql/graphql";

export const getCollections = async () => {
	const graphqlResponse = await executeGraphql({
		query: CollectionsGetDocument,
		variables: undefined,
		next: {
			revalidate: 60 * 60 * 24,
		},
	});

	return graphqlResponse.collections;
};

export const getCollectionBySlug = async (collectionSlug: string) => {
	const graphqlResponse = await executeGraphql({
		query: CollectionGetBySlugDocument,
		variables: {
			slug: collectionSlug,
		},
		next: {
			revalidate: 60 * 60 * 24,
		},
	});

	return graphqlResponse.collections[0];
};
