import { updateProductAverageRating } from "./products";
import {
	getProductColorVariants,
	getProductSizeVariants,
	getProductVariants,
} from "@/api/variants";
import { type ReviewFragment } from "@/gql/graphql";

export const getColorVariants = async (productId: string): Promise<string[]> => {
	const variants = await getProductColorVariants();
	return [
		...new Set(
			variants
				.filter((variant) => variant.product?.id === productId)
				.map((variant) => variant.color.toLowerCase()),
		),
	];
};

export const getSizeVariants = async (productId: string): Promise<string[]> => {
	const variants = await getProductSizeVariants();
	return [
		...new Set(
			variants
				.filter((variant) => variant.product?.id === productId)
				.map((variant) => variant.size.toLowerCase()),
		),
	];
};

export const getColorAndSizeVariants = async (
	productId: string,
): Promise<{ colors: string[]; sizes: string[] }> => {
	const variants = await getProductVariants();
	const filteredVariants = variants.filter((variant) => variant.product?.id === productId);
	return {
		colors: [...new Set(filteredVariants.map((variant) => variant.color.toLowerCase()))],
		sizes: [...new Set(filteredVariants.map((variant) => variant.size.toLowerCase()))],
	};
};

export const calculateAverageRating = async (
	productId: string,
	reviews: ReviewFragment[] | undefined,
) => {
	if (!reviews || reviews.length === 0) {
		await updateProductAverageRating(productId, 0);
		return;
	}

	const validRatings = reviews.filter(
		(review) => review.rating !== null && review.rating !== undefined,
	);

	const totalRating = validRatings.reduce((acc, review) => acc + review.rating!, 0);
	const averageRating = totalRating / validRatings.length;

	await updateProductAverageRating(productId, averageRating);
};
