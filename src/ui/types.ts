export type Product = {
	id: string;
	name: string;
	description: string;
	category: string[];
	price: number;
	thumbnail: {
		src: string;
		alt: string;
	};
	longDescription: string;
};

export type Category = {
	id: string;
	name: string;
};
