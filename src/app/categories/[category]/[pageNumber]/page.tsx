import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { capitalizeFirstLetter } from "@/utils";
import { getProductsByPage, getTotalProductsInCategory } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";

export const generateMetadata = async ({
	params,
}: {
	params: { category: string; pageNumber: string };
}): Promise<Metadata> => {
	const capitalizedCategory = capitalizeFirstLetter(params.category);
	return {
		title: `Category ${capitalizedCategory} - Page ${params.pageNumber} | Online Store`,
		description: `Shop the finest ${capitalizedCategory} selection online. Unmatched variety, quality, and value await you.`,
	};
};

export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	let result: { pageNumber: string }[] = [];

	if (params.category === "mugs") {
		result = [{ pageNumber: "1" }];
	} else if (params.category === "bowls") {
		result = [{ pageNumber: "1" }];
	} else if (params.category === "plates") {
		result = [{ pageNumber: "1" }];
	}

	return result;
};

export default async function CategoryPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const take = 4;
	const products = await getProductsByPage(params.pageNumber, take, params.category);
	const totalCount = await getTotalProductsInCategory(params.category);

	if (!products || products.length === 0) {
		return notFound();
	}

	return (
		<>
			<ProductList products={products} />
			<Pagination
				path={`categories/${params.category}`}
				totalCount={totalCount}
				currentPage={params.pageNumber}
				perPage={take}
			/>
		</>
	);
}
