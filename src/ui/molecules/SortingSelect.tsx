"use client";

import { type Route } from "next";
import { usePathname, useRouter } from "next/navigation";
import { type ChangeEvent, useEffect, useState } from "react";

export const SortingSelect = () => {
	const router = useRouter();
	const pathname = usePathname();

	const [sort, setSort] = useState("");

	const handleSortChange = async (event: ChangeEvent<HTMLSelectElement>) => {
		const selectedSort = event.target.value;
		setSort(selectedSort);
		const queryString = `?sort=${selectedSort}`;
		const route = `${pathname}${queryString}`;
		router.push(route as Route, { scroll: false });
	};

	useEffect(() => {
		setSort("");
	}, [pathname]);

	return (
		<form className="flex items-center space-x-1">
			<label htmlFor="sort-select" className="block text-sm font-semibold text-steel-gray">
				Sort by:
			</label>
			<select
				id="sort-select"
				value={sort}
				onChange={handleSortChange}
				className="appearance-none rounded bg-gun-powder px-2 py-1 text-xs font-semibold uppercase text-bridal-heath focus:outline-none"
			>
				<option value="" disabled>
					Select Sort Option
				</option>
				<option data-testid="sort-by-price" value="price_ASC">
					Price: Low to High
				</option>
				<option data-testid="sort-by-price" value="price_DESC">
					Price: High to Low
				</option>
				<option data-testid="sort-by-rating" value="averageRating_ASC">
					Rating: Low to High
				</option>
				<option data-testid="sort-by-rating" value="averageRating_DESC">
					Rating: High to Low
				</option>
			</select>
		</form>
	);
};
