import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByCollectionSlug } from "@/api/products";
import { getCollectionBySlug, getCollections } from "@/api/collections";

export const generateMetadata = async ({
	params,
}: {
	params: { collection: string };
}): Promise<Metadata> => {
	const collection = await getCollectionBySlug(params.collection);

	if (!collection) {
		return notFound();
	}

	return {
		title: `Collection ${collection.name} | Online Store`,
		description: collection.description,
		openGraph: {
			images: collection.image.url,
		},
	};
};

export const generateStaticParams = async () => {
	const collections = await getCollections();

	return collections.map((collection) => ({ collection: collection.slug }));
};

export default async function Collection({ params }: { params: { collection: string } }) {
	const products = await getProductsByCollectionSlug(params.collection);
	const collection = await getCollectionBySlug(params.collection);

	if (!products || !collection) {
		return notFound();
	}

	return (
		<>
			<h1 className="mb-4 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
				{collection.name}
			</h1>
			<p className="text-white">{collection.description}</p>
			<ProductList products={products} />
		</>
	);
}
