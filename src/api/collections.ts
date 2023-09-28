import { executeGraphql } from "./graphqlApi";
import { CollectionGetBySlugDocument, CollectionsGetDocument } from "@/gql/graphql";

export const getCollections = async () => {
	const graphqlResponse = await executeGraphql(CollectionsGetDocument, {});

	return graphqlResponse.collections;
};

export const getCollectionBySlug = async (collectionSlug: string) => {
	const graphqlResponse = await executeGraphql(CollectionGetBySlugDocument, {
		slug: collectionSlug,
	});

	return graphqlResponse.collections[0];
};
