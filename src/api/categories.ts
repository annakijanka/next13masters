import { type Category } from "@/ui/types";

type GraphqlResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

type CategoriesGraphqlResponse = {
	categories: {
		name: string;
	}[];
};

const API_URL = process.env.API_URL;

if (!API_URL) {
	throw new Error("API_URL is not defined in environment variables.");
}

export const getCategories = async (): Promise<Category[]> => {
	const res = await fetch(API_URL, {
		method: "POST",
		body: JSON.stringify({
			query: `query{categories{name}}`,
		}),
		headers: { "Content-Type": "application/json" },
	});

	const graphqlResponse = (await res.json()) as GraphqlResponse<CategoriesGraphqlResponse>;

	if (graphqlResponse.errors) {
		throw new TypeError(graphqlResponse.errors[0].message);
	}

	const categories = graphqlResponse.data.categories.map((category) =>
		CategoriesGraphqlResponseToCategory(category),
	);

	return categories;
};

const CategoriesGraphqlResponseToCategory = (
	category: CategoriesGraphqlResponse["categories"][0],
): Category => {
	return {
		id: "",
		name: category.name,
	};
};
