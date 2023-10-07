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
	const graphqlResponse = await executeGraphql({ query: CartCreateDocument, variables: undefined });

	return graphqlResponse.createOrder;
};

export const addCartItem = async (total: number, orderId: string, productId: string) => {
	const graphqlResponse = await executeGraphql({
		query: CartAddItemDocument,
		variables: { total, orderId, productId },
	});

	return graphqlResponse.createOrderItem;
};

export const removeCartItem = async (productId: string) => {
	const graphqlResponse = await executeGraphql({
		query: CartRemoveItemDocument,
		variables: { productId },
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
	});

	return graphqlResponse.updateOrderItem;
};
