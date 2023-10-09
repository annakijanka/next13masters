"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { removeCartItem } from "@/api/cart";

export const RemoveButton = ({ itemId }: { itemId: string }) => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	return (
		<button
			className="flex h-8 w-8 items-center justify-center rounded-lg bg-brick-red text-white transition-transform duration-300 hover:scale-[1.04] disabled:cursor-wait disabled:bg-gun-powder disabled:bg-opacity-25"
			disabled={isPending}
			onClick={() =>
				startTransition(async () => {
					await removeCartItem(itemId);
					router.refresh();
				})
			}
			aria-label="Remove"
		>
			<X size={16} strokeWidth={2.5} />
		</button>
	);
};
