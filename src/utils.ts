export const formatCurrency = (amount: number) => {
	return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
		amount / 100,
	);
};

export const slugToTitle = (slug: string): string => {
	const words = slug.split("-");
	const title = words.map((word) => capitalizeFirstLetter(word)).join(" ");
	return title;
};

export const capitalizeFirstLetter = (str: string): string => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const currentYear = (): number => {
	return new Date().getFullYear();
};
