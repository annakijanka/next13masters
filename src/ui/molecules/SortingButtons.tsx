"use client";

import { usePathname, useRouter } from "next/navigation";
import { type Route } from "next";
import { ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react";
import { Button } from "@/ui/atoms/Button";

export const SortingButtons = () => {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<form className="flex items-center space-x-1">
			<span className="block text-sm font-semibold text-steel-gray">Sort by price:</span>
			<Button
				testid="sort-by-price"
				formAction={async () => {
					const queryString = "?sort=price_ASC";
					const route = `${pathname}${queryString}`;
					router.push(route as Route, { scroll: false });
				}}
			>
				<ArrowUpNarrowWide size={16} strokeWidth={2.5} />
			</Button>
			<Button
				testid="sort-by-price"
				formAction={async () => {
					const queryString = "?sort=price_DESC";
					const route = `${pathname}${queryString}`;
					router.push(route as Route, { scroll: false });
				}}
			>
				<ArrowDownWideNarrow size={16} strokeWidth={2.5} />
			</Button>
			<span className="block pl-2 text-sm font-semibold text-steel-gray">Sort by rating:</span>
			<Button
				testid="sort-by-rating"
				formAction={async () => {
					const queryString = "?sort=averageRating_ASC";
					const route = `${pathname}${queryString}`;
					router.push(route as Route, { scroll: false });
				}}
			>
				<ArrowUpNarrowWide size={16} strokeWidth={2.5} />
			</Button>
			<Button
				testid="sort-by-rating"
				formAction={async () => {
					const queryString = "?sort=averageRating_DESC";
					const route = `${pathname}${queryString}`;
					router.push(route as Route, { scroll: false });
				}}
			>
				<ArrowDownWideNarrow size={16} strokeWidth={2.5} />
			</Button>
		</form>
	);
};
