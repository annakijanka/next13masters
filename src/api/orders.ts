import { executeGraphql } from "./graphqlApi";
import { CartAddItemDocument, CartCreateDocument, CartGetByIdDocument } from "@/gql/graphql";

export const getCartById = async (cartId: string) => {
	const graphqlResponse = await executeGraphql(CartGetByIdDocument, {
		id: cartId,
	});

	return graphqlResponse.order;
};

export const createCart = async () => {
	const graphqlResponse = await executeGraphql(CartCreateDocument, {});

	return graphqlResponse.createOrder;
};

export const addCartItem = async (total: number, orderId: string, productId: string) => {
	const graphqlResponse = await executeGraphql(CartAddItemDocument, { total, orderId, productId });

	return graphqlResponse.createOrderItem;
};
