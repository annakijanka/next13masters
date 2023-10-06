import { cookies } from "next/headers";
import { getProductById } from "@/api/products";
import { addCartItem, createCart, getCartById } from "@/api/orders";
import {
	getProductColorVariants,
	getProductSizeVariants,
	getProductVariants,
} from "@/api/variants";
import { type OrderFragment, type ProductFragment } from "@/gql/graphql";
import { type ProductAverageRating } from "@/ui/types";

export const setAverageRating = (products: ProductFragment[]): ProductAverageRating[] => {
	return products.map((product) => {
		const validReviews = product.reviews.filter(
			(review) => review.rating !== null && review.rating !== undefined,
		);
		const totalRating = validReviews.reduce((acc, review) => acc + review.rating!, 0);
		const averageRating = validReviews.length ? totalRating / validReviews.length : 0;
		return {
			...product,
			averageRating,
		};
	});
};

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

export const getOrCreateCart = async (): Promise<OrderFragment> => {
	const cart = await getCartByIdFromCookies();
	if (cart) {
		return cart;
	}

	const newCart = await createCart();
	if (!newCart) {
		throw new Error("Failed to create cart");
	}
	cookies().set("cartId", newCart.id, {
		expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2),
		httpOnly: true,
		sameSite: "lax",
	});
	return newCart;
};

export const getCartByIdFromCookies = async () => {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await getCartById(cartId);
		if (cart) {
			return cart;
		}
	}
};

export const addProductToCart = async (cartId: string, productId: string) => {
	const product = await getProductById(productId);
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await addCartItem(product.price, cartId, productId);
};
