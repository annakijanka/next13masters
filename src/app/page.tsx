import { Suspense } from "react";
import { getCollections } from "@/api/collections";
import { CollectionsList } from "@/ui/organisms/CollectionsList";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";

export default async function Home() {
	const collections = await getCollections();
	return (
		<>
			<section>
				<CollectionsList collections={collections} />
			</section>
			<aside>
				<Suspense fallback={<div className="text-steel-gray">Ładowanie...</div>}>
					<div className="pb-16">
						<h2 className="text-steel-gray py-8 text-xl font-extrabold leading-7 tracking-tight">
							Top rated
						</h2>
						<SuggestedProducts />
					</div>
				</Suspense>
			</aside>
		</>
	);
}
