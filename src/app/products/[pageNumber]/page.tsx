import { type Metadata } from "next";
import { Suspense } from "react";
import { ProductList } from "@/ui/organisms/ProductList";
import { Loading } from "@/ui/atoms/Loading";
import { ProductsPagination } from "@/ui/organisms/ProductsPagination";
import { type ProductOrderByInput } from "@/gql/graphql";
import { SortingSelect } from "@/ui/molecules/SortingSelect";

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

export default function ProductsPage({
	params,
	searchParams,
}: {
	params: { pageNumber: string };
	searchParams: { sort: ProductOrderByInput };
}) {
	const first = 4;
	return (
		<>
			<SortingSelect />
			<ProductList pageNumber={params.pageNumber} sort={searchParams.sort} first={first} />
			<Suspense fallback={<Loading />}>
				<ProductsPagination pageNumber={params.pageNumber} sort={searchParams.sort} first={first} />
			</Suspense>
		</>
	);
}
