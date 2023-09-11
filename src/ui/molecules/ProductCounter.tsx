"use client";

import { useState } from "react";
import { Input } from "@/ui/atoms/Input";
import { Button } from "@/ui/atoms/Button";

export const ProductCounter = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<Button onClick={() => setCount(count + 1)}>+</Button>
			<Input value={count} />
			<Button onClick={() => setCount(count - 1)}>-</Button>
		</div>
	);
};
