import { Suspense } from "react";
import { getCollections } from "@/api/collections";
import { CollectionsList } from "@/ui/organisms/CollectionsList";
import { ProductList } from "@/ui/organisms/ProductList";
import { getSuggestedProducts } from "@/api/products";
import { setAverageRating } from "@/helpers";

export default async function Home() {
	const collections = await getCollections();
	const products = await getSuggestedProducts();

	if (!products) {
		return;
	}

	const productsWithAverageRating = setAverageRating(products).slice(0, 4);

	return (
		<>
			<section>
				<CollectionsList collections={collections} />
			</section>
			<aside>
				<Suspense fallback={<div className="text-steel-gray">Ładowanie...</div>}>
					<div className="pb-16">
						<ProductList products={productsWithAverageRating} />
					</div>
				</Suspense>
			</aside>
		</>
	);
}
