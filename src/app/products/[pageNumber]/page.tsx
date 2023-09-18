import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getProductsByPage } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";

export const generateMetadata = async ({
	params,
}: {
	params: { pageNumber: string };
}): Promise<Metadata> => {
	return {
		title: `Products - Page ${params.pageNumber} | Online Store`,
		description:
			"Browse our wide range of quality products. Find the perfect items you've been looking for.",
	};
};

export default async function ProductsPage({ params }: { params: { pageNumber: string } }) {
	const products = await getProductsByPage(params.pageNumber);

	if (!products || products.length === 0) {
		return notFound();
	}

	return (
		<>
			<ProductList products={products} />
			<Pagination currentPage={params.pageNumber} />
		</>
	);
}
