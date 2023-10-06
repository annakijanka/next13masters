"use client";

import { useState } from "react";
import { Input } from "@/ui/atoms/Input";
import { Button } from "@/ui/atoms/Button";

export const ProductCounter = ({ quantity }: { quantity: number }) => {
	const [count, setCount] = useState(quantity);
	return (
		<div>
			<Button onClick={() => setCount(count + 1)}>+</Button>
			<Input value={count} />
			<Button onClick={() => setCount(count - 1)}>-</Button>
		</div>
	);
};
