import { type Metadata } from "next";
import { Suspense } from "react";
import { ProductList } from "@/ui/organisms/ProductList";
import { Loading } from "@/ui/atoms/Loading";
import { ProductsPagination } from "@/ui/organisms/ProductsPagination";

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

export default function ProductsPage({ params }: { params: { pageNumber: string } }) {
	const first = 4;
	return (
		<>
			<ProductList pageNumber={params.pageNumber} first={first} />
			<Suspense fallback={<Loading />}>
				<ProductsPagination pageNumber={params.pageNumber} first={first} />
			</Suspense>
		</>
	);
}
