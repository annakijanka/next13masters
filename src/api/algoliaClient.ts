import algoliasearch, { type SearchIndex } from "algoliasearch/lite";

const APPLICATION_ID = process.env.APPLICATION_ID;
const SEARCH_ONLY_API_KEY = process.env.SEARCH_ONLY_API_KEY;

if (!APPLICATION_ID || !SEARCH_ONLY_API_KEY) {
	throw new Error("APPLICATION_ID or SEARCH_ONLY_API_KEY is not defined in environment variables.");
}

const client = algoliasearch(APPLICATION_ID, SEARCH_ONLY_API_KEY);
const index: SearchIndex = client.initIndex("products");

export { index };
