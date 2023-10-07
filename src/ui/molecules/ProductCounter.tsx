"use client";

import { experimental_useOptimistic as useOptimistic } from "react";
import { Input } from "@/ui/atoms/Input";
import { Button } from "@/ui/atoms/Button";
import { changeCartItemQuantity } from "@/api/orders";

export const ProductCounter = ({ itemId, quantity }: { itemId: string; quantity: number }) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	return (
		<form>
			<Button
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeCartItemQuantity(itemId, optimisticQuantity + 1);
				}}
			>
				+
			</Button>
			<Input value={optimisticQuantity} />
			<Button
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
