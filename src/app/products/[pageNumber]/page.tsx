import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
// import { Pagination } from "@/ui/molecules/Pagination";

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

// export const generateStaticParams = async () => {
// 	const totalCount = await getTotalProductCount();
// 	const take = 4;
// 	const totalPages = Math.ceil(totalCount / take);
// 	const pages = Array.from({ length: totalPages }, (_, index) => (index + 1).toString());
// 	return pages.map((page) => ({ pageNumber: page }));
// };

export default async function ProductsPage(/* { params }: { params: { pageNumber: string } } */) {
	// const take = 4;
	const products = await getProductsList();
	// const totalCount = await getTotalProductCount();

	if (!products || products.length === 0) {
		return notFound();
	}

	return (
		<>
			<ProductList products={products} />
			{/* <Pagination
				path={"products"}
				totalCount={totalCount}
				currentPage={params.pageNumber}
				perPage={take}
			/> */}
		</>
	);
}
