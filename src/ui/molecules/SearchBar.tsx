"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export const SearchBar = () => {
	const router = useRouter();
	const [query, setQuery] = useState<string>("");

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const handleSearch = (e: FormEvent) => {
		e.preventDefault();
		router.push(`/search?query=${query}`);
	};

	return (
		<form onSubmit={handleSearch}>
			<input
				className="mr-2 h-10 appearance-none rounded-lg border-2 border-pampas bg-pampas px-4 text-base leading-4 text-steel-gray placeholder-steel-gray placeholder-opacity-50 shadow-none transition duration-300 focus:shadow-md focus:outline-none"
				type="text"
				value={query}
				onChange={handleInputChange}
				placeholder="Search..."
			/>
			<button
				className="h-10 rounded-lg bg-gun-powder px-4 text-base font-bold leading-4 text-bridal-heath transition-transform duration-300 hover:scale-[1.02]"
				type="submit"
			>
				Search
			</button>
		</form>
	);
};
