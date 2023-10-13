"use server";

import { executeGraphql } from "./graphqlApi";
import {
	CartAddItemDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	CartItemChangeQuantityDocument,
	CartRemoveItemDocument,
} from "@/gql/graphql";

export const getCartById = async (cartId: string) => {
	const graphqlResponse = await executeGraphql({
		query: CartGetByIdDocument,
		variables: {
			id: cartId,
		},
		next: {
			tags: ["cart"],
		},
	});

	return graphqlResponse.order;
};

export const createCart = async () => {
	const graphqlResponse = await executeGraphql({
		query: CartCreateDocument,
		variables: undefined,
		cache: "no-store",
	});

	return graphqlResponse.createOrder;
};

export const addCartItem = async (
	total: number,
	orderId: string,
	productId: string,
	updatedQuantity: number,
	cartItemId: string,
) => {
	const graphqlResponse = await executeGraphql({
		query: CartAddItemDocument,
		variables: { total, orderId, productId, updatedQuantity, cartItemId },
		cache: "no-store",
	});

	return graphqlResponse.upsertOrderItem;
};

export const removeCartItem = async (productId: string) => {
	const graphqlResponse = await executeGraphql({
		query: CartRemoveItemDocument,
		variables: { productId },
		cache: "no-store",
	});

	return graphqlResponse.deleteOrderItem;
};

export const changeCartItemQuantity = async (itemId: string, quantity: number) => {
	const graphqlResponse = await executeGraphql({
		query: CartItemChangeQuantityDocument,
		variables: {
			itemId,
			quantity,
		},
		cache: "no-store",
	});

	return graphqlResponse.updateOrderItem;
};
