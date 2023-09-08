import { ProductList } from "@/ui/organisms/ProductList";
import { type Product } from "@/ui/types";

const products: Product[] = [
	{
		id: "1",
		name: "Kubek beżowy",
		category: "Kubki",
		price: 76,
		thumbnail: {
			src: "/product_1.png",
			alt: "Kubek beżowy",
		},
	},
	{
		id: "2",
		name: "Kubek pomarańczowy",
		category: "Kubki",
		price: 76,
		thumbnail: {
			src: "/product_2.png",
			alt: "Kubek pomarańczowy",
		},
	},
	{
		id: "3",
		name: "Miska plażowa",
		category: "Miski",
		price: 135,
		thumbnail: {
			src: "/product_3.png",
			alt: "Miska plażowa",
		},
	},
	{
		id: "4",
		name: "Miska łososiowa",
		category: "Miski",
		price: 135,
		thumbnail: {
			src: "/product_4.png",
			alt: "Miska łososiowa",
		},
	},
];

export default function Home() {
	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
