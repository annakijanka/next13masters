import { type Metadata } from "next";
import { Suspense } from "react";
import { ProductList } from "@/ui/organisms/ProductList";
import { executeGraphql } from "@/api/graphqlApi";
import { ProductsGetTotalCountDocument } from "@/gql/graphql";
import { Pagination } from "@/ui/molecules/Pagination";
import { Loading } from "@/ui/atoms/Loading";

const graphqlResponse = await executeGraphql(ProductsGetTotalCountDocument, {});
const totalCount = graphqlResponse.productsConnection.aggregate.count;
const first = 4;

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

export const generateStaticParams = async () => {
	const totalPages = Math.ceil(totalCount / first);
	const pages = Array.from({ length: totalPages }, (_, index) => (index + 1).toString());
	return pages.map((page) => ({ pageNumber: page }));
};

export default async function ProductsPage({ params }: { params: { pageNumber: string } }) {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<ProductList pageNumber={params.pageNumber} first={first} />
			</Suspense>
			<Pagination
				path={"products"}
				totalCount={totalCount}
				currentPage={params.pageNumber}
				perPage={first}
			/>
		</>
	);
}
