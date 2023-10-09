import { cookies } from "next/headers";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import { type OrderFragment } from "./gql/graphql";
import { addCartItem, createCart, getCartById } from "@/api/cart";
import { getProductById } from "@/api/products";

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
	return null;
};

export const addProductToCart = async (cartId: string, productId: string) => {
	const product = await getProductById(productId);
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await addCartItem(product.price, cartId, productId);
};

export const handleStripePaymentAction = async () => {
	"use server";

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY env variable");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const cart = await getCartByIdFromCookies();
	if (!cart) {
		return;
	}

	const validItems = cart.orderItems.filter((item) => item.product !== null);

	const line_items = validItems.map((item) => {
		if (!item.product) {
			throw new Error("Product is null or undefined");
		}

		return {
			price_data: {
				currency: "usd",
				product_data: {
					name: item.product.name,
					description: item.product.description,
					images: item.product.images.map((i) => i.url),
				},
				unit_amount: item.product.price,
			},
			quantity: item.quantity,
		};
	});

	const session = await stripe.checkout.sessions.create({
		metadata: {
			cartId: cart.id,
		},
		line_items,
		mode: "payment",
		success_url: `${process.env.APP_URL}/cart/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${process.env.APP_URL}/cart/cancelled`,
	});

	if (session.url) {
		cookies().set("cartId", "");
		redirect(session.url);
	}
};
