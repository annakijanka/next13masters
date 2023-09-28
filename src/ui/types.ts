import { type ProductFragment } from "@/gql/graphql";

export type NavLink = {
	href: string;
	text: string;
	exact?: boolean;
};

export type ProductAverageRating = ProductFragment & { averageRating: number };
