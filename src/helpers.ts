import { getProductColorVariants, getProductSizeVariants } from "@/api/variants";
import { type ProductFragment } from "@/gql/graphql";
import { type ProductAverageRating } from "@/ui/types";

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

export const getColorVariants = async (productId: string): Promise<string[]> => {
	const variants = await getProductColorVariants();
	return variants
		.filter((variant) => variant.product?.id === productId)
		.map((variant) => variant.color.toLowerCase());
};

export const getSizeVariants = async (productId: string): Promise<string[]> => {
	const variants = await getProductSizeVariants();
	return variants
		.filter((variant) => variant.product?.id === productId)
		.map((variant) => variant.size.toLowerCase());
};
