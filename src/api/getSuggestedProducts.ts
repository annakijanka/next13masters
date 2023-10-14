import { index } from "./algoliaClient";

export const getSuggestedProducts = async () => {
	try {
		const { hits } = await index.search("", {
			hitsPerPage: 4,
			filters: "averageRating >= 4",
		});
		return hits;
	} catch (error) {
		console.error("Error fetching suggested products:", error);
		return [];
	}
};
