import { type ProductFragment } from "./gql/graphql";
import { type ProductAverageRating } from "./ui/types";

export const formatCurrency = (amount: number) => {
	return new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(
		amount / 100,
	);
};

export const capitalizeFirstLetter = (str: string): string => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const setAverageRating = (products: ProductFragment[]): ProductAverageRating[] => {
	return products.map((product) => {
		const totalRating = product.reviews.reduce((acc, review) => acc + review.rating, 0);
		const averageRating = product.reviews.length ? totalRating / product.reviews.length : 0;
		return {
			...product,
			averageRating,
		};
	});
};
