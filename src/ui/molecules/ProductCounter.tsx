"use client";

import { experimental_useOptimistic as useOptimistic } from "react";
import { Button } from "@/ui/atoms/Button";
import { changeCartItemQuantity } from "@/api/cart";

export const ProductCounter = ({ itemId, quantity }: { itemId: string; quantity: number }) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	return (
		<form className="flex">
			<Button
				testid="increment"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeCartItemQuantity(itemId, optimisticQuantity + 1);
				}}
			>
				+
			</Button>
			<span className="w-8 appearance-none text-center focus:outline-none" data-testid="quantity">
				{optimisticQuantity}
			</span>
			<Button
				testid="decrement"
				disabled={optimisticQuantity === 0 ? true : false}
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeCartItemQuantity(itemId, optimisticQuantity - 1);
				}}
			>
				-
			</Button>
		</form>
	);
};
