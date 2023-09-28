import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { executeGraphql } from "@/api/graphqlApi";
import { ProductsGetTotalCountDocument } from "@/gql/graphql";
import { Pagination } from "@/ui/molecules/Pagination";
import { setAverageRating } from "@/utils";

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
	const skip = (parseInt(params.pageNumber, 10) - 1) * first;
	const products = await getProducts(first, skip);

	if (!products) {
		return notFound();
	}

	const productsWithAverageRating = setAverageRating(products);

	return (
		<>
			<ProductList products={productsWithAverageRating} />
			<Pagination
				path={"products"}
				totalCount={totalCount}
				currentPage={params.pageNumber}
				perPage={first}
			/>
		</>
	);
}
